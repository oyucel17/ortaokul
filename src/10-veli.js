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
      var hepsi = ((G[g].quiz || {})[s.key] || [])
        .concat(((G[g].havuz || {})[s.key] || []))
        .concat(((G[g].ekstra || {})[s.key] || []));
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
      var hepsi = ((G[g].quiz || {})[s.key] || [])
        .concat(((G[g].havuz || {})[s.key] || []))
        .concat(((G[g].ekstra || {})[s.key] || []));
      hepsi.forEach(function(qq){
        var c_ = (S.cevap || {})[wkeyFor(s.key, qq)];
        if(c_ === undefined || c_ === qq.a) return;   // yanlis, cevaplardan turetilir
        for(var i = 0; i < EL.length; i++){
          if(EL[i].sk === s.key && EL[i].u === qq.u){ sayim[i] = (sayim[i] || 0) + 1; break; }
        }
      });
    });
    var wrong = Object.keys(sayim).map(function(i){ return { i:parseInt(i,10), n:sayim[i] }; });

    /* çözülen sorular: soru metni, çocuğun işaretlediği şık, doğru şık */
    var cevaplar = [], duzeltilen = 0, bakilan = 0;
    G[g].subj.forEach(function(s){
      var ana = (G[g].quiz || {})[s.key] || [];
      var havuz = (G[g].havuz || {})[s.key] || [];
      var eks = (G[g].ekstra || {})[s.key] || [];
      ana.forEach(function(qq){ topla(qq, false); });
      eks.forEach(function(qq){ topla(qq, false); });
      havuz.forEach(function(qq){ topla(qq, true); });
      function topla(qq, havuzMu){
        var wk = wkeyFor(s.key, qq);
        var verilen = (S.cevap || {})[wk];
        if(verilen === undefined) return;
        /* Çocuk "Yanlışlarım"da yanlışını düzeltebiliyor; düzeltince soru
           doğru görünür. Hangilerini önce yanlış yaptığı kalıcı "hata"
           kaydından okunur, yoksa emek görünmez olurdu. */
        var oncedenYanlis = !!(S.hata || {})[wk];
        var bakti = verilen === BAKTI;
        if(verilen === qq.a && oncedenYanlis) duzeltilen++;
        if(bakti) bakilan++;
        cevaplar.push({
          sad: s.name, renk: s.color, u: qq.u, soru: qq.q, havuz: havuzMu,
          verilen: bakti ? null : qq.o[verilen], dogru: qq.o[qq.a], ok: verilen === qq.a,
          duz: verilen === qq.a && oncedenYanlis, bakti: bakti
        });
      }
    });

    /* izlenen videolar */
    var videolar = [];
    Object.keys(S.video || {}).forEach(function(url){
      var v = S.video[url];
      var s = null;
      G[g].subj.forEach(function(x){ if(x.key === v.s) s = x; });
      /* Ünite adı kayıttan değil, videonun BUGÜN hangi ünitede durduğundan
         alınır: ünite sonradan yeniden adlandırılınca eski kayıtlar ayrı
         bir başlık altında kalmasın. Bulunamazsa kayıttaki ad kullanılır. */
      var uAd = v.u || "";
      if(s) s.units.forEach(function(un){
        (un.vid || []).forEach(function(vv){ if(vv.u === url) uAd = un.n; });
      });
      videolar.push({
        sad: s ? s.name : v.s, renk: s ? s.color : "var(--ink-faint)",
        u: uAd, t: v.t || url, n: v.n || 1, son: v.son || "", url: url
      });
    });
    videolar.sort(function(a,b){ return (b.son || "").localeCompare(a.son || ""); });

    return { g:g, son:(S.son || "").slice(0,10), done:done, quiz:quiz, wrong:wrong,
             cevaplar:cevaplar, videolar:videolar, duzeltilen:duzeltilen, bakilan:bakilan };
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
      var hepsi = ((G[g].quiz || {})[s.key] || [])
        .concat(((G[g].havuz || {})[s.key] || []))
        .concat(((G[g].ekstra || {})[s.key] || []));
      hepsi.forEach(function(qq){
        var c_ = (S.cevap || {})[wkeyFor(s.key, qq)];
        if(c_ === undefined || c_ === qq.a) return;   // yanlis, cevaplardan turetilir
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
    if(!o.wrong.length){
      h += '<p class="veli-bos">' + (o.duzeltilen
        ? 'Açık yanlış kalmamış.'
        : 'Yanlış yapılan soru kaydı yok.') + '</p>';
    }
    else {
      o.wrong.sort(function(a,b){ return b.n - a.n; }).forEach(function(x){
        var e = EL[x.i];
        if(!e) return;
        h += '<div class="veli-satir kotu"><i style="background:' + e.renk + '"></i>'
           + '<span>' + esc(e.sad) + ' — ' + esc(e.u) + '</span><b>' + x.n + ' yanlış</b></div>';
      });
      h += '<p class="zayif-not" style="margin-top:10px">Hâlâ açık ' + yanlisTop
         + ' yanlış. Çocuk bunları <b>Testler → Yanlışlarım</b> ile tekrar çözebilir; '
         + 'aynı ünitelerin havuzdaki yeni soruları da orada çıkar.</p>';
    }
    /* Düzeltilen yanlış artık "doğru" göründüğü için listeden düşüyor;
       yapılan çalışma görünsün diye ayrıca yazılır. */
    if(o.duzeltilen){
      h += '<p class="zayif-not" style="margin-top:8px">Ayrıca <b>' + o.duzeltilen
         + ' soruyu</b> önce yanlış yapıp sonra kendi düzeltmiş.</p>';
    }
    /* Testte cevabı açıp bakılan sorular yanlış sayılır; ayrıca yazılır
       ki veli bunları gerçek yanlışlardan ayırabilsin. */
    if(o.bakilan){
      h += '<p class="zayif-not" style="margin-top:8px"><b>' + o.bakilan
         + ' soruda</b> çözmeden cevabına bakmış — bunlar yanlış sayıldı.</p>';
    }
    h += '</div>';

    /* izlediği videolar — ders → ünite. Ünite sırası Dersler sekmesindeki
       sırayla aynı; bugünkü adla eşleşmeyen eski kayıtlar sona, "ders
       geneli" (oynatma listesi) en sona. */
    var vid = o.videolar || [];
    h += '<div class="veli-bolum"><h4>İzlediği konu anlatımları'
       + (vid.length ? ' — ' + vid.length + ' video' : '') + '</h4>';
    if(!vid.length){ h += '<p class="veli-bos">Henüz video açılmamış.</p>'; }
    else {
      G[o.g].subj.forEach(function(sj){
        var buDers = vid.filter(function(v){ return v.sad === sj.name; });
        if(!buDers.length) return;
        var izleme = buDers.reduce(function(t, v){ return t + (v.n || 1); }, 0);
        var sonTarih = buDers.map(function(v){ return v.son || ""; }).sort().pop();
        var sira = sj.units.map(function(un){ return un.n; });
        var adlar = [];
        buDers.forEach(function(v){ if(adlar.indexOf(v.u) < 0) adlar.push(v.u); });
        adlar.sort(function(a, b){
          var ia = sira.indexOf(a), ib = sira.indexOf(b);
          if(a === "(ders geneli)") ia = 9999; if(b === "(ders geneli)") ib = 9999;
          if(ia < 0) ia = 5000; if(ib < 0) ib = 5000;
          return ia - ib;
        });
        h += '<details class="vg" style="--sc:' + sj.color + '"><summary>'
           + '<span class="vg-ad"><i></i>' + esc(sj.name) + '</span><span class="vg-ozet">'
           + '<span>' + buDers.length + ' video</span><span>' + izleme + ' izleme</span>'
           + (sonTarih ? '<span>son ' + esc(tarihYaz(sonTarih.slice(0, 10))) + '</span>' : '')
           + '</span></summary><div class="vg-ic">';
        adlar.forEach(function(ad){
          h += '<div class="vu-bas">' + esc(ad === "(ders geneli)" ? "Ders geneli (oynatma listesi)" : ad) + '</div>';
          buDers.filter(function(v){ return v.u === ad; }).forEach(function(v){
            h += '<div class="veli-satir"><i style="background:' + v.renk + '"></i>'
               + '<span><a href="' + esc(v.url) + '" target="_blank" rel="noopener" class="veli-vlink">'
               + esc(v.t) + '</a></span>'
               + '<b>' + v.n + '×' + (v.son ? ' · ' + esc(tarihYaz(v.son.slice(0, 10))) : '') + '</b></div>';
          });
        });
        h += '</div></details>';
      });
    }
    h += '</div>';

    /* çözdüğü sorular — ders → test/ünite → kartlar. Başlıklarda özet,
       içeride yanlışlar üstte. Ek setler ait oldukları temanın hemen
       ardından gelir (sıra ünitenin t dizisinden). */
    var cev = o.cevaplar || [];
    var say = function(k){
      var r = { n:k.length, ok:0, no:0, bk:0 };
      k.forEach(function(c){ if(c.ok) r.ok++; else if(c.bakti) r.bk++; else r.no++; });
      return r;
    };
    var ozet = function(r){
      var y = r.n ? Math.round(100 * r.ok / r.n) : 0;
      return '<span class="vg-ozet"><span>' + r.n + ' soru</span>'
           + '<span class="ok">' + r.ok + ' doğru</span>'
           + (r.no ? '<span class="no">' + r.no + ' yanlış</span>' : '')
           + (r.bk ? '<span class="bk">' + r.bk + ' baktı</span>' : '')
           + '<span class="yz ' + (y >= 80 ? 'ok' : y >= 50 ? 'bk' : 'no') + '">%' + y + '</span></span>';
    };
    var kart = function(c){
      return '<div class="cev-kart' + (c.ok ? ' ok' : ' hata') + '">'
           + '<div class="cev-ust"><span></span>'
           + (c.havuz ? '<em class="cev-havuz">havuz</em>' : '')
           + (c.duz ? '<em class="cev-duz">düzeltti</em>' : '')
           + (c.bakti ? '<em class="cev-bakti">cevabına baktı</em>' : '')
           + '<b>' + (c.ok ? 'doğru' : 'yanlış') + '</b></div>'
           + '<div class="cev-soru">' + esc(c.soru) + '</div>'
           + '<div class="cev-sik"><em>işaretlediği:</em> '
           + (c.bakti ? '— (çözmeden cevabı açtı)' : esc(c.verilen)) + '</div>'
           + (c.ok ? '' : '<div class="cev-sik dogru"><em>doğrusu:</em> ' + esc(c.dogru) + '</div>')
           + '</div>';
    };
    var tum = say(cev);
    h += '<div class="veli-bolum"><h4>Çözdüğü sorular'
       + (cev.length ? ' — ' + cev.length + ' soru, ' + tum.ok + ' doğru' : '') + '</h4>';
    if(!cev.length){ h += '<p class="veli-bos">Henüz soru çözülmemiş.</p>'; }
    else {
      G[o.g].subj.forEach(function(sj){
        var buDers = cev.filter(function(c){ return c.sad === sj.name; });
        if(!buDers.length) return;
        var sira = [];
        sj.units.forEach(function(un){ (un.t || []).forEach(function(et){ if(sira.indexOf(et) < 0) sira.push(et); }); });
        buDers.forEach(function(c){ if(sira.indexOf(c.u) < 0) sira.push(c.u); });
        h += '<details class="vg" style="--sc:' + sj.color + '"><summary>'
           + '<span class="vg-ad"><i></i>' + esc(sj.name) + '</span>' + ozet(say(buDers))
           + '</summary><div class="vg-ic">';
        sira.forEach(function(et){
          var k = buDers.filter(function(c){ return c.u === et; });
          if(!k.length) return;
          var ek = /^EK · /.test(et);
          /* yanlış ve bakılanlar üstte */
          k = k.filter(function(c){ return !c.ok; }).concat(k.filter(function(c){ return c.ok; }));
          h += '<details class="vg alt' + (ek ? ' ek' : '') + '"><summary>'
             + '<span class="vg-ad">' + esc(ek ? 'Ek çalışma · ' + et.replace(/^EK · /, '') : et) + '</span>'
             + ozet(say(k)) + '</summary><div class="cev-liste">';
          k.forEach(function(c){ h += kart(c); });
          h += '</div></details>';
        });
        h += '</div></details>';
      });
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

  if(el("paylasAc")) el("paylasAc").addEventListener("click", function(){
    var k = el("paylasKutu");
    k.hidden = !k.hidden;
    this.textContent = k.hidden ? "bağlantı sorunu mu var? durum kodu üret" : "yedek yolu gizle";
  });

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
