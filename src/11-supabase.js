  /* ===================== SUPABASE SENKRONU =====================
     Çocukların cihazları ilerlemeyi buluta yazar, veli görünümü
     buradan okur. localStorage yine birincil kayıt olarak kalır —
     internet yoksa sayfa aynen çalışır, bağlantı gelince gönderir.

     Buradaki anahtar "publishable" anahtardır; istemci tarafında
     görünmesi tasarımın parçasıdır. Koruma anahtarda değil, tablodaki
     RLS kurallarındadır: yalnızca g6 ve g7 satırları okunup
     güncellenebilir, yeni satır açılamaz, silme yoktur. */

  var SB_URL = "https://ekixnxjxutaisfhyttah.supabase.co";
  var SB_KEY = "sb_publishable_66wpNARtcnBrzopjkXpOXw_PRL6hRP4";
  var SB_TABLO = "ilerleme";

  var sbBasliklar = {
    "apikey": SB_KEY,
    "Authorization": "Bearer " + SB_KEY,
    "Content-Type": "application/json"
  };

  function sbVar(){
    return typeof fetch === "function" && SB_URL.indexOf("supabase.co") !== -1;
  }

  function bulutaYaz(g){
    if(!sbVar()) return Promise.resolve(false);
    var S = state[g] || {};
    var govde = [{
      sinif: g,
      veri: { done:S.done || {}, quiz:S.quiz || {}, wrong:S.wrong || {}, son:S.son || "" },
      guncelleme: new Date().toISOString()
    }];
    return fetch(SB_URL + "/rest/v1/" + SB_TABLO + "?on_conflict=sinif", {
      method: "POST",
      headers: Object.assign({}, sbBasliklar, { "Prefer": "resolution=merge-duplicates,return=minimal" }),
      body: JSON.stringify(govde)
    }).then(function(r){ return r.ok; }).catch(function(){ return false; });
  }

  function buluttanOku(){
    if(!sbVar()) return Promise.resolve(null);
    return fetch(SB_URL + "/rest/v1/" + SB_TABLO + "?select=sinif,veri,guncelleme&sinif=in.(g6,g7)", {
      headers: sbBasliklar
    }).then(function(r){ return r.ok ? r.json() : null; }).catch(function(){ return null; });
  }

  /* ---------- çocuk tarafı: kaydettikçe gönder ---------- */

  var sbTimer = null, sbSonDurum = "";
  function bulutaYazGecikmeli(g){
    clearTimeout(sbTimer);
    sbTimer = setTimeout(function(){
      bulutaYaz(g).then(function(ok){
        sbSonDurum = ok ? "bulut" : "yerel";
        setSaveNote(ok, ok
          ? "Kaydedildi ve ailenle paylaşıldı."
          : "İnternet yok — bu cihazda kaydedildi, bağlantı gelince gönderilecek.");
      });
    }, 900);
  }

  var _persist = persist;
  persist = function(){
    _persist();
    bulutaYazGecikmeli(grade);
  };

  /* Açılışta buluttan çek: bulut daha yeniyse onu al (cihazlar arası senkron) */
  function bulutuGetir(){
    if(!sbVar()) return;
    buluttanOku().then(function(satirlar){
      if(!satirlar || !satirlar.length) return;
      var degisti = false;
      satirlar.forEach(function(r){
        var g = r.sinif;
        if(g !== "g6" && g !== "g7") return;
        var yerel = (state[g].son || "");
        var bulut = (r.veri && r.veri.son) || r.guncelleme || "";
        if(bulut > yerel){
          state[g].done  = (r.veri && r.veri.done)  || {};
          state[g].quiz  = (r.veri && r.veri.quiz)  || {};
          state[g].wrong = (r.veri && r.veri.wrong) || {};
          state[g].son   = bulut;
          degisti = true;
        }
      });
      if(degisti){
        writeLocal();
        renderSubjects(); renderRing(); renderProgress(); renderQuiz();
        setSaveNote(true, "Diğer cihazdaki ilerleme alındı.");
      } else {
        setSaveNote(true, "Kaydedildi ve ailenle paylaşıldı.");
      }
    });
  }

  /* ---------- veli tarafı: doğrudan buluttan oku ---------- */

  var _renderVeli = renderVeli;
  renderVeli = function(){
    var box = el("veliRapor");
    if(!box) return;
    if(!sbVar()){ _renderVeli(); return; }

    box.innerHTML = '<p class="lede">İlerleme bilgisi alınıyor…</p>';
    buluttanOku().then(function(satirlar){
      if(!satirlar){
        box.innerHTML = '<p class="lede">Buluta ulaşılamadı. İnternet bağlantını kontrol et '
                      + 'ya da aşağıdaki kutuya çocuğun gönderdiği durum kodunu yapıştır.</p>';
        _renderVeli();
        return;
      }
      var kart = {};
      satirlar.forEach(function(r){
        if(r.sinif !== "g6" && r.sinif !== "g7") return;
        var S = r.veri || {};
        if(!S.son && r.guncelleme) S.son = r.guncelleme;
        kart[r.sinif] = veliKartObje(durumObje(r.sinif, S));
      });
      var k = Object.keys(kart).sort();
      if(!k.length){
        box.innerHTML = '<p class="lede">Henüz hiçbir cihazdan ilerleme gelmemiş. '
                      + 'Çocuklar sayfayı açıp bir ünite işaretlediğinde burada görünecek.</p>';
        return;
      }
      box.innerHTML = k.map(function(g){ return kart[g]; }).join("");
    });
  };

  /* Veli görünümünde manuel kod kutusunu ikincil hale getir */
  if(/[?&]veli\b/.test(window.location.search)){
    var giris = document.querySelector(".veli-giris");
    if(giris && sbVar()){
      giris.hidden = true;
      var not = document.createElement("p");
      not.className = "zayif-not";
      not.style.margin = "0 0 18px";
      not.innerHTML = 'Rapor çocukların cihazlarından otomatik geliyor. '
                    + '<button class="veli-sil" id="kodAc" style="margin-left:4px">kod yapıştırarak ekle</button>';
      giris.parentNode.insertBefore(not, giris);
      var ac = el("kodAc");
      if(ac) ac.addEventListener("click", function(){ giris.hidden = !giris.hidden; });
    }
    renderVeli();
  } else {
    bulutuGetir();
  }
