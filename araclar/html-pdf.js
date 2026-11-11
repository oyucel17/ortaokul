/* HTML → PDF (A4), Edge headless + DevTools protokolü ile.
   Kullanım: node araclar/html-pdf.js <girdi.html> <çıktı.pdf>
   Çalışma kâğıtları için: sayfa boyutu ve kenar boşlukları HTML'deki @page kuralından gelir
   (preferCSSPageSize). Üst/alt bilgi (tarih, dosya yolu) basılmaz.
   Edge'i ders-programi-png.js ile aynı yöntemle açar: --dump-dom/--print-to-pdf yerine protokol,
   çünkü msedge.exe Windows'ta GUI uygulaması ve komut satırı çıktısı güvenilir değil. */
const fs = require("fs"), path = require("path"), os = require("os");
const { spawn } = require("child_process");

const [girdi, cikti] = process.argv.slice(2);
if(!girdi || !cikti){ console.log("kullanım: node araclar/html-pdf.js <girdi.html> <çıktı.pdf>"); process.exit(1); }

function edgeBul(){
  const adaylar = [process.env.EDGE,
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"].filter(Boolean);
  const b = adaylar.find(p => fs.existsSync(p));
  if(!b) throw new Error("Edge bulunamadı; EDGE ortam değişkeniyle yolunu ver.");
  return b;
}
const bekle = ms => new Promise(r => setTimeout(r, ms));

async function edgeAc(edge, profil){
  const proc = spawn(edge, ["--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
                            "--user-data-dir=" + profil, "--remote-debugging-port=0", "about:blank"], { stdio: "ignore" });
  const portDosyasi = path.join(profil, "DevToolsActivePort");
  let adres = null;
  for(let i = 0; i < 120 && !adres; i++){
    if(fs.existsSync(portDosyasi)){
      const t = fs.readFileSync(portDosyasi, "utf8").trim().split(/\r?\n/);
      if(t.length >= 2) adres = "ws://127.0.0.1:" + t[0] + t[1];
    }
    if(!adres) await bekle(150);
  }
  if(!adres){ proc.kill(); throw new Error("Edge DevTools bağlantısı açılmadı"); }
  const ws = new WebSocket(adres);
  await new Promise((ok, hata) => { ws.onopen = ok; ws.onerror = hata; });
  let sayac = 0;
  const bekleyen = new Map(), dinleyiciler = [];
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if(m.id && bekleyen.has(m.id)){
      const b = bekleyen.get(m.id); bekleyen.delete(m.id);
      m.error ? b.hata(new Error(m.error.message)) : b.ok(m.result);
    } else if(m.method){ dinleyiciler.slice().forEach(f => f(m)); }
  };
  const gonder = (method, params, sessionId) => new Promise((ok, hata) => {
    const id = ++sayac; bekleyen.set(id, { ok, hata });
    ws.send(JSON.stringify({ id, method, params: params || {}, sessionId }));
  });
  const olay = (method, sessionId) => new Promise(ok => {
    const f = m => { if(m.method === method && m.sessionId === sessionId){ dinleyiciler.splice(dinleyiciler.indexOf(f), 1); ok(m.params); } };
    dinleyiciler.push(f);
  });
  const kapat = async () => { try{ await gonder("Browser.close"); }catch(e){} try{ ws.close(); }catch(e){} try{ proc.kill(); }catch(e){} };
  return { gonder, olay, kapat };
}

(async () => {
  const GECICI = fs.mkdtempSync(path.join(os.tmpdir(), "html-pdf-"));
  const c = await edgeAc(edgeBul(), path.join(GECICI, "profil"));
  try{
    const { targetId } = await c.gonder("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await c.gonder("Target.attachToTarget", { targetId, flatten: true });
    await c.gonder("Page.enable", {}, sessionId);
    const yuklendi = c.olay("Page.loadEventFired", sessionId);
    await c.gonder("Page.navigate", { url: "file:///" + path.resolve(girdi).replace(/\\/g, "/") }, sessionId);
    await yuklendi;
    await c.gonder("Runtime.evaluate", { expression: "document.fonts.ready.then(() => true)", awaitPromise: true }, sessionId);
    const pdf = await c.gonder("Page.printToPDF", { printBackground: true, preferCSSPageSize: true,
      displayHeaderFooter: false, paperWidth: 8.27, paperHeight: 11.69 }, sessionId);
    fs.mkdirSync(path.dirname(path.resolve(cikti)), { recursive: true });
    fs.writeFileSync(cikti, Buffer.from(pdf.data, "base64"));
    const sayfa = (Buffer.from(pdf.data, "base64").toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
    console.log("PDF yazıldı: " + cikti + " (" + fs.statSync(cikti).size + " bayt, " + sayfa + " sayfa)");
  } finally {
    await c.kapat(); await bekle(500);
    try{ fs.rmSync(GECICI, { recursive: true, force: true }); }catch(e){}
  }
})().catch(e => { console.error("HATA: " + e.message); process.exit(1); });
