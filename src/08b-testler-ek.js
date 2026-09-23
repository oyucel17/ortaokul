  /* ===================== EK SORULAR =====================
     Ay ay büyüyen soru havuzu. Her parti kendi başlığı altında durur;
     dizinin sonuna eklemek güvenlidir ("yanlışlarım" kayıtları soru
     metninden türeyen kimliğe bağlı, indise değil).
     u alanı Dersler sekmesindeki ünite başlığıyla BİREBİR aynı olmalı. */

  /* ---------- 2026 Eylül–Ekim partisi ---------- */

  var EK6 = {
    mat:[
      {u:"TEMA 1 · Çarpanlar, Katlar, Asal Sayılar", q:"18 sayısının kaç tane pozitif böleni vardır?", o:["4","5","6","9"], a:2,
       w:"1, 2, 3, 6, 9, 18 → 6 tane böleni vardır."},
      {u:"TEMA 1 · Çarpanlar, Katlar, Asal Sayılar", q:"Aşağıdakilerden hangisi asal sayı DEĞİLDİR?", o:["2","9","11","17"], a:1,
       w:"9 sayısı 3'e de bölündüğü için asal değildir; asal sayının yalnızca 1 ve kendisi böleni olur."},
      {u:"TEMA 1 · Çarpanlar, Katlar, Asal Sayılar", q:"Bir sayının 6 ile kalansız bölünebilmesi için hangi şart gerekir?", o:["Son rakamı 6 olmalı","Hem 2 hem 3 ile bölünmeli","Rakamları toplamı 6 olmalı","Son iki basamağı 6'nın katı olmalı"], a:1,
       w:"6 = 2 · 3 olduğu için sayının hem 2 hem de 3 ile bölünmesi gerekir."},
      {u:"TEMA 1 · Çarpanlar, Katlar, Asal Sayılar", q:"15 ve 20 sayılarının EKOK'u kaçtır?", o:["5","30","60","300"], a:2,
       w:"15 = 3·5, 20 = 2²·5. EKOK = 2²·3·5 = 60."},
      {u:"TEMA 1 · Çarpanlar, Katlar, Asal Sayılar", q:"Bir sınıftaki 24 kız ve 36 erkek, cinsiyetleri karışmadan eşit ve en kalabalık gruplara ayrılacak. Kaç grup oluşur?", o:["5","6","10","12"], a:0,
       w:"EBOB(24, 36) = 12 → her grupta 12 kişi. 24÷12 = 2, 36÷12 = 3 → toplam 5 grup."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"Bir veri grubunda en çok tekrar eden değere ne ad verilir?", o:["Ortanca","Tepe değer","Açıklık","Ortalama"], a:1,
       w:"En çok tekrar eden değer tepe değerdir (mod)."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"3, 7, 7, 10, 13 verilerinin aritmetik ortalaması kaçtır?", o:["7","8","9","10"], a:1,
       w:"(3+7+7+10+13) ÷ 5 = 40 ÷ 5 = 8."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"Zamanla değişimi göstermek için en uygun grafik türü hangisidir?", o:["Daire grafiği","Sütun grafiği","Çizgi grafiği","Sıklık tablosu"], a:2,
       w:"Çizgi grafiği bir büyüklüğün zaman içindeki değişimini gösterir."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"120 kişiyle yapılan bir ankette bir dilimin merkez açısı 60°'dir. Bu dilim kaç kişiyi gösterir?", o:["15","20","30","60"], a:1,
       w:"(60 ÷ 360) · 120 = 20 kişi."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"Aşağıdakilerden hangisi iyi bir araştırma sorusudur?", o:["Basketbol güzel mi?","Sınıfımızda en çok sevilen spor hangisi?","Matematik zor mudur?","Kitap okumak iyi midir?"], a:1,
       w:"İyi araştırma sorusunun verisi toplanabilir ve tek bir kişisel cevabı yoktur."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"4, 9, 12, 20 verilerinin açıklığı kaçtır?", o:["8","11","16","20"], a:2,
       w:"Açıklık = en büyük − en küçük = 20 − 4 = 16."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"Bir veri grubuna çok büyük bir değer eklenirse hangisi en çok etkilenir?", o:["Ortanca","Tepe değer","Aritmetik ortalama","Veri sayısı"], a:2,
       w:"Uç değerler ortalamayı belirgin biçimde kaydırır; ortanca ve tepe değer daha az etkilenir."}
    ],
    fen:[
      {u:"ÜNİTE 1 · Güneş Sistemi ve Tutulmalar", q:"Mars'ın kırmızı görünmesinin sebebi nedir?", o:["Yüzeyindeki demir oksit","Atmosferindeki metan","Yüzey sıcaklığı","Güneş'e yakınlığı"], a:0,
       w:"Yüzeyindeki demir oksit (pas) Mars'a kızıl rengini verir."},
      {u:"ÜNİTE 1 · Güneş Sistemi ve Tutulmalar", q:"Ay tutulması hangi evrede gerçekleşir?", o:["Yeni Ay","İlk Dördün","Dolunay","Son Dördün"], a:2,
       w:"Ay tutulmasında Dünya, Güneş ile Ay'ın arasına girer; bu Dolunay evresinde olur."},
      {u:"ÜNİTE 1 · Güneş Sistemi ve Tutulmalar", q:"Halkalarıyla tanınan gezegen hangisidir?", o:["Jüpiter","Satürn","Uranüs","Neptün"], a:1,
       w:"Dört dev gezegenin de halkası vardır ama en belirgin ve bilinen halkalar Satürn'ündür."},
      {u:"ÜNİTE 2 · Kuvvetin Etkisinde Hareket", q:"Kuvvetin birimi ve ölçme aracı hangisidir?", o:["Newton – dinamometre","Kilogram – terazi","Joule – termometre","Newton – terazi"], a:0,
       w:"Kuvvet newton (N) ile ifade edilir ve dinamometre ile ölçülür."},
      {u:"ÜNİTE 2 · Kuvvetin Etkisinde Hareket", q:"Bir cisme aynı yönde 12 N ve 18 N'luk kuvvetler uygulanırsa bileşke kuvvet kaç N olur?", o:["6","15","30","216"], a:2,
       w:"Aynı yönlü kuvvetler toplanır: 12 + 18 = 30 N."},
      {u:"ÜNİTE 2 · Kuvvetin Etkisinde Hareket", q:"Bileşke kuvveti sıfır olan hareketli bir cisim ne yapar?", o:["Hemen durur","Yavaşlar","Sabit süratle doğrusal hareketine devam eder","Yön değiştirir"], a:2,
       w:"Kuvvetler dengelenmişse cismin sürati ve yönü değişmez."},
      {u:"ÜNİTE 2 · Kuvvetin Etkisinde Hareket", q:"90 km yolu 1,5 saatte alan aracın sürati kaç km/h'dir?", o:["45","60","90","135"], a:1,
       w:"Sürat = yol ÷ süre = 90 ÷ 1,5 = 60 km/h."},
      {u:"ÜNİTE 2 · Kuvvetin Etkisinde Hareket", q:"15 m/s süratle giden bir cisim 8 saniyede kaç metre yol alır?", o:["23","60","120","1,875"], a:2,
       w:"Yol = sürat × süre = 15 × 8 = 120 m."},
      {u:"ÜNİTE 2 · Kuvvetin Etkisinde Hareket", q:"Kütlesi 60 kg olan bir kişinin Ay'a gittiğinde kütlesi ve ağırlığı nasıl değişir?", o:["İkisi de değişmez","Kütle değişmez, ağırlık azalır","Kütle azalır, ağırlık değişmez","İkisi de azalır"], a:1,
       w:"Kütle madde miktarıdır, yere bağlı değişmez. Ağırlık yer çekimi kuvvetidir; Ay'da yer çekimi az olduğu için azalır."}
    ],
    tur:[
      {u:"KONU 1 · Sözcükte Anlam", q:"\"Bu kumaşın rengi çok soluk.\" cümlesinde \"soluk\" hangi anlamdadır?", o:["Gerçek anlam","Yan anlam","Mecaz anlam","Terim anlam"], a:0,
       w:"Rengin açıklığını doğrudan anlatıyor; akla ilk gelen anlamdır."},
      {u:"KONU 1 · Sözcükte Anlam", q:"\"Şişenin ağzı kırılmış.\" cümlesinde \"ağız\" hangi anlamdadır?", o:["Gerçek anlam","Yan anlam","Mecaz anlam","Terim anlam"], a:1,
       w:"İnsan ağzına biçimce benzediği için şişenin açık kısmına da ağız denmiş — yan anlam."},
      {u:"KONU 1 · Sözcükte Anlam", q:"\"Üçgenin kenarlarını ölçtük.\" cümlesinde \"kenar\" hangi anlamdadır?", o:["Gerçek anlam","Yan anlam","Mecaz anlam","Terim anlam"], a:3,
       w:"Geometriye ait özel bir kavram olduğu için terim anlamdır."},
      {u:"KONU 1 · Sözcükte Anlam", q:"\"Kara\" sözcüğünün eş anlamlısı hangisidir?", o:["Beyaz","Siyah","Koyu","Toprak"], a:1,
       w:"Kara ile siyah aynı anlama gelir. \"Beyaz\" zıt anlamlısıdır."},
      {u:"KONU 1 · Sözcükte Anlam", q:"Aşağıdaki sözcüklerden hangisi soyut isimdir?", o:["Taş","Deniz","Sevgi","Kalem"], a:2,
       w:"Sevgi duyu organlarıyla algılanamaz, soyuttur."},
      {u:"KONU 1 · Sözcükte Anlam", q:"\"Yüz\" sözcüğü aşağıdaki cümlelerin hangisinde sayı anlamında kullanılmıştır?", o:["Yüzünü yıkadı.","Havuzda yüz.","Sınavdan yüz aldı.","Yüzü asıktı."], a:2,
       w:"\"Yüz aldı\" ifadesinde 100 puanı anlatır — eş sesli sözcüğün sayı anlamı."},
      {u:"KONU 1 · Sözcükte Anlam", q:"\"Acı\" sözcüğü hangi cümlede mecaz anlamda kullanılmıştır?", o:["Biber çok acıydı.","Acı bir haber aldık.","Acı çay içti.","Acı sos ekledi."], a:1,
       w:"Tat anlamından tamamen uzaklaşıp \"üzücü\" anlamı kazanmıştır."},
      {u:"KONU 2 · Deyimler, Atasözleri ve Söz Sanatları", q:"\"Damlaya damlaya göl olur.\" ifadesi nedir?", o:["Deyim","Atasözü","Benzetme","Abartma"], a:1,
       w:"Genel bir doğruyu öğüt olarak veriyor ve tek başına yargı bildiriyor — atasözü."},
      {u:"KONU 2 · Deyimler, Atasözleri ve Söz Sanatları", q:"\"Pabucu dama atılmak\" deyiminin anlamı nedir?", o:["Evden kovulmak","Değerini yitirmek","Çok yorulmak","Yolculuğa çıkmak"], a:1,
       w:"Birinin yerine daha iyisi gelince eski değerini kaybetmek anlamındadır."},
      {u:"KONU 2 · Deyimler, Atasözleri ve Söz Sanatları", q:"\"Karınca, tilkiye dönüp 'Ben çalışkanım' dedi.\" cümlesinde hangi söz sanatları birlikte bulunur?", o:["Yalnız benzetme","Yalnız abartma","Kişileştirme ve konuşturma","Yalnız kişileştirme"], a:2,
       w:"Hayvan konuşturulduğu için konuşturma, bunun için önce insan özelliği verildiğinden kişileştirme de vardır."},
      {u:"KONU 2 · Deyimler, Atasözleri ve Söz Sanatları", q:"\"Sesi dağları inletti.\" cümlesindeki söz sanatı hangisidir?", o:["Benzetme","Abartma","Kişileştirme","Konuşturma"], a:1,
       w:"Olayı olduğundan çok büyük göstermek abartmadır."},
      {u:"KONU 2 · Deyimler, Atasözleri ve Söz Sanatları", q:"Deyim ile atasözünü ayırmanın en pratik yolu nedir?", o:["Uzunluğuna bakmak","Öğüt verip vermediğine bakmak","Kaç sözcük olduğuna bakmak","Kim söylediğine bakmak"], a:1,
       w:"Öğüt ya da genel bir doğru varsa atasözüdür; deyim yalnızca durumu çarpıcı anlatır."},
      {u:"KONU 2 · Deyimler, Atasözleri ve Söz Sanatları", q:"\"Yüzü kağıt gibi beyazdı.\" cümlesinde hangi söz sanatı vardır?", o:["Benzetme","Kişileştirme","Konuşturma","Abartma"], a:0,
       w:"Yüz, beyazlığı yönüyle kâğıda benzetilmiştir — benzetme."}
    ],
    sos:[
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Aynı kişinin farklı gruplarda üstlendiği görevlere ne ad verilir?", o:["Sosyal rol","Sosyal sınıf","Toplumsal kural","Kültürel miras"], a:0,
       w:"Bir kişi aynı anda öğrenci, evlat, kardeş, komşu rollerini taşıyabilir."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Aşağıdakilerden hangisi millî ve kültürel değerlerimizden biri DEĞİLDİR?", o:["İstiklal Marşı","Bayrak","Bayramlar","Bireysel banka hesabı"], a:3,
       w:"Millî ve kültürel değerler toplumun ortak değerleridir; kişisel mülkiyet bu gruba girmez."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Toplumsal sorun ne demektir?", o:["Tek bir kişinin sorunu","Toplumun çoğunu etkileyen, çözümü ortak çaba gerektiren sorun","Yalnızca devletin çözebileceği sorun","Kısa sürede kendiliğinden biten sorun"], a:1,
       w:"Trafik, çevre kirliliği, israf gibi sorunlar toplumun büyük kısmını etkiler."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Sosyal rollerin zamanla değiştiğine örnek hangisidir?", o:["Bir öğrencinin yıllar sonra öğretmen olması","Bir kişinin adının değişmesi","Bir okulun yenilenmesi","Bir şehrin büyümesi"], a:0,
       w:"Roller yaşam boyunca değişir; bugünün öğrencisi yarının öğretmeni olabilir."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Hak ve sorumluluk ilişkisini en iyi anlatan ifade hangisidir?", o:["Herkesin hakkı sınırsızdır","Hakkın bittiği yer başkasının hakkının başladığı yerdir","Sorumluluk yalnızca yetişkinlere aittir","Hak ile sorumluluk birbirinden bağımsızdır"], a:1,
       w:"Her hakkın yanında onu koruyan bir sorumluluk vardır."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Çocuk Hakları Sözleşmesi'ni kabul eden kuruluş hangisidir?", o:["NATO","Birleşmiş Milletler","Avrupa Birliği","UNESCO"], a:1,
       w:"1989'da Birleşmiş Milletler tarafından kabul edilmiştir."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Türkiye'nin en yüksek noktası hangisidir?", o:["Erciyes Dağı","Ağrı Dağı","Uludağ","Kaçkar Dağı"], a:1,
       w:"Ağrı Dağı 5137 metre ile Türkiye'nin en yüksek noktasıdır."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Aşağıdakilerden hangisi beşerî çevre unsurudur?", o:["Akarsu","Dağ","Baraj","İklim"], a:2,
       w:"Beşerî çevre insan eliyle oluşan her şeydir: baraj, yol, fabrika."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Yazları sıcak ve kurak, kışları ılık ve yağışlı geçen iklim hangisidir?", o:["Akdeniz iklimi","Karadeniz iklimi","Karasal iklim","Çöl iklimi"], a:0,
       w:"Akdeniz ikliminin ayırt edici özelliği kurak yaz, ılık ve yağışlı kıştır."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Türk dünyasında kültür ve sanat iş birliğini yürüten kuruluş hangisidir?", o:["TİKA","TÜRKSOY","Yunus Emre Enstitüsü","TSE"], a:1,
       w:"TÜRKSOY, Türk dünyasının ortak kültür ve sanat çalışmalarını yürütür."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Kaç kıta ve kaç okyanus vardır?", o:["5 kıta, 4 okyanus","6 kıta, 5 okyanus","7 kıta, 5 okyanus","7 kıta, 3 okyanus"], a:2,
       w:"Yedi kıta (Asya, Afrika, Kuzey ve Güney Amerika, Antarktika, Avrupa, Okyanusya) ve beş okyanus vardır."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Türkiye'nin orta kuşakta yer almasının en belirgin sonucu nedir?", o:["Hiç kar yağmaması","Dört mevsimin belirgin yaşanması","Sürekli sıcak olması","Kutup gecelerinin görülmesi"], a:1,
       w:"Orta kuşak, dört mevsimin belirgin biçimde yaşandığı kuşaktır."}
    ],
    din:[
      {u:"ÜNİTE 1 · Peygamber ve İlahi Kitap İnancı", q:"Hz. Davud'a indirilen ilahi kitap hangisidir?", o:["Tevrat","Zebur","İncil","Kur'an"], a:1,
       w:"Zebur Hz. Davud'a indirilmiştir."},
      {u:"ÜNİTE 1 · Peygamber ve İlahi Kitap İnancı", q:"\"Sıdk\" sıfatı ne anlama gelir?", o:["Güvenilir olmak","Doğru sözlü olmak","Akıllı olmak","Mesajı iletmek"], a:1,
       w:"Sıdk, peygamberin her zaman doğruyu söylemesidir."},
      {u:"ÜNİTE 1 · Peygamber ve İlahi Kitap İnancı", q:"Suhuf ne demektir?", o:["Dört büyük kitaptan biri","Bazı peygamberlere verilen küçük sayfalar","Peygamberlerin sözleri","Meleklerin görevleri"], a:1,
       w:"Suhuf, Hz. Âdem, Hz. Şit, Hz. İdris ve Hz. İbrahim'e verilen küçük sayfalardır."},
      {u:"ÜNİTE 1 · Peygamber ve İlahi Kitap İnancı", q:"Kur'an-ı Kerim'i diğer ilahi kitaplardan ayıran en önemli özellik nedir?", o:["En uzun olması","Değiştirilmeden korunmuş olması","Arapça olması","Son indirilmiş olması"], a:1,
       w:"Kur'an indirildiği günden beri hiç değiştirilmeden korunmuştur."},
      {u:"ÜNİTE 1 · Peygamber ve İlahi Kitap İnancı", q:"Aşağıdakilerden hangisi ulu'l-azm peygamberlerden biri DEĞİLDİR?", o:["Hz. Nuh","Hz. İbrahim","Hz. Yusuf","Hz. Musa"], a:2,
       w:"Ulu'l-azm peygamberler Hz. Nuh, Hz. İbrahim, Hz. Musa, Hz. İsa ve Hz. Muhammed'dir."},
      {u:"ÜNİTE 1 · Peygamber ve İlahi Kitap İnancı", q:"\"İsmet\" sıfatı peygamberlerin hangi özelliğini anlatır?", o:["Günah işlememeleri","Akıllı olmaları","Güvenilir olmaları","Doğru sözlü olmaları"], a:0,
       w:"İsmet, peygamberlerin günah işlemekten korunmuş olmasıdır."}
    ],
    ing:[
      {u:"TEMA 2 · Classroom Life & Learning", q:"____ there any posters on the wall?", o:["Is","Are","Have","Do"], a:1,
       w:"\"Posters\" çoğul olduğu için \"Are there…?\" kullanılır."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"\"Kalemtıraş\" sözcüğünün İngilizcesi hangisidir?", o:["ruler","rubber","pencil sharpener","glue"], a:2,
       w:"Pencil sharpener kalemtıraştır; ruler cetvel, rubber silgi, glue yapıştırıcıdır."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"Hangi cümle doğru bir emir cümlesidir?", o:["You open the door.","To open the door.","Open the door.","Opening the door."], a:2,
       w:"Emir cümlesi özne almaz, fiil yalın hâlde başa gelir."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"Öğretmeninden içeri girmek için izin isterken hangisini kullanırsın?", o:["I come in.","May I come in?","I am coming in.","Come in."], a:1,
       w:"İzin istemek için \"May I…?\" ya da \"Can I…?\" kullanılır."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"There ____ a map and two posters in our classroom.", o:["is","are","have","has"], a:0,
       w:"\"There is/are\" kendinden hemen sonraki isme uyar; burada tekil \"a map\" geliyor."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"\"Anlamadım\" demek için en uygun cümle hangisidir?", o:["I don't understand.","I don't listen.","I am not understand.","I understand not."], a:0,
       w:"Present simple olumsuzu: I don't understand."},
      {u:"TEMA 1 · School Life & Education", q:"School starts ____ half past eight.", o:["in","on","at","to"], a:2,
       w:"Saatlerden önce \"at\" kullanılır."},
      {u:"TEMA 1 · School Life & Education", q:"\"Fen Bilimleri\" dersinin İngilizcesi hangisidir?", o:["Social Studies","Science","Art","IT"], a:1,
       w:"Science fen bilimleri, Social Studies sosyal bilgilerdir."},
      {u:"TEMA 1 · School Life & Education", q:"My birthday is ____ 23rd April.", o:["in","on","at","by"], a:1,
       w:"Belirli bir gün ya da tarih söylenirken \"on\" kullanılır."},
      {u:"TEMA 1 · School Life & Education", q:"We have Art ____ the afternoon.", o:["at","on","in","to"], a:2,
       w:"Günün bölümlerinde \"in\" kullanılır: in the morning / afternoon / evening."},
      {u:"TEMA 1 · School Life & Education", q:"\"Ders programı\" sözcüğünün İngilizcesi hangisidir?", o:["notebook","timetable","classroom","homework"], a:1,
       w:"Timetable ders programıdır."},
      {u:"TEMA 1 · School Life & Education", q:"How many lessons ____ you have on Monday?", o:["do","does","are","is"], a:0,
       w:"\"You\" ile present simple soruda \"do\" kullanılır."},
      {u:"TEMA 1 · School Life & Education", q:"Which one is the odd (farklı) word?", o:["Maths","Science","Tuesday","Music"], a:2,
       w:"Diğerleri ders adı, Tuesday bir gün adıdır."}
    ]
  };

  var EK7 = {
    mat:[
      {u:"TEMA 1 · Sayılar ve Nicelikler (1)", q:"Aşağıdaki sayılardan hangisi rasyonel sayı DEĞİLDİR?", o:["−5","0,25","3/4","π"], a:3,
       w:"π sayısı iki tam sayının oranı olarak yazılamaz, bu yüzden rasyonel değildir."},
      {u:"TEMA 1 · Sayılar ve Nicelikler (1)", q:"|−12| − |5| işleminin sonucu kaçtır?", o:["−17","−7","7","17"], a:2,
       w:"Mutlak değerler alınır: 12 − 5 = 7."},
      {u:"TEMA 1 · Sayılar ve Nicelikler (1)", q:"(−2/5) + (3/10) işleminin sonucu kaçtır?", o:["−1/10","1/10","−1/5","1/5"], a:0,
       w:"Payda 10 yapılır: −4/10 + 3/10 = −1/10."},
      {u:"TEMA 1 · Sayılar ve Nicelikler (1)", q:"0,25 sayısının kesir gösterimi en sade hâliyle hangisidir?", o:["25/10","1/4","2/5","1/25"], a:1,
       w:"0,25 = 25/100 = 1/4."},
      {u:"TEMA 1 · Sayılar ve Nicelikler (1)", q:"−3/8, −1/2 ve −5/8 sayıları küçükten büyüğe nasıl sıralanır?", o:["−3/8, −1/2, −5/8","−5/8, −1/2, −3/8","−1/2, −3/8, −5/8","−5/8, −3/8, −1/2"], a:1,
       w:"Payda 8: −3/8, −4/8, −5/8. Negatifte mutlak değeri büyük olan küçüktür → −5/8 < −1/2 < −3/8."},
      {u:"TEMA 2 · Sayılar ve Nicelikler (2)", q:"Bir ürünün fiyatı 250 TL'den 300 TL'ye çıkmıştır. Yüzde kaç zam yapılmıştır?", o:["%15","%20","%25","%50"], a:1,
       w:"Artış 50 TL. 50 ÷ 250 = 0,20 → %20."},
      {u:"TEMA 2 · Sayılar ve Nicelikler (2)", q:"Bir işi 8 işçi 15 günde bitiriyorsa, aynı işi 12 işçi kaç günde bitirir?", o:["8","10","12","22,5"], a:1,
       w:"Ters orantı: 8 × 15 = 12 × g → g = 10 gün."},
      {u:"TEMA 2 · Sayılar ve Nicelikler (2)", q:"Bir sınıfta kızların erkeklere oranı 2/3'tür. Sınıf 30 kişilikse kaç erkek vardır?", o:["12","15","18","20"], a:2,
       w:"2 + 3 = 5 pay. 30 ÷ 5 = 6 → erkek = 3 × 6 = 18."},
      {u:"TEMA 2 · Sayılar ve Nicelikler (2)", q:"Maliyeti 800 TL olan bir ürün %25 zararla satılırsa satış fiyatı kaç TL olur?", o:["575","600","640","1000"], a:1,
       w:"800 × 0,75 = 600 TL."},
      {u:"TEMA 2 · Sayılar ve Nicelikler (2)", q:"Bir haritada 1/500 000 ölçek kullanılıyor. Haritada 4 cm ile gösterilen yol gerçekte kaç km'dir?", o:["2","20","200","2000"], a:1,
       w:"4 × 500 000 = 2 000 000 cm = 20 km."},
      {u:"TEMA 2 · Sayılar ve Nicelikler (2)", q:"Aşağıdakilerden hangisi ters orantılı iki çokluğa örnektir?", o:["İşçi sayısı – üretilen mal","Hız – aynı yolu alma süresi","Kumaş uzunluğu – fiyatı","Kitap sayısı – toplam ağırlık"], a:1,
       w:"Hız arttıkça aynı yolu alma süresi azalır; çarpımları sabittir."}
    ],
    fen:[
      {u:"ÜNİTE 1 · Uzay Çağı", q:"Gök taşının atmosfere girip sürtünmeyle yanmasına ne ad verilir?", o:["Asteroit","Meteor","Kuyruklu yıldız","Cüce gezegen"], a:1,
       w:"Yanan gök taşına meteor, yere ulaşana meteorit denir."},
      {u:"ÜNİTE 1 · Uzay Çağı", q:"Buz ve tozdan oluşan, Güneş'e yaklaştıkça kuyruk oluşturan gök cismi hangisidir?", o:["Asteroit","Uydu","Kuyruklu yıldız","Cüce gezegen"], a:2,
       w:"Kuyruklu yıldızlar Güneş'e yaklaşınca buzları buharlaşır ve kuyruk oluşur."},
      {u:"ÜNİTE 1 · Uzay Çağı", q:"Uzay sondası ile teleskop arasındaki temel fark nedir?", o:["Teleskop gider, sonda gözler","Sonda gök cismine gider, teleskop uzaktan gözler","İkisi de aynı işi yapar","Sonda yalnızca Dünya'yı inceler"], a:1,
       w:"Teleskop uzaktan gözlem yapar; uzay sondası gök cismine giderek yerinde ölçüm alır."},
      {u:"ÜNİTE 1 · Uzay Çağı", q:"Uzay kirliliği neden bir sorundur?", o:["Havayı kirletir","Yörüngedeki parçalar çalışan uydulara çarpabilir","Güneş ışığını engeller","Gezegenlerin yörüngesini bozar"], a:1,
       w:"Görevi biten uydu ve roket parçaları çok yüksek hızla döner, çarpışma riski oluşturur."},
      {u:"ÜNİTE 1 · Uzay Çağı", q:"Aşağıdakilerden hangisi uzay teknolojilerinin günlük hayata katkısıdır?", o:["GPS ile konum bulma","Rüzgâr enerjisi üretimi","Toprak verimliliği","Deprem önleme"], a:0,
       w:"GPS, uydu haberleşmesi ve hava tahmini uzay teknolojilerinin doğrudan ürünleridir."},
      {u:"ÜNİTE 1 · Uzay Çağı", q:"Bir yıldız Dünya'dan 8 ışık yılı uzaklıktaysa bu ne anlama gelir?", o:["Oraya 8 yılda gidilir","Oradan gelen ışık bize 8 yılda ulaşır","Yıldız 8 yaşındadır","Yıldız 8 yıl sonra sönecek"], a:1,
       w:"Işık yılı bir uzaklık birimidir; ışığın o mesafeyi 8 yılda aldığını gösterir."},
      {u:"ÜNİTE 2 · Kuvvet ve Enerjiyi Keşfedelim", q:"İşin birimi hangisidir?", o:["Newton","Joule","Watt","Kilogram"], a:1,
       w:"İş = Kuvvet × Yol; birimi joule (J)'dür. 1 J = 1 N × 1 m."},
      {u:"ÜNİTE 2 · Kuvvet ve Enerjiyi Keşfedelim", q:"Bir cismin potansiyel enerjisi hangi büyüklüklere bağlıdır?", o:["Kütle ve hız","Kütle ve yükseklik","Hız ve yükseklik","Yalnızca hız"], a:1,
       w:"Çekim potansiyel enerjisi cismin kütlesine ve bulunduğu yüksekliğe bağlıdır."},
      {u:"ÜNİTE 2 · Kuvvet ve Enerjiyi Keşfedelim", q:"25 N'luk kuvvetle bir cisim kuvvet yönünde 8 m çekilirse yapılan iş kaç joule'dür?", o:["3,125","33","200","2000"], a:2,
       w:"İş = 25 × 8 = 200 J."},
      {u:"ÜNİTE 2 · Kuvvet ve Enerjiyi Keşfedelim", q:"Bir kişi çantayı elinde tutarak yatay bir koridorda yürüyor. Çantaya uygulanan kuvvetin yaptığı iş kaçtır?", o:["Sıfır","Çantanın ağırlığı kadar","Yol kadar","Hesaplanamaz"], a:0,
       w:"Kuvvet yukarı yönlü, hareket yatay. Kuvvet doğrultusunda yol alınmadığı için iş sıfırdır."},
      {u:"ÜNİTE 2 · Kuvvet ve Enerjiyi Keşfedelim", q:"Barajda biriken suyun elektrik üretimindeki enerji dönüşümü sırası hangisidir?", o:["Kinetik → potansiyel → elektrik","Potansiyel → kinetik → elektrik","Isı → kinetik → elektrik","Elektrik → kinetik → potansiyel"], a:1,
       w:"Yüksekteki suyun potansiyel enerjisi düşerken kinetik enerjiye, türbinde elektrik enerjisine dönüşür."},
      {u:"ÜNİTE 2 · Kuvvet ve Enerjiyi Keşfedelim", q:"Kütlesi 8 kg olan cismin Dünya'daki ağırlığı kaç N'dur? (g = 10 N/kg)", o:["0,8","8","80","800"], a:2,
       w:"Ağırlık = kütle × yer çekimi ivmesi = 8 × 10 = 80 N."}
    ],
    tur:[
      {u:"TEMA 1 · Hayat Boyu Gelişim", q:"\"Gelecek hafta sınav olacağız.\" cümlesindeki fiilin kipi hangisidir?", o:["Geniş zaman","Şimdiki zaman","Gelecek zaman","Gereklilik"], a:2,
       w:"-acak / -ecek eki gelecek zaman kipidir."},
      {u:"TEMA 1 · Hayat Boyu Gelişim", q:"\"Her sabah erken kalkarım.\" cümlesindeki kip hangisidir?", o:["Geniş zaman","Şimdiki zaman","Görülen geçmiş","İstek"], a:0,
       w:"-r / -ar / -er eki geniş zaman kipidir; alışkanlık bildirir."},
      {u:"TEMA 1 · Hayat Boyu Gelişim", q:"Aşağıdakilerden hangisi dilek kipidir?", o:["Geniş zaman","Duyulan geçmiş zaman","Şart kipi","Şimdiki zaman"], a:2,
       w:"Dilek kipleri gereklilik, istek, şart ve emirdir; diğerleri haber kipidir."},
      {u:"TEMA 1 · Hayat Boyu Gelişim", q:"\"Gelsin\" fiilinin kipi ve kişisi hangisidir?", o:["İstek, 3. tekil","Emir, 3. tekil","Şart, 3. tekil","Gereklilik, 3. tekil"], a:1,
       w:"Emir kipinin 3. tekil çekimidir."},
      {u:"TEMA 1 · Hayat Boyu Gelişim", q:"Hangi cümlede duyulan geçmiş zaman kullanılmıştır?", o:["Ödevini yaptı.","Ödevini yapmış.","Ödevini yapıyor.","Ödevini yapacak."], a:1,
       w:"-mış eki duyulan (öğrenilen) geçmiş zamandır; konuşan olaya tanık olmamıştır."}
    ],
    sos:[
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Empati ne demektir?", o:["Karşıdakiyle aynı duyguyu paylaşmak","Olaya karşıdakinin yerinden bakabilmek","Karşıdakine acımak","Karşıdakini haklı bulmak"], a:1,
       w:"Empatide taraf olmak gerekmez; karşıdakinin bakış açısını anlamak yeterlidir."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Ben dilinin üç parçası hangisidir?", o:["Suçlama – emir – sonuç","Davranış – duygu – etki","Soru – cevap – öneri","Giriş – gelişme – sonuç"], a:1,
       w:"\"Sesin yükseldiğinde (davranış) üzülüyorum (duygu), çünkü anlayamıyorum (etki).\""},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Kitle iletişim özgürlüğünün sınırı nedir?", o:["Sınırsızdır","Özel hayatın gizliliği ve kişilik hakları","Devletin izni","Yayın saatleri"], a:1,
       w:"Basın özgürlüğü, kişilerin özel hayatının gizliliğiyle dengelenir."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"İnternetteki bir haberin güvenilirliğini ölçmek için hangisine bakılmaz?", o:["Kaynağın kim olduğuna","Haberin tarihine","Başka güvenilir kaynaklarda yer alıp almadığına","Kaç kişinin beğendiğine"], a:3,
       w:"Beğeni sayısı doğruluk göstergesi değildir; kaynak, tarih ve doğrulama önemlidir."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Aşağıdakilerden hangisi \"sen dili\"ne örnektir?", o:["Beklerken kaygılanıyorum.","Sözüm kesilince anlatamıyorum.","Sen hep geç kalıyorsun.","Sıra bana gelmeyince üzülüyorum."], a:2,
       w:"Sen dili suçlayıcıdır ve iletişimi kapatır."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Nüfus yoğunluğu nasıl hesaplanır?", o:["Nüfus × yüz ölçümü","Nüfus ÷ yüz ölçümü","Yüz ölçümü ÷ nüfus","Doğum − ölüm"], a:1,
       w:"Yoğunluk, bir kilometrekareye düşen kişi sayısıdır."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Aşağıdakilerden hangisi nüfus dağılışını etkileyen doğal faktördür?", o:["Sanayi","Ulaşım","İklim","Turizm"], a:2,
       w:"İklim, yer şekilleri, su kaynakları ve toprak doğal faktörlerdir."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Tarım işçilerinin belirli mevsimlerde çalışmak için yer değiştirmesi hangi göç türüdür?", o:["Beyin göçü","Zorunlu göç","Mevsimlik göç","Dış göç"], a:2,
       w:"Mevsimlik göç belirli bir dönem sürer ve geri dönüşlüdür."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Nüfus piramidinin tabanının geniş olması neyi gösterir?", o:["Doğum oranının yüksek olduğunu","Ölüm oranının yüksek olduğunu","Nüfusun yaşlı olduğunu","Göç aldığını"], a:0,
       w:"Geniş taban, genç nüfusun ve yüksek doğum oranının göstergesidir."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Köyden kente göçün kentte yol açtığı sorunlardan biri hangisidir?", o:["Tarım alanlarının artması","Çarpık kentleşme","Nüfusun azalması","İş gücünün azalması"], a:1,
       w:"Plansız yerleşme, işsizlik, altyapı ve trafik sorunları kentte göçün sonuçlarıdır."}
    ],
    din:[
      {u:"ÜNİTE 1 · Melek ve Ahiret İnancı", q:"Tabiat olaylarını ve rızkı düzenlemekle görevli melek hangisidir?", o:["Cebrail","Mikail","İsrafil","Azrail"], a:1,
       w:"Mikail tabiat olaylarını ve rızkı düzenlemekle görevlidir."},
      {u:"ÜNİTE 1 · Melek ve Ahiret İnancı", q:"Sûra üflemekle görevli melek hangisidir?", o:["Cebrail","Mikail","İsrafil","Azrail"], a:2,
       w:"İsrafil kıyametin kopuşunu ve yeniden dirilişi sûra üfleyerek haber verir."},
      {u:"ÜNİTE 1 · Melek ve Ahiret İnancı", q:"İnsanların hesap vermek üzere yeniden diriltilmesine ne ad verilir?", o:["Kıyamet","Ba's","Mizan","Berzah"], a:1,
       w:"Ba's yeniden diriliş demektir; kıyamet ise evrenin düzeninin bozulmasıdır."},
      {u:"ÜNİTE 1 · Melek ve Ahiret İnancı", q:"Aşağıdakilerden hangisi meleklerin özelliklerinden biri DEĞİLDİR?", o:["Nurdan yaratılmışlardır","Yemez, içmez, uyumazlar","Erkeklik-dişilik özellikleri vardır","Allah'a isyan etmezler"], a:2,
       w:"Meleklerin erkeklik ya da dişilik özellikleri yoktur."},
      {u:"ÜNİTE 1 · Melek ve Ahiret İnancı", q:"Ahiret hayatının ilk aşaması hangisidir?", o:["Kıyamet","Ölüm","Mahşer","Mizan"], a:1,
       w:"Sıralama: ölüm → kabir → kıyamet → yeniden diriliş → mahşer → hesap → mizan."},
      {u:"ÜNİTE 1 · Melek ve Ahiret İnancı", q:"Ahiret inancının insan davranışına etkisi nedir?", o:["Kişiyi görülmediğinde de sorumlu davranmaya yöneltir","Kişiyi dünya işlerinden uzaklaştırır","Yalnızca ibadetleri ilgilendirir","Davranışlarla ilgisi yoktur"], a:0,
       w:"Yaptığının hesabını vereceğini bilen kişi, kimse görmese de dürüst davranır."}
    ],
    ing:[
      {u:"TEMA 1 · School Life & Education", q:"You ____ run in the corridor. (yasak)", o:["must","have to","mustn't","don't have to"], a:2,
       w:"Yasak bildirmek için \"mustn't\" kullanılır."},
      {u:"TEMA 1 · School Life & Education", q:"\"Devamsız\" anlamına gelen sözcük hangisidir?", o:["absent","present","attend","assembly"], a:0,
       w:"Absent devamsız, present ise mevcut demektir."},
      {u:"TEMA 1 · School Life & Education", q:"We ____ bring our books every day. It is a school rule.", o:["have to","don't have to","mustn't","might"], a:0,
       w:"Dışarıdan gelen bir kural için \"have to\" kullanılır."},
      {u:"TEMA 1 · School Life & Education", q:"\"Teneffüs\" sözcüğünün İngilizcesi hangisidir?", o:["term","break","grade","canteen"], a:1,
       w:"Break teneffüs, term dönem, canteen kantindir."},
      {u:"TEMA 1 · School Life & Education", q:"Hangisi \"gerek yok\" anlamı taşır?", o:["mustn't","can't","don't have to","shouldn't"], a:2,
       w:"\"Don't have to\" zorunlu olmadığını, \"mustn't\" ise yasak olduğunu anlatır."},
      {u:"TEMA 1 · School Life & Education", q:"How often ____ you have Science lessons?", o:["do","does","are","have"], a:0,
       w:"\"You\" öznesiyle present simple soruda \"do\" gelir."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"____ you help me with this exercise, please?", o:["Could","Must","Should","May"], a:0,
       w:"Kibar rica için \"Could you…?\" en uygunudur."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"\"Not tutmak\" ifadesinin İngilizcesi hangisidir?", o:["take notes","make notes up","do notes","get notes"], a:0,
       w:"\"Take notes\" not tutmak demektir."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"I ____ read when I was four years old.", o:["can","could","will can","am able"], a:1,
       w:"Geçmişteki bir yetenek için \"could\" kullanılır."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"\"Tekrar etmek, gözden geçirmek\" anlamındaki fiil hangisidir?", o:["revise","refuse","reduce","replace"], a:0,
       w:"Revise, sınav öncesi konuyu tekrar etmek anlamındadır."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"Next week I ____ finish my project.", o:["will can","can","will be able to","am can"], a:2,
       w:"\"Can\" gelecek zamanla kullanılamaz; yerine \"be able to\" gelir."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"\"Teslim tarihi\" anlamına gelen sözcük hangisidir?", o:["deadline","headline","timeline","outline"], a:0,
       w:"Deadline, bir işin teslim edilmesi gereken son tarihtir."}
    ]
  };

  /* ---------- Eylül–Ekim partisi, 8'den 10'a tamamlama ---------- */

  var EK6b = {
    mat:[
      {u:"TEMA 1 · Çarpanlar, Katlar, Asal Sayılar", q:"En küçük asal sayı hangisidir?", o:["0","1","2","3"], a:2,
       w:"2 hem en küçük asal sayıdır hem de tek çift asal sayıdır. 1 asal değildir."},
      {u:"TEMA 1 · Çarpanlar, Katlar, Asal Sayılar", q:"Bir zil 8 dakikada, diğeri 12 dakikada bir çalıyor. Saat 09:00'da birlikte çaldılarsa tekrar birlikte kaçta çalarlar?", o:["09:20","09:24","09:32","09:48"], a:1,
       w:"EKOK(8, 12) = 24 dakika → 09:24."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"6, 6, 8, 11 verilerinin ortancası kaçtır?", o:["6","7","8","8,5"], a:1,
       w:"Veri sayısı çift; ortadaki iki sayının ortalaması: (6+8)÷2 = 7."},
      {u:"TEMA 2 · İstatistiksel Araştırma Süreci", q:"Grupları birbiriyle karşılaştırmak için en uygun grafik hangisidir?", o:["Çizgi grafiği","Sütun grafiği","Sıklık tablosu","Serpme grafiği"], a:1,
       w:"Sütun grafiği grupların büyüklüklerini yan yana karşılaştırmayı kolaylaştırır."}
    ],
    fen:[
      {u:"ÜNİTE 1 · Güneş Sistemi ve Tutulmalar", q:"Güneş tutulması günün hangi vaktinde gerçekleşir?", o:["Gece","Gündüz","Şafakta","Farketmez"], a:1,
       w:"Ay, Güneş'i örttüğü için olay gündüz yaşanır."},
      {u:"ÜNİTE 1 · Güneş Sistemi ve Tutulmalar", q:"Her Yeni Ay'da neden Güneş tutulması olmaz?", o:["Ay çok küçüktür","Ay'ın yörüngesi yaklaşık 5° eğiktir","Dünya çok hızlı döner","Güneş çok uzaktır"], a:1,
       w:"Yörünge eğikliği nedeniyle üç gök cismi çoğu Yeni Ay'da tam aynı doğrultuya gelmez."},
      {u:"ÜNİTE 2 · Kuvvetin Etkisinde Hareket", q:"İki takım halat çekme yarışında eşit kuvvet uyguluyorsa halat ne yapar?", o:["Hareket etmez","Sağa gider","Sola gider","Kopar"], a:0,
       w:"Eşit ve zıt yönlü kuvvetlerde bileşke sıfırdır, kuvvetler dengelenmiştir."},
      {u:"ÜNİTE 2 · Kuvvetin Etkisinde Hareket", q:"Bileşke kuvveti sıfırdan farklı olan bir cisimde ne değişir?", o:["Yalnızca kütlesi","Sürati ya da yönü","Yalnızca ağırlığı","Hiçbir şey"], a:1,
       w:"Dengelenmemiş kuvvet cismin süratini ya da hareket yönünü değiştirir."}
    ],
    tur:[
      {u:"KONU 1 · Sözcükte Anlam", q:"\"Uzun\" sözcüğünün zıt anlamlısı hangisidir?", o:["Geniş","Kısa","Büyük","İnce"], a:1,
       w:"Uzun ile kısa karşıt anlamlıdır."},
      {u:"KONU 2 · Deyimler, Atasözleri ve Söz Sanatları", q:"\"Bir elin nesi var, iki elin sesi var.\" ifadesi neyi anlatır?", o:["Yalnız çalışmanın değerini","Birlikte çalışmanın gücünü","Sabrın önemini","Tutumlu olmayı"], a:1,
       w:"Dayanışma ve birlikte iş yapmanın gücünü anlatan bir atasözüdür."},
      {u:"KONU 2 · Deyimler, Atasözleri ve Söz Sanatları", q:"\"Güneş bize gülümsüyordu.\" cümlesinde hangi söz sanatı vardır?", o:["Benzetme","Abartma","Kişileştirme","Konuşturma"], a:2,
       w:"Güneşe insana ait \"gülümsemek\" eylemi verilmiştir."}
    ],
    sos:[
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Aşağıdakilerden hangisi bir toplumsal sorundur?", o:["Bir öğrencinin ödevini unutması","Trafik yoğunluğu","Bir kişinin geç kalkması","Bir kitabın kaybolması"], a:1,
       w:"Toplumsal sorun toplumun çoğunu etkiler ve çözümü ortak çaba ister."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Nasreddin Hoca, Dede Korkut ve Yunus Emre neyin parçasıdır?", o:["Doğal çevremizin","Kültürel değerlerimizin","Ekonomik kaynaklarımızın","Coğrafi konumumuzun"], a:1,
       w:"Bunlar toplumun ortak kültürel değerlerini temsil eden şahsiyetlerdir."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Türkiye'yi Asya ile Avrupa arasında bağlayan su yolları hangileridir?", o:["İstanbul ve Çanakkale boğazları","Süveyş ve Panama kanalları","Van ve Tuz gölleri","Fırat ve Dicle nehirleri"], a:0,
       w:"İstanbul ve Çanakkale boğazları Türkiye'nin özel konumunun en belirgin özelliğidir."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Kardeş ülkelerde kalkınma projeleri ve yardım çalışmaları yürüten kuruluş hangisidir?", o:["TÜRKSOY","TİKA","TSE","TRT"], a:1,
       w:"TİKA, Türk İşbirliği ve Koordinasyon Ajansı Başkanlığı'dır."}
    ],
    din:[
      {u:"ÜNİTE 1 · Peygamber ve İlahi Kitap İnancı", q:"Hz. İsa'ya indirilen ilahi kitap hangisidir?", o:["Tevrat","Zebur","İncil","Kur'an"], a:2,
       w:"İncil Hz. İsa'ya indirilmiştir."},
      {u:"ÜNİTE 1 · Peygamber ve İlahi Kitap İnancı", q:"\"Tebliğ\" sıfatı ne demektir?", o:["Doğru sözlü olmak","Aldığı mesajı eksiksiz iletmek","Güvenilir olmak","Günah işlememek"], a:1,
       w:"Tebliğ, peygamberin vahyi olduğu gibi insanlara ulaştırmasıdır."}
    ],
    ing:[
      {u:"TEMA 2 · Classroom Life & Learning", q:"\"Silgi\" sözcüğünün İngilizcesi hangisidir?", o:["ruler","rubber","glue","marker"], a:1,
       w:"Rubber (ya da eraser) silgidir."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"There ____ any chairs in the corner.", o:["isn't","aren't","don't","doesn't"], a:1,
       w:"Çoğul isimle olumsuz: There aren't any chairs."},
      {u:"TEMA 1 · School Life & Education", q:"What time ____ school finish?", o:["do","does","is","are"], a:1,
       w:"\"School\" tekil özne olduğu için soruda \"does\" kullanılır."},
      {u:"TEMA 1 · School Life & Education", q:"\"Kantin\" sözcüğünün İngilizcesi hangisidir?", o:["canteen","corridor","library","assembly"], a:0,
       w:"Canteen kantin, corridor koridor, library kütüphanedir."}
    ]
  };

  var EK7b = {
    mat:[
      {u:"TEMA 1 · Sayılar ve Nicelikler (1)", q:"(−3/4) ÷ (−1/2) işleminin sonucu kaçtır?", o:["−3/8","3/8","−3/2","3/2"], a:3,
       w:"İkinci kesir ters çevrilip çarpılır: (−3/4)·(−2/1) = 6/4 = 3/2. İki negatifin bölümü pozitiftir."},
      {u:"TEMA 1 · Sayılar ve Nicelikler (1)", q:"0,1̄2̄ devirli ondalık sayısının kesir gösterimi hangisidir?", o:["12/99","12/90","12/100","1/12"], a:0,
       w:"İki basamak devrederse payda 99 olur: 12/99 (sadeleşince 4/33)."},
      {u:"TEMA 2 · Sayılar ve Nicelikler (2)", q:"Bir ürüne önce %10 zam, sonra %10 indirim yapılırsa fiyat başlangıca göre nasıl olur?", o:["Aynı kalır","%1 artar","%1 azalır","%10 azalır"], a:2,
       w:"1,10 × 0,90 = 0,99 → fiyat %1 azalır. Yüzdeler doğrudan sadeleşmez."},
      {u:"TEMA 2 · Sayılar ve Nicelikler (2)", q:"240 sayısının %35'i kaçtır?", o:["74","84","94","104"], a:1,
       w:"240 × 0,35 = 84."}
    ],
    fen:[
      {u:"ÜNİTE 1 · Uzay Çağı", q:"Yıldız ile gezegen arasındaki temel fark nedir?", o:["Yıldız daha büyüktür","Yıldız kendi ışığını üretir","Gezegen daha sıcaktır","Gezegen hareketsizdir"], a:1,
       w:"Yıldızlar ışık ve ısı üretir; gezegenler yıldızın ışığını yansıtır."},
      {u:"ÜNİTE 1 · Uzay Çağı", q:"Mars ile Jüpiter arasında yoğunlaşan kayaç parçalarına ne ad verilir?", o:["Meteor","Asteroit","Uydu","Kuyruklu yıldız"], a:1,
       w:"Bu bölgeye asteroit kuşağı denir."},
      {u:"ÜNİTE 2 · Kuvvet ve Enerjiyi Keşfedelim", q:"Kütle ile ağırlığın ölçme araçları sırasıyla hangileridir?", o:["Dinamometre – terazi","Terazi – dinamometre","Terazi – termometre","Dinamometre – barometre"], a:1,
       w:"Kütle eşit kollu terazi ile, ağırlık dinamometre ile ölçülür."},
      {u:"ÜNİTE 2 · Kuvvet ve Enerjiyi Keşfedelim", q:"Enerjinin korunumu ilkesi neyi söyler?", o:["Enerji zamanla yok olur","Enerji yoktan var edilebilir","Enerji yok olmaz, tür değiştirir","Enerji yalnızca ısıya dönüşür"], a:2,
       w:"Enerji yoktan var olmaz, yok olmaz; yalnızca bir türden diğerine dönüşür."}
    ],
    tur:[
      {u:"TEMA 1 · Hayat Boyu Gelişim", q:"\"Keşke gelseydi.\" cümlesindeki kip hangisidir?", o:["İstek","Şart","Gereklilik","Emir"], a:1,
       w:"-se / -sa eki şart (dilek-koşul) kipidir."},
      {u:"TEMA 1 · Hayat Boyu Gelişim", q:"Kip eki ile kişi eki hangi sırayla gelir?", o:["Önce kişi, sonra kip","Önce kip, sonra kişi","Sıra değişebilir","İkisi aynı ektir"], a:1,
       w:"Fiil kökü + kip eki + kişi eki: gel-ecek-im."}
    ],
    sos:[
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Özel hayatın gizliliği neden korunur?", o:["Devlet öyle istediği için","Kişilerin rızası olmadan bilgilerinin yayılmaması için","Haberler azalsın diye","Basın çalışmasın diye"], a:1,
       w:"Herkesin paylaşmak istemediği bilgileri vardır; bunların yayılması zarar verebilir."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Etkili iletişimi engelleyen davranış hangisidir?", o:["Göz teması kurmak","Sözünü kesmemek","Suçlayıcı konuşmak","Empati kurmak"], a:2,
       w:"Suçlayıcı \"sen dili\" iletişimi kapatır."},
      {u:"ALAN 1 · Birlikte Yaşamak", q:"Sempati ile empatinin farkı nedir?", o:["Sempatide taraf olunur, empatide gerekmez","İkisi aynıdır","Empatide acınır","Sempati yazılı olur"], a:0,
       w:"Empati karşıdakinin yerinden bakmaktır; sempatide ona taraf olunur."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Beyin göçü ülkeye ne zarar verir?", o:["Nüfus artar","Eğitimine kaynak ayrılan nitelikli insanların üretiminden yararlanılamaz","Tarım alanları azalır","İklim değişir"], a:1,
       w:"Ülke, yetiştirdiği nitelikli iş gücünü kaybeder."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Savaş ya da deprem sonrası yapılan göç hangi türdendir?", o:["Mevsimlik göç","İsteğe bağlı göç","Zorunlu göç","Beyin göçü"], a:2,
       w:"Kişinin iradesi dışında gerçekleşen göç zorunlu göçtür."},
      {u:"ALAN 2 · Evimiz Dünya", q:"Bir ilin nüfusu fazla olduğu hâlde yoğunluğu düşük olabilir mi?", o:["Hayır, olamaz","Evet, yüz ölçümü büyükse olur","Yalnızca kıyı illerinde olur","Yalnızca kış aylarında olur"], a:1,
       w:"Yoğunluk nüfusun alana bölünmesidir; geniş bir ilde çok nüfus seyrek dağılabilir."}
    ],
    din:[
      {u:"ÜNİTE 1 · Melek ve Ahiret İnancı", q:"İnsanların yaptıklarını yazmakla görevli melekler hangileridir?", o:["Münker ve Nekir","Kirâmen Kâtibîn","Cebrail ve Mikail","İsrafil ve Azrail"], a:1,
       w:"Kirâmen Kâtibîn kişinin davranışlarını kaydeder."},
      {u:"ÜNİTE 1 · Melek ve Ahiret İnancı", q:"Evrenin düzeninin bozulup hayatın son bulmasına ne ad verilir?", o:["Ba's","Kıyamet","Mizan","Mahşer"], a:1,
       w:"Kıyamet evrenin düzeninin bozulmasıdır; ba's yeniden diriliştir."}
    ],
    ing:[
      {u:"TEMA 1 · School Life & Education", q:"Students ____ use mobile phones during lessons. It is forbidden.", o:["don't have to","mustn't","should","can"], a:1,
       w:"Yasak bildirmek için \"mustn't\" kullanılır."},
      {u:"TEMA 1 · School Life & Education", q:"\"Başarı\" anlamına gelen sözcük hangisidir?", o:["absence","achievement","attendance","assembly"], a:1,
       w:"Achievement başarı, absence devamsızlık, attendance devam demektir."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"\"Altını çizmek\" anlamındaki fiil hangisidir?", o:["highlight","underline","memorise","practise"], a:1,
       w:"Underline altını çizmek, highlight ise fosforlu kalemle işaretlemektir."},
      {u:"TEMA 2 · Classroom Life & Learning", q:"Sorry, I'm not sure I ____. Could you say it again?", o:["follow","following","followed","am follow"], a:0,
       w:"\"I don't follow\" ya da \"I'm not sure I follow\" = anlayamadım."}
    ]
  };

  /* Ek soruları ana havuzlara ekle */
  Object.keys(EK6).forEach(function(k){ if(Q6[k]) Q6[k] = Q6[k].concat(EK6[k]); });
  Object.keys(EK7).forEach(function(k){ if(Q7[k]) Q7[k] = Q7[k].concat(EK7[k]); });
  Object.keys(EK6b).forEach(function(k){ if(Q6[k]) Q6[k] = Q6[k].concat(EK6b[k]); });
  Object.keys(EK7b).forEach(function(k){ if(Q7[k]) Q7[k] = Q7[k].concat(EK7b[k]); });

  /* Soruları ünite numarasına göre grupla — filtre çipleri sıralı görünsün */
  function uniteNo(u){ var m = String(u).match(/(\d+)/); return m ? parseInt(m[1],10) : 99; }
  [Q6, Q7].forEach(function(Q){
    Object.keys(Q).forEach(function(k){
      Q[k].sort(function(a,b){ return uniteNo(a.u) - uniteNo(b.u); });
    });
  });
