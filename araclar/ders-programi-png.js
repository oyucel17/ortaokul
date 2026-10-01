/* Haftalık ders programını WhatsApp'ta paylaşılacak PNG olarak üretir.

   Veri src/12-okul.js'ten okunur (ZAMAN, PROGRAM…), yani okul programı
   değişince yalnız o dosya güncellenir, sonra bu komut yeniden çalıştırılır:

       node araclar/ders-programi-png.js "C:\Users\PC5\Desktop\Ders Programları"

   Görüntü Edge'in başsız (headless) modunda, DevTools protokolüyle çekilir:
   önce sayfa yüksekliği ölçülür, sonra tam o yükseklikte ekran görüntüsü
   alınır; böylece altta boşluk kalmaz. Ayrı bir profil klasörü kullanılır ki
   kullanıcının açık Edge penceresine karışmasın. */

const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawn } = require("child_process");

const KOK = path.join(__dirname, "..");
const CIKIS = process.argv[2] || path.join(os.homedir(), "Desktop", "Ders Programları");

/* ---------- 1) veriyi okul modülünden al ---------- */
const kaynak = fs.readFileSync(path.join(KOK, "src", "12-okul.js"), "utf8");
const sinir = kaynak.indexOf("/* ---------- yardımcılar ---------- */");
if(sinir < 0) throw new Error("12-okul.js içinde veri bloğunun sonu bulunamadı");
const ctx = {};
vm.runInNewContext(kaynak.slice(0, sinir), ctx);
const { OKUL_ADI, DONEM, ZAMAN, GUN_ADI, DERS_RENK, PROGRAM } = ctx;

/* Uygulamanın açık tema ders renkleri (01-sayfa-ve-stil.html :root) */
const RENK = { mat:"#2C4A8F", fen:"#1E7A62", tur:"#B23A48", sos:"#A9671C", ing:"#6A4C93", din:"#5C7A29" };
const DIGER = "#6B7380";

/* ---------- 2) yardımcılar ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
const dk = h => { const p = h.split(":"); return +p[0] * 60 + +p[1]; };

/* "PEYGAMBERİMİZİN HAYATI" -> "Peygamberimizin Hayatı" (Türkçe büyük/küçük harf kuralıyla) */
function baslik(s){
  const kucukKalsin = { "ve":1, "ile":1 };
  return s.toLocaleLowerCase("tr-TR").split(" ").map((w, i) =>
    (i > 0 && kucukKalsin[w]) ? w : w.charAt(0).toLocaleUpperCase("tr-TR") + w.slice(1)
  ).join(" ");
}
function renk(ad){ const k = DERS_RENK[ad]; return k ? RENK[k] : DIGER; }
function dersSaati(no){ return ZAMAN.find(z => z.tip === "ders" && z.no === no); }

function bugunTr(){
  const ay = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
  const d = new Date();
  return d.getDate() + " " + ay[d.getMonth()] + " " + d.getFullYear();
}

/* ---------- 3) sayfa ---------- */
function sayfa(g){
  const P = PROGRAM[g];
  const gunler = [1, 2, 3, 4, 5];
  const enCok = Math.max(...gunler.map(d => (P.gunler[d] || []).length));
  const ogle = ZAMAN.find(z => z.tip === "ara" && z.uzun);

  let satirlar = "";
  for(let no = 1; no <= enCok; no++){
    const z = dersSaati(no);
    satirlar += '<div class="saat"><b>' + no + '</b><span>' + esc(z.b) + '</span><span>' + esc(z.s) + '</span></div>';
    gunler.forEach(d => {
      const ders = (P.gunler[d] || [])[no - 1];
      if(!ders){ satirlar += '<div class="hucre bos"></div>'; return; }
      const r = renk(ders[0]);
      satirlar += '<div class="hucre" style="--r:' + r + '">'
                + '<div class="ders">' + esc(baslik(ders[0])) + '</div>'
                + '<div class="ogr">' + esc(ders[1]) + '</div></div>';
    });
    /* Öğle arası, uygulamadaki gibi ZAMAN'dan türetilir */
    const sonraki = dersSaati(no + 1);
    if(ogle && sonraki && ogle.s === sonraki.b && no < enCok){
      satirlar += '<div class="ogle">' + esc(ogle.ad) + ' &nbsp;·&nbsp; ' + esc(ogle.b) + ' – ' + esc(ogle.s)
                + ' &nbsp;·&nbsp; ' + (dk(ogle.s) - dk(ogle.b)) + ' dk</div>';
    }
  }

  /* Giriş/çıkış: günlerin ders sayısına göre çıkış saati */
  const giris = dersSaati(1).b;
  const cikislar = {};
  gunler.forEach(d => {
    const n = (P.gunler[d] || []).length;
    if(!n) return;
    const s = dersSaati(n).s;
    (cikislar[s] = cikislar[s] || []).push(GUN_ADI[d]);
  });
  const cikisMetni = Object.keys(cikislar).sort((a, b) => cikislar[b].length - cikislar[a].length)
    .map((s, i) => i === 0 ? "Çıkış " + s : cikislar[s].join(", ") + " " + s).join(" &nbsp;·&nbsp; ");

  const alt = [P.ogretmen ? "Sınıf öğretmeni: " + esc(P.ogretmen) : "", esc(DONEM)].filter(Boolean).join(" &nbsp;·&nbsp; ");

  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{background:#F6F7F4}
  body{width:1080px;padding:44px 40px 36px;font-family:"Segoe UI Variable Text","Segoe UI",system-ui,sans-serif;
    color:#161A21;-webkit-font-smoothing:antialiased}
  .okul{font-size:14.5px;letter-spacing:.09em;text-transform:uppercase;color:#2C4A8F;font-weight:600}
  h1{font-family:"Segoe UI Variable Display","Segoe UI",sans-serif;font-size:50px;line-height:1.08;
    font-weight:800;margin-top:8px;letter-spacing:-.01em}
  h1 span{color:#2C4A8F}
  .alt{font-size:19px;color:#525A68;margin-top:8px}
  .izgara{display:grid;grid-template-columns:104px repeat(5,1fr);gap:6px;margin-top:28px}
  .gun{background:#223C77;color:#fff;font-weight:700;font-size:17.5px;text-align:center;
    padding:12px 4px;border-radius:9px}
  .kose{background:transparent}
  .saat{display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:#fff;border:1px solid #DDE0D9;border-radius:9px;padding:10px 4px;min-height:96px}
  .saat b{font-size:26px;line-height:1;color:#223C77;margin-bottom:6px}
  .saat span{font-size:14px;color:#525A68;font-variant-numeric:tabular-nums;line-height:1.35}
  .hucre{background:color-mix(in srgb,var(--r) 9%,#fff);border:1px solid color-mix(in srgb,var(--r) 22%,#fff);
    border-left:5px solid var(--r);border-radius:9px;padding:10px 10px 10px 11px;min-height:96px;
    display:flex;flex-direction:column;justify-content:center}
  .ders{font-size:17.5px;font-weight:700;line-height:1.2;color:#161A21}
  .ogr{font-size:14px;color:#525A68;margin-top:5px;line-height:1.25}
  .bos{background:repeating-linear-gradient(135deg,#EEF0EB 0 8px,#F6F7F4 8px 16px);border:1px dashed #DDE0D9}
  .ogle{grid-column:1/-1;background:#F7EEDF;color:#8A5710;border:1px solid #E8D4B0;border-radius:9px;
    text-align:center;font-weight:700;font-size:18px;padding:13px}
  .ayak{display:flex;justify-content:space-between;align-items:baseline;gap:20px;margin-top:22px;
    font-size:16px;color:#525A68}
  .ayak b{color:#161A21}
  .guncel{font-size:14px;color:#868D98;white-space:nowrap}
</style></head><body>
  <div class="okul">${esc(OKUL_ADI)}</div>
  <h1><span>${esc(P.sinif)}</span> Haftalık Ders Programı</h1>
  <div class="alt">${alt}</div>
  <div class="izgara">
    <div class="kose"></div>
    ${gunler.map(d => '<div class="gun">' + esc(GUN_ADI[d]) + '</div>').join("")}
    ${satirlar}
  </div>
  <div class="ayak">
    <div><b>Giriş ${esc(giris)}</b> &nbsp;·&nbsp; ${cikisMetni}</div>
    <div class="guncel">Güncel: ${esc(bugunTr())}</div>
  </div>
</body></html>`;
}

/* ---------- 4) Edge ile çek ---------- */
function edgeBul(){
  const adaylar = [
    process.env.EDGE,
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
  ].filter(Boolean);
  const b = adaylar.find(p => fs.existsSync(p));
  if(!b) throw new Error("Edge bulunamadı; EDGE ortam değişkeniyle yolunu ver.");
  return b;
}

/* Edge'i DevTools protokolüyle sürer. "--dump-dom" Windows'ta işe
   yaramıyor: msedge.exe bir GUI uygulaması, stdout'u boruya bağlanmıyor
   ve çıktı kayboluyor. Protokolle sayfa yüksekliği ölçülüp tam o boyutta
   çekilebiliyor. Node 22+ yerleşik WebSocket kullanılır, paket gerekmez. */
async function edgeAc(edge, profil){
  const proc = spawn(edge, ["--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
                            "--hide-scrollbars", "--user-data-dir=" + profil, "--remote-debugging-port=0",
                            "about:blank"], { stdio: "ignore" });
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
    } else if(m.method){
      dinleyiciler.slice().forEach(f => f(m));
    }
  };
  const gonder = (method, params, sessionId) => new Promise((ok, hata) => {
    const id = ++sayac;
    bekleyen.set(id, { ok, hata });
    ws.send(JSON.stringify({ id, method, params: params || {}, sessionId }));
  });
  const olay = (method, sessionId) => new Promise(ok => {
    const f = m => {
      if(m.method === method && m.sessionId === sessionId){
        dinleyiciler.splice(dinleyiciler.indexOf(f), 1); ok(m.params);
      }
    };
    dinleyiciler.push(f);
  });
  const kapat = async () => {
    try{ await gonder("Browser.close"); }catch(e){}
    try{ ws.close(); }catch(e){}
    try{ proc.kill(); }catch(e){}
  };
  return { gonder, olay, kapat };
}

const bekle = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const EDGE = edgeBul();
  const GECICI = fs.mkdtempSync(path.join(os.tmpdir(), "ders-programi-"));
  const c = await edgeAc(EDGE, path.join(GECICI, "profil"));
  const sonuc = [];
  try{
    const { targetId } = await c.gonder("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await c.gonder("Target.attachToTarget", { targetId, flatten: true });
    await c.gonder("Page.enable", {}, sessionId);
    fs.mkdirSync(CIKIS, { recursive: true });

    for(const g of ["g6", "g7"]){
      const P = PROGRAM[g];
      const html = path.join(GECICI, g + ".html");
      fs.writeFileSync(html, sayfa(g), "utf8");

      /* 2x ölçek: yazılar telefonda keskin kalsın */
      await c.gonder("Emulation.setDeviceMetricsOverride",
                     { width: 1080, height: 900, deviceScaleFactor: 2, mobile: false }, sessionId);
      const yuklendi = c.olay("Page.loadEventFired", sessionId);
      await c.gonder("Page.navigate", { url: "file:///" + html.replace(/\\/g, "/") }, sessionId);
      await yuklendi;

      const r = await c.gonder("Runtime.evaluate", {
        expression: "document.fonts.ready.then(() => Math.ceil(document.documentElement.scrollHeight))",
        awaitPromise: true, returnByValue: true }, sessionId);
      const h = r.result.value;

      await c.gonder("Emulation.setDeviceMetricsOverride",
                     { width: 1080, height: h, deviceScaleFactor: 2, mobile: false }, sessionId);
      const resim = await c.gonder("Page.captureScreenshot", { format: "png" }, sessionId);

      const hedef = path.join(CIKIS, P.sinif + " Haftalık Ders Programı.png");
      fs.writeFileSync(hedef, Buffer.from(resim.data, "base64"));
      sonuc.push({ sinif: P.sinif, yukseklik: h, dosya: hedef, bayt: fs.statSync(hedef).size });
    }
  } finally {
    await c.kapat();
    await bekle(500);
    try{ fs.rmSync(GECICI, { recursive: true, force: true }); }catch(e){}
  }
  sonuc.forEach(s => console.log(s.sinif + "  1080x" + s.yukseklik + " (2x)  "
                                 + Math.round(s.bayt / 1024) + " KB  ->  " + s.dosya));
})().catch(e => { console.error("HATA: " + e.message); process.exit(1); });
