  /* ===================== VELİ GÖRÜNÜMÜ =====================
     Çocuğun cihazı "durum kodu" üretir; veli kendi bilgisayarında
     ?veli adresini açıp kodu yapıştırır ve raporu görür.

     Kod kısa kalsın diye ünite ve konu adları yerine KANONİK SIRA
     İNDEKSİ taşınır — iki taraf da aynı sayfayı çalıştırdığı için
     indeksten ada çevirme sorunsuz olur. */

  function uniteListesi(g){
    var out = [];
    G[g].subj.forEach(function(s){
      s.units.forEach(function(u){
        out.push({ sk:s.key, sad:s.name, renk:s.color, ad:u.n, id:uid(s.key, u) });
      });
    });
    return out;
  }

  /* Test etiketlerinin (TEMA 1 · …) kanonik listesi — zayıf konu raporu için */
  function etiketListesi(g){
    var gor = {}, out = [];
    G[g].subj.forEach(function(s){
      var hepsi = ((G[g].quiz || {})[s.key] || []).concat(((G[g].havuz || {})[s.key] || []));
      hepsi.forEach(function(q){
        var k = s.key + "|" + q.u;
        if(gor[k]) return;
        gor[k] = true;
        out.push({ sk:s.key, sad:s.name, renk:s.color, u:q.u });
      });
    });
    return out;
  }

  /* Bir sınıfın durumunu rapor nesnesine çevirir.
     Hem durum kodu üretiminde hem de buluttan gelen veride kullanılır. */
  function durumObje(g, S){
    S = S || {};
    var UL = uniteListesi(g), EL = etiketListesi(g);
    var done = [];
    UL.forEach(function(u, i){ if((S.done || {})[u.id]) done.push(i); });

    var quiz = [];
    Object.keys(S.quiz || {}).forEach(function(k){
      var r = S.quiz[k];
      if(r && r.total) quiz.push({ k:k, s:r.best + "/" + r.total });
    });

    var sayim = {};
    G[g].subj.forEach(function(s){
      var hepsi = ((G[g].quiz || {})[s.key] || []).concat(((G[g].havuz || {})[s.key] || []));
      hepsi.forEach(function(qq){
        if(!(S.wrong || {})[wkeyFor(s.key, qq)]) return;
        for(var i = 0; i < EL.length; i++){
          if(EL[i].sk === s.key && EL[i].u === qq.u){ sayim[i] = (sayim[i] || 0) + 1; break; }
        }
      });
    });
    var wrong = Object.keys(sayim).map(function(i){ return { i:parseInt(i,10), n:sayim[i] }; });

    return { g:g, son:(S.son || "").slice(0,10), done:done, quiz:quiz, wrong:wrong };
  }

  function kodUret(g){
    var S = state[g] || {}, UL = uniteListesi(g), EL = etiketListesi(g);
    var d = [];
    UL.forEach(function(u, i){ if((S.done || {})[u.id]) d.push(i.toString(36)); });

    var q = [];
    Object.keys(S.quiz || {}).forEach(function(k){
      var r = S.quiz[k];
      if(r && r.total) q.push(k + ":" + r.best + "/" + r.total);
    });

    var sayim = {};
    G[g].subj.forEach(function(s){
      var hepsi = ((G[g].quiz || {})[s.key] || []).concat(((G[g].havuz || {})[s.key] || []));
      hepsi.forEach(function(qq){
        if(!(S.wrong || {})[wkeyFor(s.key, qq)]) return;
        for(var i = 0; i < EL.length; i++){
          if(EL[i].sk === s.key && EL[i].u === qq.u){ sayim[i] = (sayim[i] || 0) + 1; break; }
        }
      });
    });
    var w = Object.keys(sayim).map(function(i){ return parseInt(i,10).toString(36) + "x" + sayim[i]; });

    return ["OYH1", g, (S.son || "").slice(0,10),
            "D" + d.join(","), "Q" + q.join(","), "W" + w.join(",")].join(";");
  }

  function kodCoz(kod){
    var p = String(kod || "").trim().split(";");
    if(p[0] !== "OYH1") return null;
    var g = p[1];
    if(g !== "g6" && g !== "g7") return null;
    var o = { g:g, son:p[2] || "", done:[], quiz:[], wrong:[] };
    p.slice(3).forEach(function(bl){
      var t = bl.charAt(0), v = bl.slice(1);
      if(!v) return;
      if(t === "D") o.done = v.split(",").map(function(x){ return parseInt(x, 36); });
      if(t === "Q") o.quiz = v.split(",").map(function(x){ var a = x.split(":"); return {k:a[0], s:a[1]}; });
      if(t === "W") o.wrong = v.split(",").map(function(x){
        var a = x.split("x"); return {i:parseInt(a[0], 36), n:parseInt(a[1], 10)};
      });
    });
    return o;
  }

  /* ---------- veli tarafı ---------- */

  var VLS = LS + "-veli";
  function veliOku(){
    try{ var r = localStorage.getItem(VLS); return r ? JSON.parse(r) : {}; }catch(e){ return {}; }
  }
  function veliYaz(o){ try{ localStorage.setItem(VLS, JSON.stringify(o)); }catch(e){} }

  function tarihYaz(s){
    if(!s) return "henüz kayıt yok";
    var d = new Date(s + "T00:00:00");
    if(isNaN(d.getTime())) return s;
    var bugun = new Date(); bugun.setHours(0,0,0,0);   // saat değil, gün farkı
    var fark = Math.round((bugun.getTime() - d.getTime()) / 86400000);
    var m = d.getDate() + " " + AYLAR[d.getMonth()];
    if(fark <= 0) return m + " (bugün)";
    if(fark === 1) return m + " (dün)";
    return m + " (" + fark + " gün önce)";
  }

  function veliKart(kod){
    var o = kodCoz(kod);
    if(!o) return '<div class="veli-kart" style="--sc:var(--bad)"><h3>Kod okunamadı</h3>'
                + '<p class="veli-bos">Kodun tamamını kopyaladığından emin ol; <code>OYH1;</code> ile başlamalı.</p></div>';
    return veliKartObje(o);
  }

  function veliKartObje(o){
    var UL = uniteListesi(o.g), EL = etiketListesi(o.g), G_ = G[o.g];
    var bitti = {};
    o.done.forEach(function(i){ if(UL[i]) bitti[UL[i].sk] = (bitti[UL[i].sk] || 0) + 1; });

    var toplamU = UL.length, bittiTop = o.done.filter(function(i){ return !!UL[i]; }).length;
    var qd = 0, qt = 0;
    o.quiz.forEach(function(x){
      var a = String(x.s).split("/");
      qd += parseInt(a[0],10) || 0; qt += parseInt(a[1],10) || 0;
    });
    var yanlisTop = o.wrong.reduce(function(a,x){ return a + (x.n || 0); }, 0);

    var h = '<div class="veli-kart" style="--sc:var(--accent)">'
      + '<div class="veli-ust"><h3>' + esc(G_.label) + '</h3>'
      + '<span class="veli-son">son çalışma: ' + esc(tarihYaz(o.son)) + '</span>'
      + '<span style="flex:1"></span>'
      + '<button class="veli-sil" data-sil="' + o.g + '">raporu sil</button></div>'
      + '<div class="veli-ozet">'
      + '<div><div class="v">' + bittiTop + ' / ' + toplamU + '</div><div class="k">bitirilen ünite</div></div>'
      + '<div><div class="v">' + (toplamU ? "%" + Math.round(bittiTop / toplamU * 100) : "—") + '</div><div class="k">tamamlanma</div></div>'
      + '<div><div class="v">' + o.quiz.length + ' / ' + Object.keys(G_.quiz).length + '</div><div class="k">bitirilen test</div></div>'
      + '<div><div class="v">' + (qt ? "%" + Math.round(qd / qt * 100) : "—") + '</div><div class="k">test başarısı</div></div>'
      + '</div>';

    /* ders ders ünite ilerlemesi */
    h += '<div class="veli-bolum"><h4>Ders ders ilerleme</h4>';
    G_.subj.forEach(function(s){
      var top = s.units.length, bit = bitti[s.key] || 0;
      var skor = null;
      o.quiz.forEach(function(x){ if(x.k === s.key) skor = x.s; });
      h += '<div class="veli-satir"><i style="background:' + s.color + '"></i>'
         + '<span>' + esc(s.name) + '</span>'
         + '<b>' + bit + '/' + top + ' ünite' + (skor ? '  ·  test ' + esc(skor) : '') + '</b></div>';
    });
    h += '</div>';

    /* bitirilen ünitelerin adları */
    h += '<div class="veli-bolum"><h4>Bitirdiği üniteler</h4>';
    if(!bittiTop){ h += '<p class="veli-bos">Henüz işaretlenmiş ünite yok.</p>'; }
    else {
      o.done.forEach(function(i){
        var u = UL[i];
        if(!u) return;
        h += '<div class="veli-satir"><i style="background:' + u.renk + '"></i>'
           + '<span>' + esc(u.sad) + ' — ' + esc(u.ad) + '</span></div>';
      });
    }
    h += '</div>';

    /* zayıf konular */
    h += '<div class="veli-bolum"><h4>Zayıf konular</h4>';
    if(!o.wrong.length){ h += '<p class="veli-bos">Yanlış yapılan soru kaydı yok.</p>'; }
    else {
      o.wrong.sort(function(a,b){ return b.n - a.n; }).forEach(function(x){
        var e = EL[x.i];
        if(!e) return;
        h += '<div class="veli-satir kotu"><i style="background:' + e.renk + '"></i>'
           + '<span>' + esc(e.sad) + ' — ' + esc(e.u) + '</span><b>' + x.n + ' yanlış</b></div>';
      });
      h += '<p class="zayif-not" style="margin-top:10px">Toplam ' + yanlisTop
         + ' yanlış. Çocuk bunları <b>Testler → Yanlışlarım</b> ile tekrar çözebilir; '
         + 'aynı ünitelerin havuzdaki yeni soruları da orada çıkar.</p>';
    }
    h += '</div></div>';
    return h;
  }

  function renderVeli(){
    var kayit = veliOku(), k = Object.keys(kayit);
    var box = el("veliRapor");
    if(!box) return;
    if(!k.length){
      box.innerHTML = '<p class="lede">Henüz rapor yok. Yukarıdaki kutuya bir durum kodu yapıştırıp <b>Kodu ekle</b> de.</p>';
      return;
    }
    box.innerHTML = k.sort().map(function(g){ return veliKart(kayit[g]); }).join("");
  }

  function veliAc(){
    var m = document.querySelector("main.wrap"), n = el("veliMain");
    if(m) m.hidden = true;
    if(n) n.hidden = false;
    var nav = document.querySelector("nav.tabs"), seg = document.querySelector(".seg"),
        sag = document.querySelector(".top-right"), sub = el("subLine");
    if(nav) nav.hidden = true;
    if(seg) seg.hidden = true;
    if(sag) sag.hidden = true;
    if(sub) sub.textContent = "Çocukların gönderdiği durum kodlarını buraya yapıştırarak ilerlemelerini görebilirsin.";
    renderVeli();
  }

  /* ---------- olaylar ---------- */

  if(el("kodBtn")) el("kodBtn").addEventListener("click", function(){
    var kod = kodUret(grade);
    el("kodCikti").hidden = false;
    el("kodMetin").value = kod;
    el("kodMetin").focus();
    el("kodMetin").select();
  });

  if(el("veliEkle")) el("veliEkle").addEventListener("click", function(){
    var kod = (el("veliKod").value || "").trim();
    var o = kodCoz(kod);
    var uyari = el("veliUyari");
    if(!o){ uyari.textContent = "Kod okunamadı. Tamamını kopyaladığından emin ol — OYH1; ile başlamalı."; return; }
    var kayit = veliOku();
    kayit[o.g] = kod;
    veliYaz(kayit);
    el("veliKod").value = "";
    uyari.textContent = G[o.g].label + " raporu güncellendi.";
    renderVeli();
  });

  if(el("veliTemizle")) el("veliTemizle").addEventListener("click", function(){
    if(!window.confirm("Bu bilgisayardaki tüm raporlar silinecek. Emin misin?")) return;
    veliYaz({});
    el("veliUyari").textContent = "";
    renderVeli();
  });

  if(el("veliRapor")) el("veliRapor").addEventListener("click", function(ev){
    var b = ev.target.closest("[data-sil]");
    if(!b) return;
    var kayit = veliOku();
    delete kayit[b.getAttribute("data-sil")];
    veliYaz(kayit);
    renderVeli();
  });

  /* ?veli adresiyle açıldıysa veli görünümüne geç */
  try{
    if(/[?&]veli\b/.test(window.location.search)) veliAc();
  }catch(e){}
