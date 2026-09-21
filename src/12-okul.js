  /* ===================== OKUL: ZAMAN ÇİZELGESİ VE DERS PROGRAMI =====================
     Kaynak: Şehit Yarbay Raif Necdet Hoşgör İmam Hatip Ortaokulu
     "Günlük Zaman Çizelgesi" ve aSc ders programı çıktıları (13.09.2026).

     GÜNCELLEME: Okul saatleri ya da program değişirse yalnızca bu dosyayı
     düzenle, sonra `bash build.sh && git push`. Başka yere dokunma. */

  var OKUL_ADI = "Şehit Yarbay Raif Necdet Hoşgör İmam Hatip Ortaokulu";

  /* Zil saatleri. Cuma sütunu da birebir aynı saatleri veriyor; yalnızca
     Pazartesi 8. derse kadar sürüyor. Okulun kendi tablosunda Cuma öğle
     arası "65dk", 6. ders sonrası teneffüs "5dk" yazıyor ama saatler
     60dk ve 10dk veriyor — saatler esas alındı. */
  var ZAMAN = [
    {tip:"ders", no:1, b:"08:45", s:"09:25"},
    {tip:"ara",  ad:"Teneffüs",   b:"09:25", s:"09:40"},
    {tip:"ders", no:2, b:"09:40", s:"10:20"},
    {tip:"ara",  ad:"Teneffüs",   b:"10:20", s:"10:35"},
    {tip:"ders", no:3, b:"10:35", s:"11:15"},
    {tip:"ara",  ad:"Teneffüs",   b:"11:15", s:"11:25"},
    {tip:"ders", no:4, b:"11:25", s:"12:05"},
    {tip:"ara",  ad:"Teneffüs",   b:"12:05", s:"12:15"},
    {tip:"ders", no:5, b:"12:15", s:"12:55"},
    {tip:"ara",  ad:"Öğle arası", b:"12:55", s:"13:55", uzun:true},
    {tip:"ders", no:6, b:"13:55", s:"14:35"},
    {tip:"ara",  ad:"Teneffüs",   b:"14:35", s:"14:45"},
    {tip:"ders", no:7, b:"14:45", s:"15:25"},
    {tip:"ara",  ad:"Teneffüs",   b:"15:25", s:"15:35", gun:[1]},
    {tip:"ders", no:8, b:"15:35", s:"16:15", gun:[1]}
  ];

  var GUN_ADI = {1:"Pazartesi", 2:"Salı", 3:"Çarşamba", 4:"Perşembe", 5:"Cuma"};

  /* Ders adlarını panelin ders renkleriyle eşleştirme (yalnız görsel) */
  var DERS_RENK = {
    "MATEMATİK":"mat", "FEN BİLİMLERİ":"fen", "TÜRKÇE":"tur", "SOSYAL BİLGİLER":"sos",
    "İNGİLİZCE":"ing", "DİN KÜLTÜRÜ":"din", "KURAN-I KERİM":"din",
    "TEMEL DİNİ BİLGİLER":"din", "PEYGAMBERİMİZİN HAYATI":"din", "ARAPÇA":"din"
  };

  var PROGRAM = {
    g6: { sinif:"6A", ogretmen:"", gunler:{
      1:[["MÜZİK","Bahattin"],["FEN BİLİMLERİ","Fatma Oturan"],["BEDEN EĞİTİMİ","Gonca Meriç"],
         ["BİLİŞİM TEKNOLOJİLERİ","Aylin Doğan"],["MATEMATİK","Sümeyye Özdemir"],["MATEMATİK","Sümeyye Özdemir"],
         ["İNGİLİZCE","Aydın Başeğmez"],["PEYGAMBERİMİZİN HAYATI","Ömer Aydın"]],
      2:[["TÜRKÇE","Olcay Ceylan"],["TÜRKÇE","Olcay Ceylan"],["KURAN-I KERİM","Müşerref"],
         ["SOSYAL BİLGİLER","Emine Güler"],["SOSYAL BİLGİLER","Emine Güler"],["GÖRSEL SANATLAR","Yasin"],
         ["DİN KÜLTÜRÜ","Ömer Aydın"]],
      3:[["TÜRKÇE","Olcay Ceylan"],["TÜRKÇE","Olcay Ceylan"],["FEN BİLİMLERİ","Fatma Oturan"],
         ["SOSYAL BİLGİLER","Emine Güler"],["MATEMATİK","Sümeyye Özdemir"],["KURAN-I KERİM","Müşerref"],
         ["PEYGAMBERİMİZİN HAYATI","Ömer Aydın"]],
      4:[["İNGİLİZCE","Aydın Başeğmez"],["İNGİLİZCE","Aydın Başeğmez"],["MATEMATİK","Sümeyye Özdemir"],
         ["MATEMATİK","Sümeyye Özdemir"],["SEÇ. OYUN VE OYUN ETKİNLİKLERİ","Selma Koç"],
         ["DİN KÜLTÜRÜ","Ömer Aydın"],["FEN BİLİMLERİ","Fatma Oturan"]],
      5:[["TÜRKÇE","Olcay Ceylan"],["TÜRKÇE","Olcay Ceylan"],["TEMEL DİNİ BİLGİLER","Müşerref"],
         ["ARAPÇA","Ömer Gelmez"],["ARAPÇA","Ömer Gelmez"],["REHBERLİK VE YÖNLENDİRME","Aylin Doğan"],
         ["FEN BİLİMLERİ","Fatma Oturan"]]
    }},
    g7: { sinif:"7B", ogretmen:"Mehmet Kamış", gunler:{
      1:[["MATEMATİK","Hülya Yar"],["MÜZİK","Bahattin"],["FEN BİLİMLERİ","Şule Yüksel Bal"],
         ["BEDEN EĞİTİMİ","Gonca Meriç"],["KURAN-I KERİM","İrfan Kuru"],["KURAN-I KERİM","İrfan Kuru"],
         ["TÜRKÇE","Gülay Çayır"],["TÜRKÇE","Gülay Çayır"]],
      2:[["SOSYAL BİLGİLER","Bengül Ulus"],["DİN KÜLTÜRÜ","Şeyma Şahin"],["FEN BİLİMLERİ","Şule Yüksel Bal"],
         ["ARAPÇA","Ömer Gelmez"],["ARAPÇA","Ömer Gelmez"],["TÜRKÇE","Gülay Çayır"],["TÜRKÇE","Gülay Çayır"]],
      3:[["GÖRSEL SANATLAR","Yasin"],["SOSYAL BİLGİLER","Bengül Ulus"],["SOSYAL BİLGİLER","Bengül Ulus"],
         ["TEKNOLOJİ TASARIM","Selma Koç"],["MATEMATİK","Hülya Yar"],["MATEMATİK","Hülya Yar"],
         ["PEYGAMBERİMİZİN HAYATI","İrfan Kuru"]],
      4:[["FEN BİLİMLERİ","Şule Yüksel Bal"],["TEMEL DİNİ BİLGİLER","Ömer Aydın"],
         ["SEÇ. YAPAY ZEKÂ UYGULAMALARI","Aylin Doğan"],["TÜRKÇE","Gülay Çayır"],
         ["PEYGAMBERİMİZİN HAYATI","İrfan Kuru"],["İNGİLİZCE","Birsen Yıldız"],["İNGİLİZCE","Birsen Yıldız"]],
      5:[["REHBERLİK VE YÖNLENDİRME","Bengül Ulus"],["MATEMATİK","Hülya Yar"],["MATEMATİK","Hülya Yar"],
         ["FEN BİLİMLERİ","Şule Yüksel Bal"],["DİN KÜLTÜRÜ","Şeyma Şahin"],["İNGİLİZCE","Birsen Yıldız"],
         ["İNGİLİZCE","Birsen Yıldız"]]
    }}
  };

  /* ---------- yardımcılar ---------- */

  function dk(hhmm){ var p = String(hhmm).split(":"); return parseInt(p[0],10)*60 + parseInt(p[1],10); }
  function suAnDk(){ var d = new Date(); return d.getHours()*60 + d.getMinutes(); }
  function bugunGun(){ var g = new Date().getDay(); return (g >= 1 && g <= 5) ? g : 0; }  // 0 = hafta sonu

  function gunListesi(gun){
    return ZAMAN.filter(function(z){ return !z.gun || z.gun.indexOf(gun) !== -1; });
  }
  function dersAdi(g, gun, no){
    var p = PROGRAM[g] && PROGRAM[g].gunler[gun];
    return (p && p[no-1]) ? p[no-1] : null;
  }
  function renkOf(ad){
    var k = DERS_RENK[ad];
    return k ? "var(--s-" + k + ")" : "var(--ink-faint)";
  }

  /* ---------- "şu an" kartı ---------- */

  function renderSuAn(){
    var box = el("suAnKart");
    if(!box) return;
    var gun = bugunGun();
    if(!gun){
      box.innerHTML = '<div class="suan bos"><div class="nt">Hafta sonu</div>'
        + '<p>Bugün okul yok. Pazartesi ilk ders <b>08:45</b>\'te.</p></div>';
      return;
    }
    var simdi = suAnDk(), liste = gunListesi(gun), aktif = null, sonraki = null;
    for(var i = 0; i < liste.length; i++){
      var z = liste[i];
      if(simdi >= dk(z.b) && simdi < dk(z.s)){ aktif = z; sonraki = liste[i+1] || null; break; }
      if(simdi < dk(z.b)){ sonraki = z; break; }
    }
    var h = '<div class="suan"><div class="nt">' + esc(GUN_ADI[gun]) + ' · şu an</div>';
    if(!aktif && !sonraki){
      h += '<p><b>Okul bitti.</b> Son ders 15:25\'te sona erdi'
         + (gun === 1 ? ' (Pazartesi 8. ders varsa 16:15).' : '.') + '</p>';
    } else if(!aktif){
      h += '<p><b>Henüz başlamadı.</b> İlk ders <b>' + esc(sonraki.b) + '</b>\'te.</p>';
    } else if(aktif.tip === "ara"){
      h += '<p><b>' + esc(aktif.ad) + '</b> — ' + esc(aktif.s) + '\'e kadar'
         + (sonraki && sonraki.tip === "ders" ? '. Sonra <b>' + sonraki.no + '. ders</b>' : '') + '.</p>';
      if(sonraki && sonraki.tip === "ders"){
        var d2 = dersAdi(grade, gun, sonraki.no);
        if(d2) h += '<div class="suan-ders"><i style="background:' + renkOf(d2[0]) + '"></i>'
                  + '<span>' + esc(d2[0]) + '</span><b>' + esc(d2[1]) + '</b></div>';
      }
    } else {
      var d1 = dersAdi(grade, gun, aktif.no);
      h += '<p><b>' + aktif.no + '. ders</b> — ' + esc(aktif.b) + ' – ' + esc(aktif.s)
         + ' · <b>' + (dk(aktif.s) - simdi) + ' dk</b> kaldı</p>';
      if(d1) h += '<div class="suan-ders"><i style="background:' + renkOf(d1[0]) + '"></i>'
                + '<span>' + esc(d1[0]) + '</span><b>' + esc(d1[1]) + '</b></div>';
    }
    h += '</div>';
    box.innerHTML = h;
  }

  /* ---------- zaman çizelgesi ---------- */

  function renderZaman(){
    var box = el("zamanTablo");
    if(!box) return;
    var gun = bugunGun(), simdi = suAnDk();
    var h = '<div class="tbl"><table><thead><tr><th>Saat</th><th>Ne</th><th>Süre</th><th>Gün</th></tr></thead><tbody>';
    ZAMAN.forEach(function(z){
      var suanMi = gun && (!z.gun || z.gun.indexOf(gun) !== -1) && simdi >= dk(z.b) && simdi < dk(z.s);
      h += '<tr' + (suanMi ? ' class="satir-simdi"' : '') + '>'
         + '<td class="mono">' + esc(z.b) + ' – ' + esc(z.s) + '</td>'
         + '<td>' + (z.tip === "ders" ? '<b>' + z.no + '. ders</b>' : esc(z.ad)) + '</td>'
         + '<td class="mono">' + (dk(z.s) - dk(z.b)) + ' dk</td>'
         + '<td>' + (z.gun ? '<span class="rozet">yalnız Pazartesi</span>' : 'her gün') + '</td></tr>';
    });
    box.innerHTML = h + '</tbody></table></div>';
  }

  /* ---------- haftalık ders programı ---------- */

  function renderProgram(){
    var box = el("programKutu");
    if(!box) return;
    var P = PROGRAM[grade];
    if(!P){ box.innerHTML = ""; return; }
    var bugun = bugunGun();
    var h = '';
    [1,2,3,4,5].forEach(function(gun){
      var dersler = P.gunler[gun] || [];
      h += '<div class="prg-gun' + (gun === bugun ? ' bugun' : '') + '">'
         + '<div class="prg-baslik">' + esc(GUN_ADI[gun])
         + (gun === bugun ? ' <span class="rozet yesil">bugün</span>' : '')
         + '<span class="prg-adet">' + dersler.length + ' ders</span></div>'
         + '<div class="prg-liste">';
      dersler.forEach(function(d, i){
        var no = i + 1;
        var z = null;
        gunListesi(gun).forEach(function(x){ if(x.tip === "ders" && x.no === no) z = x; });
        var simdiMi = gun === bugun && z && suAnDk() >= dk(z.b) && suAnDk() < dk(z.s);
        h += '<div class="prg-satir' + (simdiMi ? ' simdi' : '') + '">'
           + '<span class="prg-no">' + no + '</span>'
           + '<span class="prg-saat mono">' + (z ? esc(z.b) + '–' + esc(z.s) : '') + '</span>'
           + '<i style="background:' + renkOf(d[0]) + '"></i>'
           + '<span class="prg-ders">' + esc(d[0]) + '</span>'
           + '<span class="prg-ogr">' + esc(d[1]) + '</span></div>';
      });
      h += '</div></div>';
    });
    box.innerHTML = h;
  }

  function renderOkul(){
    var P = PROGRAM[grade];
    var b = el("okulBaslik");
    if(b) b.innerHTML = esc(OKUL_ADI) + ' · <b>' + esc(P ? P.sinif : "") + '</b>'
                      + (P && P.ogretmen ? ' · Sınıf öğretmeni: ' + esc(P.ogretmen) : '');
    renderSuAn(); renderZaman(); renderProgram();
  }

  /* Sekme listesine ekle ve dakikada bir "şu an"ı tazele */
  TABS.push("okul");
  el("tab-okul").addEventListener("click", function(){ switchTab("okul"); });

  var _renderAll = renderAll;
  renderAll = function(){ _renderAll(); renderOkul(); };

  renderOkul();
  setInterval(function(){
    if(!el("p-okul").hidden) renderOkul();
  }, 30000);
