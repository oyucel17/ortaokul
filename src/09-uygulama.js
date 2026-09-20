  /* ===================== SINIFLAR ===================== */

  var G = {
    g6:{ label:"6. Sınıf", cal:CAL6, subj:S6, quiz:Q6, havuz:H6,
         sub:"Altı dersin ünite ünite özeti, her ünitenin sonunda açık uçlu sorular ve kapalı duran bir cevap anahtarı — yanında yıllık takvim, haftalık program ve çoktan seçmeli testler.",
         lede:"6. sınıf ikinci yılında Maarif Modeli ile okuyor. Ünite adları MEB'in resmî programından birebir alındı. Bir üniteyi bitirince soldaki kutuyu işaretle; ilerleme kaydediliyor." },
    g7:{ label:"7. Sınıf", cal:CAL7, subj:S7, quiz:Q7, havuz:H7,
         sub:"Altı dersin ünite ünite özeti, her ünitenin sonunda açık uçlu sorular ve kapalı duran bir cevap anahtarı — yanında yıllık takvim, haftalık program ve çoktan seçmeli testler.",
         lede:"2026–2027, 7. sınıfın Maarif Modeli'ne geçtiği <b>ilk yıl</b> — ünite adları geçen yılkinden farklı. Başlıklar MEB'in resmî programından birebir alındı. Bir üniteyi bitirince soldaki kutuyu işaretle; ilerleme kaydediliyor." }
  };

  function countUnits(g){ var c=0; G[g].subj.forEach(function(s){ c += s.units.length; }); return c; }
  function countQ(g){ var c=0; Object.keys(G[g].quiz).forEach(function(k){ c += G[g].quiz[k].length; }); return c; }

  var grade = "g7";
  var state = { g6:{done:{},quiz:{},wrong:{},cevap:{},video:{}}, g7:{done:{},quiz:{},wrong:{},cevap:{},video:{}} };
  var LS = "ortaokul-yol-haritasi-v1";
  var dbRef = null, saveTimer = null;
  var openSubj = {g6:{},g7:{}}, openUnit = {g6:{},g7:{}};
  var curQuiz = "mat", ansOpen = false, reveal = false, qFilter = null;

  function el(id){ return document.getElementById(id); }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function cur(){ return G[grade]; }
  function st(){ return state[grade]; }
  function subjByKey(k){ var u = cur().subj; for(var i=0;i<u.length;i++){ if(u[i].key===k) return u[i]; } return null; }

  /* Ünite kimliği ünite ADINDAN türetilir, sırasından değil.
     Böylece sonradan araya ünite eklenirse işaretlenmiş konular kaymaz. */
  var TRMAP = {"ç":"c","ğ":"g","ı":"i","ö":"o","ş":"s","ü":"u","â":"a","î":"i","û":"u"};
  function slug(t){
    return String(t).toLowerCase()
      .replace(/[çğıöşüâîû]/g, function(c){ return TRMAP[c] || c; })
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 30);
  }
  function uid(sk, u){ return sk + "-" + slug(u.n); }

  /* Soru kimliği metinden türetilir — araya soru eklense de
     "yanlışlarım" kayıtları doğru soruya bağlı kalır. */
  function qid(q){ return slug(q.q).slice(0, 42); }
  function wkeyFor(sk, q){ return sk + "|" + qid(q); }
  function wkey(q){ return wkeyFor(curQuiz, q); }

  /* Deterministik karıştırma: aynı tohum aynı sırayı verir, böylece
     tıkladıkça sıra değişmez; "Testi sıfırla" yeni tohum üretir. */
  var seeds = {};
  function seedOf(){
    var k = grade + "-" + curQuiz;
    if(seeds[k] === undefined) seeds[k] = Math.floor(Math.random() * 1e9);
    return seeds[k];
  }
  function rnd(s){
    return function(){
      s = s + 0x6D2B79F5 | 0;
      var t = Math.imul(s ^ s >>> 15, 1 | s);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function perm(n, seed){
    var a = [], r = rnd(seed), i, j, t;
    for(i = 0; i < n; i++) a.push(i);
    for(i = n - 1; i > 0; i--){ j = Math.floor(r() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* Takvimdeki ay adlarıyla eşleşen gerçek ay — "şu an işleniyor" işareti için. */
  var AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
  function buAy(){ return AYLAR[new Date().getMonth()]; }
  function sonrakiAy(){ return AYLAR[(new Date().getMonth()+1) % 12]; }
  function suAnMi(u){ return !!(u.w && u.w.indexOf(buAy()) !== -1); }
  function sonrakiMi(u){ return !!(u.w && u.w.indexOf(sonrakiAy()) !== -1); }

  var YT = '<span class="yt" aria-hidden="true"><svg width="8" height="9" viewBox="0 0 8 9" fill="none">'
         + '<path d="M0 0.5v8l7-4-7-4z" fill="#fff"/></svg></span>';

  var CHEV = '<svg class="unit-chev" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CHEV_BIG = '<svg class="subj-chev" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var TICK = '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- kayıt ---------- */
  function readLocal(){
    try{
      var raw = localStorage.getItem(LS);
      if(raw){ var o = JSON.parse(raw);
        if(o && typeof o === "object"){
          ["g6","g7"].forEach(function(g){
            if(o[g]){ state[g].done = o[g].done || {}; state[g].quiz = o[g].quiz || {}; state[g].wrong = o[g].wrong || {}; state[g].cevap = o[g].cevap || {}; state[g].video = o[g].video || {}; state[g].son = o[g].son || ""; }
          });
        }
      }
    }catch(e){}
  }
  function writeLocal(){ try{ localStorage.setItem(LS, JSON.stringify(state)); }catch(e){} }
  function setSaveNote(on, txt){
    var d = el("saveDot"), t = el("saveTxt");
    if(d) d.className = "dot" + (on ? " on" : "");
    if(t) t.textContent = txt;
  }
  function persist(){
    state[grade].son = new Date().toISOString();   // son çalışma zamanı (veli raporu için)
    writeLocal();
    if(!dbRef) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function(){
      dbRef.set({ g6:state.g6, g7:state.g7, updatedAt:new Date().toISOString() })
        .then(function(){ setSaveNote(true, "Hesabına kaydedildi — her cihazda aynı ilerleme."); })
        .catch(function(err){
          setSaveNote(false, err && err.code === "invalid_argument"
            ? "Bu sayfada değişiklik kaydetme yetkin yok; ilerleme yalnızca bu tarayıcıda tutuluyor."
            : "Sunucuya kaydedilemedi; ilerleme bu tarayıcıda tutuluyor.");
        });
    }, 500);
  }
  function initStore(){
    setSaveNote(false, "İlerleme bu tarayıcıda tutuluyor.");
    if(!window.claude || !window.claude.use) return;
    window.claude.use("db").then(function(db){
      if(!db) return;
      dbRef = db.doc("progress/students");
      var first = true;
      dbRef.onSnapshot(function(snap){
        if(first){
          first = false;
          if(!snap.exists){
            var any = Object.keys(state.g6.done).length || Object.keys(state.g7.done).length ||
                      Object.keys(state.g6.quiz).length || Object.keys(state.g7.quiz).length;
            if(any) persist(); else setSaveNote(true, "Hesabına kaydediliyor — her cihazda aynı ilerleme.");
            return;
          }
        }
        if(!snap.exists) return;
        if(snap.metadata && snap.metadata.hasPendingWrites) return;
        var d = snap.data() || {};
        ["g6","g7"].forEach(function(g){
          if(d[g]){ state[g].done = d[g].done || {}; state[g].quiz = d[g].quiz || {}; state[g].wrong = d[g].wrong || {}; state[g].cevap = d[g].cevap || {}; state[g].video = d[g].video || {}; }
        });
        writeLocal();
        renderSubjects(); renderProgress(); renderRing(); renderQuiz();
        setSaveNote(true, "Hesabına kaydediliyor — her cihazda aynı ilerleme.");
      }, function(){
        dbRef = null;
        setSaveNote(false, "İlerleme bu tarayıcıda tutuluyor.");
      });
    }).catch(function(){});
  }

  /* ---------- takvim ---------- */
  function renderTimeline(){
    var h = "", NOW = "eylul";
    cur().cal.forEach(function(row){
      if(row.b){
        var b = BREAKS[row.b];
        h += '<div class="tl-item is-break"><div class="tl-card">'
          + '<div class="tl-top"><span class="tl-date">'+esc(b.d)+'</span></div>'
          + '<div class="tl-break-txt">'+esc(b.t)+'</div></div></div>';
        return;
      }
      var isNow = row.key === NOW;
      h += '<div class="tl-item'+(isNow?" is-now":"")+'"><div class="tl-card">'
        + '<div class="tl-top"><span class="tl-month">'+esc(row.m)+'</span>'
        + '<span class="tl-date">'+esc(row.d)+'</span>'
        + (isNow?'<span class="tl-now">şu an buradasın</span>':'')
        + '</div><div class="chips">';
      row.items.forEach(function(it){
        var s = subjByKey(it[0]);
        if(!s) return;
        h += '<span class="chip"><i style="background:'+s.color+'"></i>'+esc(it[1])+'</span>';
      });
      h += '</div></div></div>';
    });
    el("timeline").innerHTML = h;
  }

  function renderWeek(){
    var h = "";
    WEEK.forEach(function(d){
      h += '<div class="day'+(d.rest?" rest":"")+'">'
        + '<div class="day-name">'+esc(d.n)+'<small>'+esc(d.s)+'</small></div><div class="slots">';
      d.slots.forEach(function(s){
        h += '<div class="slot"><time>'+esc(s[0])+'</time><span>'+s[1]+'</span></div>';
      });
      h += '</div></div>';
    });
    el("week").innerHTML = h;
  }

  /* ---------- dersler ---------- */
  function doneCount(s){
    var c = 0, d = st().done;
    for(var i=0;i<s.units.length;i++){ if(d[uid(s.key, s.units[i])]) c++; }
    return c;
  }
  function tableHTML(t){
    var h = '<div class="tbl"><table><thead><tr>';
    t.h.forEach(function(c){ h += '<th>'+c+'</th>'; });
    h += '</tr></thead><tbody>';
    t.r.forEach(function(row){
      h += '<tr>';
      row.forEach(function(c){ h += '<td>'+c+'</td>'; });
      h += '</tr>';
    });
    return h + '</tbody></table></div>';
  }
  function renderSubjects(){
    var h = "", OS = openSubj[grade], OU = openUnit[grade], D = st().done;
    cur().subj.forEach(function(s){
      var dc = doneCount(s), isOpen = !!OS[s.key];
      h += '<article class="subj" style="--sc:'+s.color+'" data-open="'+(isOpen?1:0)+'">'
        + '<button class="subj-head" data-subj="'+s.key+'" aria-expanded="'+isOpen+'">'
        + '<div class="subj-title"><h3>'+esc(s.name)+'</h3><div class="meta">'+esc(s.meta)+'</div></div>'
        + '<span class="subj-prog">'+dc+'/'+s.units.length+'</span>'+CHEV_BIG+'</button>';
      if(isOpen){
        if(s.note || s.plist){
          h += '<div class="subj-extra">';
          if(s.note) h += '<div class="subj-note">'+s.note+'</div>';
          if(s.plist){
            var liste = s.plist.u.indexOf("playlist") !== -1;
            h += '<div class="vids"><a href="'+s.plist.u+'" target="_blank" rel="noopener">'+YT
               + '<span class="vt">'+esc(s.plist.t)+'</span>'
               + '<span class="vk">'+(liste?"oynatma listesi":"kanal")+'</span></a></div>';
          }
          h += '</div>';
        }
        s.units.forEach(function(u,i){
          var id = uid(s.key, u), isDone = !!D[id], uo = !!OU[id];
          h += '<div class="unit" data-done="'+(isDone?1:0)+'" data-open="'+(uo?1:0)+'">'
            + '<div class="unit-row">'
            + '<button class="tick" data-tick="'+id+'" aria-pressed="'+isDone+'" aria-label="'+esc(u.n)+' tamamlandı">'+TICK+'</button>'
            + '<button class="unit-open" data-unit="'+id+'" aria-expanded="'+uo+'">'
            + '<span class="unit-no">'+esc(s.lbl)+' '+(i+1)+'</span>'
            + '<span class="unit-name">'+esc(u.n)+'</span>'
            + (suAnMi(u) ? '<span class="now-badge">şimdi işleniyor</span>'
               : sonrakiMi(u) ? '<span class="next-badge">sonraki ay</span>' : '')
            + '<span class="unit-when">'+esc(u.w)+'</span>'+CHEV+'</button></div>';
          if(uo){
            h += '<div class="unit-body">';
            if(u.lead) h += '<p class="lead">'+u.lead+'</p>';
            if(u.p && u.p.length){
              h += '<div class="kv"><h5>Bilmen gerekenler</h5><ul>';
              u.p.forEach(function(x){ h += '<li>'+x+'</li>'; });
              h += '</ul></div>';
            }
            if(u.box) u.box.forEach(function(b){
              h += '<div class="rbox"><p class="rb-t">'+esc(b.t)+'</p>'+b.h+'</div>';
            });
            if(u.tbl) u.tbl.forEach(function(t){ h += tableHTML(t); });
            if(u.trap) h += '<div class="trap"><b>Sık yapılan hata.</b> '+u.trap+'</div>';
            if(u.vid && u.vid.length){
              h += '<div class="kv"><h5>Konu anlatımı videoları</h5><div class="vids">';
              u.vid.forEach(function(v){
                var liste = v.u.indexOf("playlist") !== -1;
                h += '<a href="'+v.u+'" target="_blank" rel="noopener">'+YT
                   + '<span class="vt">'+esc(v.t)+'</span>'
                   + '<span class="vk">'+(liste?"oynatma listesi":"video")+'</span></a>';
              });
              h += '</div></div>';
            }
            if(u.q && u.q.length){
              h += '<div class="qs"><p class="qs-t">Sorular</p><ol>';
              u.q.forEach(function(x){ h += '<li>'+x+'</li>'; });
              h += '</ol></div>';
              if(u.a && u.a.length){
                h += '<details class="ans"'+(ansOpen?" open":"")+'><summary>Cevap anahtarı</summary><ol class="ans-list">';
                u.a.forEach(function(x){ h += '<li>'+x+'</li>'; });
                h += '</ol></details>';
              }
            }
            h += '</div>';
          }
          h += '</div>';
        });
      }
      h += '</article>';
    });
    el("subjects").innerHTML = h;
  }

  function renderNowStrip(){
    var box = el("nowStrip"), h = "", bulunan = 0;
    [[buAy(), "Bu ay işlenen konular", ""], [sonrakiAy(), "Sonraki ay", " next"]].forEach(function(p){
      var row = null;
      cur().cal.forEach(function(r){ if(!r.b && r.m === p[0]) row = r; });
      if(!row) return;
      bulunan++;
      h += '<div class="now-strip'+p[2]+'"><div class="nt">'+p[1]+' · '
         + esc(row.m)+' '+esc(row.d)+'</div><div class="chips">';
      row.items.forEach(function(it){
        var s = subjByKey(it[0]);
        if(!s) return;
        h += '<span class="chip"><i style="background:'+s.color+'"></i><b>'+esc(s.name)+':</b>&nbsp;'+esc(it[1])+'</span>';
      });
      h += '</div></div>';
    });
    box.innerHTML = h;
    box.hidden = bulunan === 0;
  }

  function renderRing(){
    var done = 0, total = countUnits(grade);
    cur().subj.forEach(function(s){ done += doneCount(s); });
    var pct = total ? Math.round(done/total*100) : 0;
    var C = 2*Math.PI*16;
    var f = el("ringFill");
    f.setAttribute("stroke-dasharray", C.toFixed(1));
    f.setAttribute("stroke-dashoffset", (C*(1-pct/100)).toFixed(1));
    el("ringPct").textContent = "%"+pct;
    el("ringLab").textContent = done+" / "+total+" ünite · "+cur().label;
  }

  /* ---------- test ---------- */
  function renderQuizPills(){
    var h = "", Q = cur().quiz;
    cur().subj.forEach(function(s){
      if(!Q[s.key]) return;
      h += '<button class="pill" style="--sc:'+s.color+'" data-quiz="'+s.key+'" aria-pressed="'
        + (curQuiz===s.key)+'">'+esc(s.name)+' <span class="mono" style="opacity:.7">'+Q[s.key].length+'</span></button>';
    });
    el("quizPills").innerHTML = h;
  }
  /* Testteki ünite filtresi — soruların özgün sırası korunur,
     sadece görünmeyenler atlanır; böylece cevaplar kaymaz. */
  function renderQuizUnits(){
    var list = cur().quiz[curQuiz] || [], s = subjByKey(curQuiz);
    var sira = [], adet = {};
    list.forEach(function(q){
      if(adet[q.u] === undefined){ sira.push(q.u); adet[q.u] = 0; }
      adet[q.u]++;
    });
    var box = el("quizUnits"), W = st().wrong, yanlis = 0;
    list.forEach(function(q){ if(W[wkey(q)]) yanlis++; });
    box.style.setProperty("--sc", s.color);
    var h = '<button class="ufilter" data-uf="" aria-pressed="'+(qFilter===null)+'">'
          + 'Tümü <span class="n">'+list.length+'</span></button>';
    if(yanlis){
      var zayif = {}, ek = 0;
      list.forEach(function(q){ if(W[wkey(q)]) zayif[q.u] = true; });
      hav().forEach(function(q){ if(W[wkey(q)]) zayif[q.u] = true; });
      hav().forEach(function(q){ if(zayif[q.u]) ek++; });
      h += '<button class="ufilter hata" data-uf="__yanlis__" aria-pressed="'+(qFilter==="__yanlis__")+'">'
         + 'Yanlışlarım <span class="n">'+yanlis+(ek ? " + "+ek+" yeni" : "")+'</span></button>';
    }
    sira.forEach(function(u){
      h += '<button class="ufilter" data-uf="'+esc(u)+'" aria-pressed="'+(qFilter===u)+'">'
         + esc(u)+' <span class="n">'+adet[u]+'</span></button>';
    });
    box.innerHTML = h;
  }

  function hav(){ return (cur().havuz || {})[curQuiz] || []; }
  function anaListe(){ return (cur().quiz || {})[curQuiz] || []; }
  function hashNum(s){ var n = 0; for(var i=0;i<s.length;i++) n = (n*31 + s.charCodeAt(i)) | 0; return n; }

  /* Ekranda gösterilecek soruları kurar.
     "Yanlışlarım" modunda ana testten yanlış yapılanlar + o ünitelerin
     HAVUZ sorularını birlikte verir; havuz soruları ana teste girmez. */
  function gosterilecek(){
    var ana = anaListe(), havuz = hav(), W = st().wrong, out = [];
    if(qFilter === "__yanlis__"){
      var zayif = {};
      ana.forEach(function(q){ if(W[wkeyFor(curQuiz,q)]) zayif[q.u] = true; });
      havuz.forEach(function(q){ if(W[wkeyFor(curQuiz,q)]) zayif[q.u] = true; });
      ana.forEach(function(q,i){ if(W[wkeyFor(curQuiz,q)]) out.push({q:q, id:String(i), havuz:false}); });
      havuz.forEach(function(q,i){ if(zayif[q.u]) out.push({q:q, id:"h"+i, havuz:true}); });
    } else {
      ana.forEach(function(q,i){ if(qFilter === null || q.u === qFilter) out.push({q:q, id:String(i), havuz:false}); });
    }
    return out;
  }

  function renderQuiz(){
    var Q = cur().quiz;
    if(!Q[curQuiz]) curQuiz = "mat";
    var s = subjByKey(curQuiz), ana = anaListe(), W = st().wrong;
    if(qFilter !== null && qFilter !== "__yanlis__"
       && !ana.some(function(q){ return q.u === qFilter; })) qFilter = null;
    if(qFilter === "__yanlis__"
       && !ana.concat(hav()).some(function(q){ return W[wkeyFor(curQuiz,q)]; })) qFilter = null;

    var kume = gosterilecek();
    var seed = seedOf(), sira = perm(kume.length, seed);
    var box = el("qlist"), h = "", sayac = 0;

    sira.forEach(function(k){
      var it = kume[k], q = it.q;
      sayac++;

      var given = st().cevap[wkeyFor(curQuiz, q)];
      var goster = (given !== undefined) || reveal;   // cevaplandı ya da "cevapları göster" açık
      var sik = perm(q.o.length, seed + hashNum(it.id) * 7919);   // şık sırası da karışır

      h += '<div class="q" style="--sc:'+s.color+'">'
        + '<div class="q-unit">'+esc(q.u)+'</div>'
        + (it.havuz ? '<div class="q-pool">Havuzdan · yeni soru</div>' : '')
        + (!it.havuz && W[wkeyFor(curQuiz,q)] && given === undefined
            ? '<div class="q-again">Bunu daha önce yanlış yapmıştın</div>' : '')
        + '<div class="q-top"><span class="q-no">'+sayac+'</span>'
        + '<div class="q-txt">'+esc(q.q)+'</div></div><div class="opts">';

      sik.forEach(function(oi, j){
        var cls = "opt", dis = "";
        if(goster){
          dis = " disabled";
          if(oi === q.a) cls += " correct";
          else if(oi === given) cls += " wrong";
        }
        h += '<button class="'+cls+'" data-ans="'+it.id+'-'+oi+'"'+dis+'>'
          + '<span class="let">'+String.fromCharCode(65+j)+'</span><span>'+esc(q.o[oi])+'</span></button>';
      });
      h += '</div>';

      if(goster){
        var harf = String.fromCharCode(65 + sik.indexOf(q.a));
        var etiket = (given === undefined) ? "Cevap "+harf+"."
                   : (given === q.a ? "Doğru." : "Doğru cevap "+harf+".");
        h += '<div class="why"><b>'+etiket+'</b> '+esc(q.w)+'</div>';
      }
      h += '</div>';
    });
    box.innerHTML = h || '<p class="lede">Bu seçimde gösterilecek soru kalmadı.</p>';
    renderScore();
    renderQuizPills();
    renderQuizUnits();
    syncResetBtn();
  }
  function renderScore(){
    var list = cur().quiz[curQuiz] || [], right = 0, ans = 0;
    list.forEach(function(q,i){
      var g = st().cevap[wkeyFor(curQuiz, q)];
      if(g !== undefined){ ans++; if(g === q.a) right++; }
    });
    el("qScore").textContent = right+" / "+list.length;
    var lab;
    if(ans === 0) lab = "Başlamak için bir şıkka tıkla.";
    else if(ans < list.length) lab = ans+" soru cevaplandı, "+(list.length-ans)+" soru kaldı.";
    else if(right === list.length) lab = "Tamamı doğru. Bu ders sende.";
    else lab = "Bitti. Yanlışlarını hata defterine yaz — asıl çalışma o.";
    if(reveal && ans < list.length) lab = "Cevaplar gösteriliyor — bu tur puana sayılmaz. Gizlemek için üstteki düğmeye bas.";
    if(qFilter === "__yanlis__")
      lab = "Yanlış yaptıkların ve aynı ünitelerin havuzdaki yeni soruları. Puan ana test üzerinden sayılır.";
    else if(qFilter !== null)
      lab = "Yalnızca “"+qFilter+"” soruları gösteriliyor. Puan dersin tamamı üzerinden. " + lab;
    el("qLab").textContent = lab;
    if(ans === list.length && list.length){
      var prev = st().quiz[curQuiz];
      if(!prev || right > prev.best){
        st().quiz[curQuiz] = { best:right, total:list.length, at:new Date().toISOString() };
        persist(); renderProgress();
      }
    }
  }

  /* ---------- ilerleme ---------- */
  var AY = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
  function renderProgress(){
    var done = 0, quizzed = 0, qRight = 0, qTotal = 0;
    var total = countUnits(grade), Q = cur().quiz, SQ = st().quiz;
    cur().subj.forEach(function(s){ done += doneCount(s); });
    Object.keys(SQ).forEach(function(k){
      if(!Q[k]) return;
      quizzed++; qRight += SQ[k].best; qTotal += SQ[k].total;
    });
    el("progWho").textContent = cur().label + " · ilerleme diğer sınıftan ayrı tutulur";
    el("stats").innerHTML =
        '<div class="stat"><div class="v">'+done+'</div><div class="k">tamamlanan ünite</div></div>'
      + '<div class="stat"><div class="v">'+(total-done)+'</div><div class="k">kalan ünite</div></div>'
      + '<div class="stat"><div class="v">'+quizzed+' / '+Object.keys(Q).length+'</div><div class="k">bitirilen test</div></div>'
      + '<div class="stat"><div class="v">'+(qTotal ? "%"+Math.round(qRight/qTotal*100) : "—")+'</div><div class="k">test başarısı</div></div>';

    var h = "";
    cur().subj.forEach(function(s){
      var dc = doneCount(s), pct = Math.round(dc/s.units.length*100), q = SQ[s.key];
      h += '<div class="bar-row" style="--sc:'+s.color+'">'
        + '<div class="bar-top"><h4>'+esc(s.name)+'</h4><span class="n">'+dc+' / '+s.units.length+' · %'+pct+'</span></div>'
        + '<div class="track"><div class="fill" style="width:'+pct+'%"></div></div>';
      if(q){
        var d = new Date(q.at);
        var tarih = isNaN(d.getTime()) ? "" : " · "+d.getDate()+" "+AY[d.getMonth()];
        h += '<div class="bar-quiz">test: '+q.best+'/'+q.total+tarih+'</div>';
      } else if(Q[s.key]){
        h += '<div class="bar-quiz">test henüz çözülmedi</div>';
      }
      h += '</div>';
    });
    el("bars").innerHTML = h;
    renderZayif();
  }

  /* Yanlış yapılan sorulardan hangi ünitelerin zayıf olduğunu çıkarır.
     Bu liste, o ünitelere yeni soru yazılması gerektiğini gösterir. */
  function renderZayif(){
    var W = st().wrong, Q = cur().quiz, adet = {}, renk = {};
    Object.keys(Q).forEach(function(k){
      var s = subjByKey(k);
      if(!s) return;
      Q[k].forEach(function(q){
        if(!W[wkeyFor(k, q)]) return;
        var ad = s.name + " — " + q.u;
        adet[ad] = (adet[ad] || 0) + 1;
        renk[ad] = s.color;
      });
    });
    var sira = Object.keys(adet).sort(function(a,b){ return adet[b] - adet[a]; });
    var box = el("zayif");
    if(!sira.length){ box.innerHTML = ""; box.hidden = true; return; }
    box.hidden = false;
    var h = '<div class="zayif-box"><div class="nt">Tekrar gerektiren üniteler</div>'
          + '<p class="zayif-not">Yanlış yapılan soru sayısına göre sıralı. Testler sekmesinde '
          + '<b>Yanlışlarım</b> filtresiyle bunları tekrar çözebilirsin. Liste uzadıysa bana söyle, '
          + 'bu ünitelere yeni sorular eklerim.</p><ul class="zayif-list">';
    sira.forEach(function(ad){
      h += '<li><i style="background:'+renk[ad]+'"></i><span>'+esc(ad)+'</span><b>'+adet[ad]+' yanlış</b></li>';
    });
    el("zayif").innerHTML = h + '</ul></div>';
  }

  /* ---------- sınıf değiştir ---------- */
  function renderAll(){
    el("subLine").innerHTML = cur().sub;
    el("derslerLede").innerHTML = cur().lede;
    el("badgeU").textContent = countUnits(grade);
    el("badgeQ").textContent = countQ(grade);
    el("noteQ").textContent = countQ(grade);
    el("g6").setAttribute("aria-pressed", grade==="g6" ? "true" : "false");
    el("g7").setAttribute("aria-pressed", grade==="g7" ? "true" : "false");
    renderTimeline(); renderWeek(); renderNowStrip(); renderSubjects(); renderRing(); renderQuiz(); renderProgress();
  }
  function setGrade(g){
    if(grade === g) return;
    grade = g;
    curQuiz = "mat";
    reveal = false; qFilter = null;
    try{ localStorage.setItem(LS+"-grade", g); }catch(e){}
    renderAll();
    syncAnsBtn();
    window.scrollTo({top:0, behavior:"auto"});
  }
  el("g6").addEventListener("click", function(){ setGrade("g6"); });
  el("g7").addEventListener("click", function(){ setGrade("g7"); });

  /* ---------- sekmeler ---------- */
  var TABS = ["plan","dersler","testler","ilerleme"];
  function aktifSekme(){
    var r = "plan";
    TABS.forEach(function(k){ if(el("tab-"+k).getAttribute("aria-selected") === "true") r = k; });
    return r;
  }
  /* "Cevaplar" düğmesi sekmeye göre farklı iş yapar:
     Dersler → açık uçlu cevap anahtarlarını açar/kapatır
     Testler → çoktan seçmeli soruların doğru şıkkını gösterir (puana sayılmaz)
     Plan / İlerleme → gösterilecek cevap yok, düğme gizlenir */
  function syncAnsBtn(){
    var t = aktifSekme(), b = el("ansBtn");
    if(t === "dersler"){
      b.hidden = false;
      b.setAttribute("aria-pressed", ansOpen ? "true" : "false");
      b.textContent = ansOpen ? "Cevap anahtarını kapat" : "Cevap anahtarını aç";
    } else if(t === "testler"){
      b.hidden = false;
      b.setAttribute("aria-pressed", reveal ? "true" : "false");
      b.textContent = reveal ? "Cevapları gizle" : "Cevapları göster";
    } else {
      b.hidden = true;
    }
  }
  function switchTab(id){
    TABS.forEach(function(k){
      var t = el("tab-"+k), p = el("p-"+k);
      var on = k === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
      p.hidden = !on;
    });
    syncAnsBtn();
    try{ localStorage.setItem(LS+"-tab", id); }catch(e){}
  }
  TABS.forEach(function(k){ el("tab-"+k).addEventListener("click", function(){ switchTab(k); }); });

  /* ---------- olaylar ---------- */
  el("subjects").addEventListener("click", function(ev){
    var t = ev.target.closest("[data-tick]");
    if(t){
      var id = t.getAttribute("data-tick"), D = st().done;
      if(D[id]) delete D[id]; else D[id] = true;
      persist(); renderSubjects(); renderRing(); renderProgress();
      return;
    }
    var u = ev.target.closest("[data-unit]");
    if(u){
      var uid = u.getAttribute("data-unit");
      openUnit[grade][uid] = !openUnit[grade][uid];
      renderSubjects();
      return;
    }
    var s = ev.target.closest("[data-subj]");
    if(s){
      var sk = s.getAttribute("data-subj");
      openSubj[grade][sk] = !openSubj[grade][sk];
      renderSubjects();
    }
  });

  el("quizPills").addEventListener("click", function(ev){
    var p = ev.target.closest("[data-quiz]");
    if(!p) return;
    curQuiz = p.getAttribute("data-quiz");
    reveal = false; qFilter = null;
    renderQuiz(); syncAnsBtn();
  });

  el("quizUnits").addEventListener("click", function(ev){
    var b = ev.target.closest("[data-uf]");
    if(!b) return;
    var v = b.getAttribute("data-uf");
    qFilter = (v === "" || v === qFilter) ? null : v;
    renderQuiz();
    el("qlist").scrollIntoView({block:"start", behavior:"auto"});
  });

  el("qlist").addEventListener("click", function(ev){
    var b = ev.target.closest("[data-ans]");
    if(!b || b.disabled) return;
    var parts = b.getAttribute("data-ans").split("-");
    var id = parts[0], sec = parseInt(parts[1],10);
    var q = (id.charAt(0) === "h")
          ? hav()[parseInt(id.slice(1),10)]
          : anaListe()[parseInt(id,10)];
    if(!q) return;
    var k = wkey(q);
    if(st().cevap[k] !== undefined) return;
    st().cevap[k] = sec;                       // verdiği cevap kalıcı kaydedilir
    /* hata defteri: yanlışsa kaydet, doğruysa listeden çıkar */
    if(sec === q.a) delete st().wrong[k]; else st().wrong[k] = true;
    persist();
    renderQuiz();
    renderProgress();
  });

  /* İzlenen video kaydı — hangi ders, hangi ünite, hangi video */
  el("subjects").addEventListener("click", function(ev){
    var a = ev.target.closest('a[href*="youtube.com"]');
    if(!a) return;
    var kart = a.closest(".subj");
    var unite = a.closest(".unit");
    var sk = kart ? kart.querySelector("[data-subj]").getAttribute("data-subj") : "";
    var ad = unite ? unite.querySelector(".unit-name").textContent : "(ders geneli)";
    var url = a.getAttribute("href");
    var v = st().video[url] || { s:sk, u:ad, t:(a.querySelector(".vt") || {}).textContent || "", n:0 };
    v.n++; v.son = new Date().toISOString();
    st().video[url] = v;
    persist();
  });

  /* Sıfırlama YALNIZCA ekranda görünen soruları kapsar ve düğme kaç
     soru sileceğini yazar. Eskiden filtre açıkken bile dersin tamamını
     siliyordu; bu yanlış anlaşılıyordu. */
  function syncResetBtn(){
    var b = el("qReset");
    if(!b) return;
    var n = gosterilecek().length;
    if(qFilter === "__yanlis__") b.textContent = "Bu " + n + " soruyu sıfırla";
    else if(qFilter !== null)    b.textContent = "Bu ünitenin " + n + " sorusunu sıfırla";
    else                         b.textContent = "Bu dersin " + n + " sorusunu sıfırla";
  }

  el("qReset").addEventListener("click", function(){
    var C = st().cevap;
    gosterilecek().forEach(function(it){ delete C[wkeyFor(curQuiz, it.q)]; });
    reveal = false;
    seeds[grade+"-"+curQuiz] = Math.floor(Math.random()*1e9);  // yeni karışım
    persist();
    renderQuiz(); syncAnsBtn(); renderProgress();
  });

  el("resetAll").addEventListener("click", function(){
    if(!window.confirm(cur().label+" için işaretlenen tüm üniteler ve test sonuçları silinecek. Diğer sınıf etkilenmez. Emin misin?")) return;
    state[grade] = {done:{}, quiz:{}, wrong:{}, cevap:{}, video:{}};
    persist(); renderSubjects(); renderRing(); renderProgress(); renderQuiz();
  });

  el("ansBtn").addEventListener("click", function(){
    var t = aktifSekme();
    if(t === "dersler"){
      ansOpen = !ansOpen;
      Array.prototype.forEach.call(document.querySelectorAll("details.ans"), function(d){ d.open = ansOpen; });
      try{ localStorage.setItem(LS+"-ans", ansOpen ? "1" : "0"); }catch(e){}
    } else if(t === "testler"){
      reveal = !reveal;
      renderQuiz();
    }
    syncAnsBtn();
  });

  el("printBtn").addEventListener("click", function(){
    switchTab("dersler");
    cur().subj.forEach(function(s){
      openSubj[grade][s.key] = true;
      s.units.forEach(function(u){ openUnit[grade][uid(s.key, u)] = true; });
    });
    renderSubjects();
    setTimeout(function(){ try{ window.print(); }catch(e){} }, 120);
  });

  /* ---------- açılış ---------- */
  readLocal();
  try{
    var g = localStorage.getItem(LS+"-grade");
    if(g === "g6" || g === "g7") grade = g;
    ansOpen = localStorage.getItem(LS+"-ans") === "1";
  }catch(e){}
  openSubj[grade].mat = true;
  renderAll();
  try{
    var last = localStorage.getItem(LS+"-tab");
    if(last && el("tab-"+last)) switchTab(last);
  }catch(e){}
  syncAnsBtn();
  initStore();
