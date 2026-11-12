  /* ===================== 6. SINIF · TEMEL DİNÎ BİLGİLER =====================
     İmam hatip ortaokulunda haftada 1 saatlik ders. Peygamberimizin Hayatı gibi
     dersin TAMAMI bu dosyada: ünite anlatımı (S6'ya eklenir), yıllık takvim
     satırları (CAL6), ana test (Q6.tdb), havuz (H6.tdb) ve ek çalışma seti
     (EKC6.tdb). build.sh'te 08f'den SONRA, 09'dan ÖNCE gelmeli.

     KAYNAK (12 Kasım 2026'da doğrulandı):
     - Okulun kitabı: MEB "Temel Dinî Bilgiler Ders Kitabı (İslam 1)", TTKB kabulü
       03.07.2026, tymm.meb.gov.tr/kitap/533/temel-dini-bilgiler-ders-kitabi-islam-1
       (168 s.). 1. ünite s. 14–47 (1.1 s. 16, 1.2 s. 21, 1.3 s. 28, 1.4 s. 33;
       ünite sonu soruları 41–46). Öğretmenin yazdırdığı 4 soru bu ünitenin 1.1,
       1.2 ve 1.3 bölümleriyle birebir örtüşüyor. Kitabın metni ve soruları
       teliflidir: anlatım ve sorular kendi cümlelerimizle, kitaptan soru KOPYALAMA.
     - TYMM program sayfasında (…/temel-dini-bilgiler-dersi-temel-egitim/18)
       tema listesi YOK ("Kayıt Bulunamadı"); ünite adları kitabın içindekiler
       sayfasından.
     - Sınav kapsamı: Rize İl MEB 2026–2027 konu-soru dağılım tablosu
       (rize.meb.gov.tr/ksdt/temel-egitim/tdb6.pdf, "SINIF: İSLAM 1"). 1. dönem
       1. sınav = 1. ünite, 5 senaryo, 5–7 açık uçlu soru, dört bölümün hepsinden
       (1.4 her senaryoda 1–2 soru). 2. sınav = 2. ünite. Okulun ilinin tablosu
       farklı olabilir; senaryoyu okul seçer. */

  S6.push(
    {key:"tdb", name:"Temel Dinî Bilgiler", color:"var(--s-tdb)", meta:"4 ünite · MEB İslam 1 ders kitabı · haftada 1 saat", lbl:"ÜNİTE",
     note:"Okulun kitabı MEB'in <b>Temel Dinî Bilgiler (İslam 1)</b> ders kitabıdır (2026); ünite ve bölüm adları oradan alındı. İl konu-soru dağılım tablosuna göre (2026–2027, Rize örneği) ortak yazılılar <b>açık uçlu</b> ve kısa cevaplı sorulardan oluşur; çoktan seçmeli, eşleştirme, doğru-yanlış kullanılmaz. <b>1. dönem 1. yazılı</b> 1. ünitenin dört bölümünden 5–7 soru, <b>2. yazılı</b> 2. üniteden gelir. Hangi senaryonun seçildiğini öğretmenden öğren; defterine yazdırdıkları her zaman önceliklidir. Buradaki çoktan seçmeli testler kavramları pekiştirmek içindir.",
     units:[
      {n:"Dinimiz İslam", w:"Eylül–Ekim–Kasım", t:["ÜNİTE 1 · Dinimiz İslam","EK · 1. Yazılı Hazırlık"],
       ogr:[{d:"Kasım 2026", h:
         "<p><b>Sınav çalışma notları</b></p>" +
         "<ol><li><b>Soru:</b> Namazın nasıl kılınacağını öğrenmek isteyen bir öğrenci Hz. Peygamber'in namazla ilgili söz ve davranışlarını araştırmıştır. Bu durum sünnetin İslam dinindeki önemini nasıl gösterir?<br>" +
         "<b>Cevap:</b> Sünnet, Kur'an'da genel olarak bildirilen hükümlerin nasıl uygulanacağını açıklayarak Müslümanlara yol gösterir.</li>" +
         "<li><b>Soru:</b> Bir dağcı zorlu bir yolculuk sırasında Allah'ın (cc) kendisini koruyup gözettiğine inanarak kendisini daha güvende hissetmekte ve karşılaştığı zorluklar karşısında da umudunu korumaktadır. Bu durum inanmanın insan hayatındaki önemini nasıl göstermektedir?<br>" +
         "<b>Cevap:</b> İnanmak insana güven duygusu ve manevi dayanıklılık kazandırır, zorluklar karşısında umudunu korumasına yardımcı olur.</li>" +
         "<li><b>Soru:</b> Ayşe, Allah'ın varlığına ve birliğine kalbiyle inanmakta, Hz. Muhammed'in (sav) Allah'ın elçisi olduğunu diliyle ifade etmektedir. Ayşe inanç bakımından hangi grupta yer alır? Açıklayınız.<br>" +
         "<b>Cevap:</b> Ayşe mümin grubunda yer alır. Çünkü Allah'ın varlığına ve birliğine kalbiyle inanmakta, Hz. Muhammed'in Allah'ın elçisi olduğunu diliyle ifade etmektedir.</li>" +
         "<li><b>Soru:</b> İslam'ın şartı inanç esaslarını yazınız.<br>" +
         "<b>Cevap:</b> Allah'a inanmak, meleklere inanmak, kitaplara inanmak, peygamberlere inanmak, ahiret gününe inanmak, kaza ve kadere inanmak.</li></ol>" +
         "<p><i>4. soru defterde böyle yazılmış, cevabı 6 inanç esası (imanın şartları). Kitapta “İslam'ın şartları” ayrı konudur ve 5 tanedir: kelimeişehadet, namaz, oruç, zekât, hac. Sınavda “inanç esasları / imanın şartları” sorulursa 6'yı, “İslam'ın şartları” sorulursa 5'i yaz.</i></p>"}],
       lead:"Ünite dört bölümdür: <b>1.1</b> Kur'an ve Sünnetin Hayatımdaki Yeri · <b>1.2</b> Niçin İnanıyorum? · <b>1.3</b> Mümin Kimliğim · <b>1.4</b> Allah'ın Güzel İsimleri: Hâdi, Selam, Vekîl. <b>1. yazılı</b> açık uçlu sorulardan oluşur ve il tablosuna göre dört bölümün <b>hepsinden</b> soru gelir. Öğretmenin yazdırdığı dört soru 1.1, 1.2 ve 1.3'ten; defterde olmasa da <b>1.4'ü (Hâdi, Selam, Vekîl) mutlaka çalış</b>. Cevap yazarken kavramı adıyla yaz, sonra olaya bağla: “Bu durum … gösterir, çünkü …”.",
       voc:[["Kur'an","sözlükte “okumak, toplamak, bir araya getirmek”; Hz. Peygamber'e vahiy yoluyla gelen Allah kelamı"],
            ["mushaf","Kur'an'ın kitap hâlinde yazılmış nüshası"],
            ["mucize","Allah'ın izniyle peygamberin elinde gerçekleşen olağanüstü olay; Kur'an en büyük mucizedir"],
            ["sünnet","sözlükte “yol, âdet, gidişat”; Hz. Peygamber'in sözleri, davranışları ve onayları"],
            ["iman","sözlükte “güvenmek, şüphe duymadan kabullenmek, tasdik etmek”"],
            ["tasdik","doğrulama, gerçekliğini kabul etme, gönülden bağlanma"],
            ["fıtrat","insanın yaratılıştan getirdiği inanma ihtiyacı ve iyiliğe yönelimi"],
            ["Amentü","İslam'ın inanç esaslarını sayan dua"],
            ["inanç esasları","Allah'a, meleklere, kitaplara, peygamberlere, ahiret gününe, kader ve kazaya iman (6)"],
            ["salih amel","güzel ve faydalı işler"],
            ["mümin","kalbiyle inanıp diliyle söyleyen kişi"],
            ["kâfir","Allah'ın varlığını ve birliğini, İslam'ın temel esaslarını reddettiğini açıkça söyleyen kişi"],
            ["münafık","kalben inanmadığı hâlde inandığını söyleyen, ikiyüzlü kişi"],
            ["İslam","sözlükte “teslim olmak, güven ve emniyette bulunmak”; son ilahi din"],
            ["kelimeişehadet","“Eşhedü ellâ ilâhe illallah ve eşhedü enne Muhammeden abdühû ve rasûlüh”; İslam'a girişin anahtarı"],
            ["İslam'ın şartları","kelimeişehadet, namaz, oruç, zekât, hac (5)"],
            ["esmayıhüsna","Allah'ın en güzel isimleri (esma: isimler, hüsna: en güzel)"],
            ["Hâdi","doğru yolu gösteren, rehberlik eden"],
            ["Selam","her türlü eksiklikten uzak; güvenlik, barış ve esenlik veren"],
            ["Vekîl","bütün varlıkların işlerini düzenleyen, koruyup gözeten, rızıklara kefil olan"],
            ["hidayet","doğru yola iletme, doğru yolu bulma"],
            ["tevekkül","üzerine düşeni yaptıktan sonra sonucu Allah'a bırakıp O'na güvenme"]],
       p:["<b>Kur'an ve sünnet</b> İslam'ın iki temel kaynağıdır ve birbirini tamamlar: Kur'an Allah'ın emirlerini <b>bildirir</b>, sünnet bu emirlerin <b>nasıl uygulanacağını</b> gösterir.",
          "<b>Kur'an:</b> Hz. Peygamber'e vahiy yoluyla gelen, mushaflarda yazılı, değişmeden günümüze ulaşan ve okunmasıyla ibadet edilen Allah kelamı; son ilahi kitap. İçinde iman, ibadet ve ahlakla ilgili hükümler ve peygamber kıssaları vardır.",
          "Önceki ilahi kitaplar zamanla değiştirildi; Kur'an ise okunarak ve ezberlenerek <b>korundu</b> (Hicr suresi 9). Peygamberimizin <b>en büyük mucizesidir</b>: insanlar ve cinler toplansa benzerini getiremez (İsra suresi 88).",
          "Kur'an'ın rehberliği üç adımla hayata geçer: <b>okumak</b> (ibadettir), <b>anlamak</b>, <b>yaşamak</b>. En önemli adım yaşamaktır. “Sizin en hayırlınız, Kur'an'ı öğrenen ve öğretendir.”",
          "<b>Sünnet:</b> Hz. Peygamber'in <b>sözleri, davranışları</b> ve sahabenin yaptığı uygulamaları <b>onaylaması</b>. Peygamberimiz Müslümanlar için “güzel bir örnek”tir (Ahzab suresi 21).",
          "Kur'an bazı hükümleri <b>genel</b> olarak bildirir; nasıl uygulanacağını <b>sünnet</b> açıklar: namazın nasıl kılınacağı, zekâtın hangi mallardan ne kadar verileceği, haccın uygulanışı, “orta namaz”ın ikindi namazı olduğu.",
          "<b>Niçin inanıyorum?</b> İnsan inanma ihtiyacıyla doğar (<b>fıtrat</b>). İnanmak yalnız olmadığını hissettirir; iç huzuru, güven duygusu ve manevi dayanıklılık verir. Evrendeki düzen bir yaratıcıyı gösterir. İman hayatın anlamını ve ölümden sonrasını açıklar.",
          "<b>İman:</b> kelime olarak güvenmek, şüphe duymadan kabullenmek, tasdik etmek. Dinî anlamı: inanılması gerekenleri <b>kalp ile tasdik edip dil ile söylemek</b>.",
          "<b>İnanç esasları (6)</b> Amentü duasında toplanır: Allah'a, meleklere, kitaplara, peygamberlere, ahiret gününe, kader ve kazaya iman. Birbirinden ayrılmaz bir bütündür; birine inanmamak imanın bütünlüğünü bozar.",
          "İman ile <b>salih amel</b> (güzel ve faydalı işler) bir ağacın <b>kökü ve dalları</b> gibidir: iman davranışlarla beslenip olgunlaşır.",
          "İnanç bakımından üç grup vardır: <b>mümin</b> (kalbiyle inanır, diliyle söyler) · <b>kâfir</b> (reddettiğini açıkça söyler) · <b>münafık</b> (inanmadığı hâlde inandığını söyler).",
          "<b>Kelimeişehadet</b> İslam'a girişin anahtarıdır. <b>İslam'ın şartları (5)</b>: kelimeişehadet getirmek, namaz kılmak, oruç tutmak, zekât vermek, hacca gitmek. Bir binayı ayakta tutan sütunlar gibidir.",
          "Mümin ibadetlerini ahlakına yansıtır: dürüst, adaletli, nazik, sorumluluk sahibi ve <b>güvenilir</b>dir. “Müminlerin iman bakımından en mükemmeli, ahlak bakımından en güzel olanıdır.”",
          "<b>Esmayıhüsna:</b> Allah'ın en güzel isimleri (doksan dokuz). <b>Hâdi</b> doğru yolu gösteren · <b>Selam</b> eksiklikten uzak, esenlik ve güven veren · <b>Vekîl</b> işleri düzenleyen, koruyup gözeten. <b>Tevekkül</b> Vekîl ismiyle ilgilidir."],
       box:[{t:"Açık uçlu soruya cevap kalıbı", h:"<ol><li><b>Kavramı adıyla yaz:</b> sünnet, iman, mümin, münafık, tevekkül, Hâdi…</li><li><b>Tanımını ekle:</b> “Sünnet, Kur'an'da genel olarak bildirilen hükümlerin nasıl uygulanacağını açıklar.”</li><li><b>Olaya bağla:</b> “Bu durum … gösterir, çünkü …”. Soruda bir kişi ya da olay varsa cevapta mutlaka ona dön.</li><li><b>Biliyorsan destekle:</b> bir ayet ya da hadis (“Kalpler ancak Allah'ı anmakla huzur bulur.”).</li></ol><p>Öğretmenin dört sorusu bu kalıpta: önce durum anlatılıyor, sonra “bu durum neyi gösterir?” diye soruluyor.</p>"},
            {t:"Kur'an ve sünnet — kim ne yapar?", h:"<ul><li><b>Kur'an-ı Kerim:</b> Rabbimizin gönderdiği <b>son ilahi kitap</b>. İnsanların neye inanacağını, nasıl ibadet edeceğini, nasıl bir ahlaka sahip olacağını, toplum hayatını nasıl düzenleyeceğini bildirir. “... De ki: O, inananlar için doğru yolu gösteren bir kılavuzdur...” (Fussilet suresi 44)</li><li><b>Sünnet:</b> Peygamberimizin Kur'an'ı nasıl anlayıp kendi hayatında nasıl yaşadığını gösterir. Kur'an'da Peygamberimize, kendisine indirileni insanlara <b>açıklama</b> görevi verildiği bildirilir (Nahl suresi 44) ve “Kim Peygamber'e itaat ederse Allah'a itaat etmiş olur...” buyrulur (Nisa suresi 80).</li><li><b>Görev paylaşımı:</b> Kur'an emri bildirir → sünnet uygulamayı gösterir. İkisine birlikte uyan Müslüman dinini doğru öğrenir, hayatını buna göre düzenler; dünyada ve ahirette mutluluğa ulaşır.</li><li><b>Peygamberimizin örnek davranışları:</b> işe besmeleyle başlamak, temizliğe dikkat etmek, israftan kaçınmak, büyüklere saygı, küçüklere şefkat, anne babaya iyilik, selamlaşmak; her koşulda adaletli ve doğru sözlü olmak.</li></ul>"},
            {t:"Niçin inanıyorum? — beş cevap", h:"<ol><li><b>Fıtrat:</b> İnsan, yüce bir varlığa inanma ve ona sığınma ihtiyacıyla doğar. Peygamberimiz: “Her doğan çocuk fıtrat üzere doğar...”</li><li><b>Huzur ve güven:</b> İnanmak insana yalnız olmadığını hissettirir; <b>iç huzuru, güven duygusu</b> ve <b>manevi dayanıklılık</b> kazandırır, zor anlarda umudu korur. “... Biliniz ki kalpler ancak Allah'ı anmakla huzur bulur.” (Rad suresi 28)</li><li><b>Evrendeki düzen:</b> Yıldızlardan gözle göremediğimiz varlıklara kadar her şey bir yaratıcıyı gösterir. Kupkuru toprağın baharda çiçeklenmesi tesadüf değildir: “Allah'ın rahmetinin izlerine bir bak: Ölü toprağa nasıl can veriyor...” (Rum suresi 50)</li><li><b>Hayatın anlamı:</b> İman, ölümün bir son değil asıl hayatın başlangıcı olduğunu öğretir; “Dünyaya neden geldik, ölümden sonra bizi ne bekliyor?” sorularına cevap verir.</li><li><b>Sevgi ve nimetler:</b> İnsanlar arasındaki sevgi ve merhamet de Allah'ın varlığının delillerindendir (Rum suresi 21). Bizi yaratan, yaşatan ve nimetleriyle kuşatan Rabbimize iman eder, O'na şükrederiz.</li></ol>"},
            {t:"İnanç esasları (6) ile İslam'ın şartları (5) — karıştırma!", h:"<p><b>İslam'ın inanç esasları</b> (imanın şartları da denir) — <b>6</b>: <b>1</b> Allah'a iman · <b>2</b> Meleklere iman · <b>3</b> Kitaplara iman · <b>4</b> Peygamberlere iman · <b>5</b> Ahiret gününe iman · <b>6</b> Kader ve kazaya iman.</p><p><b>Amentü</b> (okunuşu; sınavda anlamını bilmen yeter): “Âmentü billâhi ve melâiketihî ve kütübihî ve rusülihî velyevmilâhiri ve bilkaderi hayrihî ve şerrihî minallâhi teâlâ. Velba‘sü ba‘delmevti hakkun. Eşhedü ellâ ilâhe illallâh ve eşhedü enne Muhammeden abdühû ve rasûlüh.”<br><i>Anlamı:</i> Allah'a, meleklerine, kitaplarına, peygamberlerine, ahiret gününe, kadere, hayır ve şerrin Allah'tan olduğuna iman ettim. Ölümden sonra diriliş gerçektir. Allah'tan başka ilah olmadığına, Muhammed'in O'nun kulu ve elçisi olduğuna şehadet ederim.</p><p><b>İslam'ın şartları</b> — <b>5</b>: <b>1</b> Kelimeişehadet getirmek · <b>2</b> Namaz kılmak · <b>3</b> Oruç tutmak · <b>4</b> Zekât vermek · <b>5</b> Hacca gitmek. Peygamberimiz: “İslam beş esas üzerine kurulmuştur...”</p><p><b>Ayırt etme ipucu:</b> İnanç esaslarının hepsi “… <b>iman</b>” diye biter, kalple kabul edilir. İslam'ın şartları ise <b>yapılan</b> işlerdir: bir söz (kelimeişehadet) ve dört ibadet.</p>"},
            {t:"Mümin kimliği — ibadet ve ahlak", h:"<ul><li><b>Mümin olmak:</b> İslam'ın çağrısını özgür iradesiyle kabul edip Allah'ın var ve bir olduğunu söylemek. Anahtar <b>kelimeişehadet</b>tir: “Ben şehadet ederim ki Allah'tan başka ilah yoktur. Yine şehadet ederim ki Hz. Muhammed, Allah'ın kulu ve resulüdür.”</li><li><b>Namaz:</b> Akıllı ve ergenlik çağına gelmiş her müminin günde beş vakit kılması gereken farz ibadet. Zamanı planlı kullanmayı ve disiplini öğretir; “... Muhakkak ki namaz, hayâsızlıktan ve kötülükten alıkoyar...” (Ankebut suresi 45)</li><li><b>Oruç:</b> Ramazan ayında gün boyunca yemekten, içmekten ve orucu bozan şeylerden uzak durmak. İradeye hâkim olmayı, sabrı, hâlden anlamayı ve merhameti öğretir.</li><li><b>Zekât:</b> Zengin sayılan Müslümanın her yıl malından belli bir payı ihtiyaç sahiplerine vermesi. Paylaşma ve dayanışmayı güçlendirir, bencilliği yok eder.</li><li><b>Hac:</b> Gücü yeten Müslümanın, zilhicce ayının belli günlerinde ibadet için Kâbe'ye ve çevresindeki kutsal yerlere gitmesi. Farklı dil ve kültürden Müslümanları kardeşlik, birlik ve beraberlik içinde buluşturur.</li><li><b>Ahlak:</b> Mümin; doğruluk, adalet, nezaket ve sorumluluk bilincini kişiliğinin parçası yapar. “Müslüman, dilinden ve elinden insanların selamette olduğu kişidir. Mümin ise insanların canları ve malları konusunda kendisinden emin oldukları kişidir.”</li></ul>"},
            {t:"Tevekkül: önce çalış, sonra güven", h:"<p><b>Tevekkül</b>, insanın sorumluluklarını yerine getirdikten sonra sonucu Allah'a bırakması ve O'na güvenmesidir. Kur'an: “... Kararını verdiğin zaman da artık Allah'a dayanıp güven. Çünkü Allah, kendisine dayanıp güvenenleri sever.” (Al-i İmran suresi 159)</p><p>Peygamberimiz, gereği gibi tevekkül edenlerin, sabah aç çıkıp akşam tok dönen <b>kuşlar</b> gibi rızıklandırılacağını söylemiştir. Kuşlar yuvada beklemez, rızık için uçar: önce çaba, sonra güven.</p><p><i>Ek bilgi:</i> Mehmet Akif Ersoy'un dizeleri: “Allah'a dayan, sa'ye sarıl, hikmete râm ol... / Yol varsa budur, bilmiyorum başka çıkar yol.” (sa'y: çalışıp çabalama)</p><p>Çalışmadan “Allah nasılsa verir.” demek tevekkül <b>değildir</b>.</p>"}],
       tbl:[{h:["Kur'an'da (genel hüküm)","Sünnette (nasıl uygulanacağı)"], r:[
              ["Namaz kılmak farzdır.","Nasıl kılınacağı, vakitleri ve rekât sayıları. “Beni nasıl namaz kılıyor gördüyseniz siz de namazı öyle kılınız.”"],
              ["Zengin Müslümanlar zekât vermelidir.","Hangi mallardan ne kadar zekât verileceği"],
              ["Hac farzdır.","Zamanı, şartları ve uygulanışı. “Hacda yapacağınız ibadetleri benden öğrenin...”"],
              ["“Namazları ve orta namazı aksatmadan kılın...”","“Orta namaz, ikindi namazıdır.”"]]},
            {h:["Grup","Kalbiyle","Diliyle","Kısaca"], r:[
              ["<b>Mümin</b>","inanır","söyler","Allah'ın varlığını, birliğini ve Hz. Muhammed'in O'nun kulu ve elçisi olduğunu kalbiyle onaylayıp diliyle söyleyen"],
              ["<b>Münafık</b>","inanmaz","“inanıyorum” der","İkiyüzlü; inancında samimi değil. Alametleri: konuşunca yalan söyler, emanete ihanet eder, sözünde durmaz."],
              ["<b>Kâfir</b>","inanmaz","reddettiğini açıkça söyler","Gerçeği bile bile reddeden"]]},
            {h:["İsim","Anlamı","Ayet / dua","Hayatımıza yansıması"], r:[
              ["<b>Hâdi</b>","İnsanlara doğru yolu gösteren, rehberlik eden; zihinleri ve gönülleri aydınlatan","“Bizi dosdoğru yola ilet.” (Fatiha suresi 6) · “... Hiç şüphe yok ki Allah iman edenleri doğru yola iletir.” (Hac suresi 54)","Doğruyu öğrenmek için Kur'an'a ve Peygamberimizin rehberliğine yönelmek; hidayet için dua etmek"],
              ["<b>Selam</b>","Her türlü eksiklikten uzak, yaratmasında kusursuz; kullarına güvenlik, barış, esenlik ve sağlık veren","Peygamberimiz namazdan sonra: “Allah'ım! Sen Selam'sın, selamet sendendir...”","Selamlaşmak, çevresine güven vermek, kimseye zarar vermemek. “Selamünaleyküm” = “Allah sana sağlık, afiyet, esenlik, güven ve huzur versin.”"],
              ["<b>Vekîl</b>","Bütün varlıkların işlerini düzenleyen, koruyup gözeten, kullarının rızıklarına kefil olan","“... Kim Allah'a dayanıp güvenirse Allah ona yeter...” (Talak suresi 3) · “... Allah bize yeter, O ne güzel vekildir...”","Üzerine düşeni yaptıktan sonra sonucu Allah'a bırakmak (tevekkül)"]]},
            {h:["Durum","Kavram / isim"], r:[
              ["Namazın nasıl kılınacağını Peygamberimizin söz ve davranışlarından öğrenmek","Sünnet: Kur'an'daki hükmün nasıl uygulanacağını açıklar."],
              ["Zor bir anda Allah'ın kendisini koruduğuna inanıp umudunu korumak","İnanmanın kazandırdığı güven duygusu ve manevi dayanıklılık"],
              ["Doğadaki düzene bakıp bir yaratıcı olduğunu düşünmek","Niçin inanıyorum? Evrendeki deliller."],
              ["İnsanın doğuştan yüce bir varlığa inanma ihtiyacı","Fıtrat"],
              ["İnancını güzel davranışlarla göstermek","İman ve salih amel"],
              ["Kalbiyle inanıp diliyle söylemek","Mümin"],
              ["İnanmadığı hâlde “inanıyorum” demek","Münafık"],
              ["Doğruyu bulmak için dua etmek, rehberlik aramak","Hâdi"],
              ["Selamlaşmak, kimseye zarar vermemek","Selam"],
              ["Elinden geleni yapıp sonucu Allah'a bırakmak","Vekîl · tevekkül"]]},
            {h:["Bölüm (1. yazılı)","S1","S2","S3","S4","S5"], r:[
              ["1.1 Kur'an ve Sünnetin Hayatımdaki Yeri","1","1","3","2","1"],
              ["1.2 Niçin İnanıyorum?","3","2","1","1","1"],
              ["1.3 Mümin Kimliğim","1","1","1","1","2"],
              ["1.4 Hâdi, Selam, Vekîl","2","1","2","2","2"],
              ["<b>Toplam</b>","7","5","7","6","6"]]}],
       trap:"<b>İnanç esasları (6) ile İslam'ın şartlarını (5) karıştırmak.</b> Melekler, kitaplar, peygamberler, ahiret, kader ve kaza <b>inanç esasıdır</b>; kelimeişehadet, namaz, oruç, zekât ve hac <b>İslam'ın şartıdır</b>. İkinci tuzak: münafık ile kâfiri karıştırmak. Kâfir inanmadığını açıkça söyler, münafık inanmadığı hâlde “inanıyorum” der. Üçüncüsü: sünneti yalnız Peygamberimizin sözleri sanmak. Sünnet söz, davranış ve onaydır. Dördüncüsü: tevekkülü “çalışmadan beklemek” sanmak. Önce çalışılır, sonra Allah'a güvenilir.",
       q:["Kur'an ve sünnet İslam'ın iki temel kaynağıdır. Bu iki kaynak birbirini nasıl tamamlar? Bir örnekle açıkla.",
          "Sünnet ne demektir? Sözlük anlamını ve dinî terim anlamını yaz.",
          "Zekât vermek isteyen bir kişi, hangi mallardan ne kadar zekât vereceğini öğrenmek için Peygamberimizin uygulamalarını araştırıyor. Bu durum sünnetin İslam dinindeki önemini nasıl gösterir?",
          "Kur'an-ı Kerim'i önceki ilahi kitaplardan ayıran özellik nedir? Bunu bildiren ayeti yaz.",
          "Kur'an neden Peygamberimizin en büyük mucizesidir?",
          "Kur'an'ın hayatımıza yön vermesi için ne yapmamız gerekir? Üç adımı yaz.",
          "Uzun süredir hastanede yatan Murat Bey, Allah'ın kendisini yalnız bırakmayacağına inanıyor; bu sayede sabırlı ve umutlu kalabiliyor. Bu durum inanmanın insan hayatındaki önemini nasıl gösterir?",
          "İnsan neden inanma ihtiyacı duyar? “Fıtrat” kavramını kullanarak açıkla.",
          "Baharda kupkuru toprağın yeşermesi ya da küçücük bir arının bal yapması sana neyi düşündürür? “Niçin inanıyorum?” sorusunu bu örnekle cevapla.",
          "İman ne demektir? Kelime anlamını ve dinî anlamını yaz.",
          "İslam'ın inanç esaslarını (imanın şartlarını) yaz. Bunlardan birine inanmamak imanı nasıl etkiler?",
          "İman ile salih amel arasındaki ilişkiyi kitaptaki benzetmeyle açıkla.",
          "Bir kişi, Müslümanların yanında “Ben de inanıyorum.” diyor ama kalbinden inanmıyor. Bu kişi inanç bakımından hangi grupta yer alır? Açıkla.",
          "İnsanlar inanç bakımından kaç gruba ayrılır? Her grubu tanımla.",
          "Bir kişi Müslüman olduğunu hangi sözle ifade eder? Bu sözün anlamını yaz.",
          "İslam'ın şartlarını yaz. Bunlardan ikisinin müminin hayatına katkısını açıkla.",
          "Peygamberimiz “Müslüman, dilinden ve elinden insanların selamette olduğu kişidir.” buyurmuştur. Bu hadise göre mümin kimliğine uygun iki davranış yaz.",
          "Esmayıhüsna ne demektir? Hâdi, Selam ve Vekîl isimlerinin anlamlarını yaz.",
          "Bir futbol takımı maça haftalarca hazırlanıyor. Maçtan önce kaptan “Biz elimizden geleni yaptık, sonucu Allah'a bırakıyoruz.” diyor. Bu tutum Allah'ın hangi ismiyle ve hangi kavramla ilgilidir? Açıkla.",
          "Allah'ın Selam ismini bilen bir Müslüman insanlara nasıl davranır? İki örnek ver.",
          "Namazda okunan Fatiha suresindeki “Bizi dosdoğru yola ilet.” ayeti Allah'ın hangi ismiyle ilgilidir? Neden?"],
       a:["Kur'an-ı Kerim Allah'ın emirlerini <b>bildirir</b>; sünnet bu emirlerin <b>nasıl uygulanacağını</b> gösterir. Örnek: Kur'an namazın farz olduğunu bildirir; namazın nasıl kılınacağını, vakitlerini ve rekât sayılarını Peygamberimizin sünnetinden öğreniriz.",
          "Sözlükte <b>yol, âdet, gidişat</b> demektir. Dinî terim olarak Hz. Peygamber'in <b>sözleri</b>, <b>davranışları</b> ve sahabenin yaptığı uygulamaları <b>onaylaması</b>dır.",
          "Kur'an'da zekâtın farz olduğu bildirilmiş, ayrıntısı verilmemiştir. Sünnet, Kur'an'da <b>genel olarak bildirilen hükümlerin nasıl uygulanacağını açıklayarak</b> Müslümanlara yol gösterir. Ayrıntıyı öğrenmek için bu yüzden sünnete başvururuz. Aynısı namaz ve hac için de geçerlidir.",
          "Önceki ilahi kitaplar zamanla insanlar tarafından değiştirildi, asıl metinleri günümüze ulaşmadı. Kur'an ise okunarak ve ezberlenerek korundu, <b>hiç değişmeden</b> günümüze ulaştı. Ayet: “Şüphesiz o zikri (Kur'an'ı) biz indirdik biz! Onun koruyucusu da elbette biziz.” (Hicr suresi 9)",
          "Çünkü Kur'an'ın, insanların ortaya koyamayacağı bir <b>üslubu ve anlam bütünlüğü</b> vardır. İsra suresi 88. ayette, insanlar ve cinler bir araya gelip birbirine destek olsalar bile Kur'an'ın <b>bir benzerini getiremeyecekleri</b> bildirilir.",
          "<b>Okumak</b> (Kur'an okumak ibadettir), <b>anlamak</b> (ayetler üzerinde düşünüp mesajını kavramak) ve <b>yaşamak</b> (öğrendiklerini günlük hayata geçirmek). En önemli adım yaşamaktır.",
          "İnanmak insana <b>güven duygusu</b>, <b>iç huzuru</b> ve <b>manevi dayanıklılık</b> kazandırır. İnsan kendini yalnız hissetmez, zorluklar karşısında <b>umudunu korur</b>. Ayet: “... Biliniz ki kalpler ancak Allah'ı anmakla huzur bulur.” (Rad suresi 28)",
          "<b>Fıtrat</b>, insanın yaratılıştan getirdiği inanma ihtiyacı ve iyiliğe yönelimidir. Her insan Allah'ın varlığını ve birliğini kabul etme eğilimiyle doğar; bu yüzden yüce bir varlığa inanma ve ona sığınma ihtiyacı duyar. Peygamberimiz “Her doğan çocuk fıtrat üzere doğar...” buyurmuştur.",
          "Bu düzen ve güzellikler <b>tesadüf olamaz</b>, her şey bir <b>yaratıcının varlığını</b> gösterir. Kur'an'da “Allah'ın rahmetinin izlerine bir bak: Ölü toprağa nasıl can veriyor...” (Rum suresi 50) buyrulur. Bizi yaratan, yaşatan ve sayısız nimet veren Rabbimize bu yüzden inanır, O'na şükrederiz.",
          "Kelime olarak <b>güvenmek, şüphe duymadan kabullenmek, tasdik etmek</b>. Dinî anlamı: Allah'a ve inanılması gereken bütün esaslara <b>kalp ile inanıp (tasdik edip) bunu dil ile söylemek</b>.",
          "Allah'a iman, meleklere iman, kitaplara iman, peygamberlere iman, ahiret gününe iman, kader ve kazaya iman (<b>6</b>). Bu esaslar birbirini tamamlayan, ayrılmaz bir bütündür; birine inanmamak <b>imanın bütünlüğünü bozar</b>.",
          "<b>Salih amel</b> güzel ve faydalı işlerdir. İman ile amel bir <b>ağacın kökü ile dalları</b> gibidir: kök ne kadar sağlamsa dallar da o kadar canlı olur. İman güzel davranışlarla beslenip olgunlaşır; davranışlarla beslenmeyen iman zayıflayabilir. Kur'an'da iman ve salih amel birçok yerde yan yana anılır.",
          "<b>Münafık</b> grubunda yer alır. Çünkü Allah'ın varlığına ve birliğine <b>kalben inanmadığı hâlde</b> inandığını <b>söylüyor</b>, ikiyüzlü davranıyor. Mümin olsaydı hem kalbiyle inanır hem diliyle söylerdi.",
          "<b>Üç</b> gruba ayrılır. <b>Mümin:</b> kalbiyle inanıp diliyle söyleyen kişi. <b>Kâfir:</b> İslam'ın temel esaslarını, Allah'ın varlığını ve birliğini reddettiğini açıkça söyleyen kişi. <b>Münafık:</b> kalben inanmadığı hâlde inandığını söyleyen, ikiyüzlü kişi.",
          "<b>Kelimeişehadet</b> ile: “Eşhedü ellâ ilâhe illallah ve eşhedü enne Muhammeden abdühû ve rasûlüh.” Anlamı: “Ben şehadet ederim ki Allah'tan başka ilah yoktur. Yine şehadet ederim ki Hz. Muhammed, Allah'ın kulu ve resulüdür.”",
          "Kelimeişehadet getirmek, namaz kılmak, oruç tutmak, zekât vermek, hacca gitmek (<b>5</b>). Katkılara örnek: <b>Namaz</b> zamanı planlı kullanmayı ve disiplini öğretir, kötülükten alıkoyar. <b>Oruç</b> iradeye hâkim olmayı, sabrı ve hâlden anlamayı öğretir. <b>Zekât</b> paylaşmayı ve yardımlaşmayı geliştirir, bencilliği yok eder. <b>Hac</b> Müslümanlar arasında kardeşlik ve birlik duygusunu güçlendirir. (İkisini yazman yeterli.)",
          "Örnekler: kimseye kırıcı söz söylememek, yalan söylememek, kimsenin eşyasına zarar vermemek, emanete sahip çıkmak, hata yapınca sorumluluk alıp özür dilemek. (Sözle ve davranışla kimseye zarar vermemeyi gösteren iki örnek yeterli.)",
          "Allah'ın <b>en güzel isimleri</b> demektir (esma: isimler, hüsna: en güzel). <b>Hâdi:</b> insanlara doğru yolu gösteren, rehberlik eden. <b>Selam:</b> her türlü eksiklikten uzak; kullarına güvenlik, barış ve esenlik veren. <b>Vekîl:</b> bütün varlıkların işlerini düzenleyen, koruyup gözeten, kullarının rızıklarına kefil olan.",
          "<b>Vekîl</b> ismiyle ve <b>tevekkül</b> kavramıyla ilgilidir. Tevekkül, sorumluluklarını yerine getirdikten sonra sonucu Allah'a bırakıp O'na güvenmektir. Takım önce çalışmış, sonra Allah'a güvenmiştir; çalışmadan beklemek tevekkül olmazdı.",
          "Çevresine güven verir, kimseye zarar vermez, insanlarla iyi ilişkiler kurar. Örnekler: karşılaştığı kişiye “Selamünaleyküm.” der; kendisine verilen selamı aynısıyla ya da daha güzeliyle alır; kırıcı davranmaz, sözüyle ve eliyle kimseyi incitmez. (“Selamünaleyküm – Aleykümselam” = “Allah sana sağlık, afiyet, esenlik, güven ve huzur versin.”)",
          "<b>Hâdi</b> ismiyle ilgilidir. Hâdi, doğru yolu gösteren ve rehberlik eden demektir. Bu ayetle Allah'tan <b>hidayet</b> isteriz, yani doğru yolu bulmak için yardım dileriz. Bu isteği namazın her rekâtında yenileriz."]},

      {n:"Hayatımız İbadet", w:"Kasım–Aralık–Ocak",
       lead:"İbadetin anlamını, temel ilkelerini ve hükümlerine göre ibadetleri işler. Kitaptaki bölümler: <b>2.1</b> Allah'a Yaklaşmanın Yolu: İbadet · <b>2.2</b> İbadetin Temel İlkeleri (iman, niyet, ihlas, sünnete uygunluk) · <b>2.3</b> Hükümlerine Göre İbadetler (farz, vacip, sünnet, müstehap) · <b>2.4</b> Allah'ın Güzel İsimleri: Rakib, Şekur, Hamid. 1. dönemin <b>2. yazılısı</b> bu üniteden gelir. Konu anlatımı ve sorular ünite başlarken eklenecek."},

      {n:"İslam Ölçülü Olmamızı İster", w:"Şubat–Mart–Nisan",
       lead:"Hayatın farklı alanlarında ölçülü olmayı işler. Kitaptaki bölümler: <b>3.1</b> Mahremiyette Ölçümüz · <b>3.2</b> Kardeşlikte Ölçümüz · <b>3.3</b> Tasarrufta Ölçümüz · <b>3.4</b> Allah'ın Güzel İsimleri: Hafiz, Vedud, Kerim. Konu anlatımı ve sorular ünite başlarken eklenecek."},

      {n:"İslam'la Değerlenen Hayatımız", w:"Nisan–Mayıs–Haziran",
       lead:"Müslümanın irade, ilim ve hayâ ile değer kazanan hayatını işler. Kitaptaki bölümler: <b>4.1</b> Müslüman İrade Sahibidir · <b>4.2</b> Müslüman İlim ile Yücelir · <b>4.3</b> Müslüman Hayâ ile Güzelleşir · <b>4.4</b> Allah'ın Güzel İsimleri: Muktedir, Hakim, Cemil. Konu anlatımı ve sorular ünite başlarken eklenecek."}
     ]}
  );

  /* Yıllık takvime bu dersin satırları. Kitap sayfa sayısına ve sınav tablosuna
     göre: 1. ünite 1. yazılıya (Kasım ortası), 2. ünite yarıyıl tatiline kadar;
     2. dönemde 3. ve 4. ünite. */
  (function(){
    var T = {
      eylul:"Dinimiz İslam", ekim:"Dinimiz İslam", kasim:"Dinimiz İslam / Hayatımız İbadet",
      aralik:"Hayatımız İbadet", ocak:"Hayatımız İbadet",
      subat:"İslam Ölçülü Olmamızı İster", mart:"İslam Ölçülü Olmamızı İster",
      nisan:"İslam Ölçülü Olmamızı İster / İslam'la Değerlenen Hayatımız",
      mayis:"İslam'la Değerlenen Hayatımız", haziran:"İslam'la Değerlenen Hayatımız"
    };
    CAL6.forEach(function(r){ if(r.items && T[r.key]) r.items.push(["tdb", T[r.key]]); });
  })();

  /* ---------- ana test: ünite başına 10 ---------- */
  Q6.tdb = [
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"“Andolsun, Allah'ın Resulü'nde sizin için ... güzel bir örnek vardır.” (Ahzab suresi 21)\n\nBu ayete göre Müslümanlar Peygamberimizin hayatına nasıl bakmalıdır?", o:["Kendi davranışlarına yön veren bir örnek olarak","Yalnızca geçmişte kalmış bir hikâye olarak","Sadece sahabeyi ilgilendiren bir konu olarak","Sadece ibadetlerde uyulacak bir rehber olarak"], a:0,
     w:"Ayet Peygamberimizin Müslümanlar için güzel bir örnek olduğunu bildirir. O yalnız ibadetiyle değil ahlakıyla, kişiliğiyle ve aile hayatıyla da örnektir. Bu örnek hayata sünnet denir."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Kur'an'da namaz kılmanın farz olduğu bildirilmiştir. Namazın vakitleri, rekât sayıları ve nasıl kılınacağı ise ayrıntılı olarak nereden öğrenilir?", o:["Peygamberimizin sünnetinden","Tevrat ve İncil'den","Kur'an'daki peygamber kıssalarından","Hac ibadetinin kurallarından"], a:0,
     w:"Kur'an bazı hükümleri genel olarak bildirir, ayrıntıyı sünnet açıklar. Peygamberimiz “Beni nasıl namaz kılıyor gördüyseniz siz de namazı öyle kılınız.” buyurmuştur."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"“Sünnet” kavramının dinî terim anlamı aşağıdakilerden hangisidir?", o:["Hz. Peygamber'in sözleri, davranışları ve sahabenin uygulamalarını onaylaması","Kur'an ayetlerinin sahabe tarafından ezberlenip yazılarak korunması","Müslümanların her gün belirli vakitlerde kılması gereken farz namazlar","Allah'ın insanlara Hz. Muhammed aracılığıyla gönderdiği son ilahi kitap"], a:0,
     w:"Sünnet sözlükte “yol, âdet, gidişat” demektir. Terim olarak Peygamberimizin sözü, davranışı ve onayıdır. Son ilahi kitap ise Kur'an'dır; sünnet bir kitap değildir."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"“Şüphesiz o zikri (Kur'an'ı) biz indirdik biz! Onun koruyucusu da elbette biziz.” (Hicr suresi 9)\n\nBu ayet Kur'an'ın hangi özelliğini vurgular?", o:["Değişmeden günümüze ulaşmasını","Peygamberimizin en büyük mucizesi olmasını","Okunmasının ibadet sayılmasını","Ayetleri üzerinde düşünülmesi gerektiğini"], a:0,
     w:"Ayet Kur'an'ın korunacağını bildirir. Önceki ilahi kitaplar değiştirildi; Kur'an ise okunarak ve ezberlenerek hiç değişmeden günümüze ulaştı."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"İnanmanın insan hayatına katkılarıyla ilgili aşağıdakilerden hangisi SÖYLENEMEZ?", o:["İnsana iç huzuru ve güven duygusu verir.","Zorluklar karşısında umudunu korumasına yardım eder.","İnsana bu dünyada yalnız olmadığını hissettirir.","İnsanı yapması gereken sorumluluklardan kurtarır."], a:3,
     w:"İnanmak sorumluluğu kaldırmaz; mümin üzerine düşeni yapar, sonra Allah'a güvenir. Huzur, güven, manevi dayanıklılık ve yalnız olmadığını hissetmek ise inanmanın kazandırdıklarıdır."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Her insanın doğuştan getirdiği, yüce bir yaratıcıya inanma eğilimine ne ad verilir?", o:["Fıtrat","Tevekkül","Salih amel","Hidayet"], a:0,
     w:"Fıtrat, yaratılıştan gelen inanma ihtiyacı ve iyiliğe yönelimdir. Peygamberimiz “Her doğan çocuk fıtrat üzere doğar...” buyurmuştur."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Kalben inanmadığı hâlde Müslümanların arasında inandığını söyleyen kişiye ne denir?", o:["Kâfir","Münafık","Mümin","Hanif"], a:1,
     w:"Münafık ikiyüzlüdür: dili “inanıyorum” der, kalbi inanmaz. Kâfir ise inanmadığını açıkça söyler; mümin hem kalbiyle inanır hem diliyle söyler."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Aşağıdakilerden hangisi İslam'ın inanç esaslarından biri DEĞİLDİR?", o:["Meleklere iman","Ahiret gününe iman","Zekât vermek","Kader ve kazaya iman"], a:2,
     w:"Zekât vermek İslam'ın şartlarındandır, inanç esası değildir. Meleklere, ahiret gününe, kader ve kazaya iman ise inanç esaslarıdır."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Kitaba göre insana sabretmeyi, iradesine hâkim olmayı ve ihtiyaç sahiplerinin hâlinden anlamayı öğreten ibadet hangisidir?", o:["Namaz","Oruç","Zekât","Hac"], a:1,
     w:"Oruç tutan kişi yemekten ve içmekten uzak durarak sabrı ve iradesine hâkim olmayı öğrenir, ihtiyaç sahiplerinin hâlini anlar. Namaz disiplin, zekât paylaşma, hac kardeşlik kazandırır."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"“Kullarını doğru yola ileten, onlara rehberlik eden” anlamına gelen güzel isim hangisidir?", o:["Hâdi","Selam","Vekîl","Hamid"], a:0,
     w:"Hâdi doğru yolu gösteren demektir. Namazda okunan “Bizi dosdoğru yola ilet.” ayetiyle bu isme yöneliriz."}
  ];

  /* ---------- havuz: yalnız Yanlışlarım'da çıkar, ünite başına 5 ---------- */
  H6.tdb = [
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Kur'an-ı Kerim'in Peygamberimizin en büyük mucizesi sayılmasının sebebi aşağıdakilerden hangisidir?", o:["İnsanların ve cinlerin onun bir benzerini getirememesi","Mekke'de ve Medine'de indirilmiş olması","Ramazan ayında indirilmeye başlanmış olması","Sahabe tarafından ezberlenmiş olması"], a:0,
     w:"İsra suresi 88. ayete göre insanlar ve cinler toplanıp birbirine destek olsa da Kur'an'ın benzerini getiremez; çünkü insanların ortaya koyamayacağı bir üslubu ve anlam bütünlüğü vardır."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Peygamberimiz, Kur'an'da geçen “orta namaz” ifadesinin hangi namaz olduğunu açıklamıştır. Orta namaz hangisidir?", o:["Sabah namazı","Öğle namazı","İkindi namazı","Yatsı namazı"], a:2,
     w:"Peygamberimiz “Orta namaz, ikindi namazıdır.” buyurmuştur. Bu, sünnetin Kur'an'daki ifadeleri açıkladığına bir örnektir."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Aşağıdakilerden hangisi İslam'ın beş şartından biri DEĞİLDİR?", o:["Kelimeişehadet getirmek","Hacca gitmek","Oruç tutmak","Kitaplara iman etmek"], a:3,
     w:"Kitaplara iman bir inanç esasıdır, İslam'ın şartlarından değildir. İslam'ın şartları: kelimeişehadet getirmek, namaz kılmak, oruç tutmak, zekât vermek, hacca gitmek."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"“Müslüman, dilinden ve elinden insanların selamette olduğu kişidir.” hadisine göre bir Müslüman nasıl davranır?", o:["Sözüyle ve davranışıyla kimseye zarar vermez.","Yalnızca kendi ibadetleriyle ilgilenir.","İnsanlardan uzak, yalnız yaşar.","Sadece tanıdığı kişilere iyi davranır."], a:0,
     w:"“Dilinden ve elinden selamette olmak”, o kişinin sözünden de davranışından da kimsenin zarar görmemesi demektir."},
    {u:"ÜNİTE 1 · Dinimiz İslam", q:"Elinden gelen çabayı gösterdikten sonra sonucu Allah'a bırakıp O'na güvenmeye ne ad verilir?", o:["Tasdik","Tevekkül","Fıtrat","Hidayet"], a:1,
     w:"Tevekkül önce çalışmak, sonra Allah'a güvenmektir; Vekîl ismiyle ilgilidir. Tasdik doğrulamak, fıtrat yaratılıştan gelen inanma ihtiyacı, hidayet doğru yola iletmedir."}
  ];

  /* ---------- ek çalışma seti ----------
     "EK · 1. Yazılı Hazırlık" (26): sınav tablosundaki dört bölüm sırayla —
     1.1 (6), 1.2 (7), 1.3 (8), 1.4 (5). Sınavda şık olmayacak; buradaki sorular
     kavramları ayırt etmek ve öğretmenin soru tipini (durum → “bu neyi gösterir?”)
     tanımak için. */
  EKC6.tdb = [
    {u:"EK · 1. Yazılı Hazırlık", q:"Kadir Bey zekât vermek istiyor ama hangi mallardan ne kadar vereceğini bilmiyor. Kur'an'da zekâtın farz olduğu bildirilmiş, ayrıntısı verilmemiştir.\n\nKadir Bey bu ayrıntıyı öğrenmek için en doğru olarak neye başvurmalıdır?", o:["Peygamberimizin uygulamalarına","Komşularının ne kadar verdiğine","Kendi gelirine göre yaptığı tahmine","Önceki ilahi kitaplara"], a:0,
     w:"Hangi mallardan ne kadar zekât verileceği Peygamberimizin uygulamalarıyla ortaya konmuştur. Öğretmenin namaz sorusu da aynı mantıktadır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz “Hacda yapacağınız ibadetleri benden öğrenin...” buyurmuştur.\n\nBu söz aşağıdakilerden hangisini gösterir?", o:["Hac ibadetinin nasıl yapılacağını sünnetin açıkladığını","Hac ibadetinin Kur'an'da hiç geçmediğini","Haccın yalnızca Peygamberimizin döneminde farz olduğunu","Hacca giden herkesin Kur'an'ı ezberlemesi gerektiğini"], a:0,
     w:"Haccın farz olduğu Kur'an'da bildirilir; zamanı, şartları ve uygulanışı sünnetle belirlenmiştir. Peygamberimiz bu ibadeti bizzat yaparak göstermiştir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kur'an'ın rehberliğinin hayatımızda ortaya çıkması için gereken adımlar hangi seçenekte doğru sırayla verilmiştir?", o:["Okumak → anlamak → yaşamak","Anlamak → yaşamak → okumak","Ezberlemek → yazmak → saklamak","Dinlemek → ezberlemek → saklamak"], a:0,
     w:"Önce okunur (okumak ibadettir), sonra ayetler üzerinde düşünülüp anlaşılır, en sonunda mesajı hayata geçirilir. En önemli adım yaşamaktır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz “Sizin en hayırlınız, Kur'an'ı öğrenen ve öğretendir.” buyurmuştur.\n\nBu hadisten çıkarılabilecek sonuç hangisidir?", o:["Kur'an'ı öğrenmek ve öğretmek değerli bir davranıştır.","Kur'an'ı yalnızca yaşı büyük olanlar öğrenmelidir.","Kur'an'ı öğrenen kişinin başka bir şey öğrenmesine gerek yoktur.","Kur'an yalnızca öğretmenler tarafından okunmalıdır."], a:0,
     w:"Hadis, Kur'an'ı öğrenenleri ve öğretenleri “en hayırlı” sayar; yani bu iş çok değerlidir. Seçeneklerdeki “yalnızca” ve “gerek yoktur” gibi sınırlamalar hadiste yoktur."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kur'an'da “Namazları ve orta namazı aksatmadan kılın...” buyrulur. Peygamberimiz de “Orta namaz, ikindi namazıdır.” demiştir.\n\nBu örnek sünnetin hangi görevini gösterir?", o:["Kur'an'daki ifadeleri açıklayıp anlaşılmasını kolaylaştırmak","Kur'an'a yeni ibadetler eklemek","Kur'an ayetlerinin yazılmasını sağlamak","Önceki ilahi kitapları düzeltmek"], a:0,
     w:"Ayetteki “orta namaz” ifadesinin hangi namaz olduğu açık değildi; Peygamberimiz bunun ikindi namazı olduğunu söyleyerek açıkladı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Emre yemeğe besmeleyle başlar, tabağında yemek bırakmaz, sofrayı toplarken annesine yardım eder.\n\nEmre'nin bu davranışları en çok neyi gösterir?", o:["Peygamberimizin örnek davranışlarını hayatına taşıdığını","Kur'an'ı ezberlemeye çalıştığını","Zekât vermeye hazırlandığını","Yalnızca çevresindekilerin onu övmesini istediğini"], a:0,
     w:"Besmeleyle başlamak, israftan kaçınmak ve anne babaya iyilik etmek Peygamberimizin örnek davranışlarındandır."},

    {u:"EK · 1. Yazılı Hazırlık", q:"Kupkuru toprağın baharda rengârenk çiçeklerle donandığını gören bir öğrenci “Bu düzen kendiliğinden olamaz.” diyor.\n\nÖğrencinin bu düşüncesi “Niçin inanıyorum?” sorusuna hangi cevabı verir?", o:["Evrendeki düzen bir yaratıcının varlığını gösterir.","Doğadaki olayların hepsi tesadüfen olur.","İnsan yalnızca gözüyle gördüğüne inanmalıdır.","Bitkiler kendi kendini yaratır."], a:0,
     w:"“Allah'ın rahmetinin izlerine bir bak: Ölü toprağa nasıl can veriyor...” (Rum suresi 50). Evrendeki düzen tesadüf değildir; bir yaratıcıyı gösterir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Ameliyata girecek olan Elif, Allah'ın kendisini yalnız bırakmayacağına inandığı için korkusuna yenilmiyor, sakin ve umutlu kalabiliyor.\n\nBu durum inanmanın insana neyi kazandırdığını gösterir?", o:["Güven duygusu ve manevi dayanıklılık","Ameliyatın nasıl yapılacağına dair bilgi","Doktorlara ihtiyaç duymama düşüncesi","Başkalarından üstün olma duygusu"], a:0,
     w:"İnanmak insana yalnız olmadığını hissettirir; güven duygusu ve manevi dayanıklılık kazandırır, zor anda umudu korur. Öğretmenin dağcı sorusunun cevabı da budur."},
    {u:"EK · 1. Yazılı Hazırlık", q:"“... Biliniz ki kalpler ancak Allah'ı anmakla huzur bulur.” (Rad suresi 28)\n\nBu ayet inanmanın insana hangi katkısını anlatır?", o:["İç huzuru","Hiç üzülmeme","Herkesin sevgisi","Hastalıktan korunma"], a:0,
     w:"Ayet, kalbin huzurunu Allah'ı anmaya bağlar. İnanmak insana derin bir iç huzuru verir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"“İman” kelimesinin sözlük anlamı aşağıdakilerden hangisidir?", o:["Güvenmek, şüphe duymadan kabullenmek, tasdik etmek","Teslim olmak, güven ve emniyet içinde bulunmak","Yol, âdet ve gidişat; insanın tuttuğu yol","Okumak, toplamak ve bir araya getirmek"], a:0,
     w:"İman: güvenmek, şüphesiz kabullenmek, tasdik etmek. “Teslim olmak, güven ve emniyette bulunmak” İslam kelimesinin, “yol, âdet, gidişat” sünnetin, “okumak, toplamak” Kur'an kelimesinin anlamıdır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İslam dinine göre imanın iki unsuru hangi seçenekte birlikte verilmiştir?", o:["Kalp ile tasdik etmek ve dil ile söylemek","Namaz kılmak ve oruç tutmak","Kur'an okumak ve ezberlemek","Hacca gitmek ve zekât vermek"], a:0,
     w:"İman, inanılması gerekenleri kalp ile tasdik edip dil ile söylemektir. Diğer seçeneklerdekiler ibadetlerdir; imanın unsurları değildir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İman ile salih amel arasındaki ilişki kitapta hangi benzetmeyle anlatılır?", o:["Bir ağacın kökü ile dalları","Bir binayı ayakta tutan sütunlar","Sabah aç çıkıp akşam tok dönen kuşlar","Baharda yeniden canlanan toprak"], a:0,
     w:"İman kök, salih ameller dallardır: kök sağlam olursa dallar canlı olur. İman güzel davranışlarla beslenip olgunlaşır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Amentü duasındaki “Ölümden sonra diriliş gerçektir.” ifadesi hangi inanç esasıyla ilgilidir?", o:["Ahiret gününe iman","Meleklere iman","Kitaplara iman","Peygamberlere iman"], a:0,
     w:"Ölümden sonra diriliş ve ebedî hayat ahiret inancının konusudur."},

    {u:"EK · 1. Yazılı Hazırlık", q:"Selin, Allah'ın var ve bir olduğuna, Hz. Muhammed'in de O'nun kulu ve elçisi olduğuna kalbiyle inanıyor ve bunu diliyle de söylüyor.\n\nSelin inanç bakımından hangi grupta yer alır?", o:["Mümin","Münafık","Kâfir","Hanif"], a:0,
     w:"Kalbiyle inanıp diliyle söyleyen kişi mümindir. Cevapta iki şartı da yaz: kalbiyle inanıyor ve diliyle söylüyor."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Allah'ın varlığını ve birliğini, İslam'ın temel esaslarını reddettiğini açıkça söyleyen kişiye ne denir?", o:["Münafık","Kâfir","Mümin","Hanif"], a:1,
     w:"Kâfir gerçeği bile bile reddeder ve bunu açıkça söyler. Münafık ise inanmadığını gizler, “inanıyorum” der."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz münafığın üç alametini saymıştır. Aşağıdakilerden hangisi bunlardan biri DEĞİLDİR?", o:["Konuştuğunda yalan söylemek","Kendisine emanet edilene ihanet etmek","Söz verdiğinde sözünde durmamak","Hata yaptığında özür dilemek"], a:3,
     w:"Hadiste üç alamet sayılır: yalan söylemek, emanete ihanet etmek, sözünde durmamak. Hatayı kabul edip özür dilemek ise müminin güzel davranışıdır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Bir kişinin İslam dinine girdiğini ve mümin kimliğini ifade ettiği söz hangisidir?", o:["Kelimeişehadet","Besmele","Elhamdülillah","Selamünaleyküm"], a:0,
     w:"Kelimeişehadet (“Eşhedü ellâ ilâhe illallah ve eşhedü enne Muhammeden abdühû ve rasûlüh”) mümin olmanın anahtarıdır. Besmele işe başlarken, Elhamdülillah şükrederken, Selamünaleyküm selamlaşırken söylenir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kitapta İslam'ın beş şartı, bir binayı ayakta tutan ana sütunlara benzetilir.\n\nBu benzetmeyle anlatılmak istenen nedir?", o:["Bu şartların İslam'ın temelini oluşturduğu","İslam'ın yalnızca ibadetlerden oluştuğu","Bu şartların yalnız büyükleri ilgilendirdiği","Şartlardan birini yerine getirmenin yeteceği"], a:0,
     w:"Sütunlar binayı ayakta tutar; İslam'ın beş şartı da İslam'ın temelini oluşturur, müminin ibadet hayatını ve ahlakını inşa eder."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İbadetlerle müminin hayatına katkıları eşleştirilmiştir. Hangisi DOĞRUDUR?", o:["Namaz – zamanı planlı kullanma ve disiplin","Zekât – günde beş vakit Allah'ın huzuruna çıkma","Hac – ramazan ayı boyunca sabretmeyi öğrenme","Oruç – malın bir kısmını her yıl ihtiyaç sahibine verme"], a:0,
     w:"Beş vakit namaz zamanı planlı kullanmayı ve disiplini öğretir. Günde beş vakit Allah'ın huzuruna çıkmak namazdır, ramazan boyunca sabır oruçtur, malın bir kısmını vermek zekâttır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Teneffüste top oynarken sınıfın camını çatlatan Kaan, kimse görmemiş olmasına rağmen durumu öğretmenine anlatıyor.\n\nKaan'ın davranışı mümin kimliğinin hangi özelliklerini yansıtır?", o:["Dürüstlük ve sorumluluk","Cömertlik ve paylaşma","Sabır ve tevekkül","Temizlik ve düzen"], a:0,
     w:"Kimse görmese de doğruyu söylemek dürüstlük, yaptığının sonucunu üstlenmek sorumluluktur. Mümin ibadetlerini ahlakına da yansıtır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz “Müminlerin iman bakımından en mükemmeli, ahlak bakımından en güzel olanıdır.” buyurmuştur.\n\nBu hadise göre iman ile ahlak arasındaki ilişki nedir?", o:["İman ile güzel ahlak birbirini tamamlar.","Güzel ahlak yalnızca ibadetle ilgilidir.","İman güçlendikçe ahlakın önemi azalır.","Ahlak, imandan bağımsız bir konudur."], a:0,
     w:"Hadis imanın olgunluğunu güzel ahlaka bağlar: iman ile güzel ahlak birbirini tamamlayan iki parçadır."},

    {u:"EK · 1. Yazılı Hazırlık", q:"“Esmayıhüsna” ne demektir?", o:["Allah'ın en güzel isimleri","Peygamberimizin sözleri","İslam'ın beş şartı","Kur'an'ın ilk ayetleri"], a:0,
     w:"Esma “isimler”, hüsna “en güzel” demektir. Peygamberimiz Allah'ın doksan dokuz ismi olduğunu bildirmiştir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Ahmet Amca tarlasını sürdü, tohumunu ekti, düzenli olarak suladı. Sonra “Ben üzerime düşeni yaptım, gerisini Rabbime bırakıyorum.” dedi.\n\nAhmet Amca'nın tutumu Allah'ın hangi ismiyle ilgilidir?", o:["Vekîl","Selam","Hâdi","Hamid"], a:0,
     w:"Önce çalışıp sonra sonucu Allah'a bırakmak tevekküldür; Vekîl ismiyle ilgilidir. Vekîl, işleri düzenleyen ve koruyup gözeten demektir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"“Her türlü eksiklikten uzak olan, kullarına güvenlik, barış ve esenlik veren” anlamına gelen isim hangisidir?", o:["Vekîl","Hâdi","Selam","Şekur"], a:2,
     w:"Selam ismini bilen Müslüman selamlaşır, çevresine güven verir, kimseye zarar vermez."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Namazın her rekâtında okunan Fatiha suresindeki “Bizi dosdoğru yola ilet.” duası Allah'ın en çok hangi ismiyle ilgilidir?", o:["Selam","Vekîl","Kerim","Hâdi"], a:3,
     w:"Hâdi doğru yolu gösteren demektir. Bu duayla Allah'tan hidayet isteriz ve bu isteği her rekâtta yenileriz."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Müslümanların birbirine “Selamünaleyküm.” demesinin anlamı aşağıdakilerden hangisidir?", o:["Allah sana sağlık, afiyet ve esenlik versin.","Allah bize yeter, O ne güzel vekildir.","Allah'tan başka ilah yoktur, Muhammed O'nun elçisidir.","Bizi dosdoğru yola ilet."], a:0,
     w:"“Selamünaleyküm – Aleykümselam” karşılıklı bir duadır: selam veren de alan da karşısındakine sağlık, afiyet, esenlik, güven ve huzur diler."}
  ];
