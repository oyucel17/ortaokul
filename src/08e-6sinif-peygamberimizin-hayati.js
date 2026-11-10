  /* ===================== 6. SINIF · PEYGAMBERİMİZİN HAYATI =====================
     İmam hatip ortaokulunda haftada 2 saatlik ders. Diğer derslerden farklı
     olarak dersin TAMAMI bu dosyada: ünite anlatımı (S6'ya eklenir), yıllık
     takvim satırları (CAL6), ana test (Q6.pey), havuz (H6.pey) ve ek çalışma
     setleri (EKC6.pey). build.sh'te 08d'den SONRA, 09'dan ÖNCE gelmeli —
     S6, CAL6, Q6, H6 ve EKC6 tanımlanmış olmalı.

     KAYNAK (10 Kasım 2026'da doğrulandı):
     - Ünite adları: tymm.meb.gov.tr/ogretim-programlari/peygamberimizin-hayati-dersi-temel-egitim/7
       (URL'deki 7 = 6. sınıf). Ünite sayfaları başında /ogretim-programlari OLMADAN açılır:
       tymm.meb.gov.tr/peygamberimizin-hayati-dersi-temel-egitim/unite/206 … 209 (öbür türlü 500 veriyor).
     - Konu anlatımı: MEB 6. sınıf ders kitabı (2026 baskı), tymm.meb.gov.tr/kitap/536.
       1. ünite s. 10–43. Kitabın metni ve soruları teliflidir: buradaki anlatım ve
       sorular kendi cümlelerimizle yazıldı, kitaptan soru KOPYALAMA.
     - Sınav kapsamı: il ÖDM konu-soru dağılım tablosu (Antalya, 2026–2027). 1. dönem
       1. yazılı = 5 / 6 / 7 açık uçlu soru; PH.6.1.1'den (Ahlaki Özellikleri) 5 soru,
       PH.6.1.2'den (Vahyin Gelişi) 0 / 1 / 2 soru — yalnız sınava kadar işlenen kısım.
       Bu dersin ülke geneli tablosu yok; senaryoyu okulun zümresi seçer.
     - Yaşlar (20 / 25 / 35 / 40) ders kitabında YAZMIYOR; siyer kaynaklarındaki yaygın
       bilgi olarak, uyarısıyla birlikte verildi.

     2–4. ünitelerde şimdilik yalnız resmî ad ve kapsam var; anlatım ve sorular
     aylık bakımda, ünite başlamadan önce yazılacak. */

  S6.push(
    {key:"pey", name:"Peygamberimizin Hayatı", color:"var(--s-pey)", meta:"4 ünite · MEB TYMM resmî program · haftada 2 saat", lbl:"ÜNİTE",
     note:"Ünite adları MEB'in resmî programından, konu anlatımının sırası MEB'in 2026 baskılı ders kitabından alındı. <b>1. dönem 1. yazılı</b> açık uçlu sorulardan oluşur ve 1. ünitenin <b>Ahlaki Özellikleri</b> bölümü ağırlıklıdır: il konu-soru dağılım tablosunda (2026–2027, Antalya örneği) 5–7 sorunun <b>5'i</b> bu bölümden, en çok <b>2'si</b> Vahyin Gelişi'nin sınava kadar işlenen kısmından gelir. Hangi senaryonun seçildiğini ve nereye kadar sorulacağını öğretmenden öğren; defterine yazdırdıkları her zaman önceliklidir.",
     units:[
      {n:"Gençlik Yıllarında Peygamberimiz", w:"Eylül–Ekim–Kasım", t:["ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz","EK · 1. Yazılı Hazırlık","EK · Peygamberlik Yılları"],
       lead:"Ünite iki bölümdür. <b>1.1 Ahlaki Özellikleri:</b> Peygamberimiz peygamber olmadan önce de Mekke'nin en güvendiği insandı; bu bölüm bunu gösteren olayları anlatır (Emin sıfatı, Hilfülfudul, ticaret, Hz. Hatice ile evlilik, Kâbe hakemliği). <b>1.2 Vahyin Gelişi:</b> Hira'da tefekkür, ilk vahiy ve peygamberlik yıllarının kısa özeti. 1. yazılının ağırlığı <b>1.1</b>'dedir. Sorular açık uçlu olduğu için bir olayı <b>kendi cümlelerinle anlatabilmen</b> ve <b>hangi ahlaki özelliği gösterdiğini</b> yazabilmen gerekir.",
       voc:[["emin","kendisine güvenilen, sözünde duran kimse"],
            ["Muhammedülemin","“Güvenilir Muhammed”; Mekkelilerin ona verdiği ad"],
            ["Cahiliye Dönemi","İslam'dan önce haksızlığın ve kötü ahlakın yaygın olduğu dönem"],
            ["Hilfülfudul","haksızlığa uğrayanları korumak için yapılan antlaşma"],
            ["Erdemliler Cemiyeti","Hilfülfudul'a katılan topluluk"],
            ["tahire","“tertemiz kadın”; Hz. Hatice'nin lakabı"],
            ["Ebülkasım","“Kasım'ın babası”; Peygamberimizin künyesi"],
            ["Hacerülesved","Kâbe'deki kutsal taş; tavafın başlangıç noktası"],
            ["Kâbe hakemliği","Hacerülesved anlaşmazlığını Peygamberimizin çözdüğü olay"],
            ["hanif","puta tapmayan, Hz. İbrahim'in dinine bağlı, tek Allah'a inanan kişi"],
            ["tevhit","Allah'ın bir olduğuna inanma"],
            ["müşrik","Allah'a ortak koşan, putlara tapan kişi"],
            ["tefekkür","derin düşünme, kavramaya çalışma"],
            ["Hira","Nur Dağı'ndaki mağara; tefekkürün ve ilk vahyin yeri"],
            ["vahiy","Allah'ın, mesajını peygamberine bildirmesi"],
            ["Cebrail","vahiy getiren melek"],
            ["risalet","peygamberlik; vahyi alıp insanlara duyurma görevi"],
            ["tebliğ","Allah'ın mesajını insanlara bildirme"],
            ["Darülerkam","Erkam'ın evi; Mekke'de ilk davet merkezi"],
            ["hicret","inancını özgürce yaşamak için başka bir yere göç"],
            ["muhacir","Mekke'den Medine'ye hicret eden Müslüman"],
            ["ensar","muhacirlere yardım eden Medineli Müslüman"],
            ["biat","bağlılık sözü verme"],
            ["Sevr","hicrette üç gün gizlenilen mağara"]],
       p:["<b>Gençlik yılları:</b> Peygamberimiz gençliğini amcası <b>Ebu Talib</b>'in yanında geçirdi. Mekke'nin geçim kaynağı olan <b>ticaretle</b> uğraştı; amcasıyla başka şehir ve ülkelere gitti.",
          "<b>Güzel ahlakı:</b> küçüklere sevgi, büyüklere saygı gösterir; yardıma muhtaç olana elinden geleni yapardı. Adil, çalışkan ve yardımseverdi.",
          "<b>Emin:</b> “güvenilir” demektir. Mekkeliler kıymetli eşyalarını ona emanet eder, o da <b>eksiksiz</b> geri verirdi. Bu yüzden ona <b>Muhammedülemin</b> (Güvenilir Muhammed) dediler.",
          "<b>Cahiliye Dönemi:</b> İslam'dan önce Mekke'de ve bütün Arap toplumunda kötü ahlakın ve haksızlığın yaygın olduğu dönem. Puta tapılır, güçsüzler ezilir, kadınlara ve kız çocuklarına değer verilmezdi; kabile savaşları, kan davası, kumar ve falcılık yaygındı. Peygamberimiz bu kötü ahlakı <b>hiç benimsemedi</b>.",
          "Kur'an onun ahlakını över: <b>Kalem suresi 4. ayette</b> üstün bir ahlaka sahip olduğu bildirilir.",
          "<b>Hilfülfudul:</b> haksızlığa uğrayan <b>herkesin</b> hakkını savunmak için yapılan antlaşma. Peygamberimiz gençken katıldı (ayrıntısı aşağıdaki kutuda).",
          "<b>Ticarette dürüstlük:</b> kimseyi aldatmaz, verdiği sözü tutardı. <b>Abdullah bin Ebu Hamsa</b> bir alışverişte ona borçlandı; “Biraz bekle, borcumu hemen getireceğim.” deyip ayrıldı ama sözünü unuttu. Üç gün sonra geldiğinde Peygamberimizi <b>aynı yerde bekler</b> buldu. Peygamberimiz ona kızmadı, yalnızca kendisini çok beklettiğini söyledi. Bu olay onun <b>vefalı, dürüst ve anlayışlı</b> olduğunu gösterir.",
          "<b>Hz. Hatice:</b> dürüst, zeki, başarılı bir tüccardı; temiz ahlakı sebebiyle <b>Tahire</b> (tertemiz kadın) diye anılırdı. Ticaret kervanının sorumluluğunu Peygamberimize verdi; yardımcısı <b>Meysere</b>'yi de kervanla gönderdi. Meysere dönüşte Peygamberimizin ahlakını övdü. Bunun üzerine Hz. Hatice bir arkadaşı aracılığıyla <b>evlilik teklif etti</b>; Peygamberimiz kabul etti.",
          "<b>Evlilikleri</b> sevgi, saygı ve güvene dayanıyordu. Peygamberlik geldiğinde bunu <b>ilk</b> Hz. Hatice'ye anlattı; Hz. Hatice ona ilk inanan kişi oldu ve bütün servetiyle arkasında durdu.",
          "<b>Hz. Hatice'den olan çocukları (6):</b> oğulları <b>Kasım</b> ve <b>Abdullah</b> küçük yaşta vefat etti; kızları doğum sırasıyla <b>Zeyneb, Rukiye, Ümmü Gülsüm</b> ve <b>Fatıma</b>'dır. İlk oğlu Kasım'dan dolayı künyesi <b>Ebülkasım</b>'dır. (Hz. Hatice'nin vefatından yıllar sonra Hz. Mariye'den <b>İbrahim</b> adında bir oğlu daha oldu; o da bebekken vefat etti.)",
          "<b>Kız çocuklarına değer:</b> kızların hor görüldüğü bir toplumda ilk kızına <b>Zeyneb</b> (“babasının süsü”) adını verdi. Kızı Fatıma evlendikten sonra da onu ziyaret edip dertlerini dinledi. Bir sahabi malının bir kısmını çocuklarından yalnız birine bağışlayıp Peygamberimizi buna şahit tutmak isteyince, ona <b>çocukları arasında adaletli olmasını</b> söyledi.",
          "<b>Kâbe hakemliği:</b> Kâbe onarılırken <b>Hacerülesved</b>'i yerine kimin koyacağı kavgasını, bütün aileleri işe ortak ederek çözdü (ayrıntısı kutuda).",
          "<b>Hira ve ilk vahiy:</b> toplumdaki kötülüklere çözüm düşünmek için <b>Hira Mağarası</b>'nda tefekkür ederdi. <b>610</b> yılının Ramazan ayında, Kadir Gecesi'nde <b>Cebrail</b> ilk vahyi getirdi; böylece <b>risalet</b> (peygamberlik) görevi başladı."],
       box:[{t:"Hilfülfudul — beş soruda", h:"<ul><li><b>Nedir?</b> Haksızlığa uğrayanların hakkını savunmak için yapılan antlaşma. Katılanlara <b>Erdemliler Cemiyeti</b> denir.</li><li><b>Ne zaman?</b> İslam'dan <b>önce</b>, Peygamberimizin gençliğinde. Kabile savaşları yüzünden Mekke'de can ve mal güvenliği kalmamıştı.</li><li><b>Nerede?</b> <b>Abdullah bin Cüdan</b>'ın evinde. Haşimoğulları'ndan <b>Zübeyr bin Abdülmuttalib</b> ile Hz. Muhammed de oradaydı.</li><li><b>Kimi korur?</b> Dili, dini, ırkı ne olursa olsun haksızlığa uğrayan <b>herkesi</b>.</li><li><b>Amaçları:</b> zulmü engellemek · adaleti hâkim kılmak · güvenliği sağlamak · hakkı korumak.</li></ul><p>Peygamberimiz yıllar sonra bu antlaşmayı <b>en kıymetli dünya mallarından daha değerli</b> saydığını, İslam döneminde çağrılsa <b>yine katılacağını</b> söylemiştir. Demek ki haksızlığa karşı durmak her dönemde doğrudur.</p>"},
            {t:"Kâbe hakemliği — adım adım", h:"<ul><li><b>Sorun:</b> deprem ve sel yüzünden yıpranan Kâbe onarılıyordu. Sıra <b>Hacerülesved</b>'i yerine koymaya gelince her aile bu şerefi kendisi istedi; iş kavgaya varacaktı.</li><li><b>Hakem nasıl seçildi?</b> En yaşlıları “Kapıdan ilk giren hakemimiz olsun.” dedi. İçeri giren <b>Hz. Muhammed</b>'di; herkes sevindi, çünkü onu adaletli ve güvenilir bilirlerdi.</li><li><b>Çözüm:</b> hırkasını yere serdi, taşı ortasına koydu; her ailenin bir büyüğü hırkanın kenarından tutup taşı birlikte taşıdı. Taşı yerine <b>Peygamberimiz kendi elleriyle</b> yerleştirdi.</li><li><b>Sonuç:</b> şerefli göreve bütün aileler ortak oldu, kavga çıkmadı.</li></ul><p>Bu olay onun <b>adaletli, güvenilir, akıllı</b> ve <b>insanları uzlaştıran</b> biri olduğunu gösterir.</p>"},
            {t:"Hira'da tefekkür ve ilk vahiy", h:"<ul><li><b>Mekke'de inanç:</b> halkın çoğu puta tapıyordu. Puta tapmayan, Hz. İbrahim'in dinine bağlı kalıp tek Allah'a inanan (<b>tevhit</b>) kişiler de vardı; bunlara <b>hanif</b> denir.</li><li><b>Neden Hira?</b> Puta tapmayı akıl dışı buluyor, güçlünün haklı sayıldığı Mekke'deki zulme üzülüyordu. Yanlışlardan uzak kalmak ve çözüm düşünmek için Nur Dağı'ndaki <b>Hira Mağarası</b>'na gider, günlerce <b>tefekkür</b> ederdi. Hz. Hatice de ona destek olurdu.</li><li><b>Olağan dışı hâller:</b> gece gördüğü rüyalar gündüz aynen çıkıyor, kendisine selam verildiğini işitiyor ama bakınca ağaç ve taştan başka bir şey görmüyordu.</li><li><b>İlk vahiy:</b> <b>610</b>, Ramazan ayı, Kadir Gecesi. <b>Cebrail</b> “Oku!” dedi; Peygamberimiz “Ben okuma bilmem.” diye cevap verdi. Bu üç kez tekrarlandı, sonra Cebrail <b>Alak suresinin ilk beş ayetini</b> okudu.</li><li><b>Sonrası:</b> heyecan ve endişeyle eve döndü. <b>Hz. Hatice</b> onu teselli etti ve Tevrat'ı, İncil'i iyi bilen kendi amcasının oğlu <b>Varaka bin Nevfel</b>'e götürdü. Varaka, gelenin Cebrail olduğunu, bunun peygamberlik işareti olduğunu ve kavminin ona karşı çıkacağını söyledi.</li><li><b>Davet başlıyor:</b> bir süre vahiy gelmedi. Sonra <b>Müddessir suresinin</b> ilk ayetleri indi: “Kalk ve uyar!” Peygamberimiz tebliğe <b>en yakınlarından</b> başladı.</li></ul>"},
            {t:"Gençlik yılları tarih şeridi", h:"<b>571</b> Mekke'de doğum → <b>yaklaşık 20 yaş</b> Hilfülfudul → <b>25 yaş</b> Hz. Hatice ile evlilik → <b>35 yaş</b> Kâbe hakemliği → <b>yaklaşık 40 yaş (610)</b> ilk vahiy.<br><br>Yaşlar ders kitabında yer almıyor; siyer kaynaklarındaki yaygın bilgilerdir. Öğretmenin farklı söylediyse <b>onunkini</b> yaz. Olayların <b>sırası</b> ise kesindir."},
            {t:"Peygamberlik yılları — ünitenin son bölümü", h:"<p>Kitap bu bölümü <b>ayrıntıya girmeden</b> özetler; yıllar aşağıdaki üçüncü tabloda. 1. yazılıya nereye kadar girdiğini öğretmenine sor.</p><ul><li><b>Davet nasıl ilerledi?</b> Önce ailesi ve yakın arkadaşları; sonra <b>Darülerkam</b>'da, hür–köle, zengin–fakir ayırmadan herkes.</li><li><b>Müşrikler neden karşı çıktı?</b> Yanlış inançlarını, yönetimdeki güçlerini ve ticari çıkarlarını kaybetmekten korktular.</li><li><b>Neden Habeşistan?</b> Orayı <b>adil bir hükümdar</b> yönetiyordu.</li><li><b>Akabe Biatlerinde Medinelilerin verdiği sözlerden bazıları:</b> Allah'ın birliğine ve Hz. Muhammed'in O'nun elçisi olduğuna inanmak, namaz kılmak, Allah yolunda kimseden korkmamak, iyiliği tavsiye edip kötülükten sakınmak, Peygamberimizi her koşulda korumak.</li><li><b>Muhacir – ensar:</b> Mekke'den hicret eden Müslümanlar <b>muhacir</b>, onlara yardım eden Medineliler <b>ensar</b>dır. Peygamberimiz onları birbirine kardeş yaptı.</li><li><b>Veda Hutbesi'nin konuları:</b> Allah'a iman ve itaat, Kur'an ve sünnete bağlılık, kadın haklarının gözetilmesi, faizin ve kan davalarının yasaklanması, Müslümanların kardeşliği ve güvenilir olmaları, bütün insanların eşitliği.</li></ul>"}],
       tbl:[{h:["Olay","Gösterdiği ahlaki özellik"], r:[
              ["Mekkelilerin eşyalarını ona emanet etmesi","Güvenilirlik (<b>emin</b>)"],
              ["Abdullah bin Ebu Hamsa'yı üç gün beklemesi","Vefa, dürüstlük, anlayış"],
              ["Hilfülfudul'a katılması","Adalet, sorumluluk, haksızlığa karşı durma"],
              ["Hz. Hatice'nin kervanını yönetmesi","Dürüstlük, çalışkanlık"],
              ["Kızlarına değer vermesi, Fatıma'yı ziyareti","Şefkat, merhamet"],
              ["Bir çocuğuna bağış yapan sahabiye öğüdü","Çocuklar arasında adalet"],
              ["Kâbe hakemliği","Adalet, insanları uzlaştırma, akıl"],
              ["Cahiliye'nin kötülüklerine katılmaması","Kararlılık; güzel ahlakı bilerek seçme"]]},
            {h:["Kişi","Kimdir?"], r:[
              ["Ebu Talib","Gençliğinde yanında kaldığı amcası"],
              ["Abdullah bin Cüdan","Evinde Hilfülfudul'un yapıldığı kişi"],
              ["Zübeyr bin Abdülmuttalib","Hilfülfudul'a birlikte katıldığı amcası"],
              ["Abdullah bin Ebu Hamsa","Verdiği sözü unutup Peygamberimizi üç gün bekleten kişi"],
              ["Hz. Hatice","İlk eşi; “Tahire” diye anılan tüccar"],
              ["Meysere","Hz. Hatice'nin yardımcısı; kervanda ona eşlik etti"],
              ["Kasım ve Abdullah","Küçük yaşta vefat eden oğulları"],
              ["Zeyneb, Rukiye, Ümmü Gülsüm, Fatıma","Kızları (ilki Zeyneb, sonuncusu Fatıma)"],
              ["Cebrail","Vahiy meleği"],
              ["Varaka bin Nevfel","Hz. Hatice'nin amcasının oğlu; Tevrat ve İncil'i iyi bilen kişi"]]},
            {h:["Yıl","Peygamberlik yıllarından","Kısaca"], r:[
              ["610","İlk vahiy","Hira'da, Cebrail ile; Alak suresinin ilk beş ayeti"],
              ["610 sonrası","İlk Müslümanlar","Hz. Hatice, kızları, Zeyd bin Harise, Hz. Ali; aile dışından Hz. Ebu Bekir. Davet <b>Darülerkam</b>'da (Erkam'ın evi) yürütüldü."],
              ["615","Habeşistan'a hicret","Müşriklerin baskısı üzerine <b>ilk hicret</b>. Bir yıl sonra Cafer bin Ebu Talib'in önderliğinde ikinci grup gitti."],
              ["616–619","Boykot Yılları","Müşrikler, Müslümanlarla ve Haşimoğulları'yla ilişkiyi ve ticareti üç yıl kesti."],
              ["620","Hüzün Yılı","Hz. Hatice ve Ebu Talib yaklaşık bir ay arayla vefat etti. Ardından <b>Taif yolculuğu</b>: Taifliler daveti reddetti."],
              ["621","I. Akabe Biati","Medineli 12 kişi söz verdi; <b>Musab bin Umeyr</b> öğretmen olarak Medine'ye gönderildi."],
              ["622","II. Akabe Biati ve <b>Hicret</b>","75 Medineli biat etti. Peygamberimiz Hz. Ebu Bekir'le yola çıktı, <b>Sevr</b> Mağarası'nda üç gün gizlendi; Hz. Ali emanetleri sahiplerine vermek için Mekke'de kaldı."],
              ["622 sonrası","Medine'de ilk işler","Mescid-i Nebevi ve <b>Suffe</b>, muhacir–ensar kardeşliği, 47 maddelik Medine Sözleşmesi"],
              ["624 · 625 · 627","Bedir · Uhud · Hendek","Mekkeli müşriklerle yapılan savaşlar; <b>ilki Bedir</b>'dir."],
              ["628","Hudeybiye Antlaşması","Müşrikler Müslümanları resmen tanıdı; komşu devletlere davet mektupları gönderildi."],
              ["630","Mekke'nin Fethi","Antlaşmayı müşrikler bozdu. Şehir ciddi bir çatışma olmadan alındı; Peygamberimiz Mekkelileri <b>affetti</b>."],
              ["632","Veda Haccı, Veda Hutbesi ve vefat","İlk ve son haccı. 8 Haziran 632'de Medine'de vefat etti."]]}],
       trap:"<b>Hira</b> ile <b>Sevr</b>'i karıştırmak. Hira, tefekkürün ve ilk vahyin mağarasıdır; Sevr, yıllar sonra hicrette üç gün gizlenilen mağaradır. İkinci tuzak: Hilfülfudul'u İslam geldikten sonra kurulmuş sanmak — antlaşma <b>İslam'dan önce</b> yapılmıştır. Üçüncüsü: Kâbe hakemliğinde taşı yerine ailelerin koyduğunu sanmak — aileler taşı <b>birlikte taşıdı</b>, yerine <b>Peygamberimiz</b> koydu.",
       q:["“Emin” ne demektir? Mekkeliler Peygamberimize neden <b>Muhammedülemin</b> demiştir?",
          "Cahiliye Dönemi'nin dört özelliğini yaz. Peygamberimiz bu dönemin kötülükleri karşısında nasıl davranmıştır?",
          "Hilfülfudul nedir? Hangi amaçlarla yapılmıştır?",
          "Peygamberimiz, peygamber olduktan sonra Hilfülfudul hakkında ne söylemiştir? Bu söz bize neyi gösterir?",
          "Abdullah bin Ebu Hamsa ile yaşanan olayı kısaca anlat. Bu olay Peygamberimizin hangi özelliklerini gösterir?",
          "Hz. Hatice, Peygamberimizle evlenmeyi neden istemiştir? Evliliklerinin temelinde hangi değerler vardı?",
          "Peygamberimizin Hz. Hatice'den olan çocuklarının adlarını yaz. “Ebülkasım” künyesi nereden gelir?",
          "Peygamberimizin kız çocuklarına değer verdiğini gösteren iki örnek yaz. Bu, o dönem için neden önemlidir?",
          "Kâbe hakemliği olayını anlat: Sorun neydi, Peygamberimiz nasıl çözdü?",
          "Mekkeliler kapıdan girenin Hz. Muhammed olduğunu görünce neden sevindiler? Bulduğu çözüm hangi ahlaki özelliklerini gösterir?",
          "Tefekkür ne demektir? Peygamberimiz Hira Mağarası'na neden gidiyordu?",
          "İlk vahiy ne zaman, nerede ve hangi melek aracılığıyla gelmiştir? İlk inen ayetler hangileridir?",
          "Risalet ne demektir? İlk vahiyden sonra Hz. Hatice ve Varaka bin Nevfel ne yapmıştır?",
          "<b>Yorum:</b> Okulda bir arkadaşına haksızlık yapıldığını gördün. Peygamberimizin Hilfülfudul'daki tutumunu örnek alırsan ne yaparsın? İki cümleyle yaz.",
          "<b>Yorum:</b> Peygamberimiz peygamber olmadan önce de “Emin” diye tanınıyordu. Bu durum, insanları İslam'a davet ettiğinde ona nasıl yardımcı olmuştur?",
          "<b>Son bölüm:</b> Müslümanlar ilk hicreti nereye yapmıştır? Orası neden seçilmiştir?",
          "<b>Son bölüm:</b> Boykot Yılları ve Hüzün Yılı ne demektir?",
          "<b>Son bölüm:</b> Muhacir ve ensar kimlere denir? Hicret sırasında Hz. Ebu Bekir ve Hz. Ali ne yapmıştır?",
          "<b>Son bölüm:</b> Veda Hutbesi nedir? Değinilen konulardan üçünü yaz."],
       a:["<b>Emin</b>, kendisine güvenilen ve sözünde duran kimse demektir. Mekkeliler kıymetli eşyalarını ona emanet eder, o da eksiksiz geri verirdi; doğru sözlüydü, kimseyi aldatmazdı. Bu yüzden ona “Güvenilir Muhammed” dediler.",
          "Puta tapma, güçsüzlerin ezilmesi, kadınlara ve kız çocuklarına değer verilmemesi, kan davası (kabile savaşları, kumar ve falcılık da kabul). Peygamberimiz bu kötü ahlakı <b>benimsememiş</b>, hiçbir kötülüğe katılmamış; haksızlıklara üzülmüş ve çözüm aramıştır.",
          "İslam'dan önce Mekke'de, <b>Abdullah bin Cüdan</b>'ın evinde yapılan ve haksızlığa uğrayan herkesin hakkını savunmayı amaçlayan antlaşmadır; katılanlara <b>Erdemliler Cemiyeti</b> denir. Amaçları: <b>zulmü engellemek, adaleti hâkim kılmak, güvenliği sağlamak, hakkı korumak</b>.",
          "Bu antlaşmada bulunmanın kendisi için en kıymetli dünya mallarından daha değerli olduğunu, İslam döneminde böyle bir antlaşmaya çağrılsa <b>yine katılacağını</b> söylemiştir. Bu söz, haksızlığa karşı çıkmanın ve haksızlığa uğrayanın yanında durmanın <b>her dönemde</b> değerli olduğunu gösterir.",
          "Abdullah bir alışverişte Peygamberimize borçlandı; borcunu hemen getireceğini söyleyip ayrıldı ama sözünü unuttu. Üç gün sonra hatırlayıp geldiğinde Peygamberimizi <b>aynı yerde bekler</b> buldu; Peygamberimiz ona kızmadı, yalnızca kendisini çok beklettiğini söyledi. Olay onun <b>vefalı, dürüst ve anlayışlı</b> biri olduğunu gösterir.",
          "Kervanını ona emanet etmiş, yardımcısı <b>Meysere</b>'den onun <b>dürüstlüğünü ve güzel ahlakını</b> dinlemiş, bundan çok etkilenmiştir. Evlilikleri <b>sevgi, saygı ve güvene</b> dayanıyordu; zor günlerde de birbirlerine destek oldular.",
          "Oğulları <b>Kasım</b> ve <b>Abdullah</b>; kızları <b>Zeyneb, Rukiye, Ümmü Gülsüm</b> ve <b>Fatıma</b>. İlk oğlunun adı Kasım olduğu için “Kasım'ın babası” anlamında <b>Ebülkasım</b> denmiştir.",
          "İlk kızına “babasının süsü” anlamına gelen <b>Zeyneb</b> adını verdi; evlenen kızı <b>Fatıma</b>'yı ziyaret edip sıkıntılarını dinledi. Önemlidir, çünkü Cahiliye Dönemi'nde kız çocukları <b>hor görülüyordu</b>; o, tam tersini yaparak örnek oldu.",
          "Kâbe onarılırken <b>Hacerülesved</b>'i yerine koyma şerefini her aile kendisi istedi, kavga çıkmak üzereydi. Kapıdan ilk girenin hakem olması kararlaştırıldı; giren Hz. Muhammed'di. <b>Hırkasını yere serip taşı üstüne koydu</b>, her ailenin bir büyüğüne hırkanın kenarından tutturup taşı birlikte taşıttı ve yerine kendi elleriyle yerleştirdi. Böylece herkes göreve ortak oldu.",
          "Çünkü onun <b>adaletli ve güvenilir (emin)</b> olduğunu biliyorlardı; vereceği karara herkes razı olurdu. Çözümü <b>adaletini</b> (hiçbir aileyi üstün tutmadı), <b>insanları uzlaştırmasını</b> ve <b>aklını</b> gösterir.",
          "<b>Tefekkür</b> derin düşünmek, bir şeyi kavramaya çalışmaktır. Peygamberimiz puta tapmayı akıl dışı buluyor, toplumdaki haksızlıklara üzülüyordu. Bu yanlışlardan uzak kalmak, sorunlara çözüm aramak ve <b>doğruyu bulmak</b> için Hira'da günlerce tefekkür ederdi.",
          "<b>610</b> yılının Ramazan ayında, Kadir Gecesi'nde; Nur Dağı'ndaki <b>Hira Mağarası</b>'nda; <b>Cebrail</b> aracılığıyla. İlk inen ayetler <b>Alak suresinin ilk beş ayeti</b>dir ve <b>“Oku!”</b> emriyle başlar.",
          "<b>Risalet</b> peygamberliktir: Allah'tan gelen vahyi alıp insanlara duyurma görevi. <b>Hz. Hatice</b> endişelenen Peygamberimizi teselli etti ve onu kendi amcasının oğlu <b>Varaka</b>'ya götürdü. Varaka, gelenin vahiy meleği Cebrail olduğunu, bunun Hz. Muhammed'e peygamberlik verildiğinin işareti olduğunu ve kavminin ona karşı çıkacağını söyledi.",
          "Örnek cevap: Haksızlığa <b>sessiz kalmam</b>; kim olursa olsun haksızlığa uğrayanın yanında dururum. Arkadaşlarımla birlikte hareket eder, durumu öğretmenime bildirip sorunun <b>adaletli</b> biçimde çözülmesine çalışırım. (Sessiz kalmamak, haklının yanında olmak ve birlikte çözüm aramak yazılmalı.)",
          "İnsanlar onun <b>doğru sözlü ve güvenilir</b> olduğunu yıllardır biliyordu; bu yüzden onu tanıyanlar sözüne güvendi. Güzel ahlak, söylenen sözü <b>inandırıcı</b> kılar. İlk inananların onu en yakından tanıyanlar (eşi, kızları, yakın arkadaşı) olması da bunu gösterir.",
          "<b>Habeşistan</b>'a (615). Mekke'de müşriklerin baskısı ve işkencesi artmıştı; Habeşistan'ı <b>adil bir hükümdar</b> yönetiyordu, Müslümanlar orada güvende olabilirdi.",
          "<b>Boykot Yılları (616–619):</b> müşriklerin Müslümanlarla ve Haşimoğulları'yla ilişkiyi ve ticareti üç yıl kesmesi. <b>Hüzün Yılı (620):</b> Peygamberimizin en büyük destekçileri olan eşi <b>Hz. Hatice</b> ile amcası <b>Ebu Talib</b>'in yaklaşık bir ay arayla vefat ettiği yıl.",
          "<b>Muhacir:</b> Mekke'den Medine'ye hicret eden Müslüman. <b>Ensar:</b> muhacirlere yardım eden Medineli Müslüman. <b>Hz. Ebu Bekir</b> Peygamberimizle birlikte yola çıktı; <b>Sevr</b> Mağarası'nda üç gün birlikte gizlendiler. <b>Hz. Ali</b> Peygamberimizin yatağına yattı ve Peygamberimize bırakılmış emanetleri sahiplerine teslim etti.",
          "Peygamberimizin 632'de yaptığı ilk ve son haccında (<b>Veda Haccı</b>) Müslümanlara yaptığı konuşmalardır. Konular: Kur'an ve sünnete bağlılık, kadın haklarının gözetilmesi, faizin ve kan davalarının yasaklanması (Müslümanların kardeşliği, bütün insanların eşitliği de kabul)."]},

      {n:"Peygamberimizin Çevresindeki Gençler", w:"Aralık–Ocak",
       lead:"Peygamberimizin gençlere verdiği değeri, gençlerin ona duyduğu sevgiyi ve yanında yetişen genç sahabilerin örnek davranışlarını işler. Kitaptaki bölümler: <b>2.1</b> Peygamberimizin Gençlerle İletişimi · <b>2.2</b> Gençlerin Dünyasında Peygamberimiz · <b>2.3</b> Peygamberimizin Yanında Yetişen Gençler. Konu anlatımı ve sorular ünite başlarken eklenecek."},

      {n:"Rehberim Peygamberim", w:"Şubat–Mart–Nisan",
       lead:"Peygamberimizin Allah'a bağlılığını, namaza verdiği önemi ve şükür anlayışını işler. Kitaptaki bölümler: <b>3.1</b> Peygamberimizin Allah'a Bağlılığı · <b>3.2</b> Peygamberimizin Hayatında Namaz · <b>3.3</b> Peygamberimizin Hayatında Şükür. Konu anlatımı ve sorular ünite başlarken eklenecek."},

      {n:"Toplumsal Hayatta Peygamberimiz", w:"Nisan–Mayıs–Haziran",
       lead:"Peygamberimizin insanlarla ilişkilerini ve çevreye gösterdiği duyarlılığı işler. Kitaptaki bölümler: <b>4.1</b> Peygamberimizin Toplumsal İlişkileri · <b>4.2</b> Peygamberimiz ve Çevre Bilinci. Konu anlatımı ve sorular ünite başlarken eklenecek."}
     ]}
  );

  /* Yıllık takvime bu dersin satırları. Süreler resmî programdan (20 + 16 + 16 + 16
     ders saati, haftada 2 saat): 1. ünite Kasım sonuna, 2. ünite yarıyıl tatiline,
     3. ünite Nisan'ın ilk haftasına kadar sürer. */
  (function(){
    var T = {
      eylul:"Gençlik Yıllarında Peygamberimiz", ekim:"Gençlik Yıllarında Peygamberimiz", kasim:"Gençlik Yıllarında Peygamberimiz",
      aralik:"Peygamberimizin Çevresindeki Gençler", ocak:"Peygamberimizin Çevresindeki Gençler",
      subat:"Rehberim Peygamberim", mart:"Rehberim Peygamberim",
      nisan:"Rehberim Peygamberim / Toplumsal Hayatta Peygamberimiz",
      mayis:"Toplumsal Hayatta Peygamberimiz", haziran:"Toplumsal Hayatta Peygamberimiz"
    };
    CAL6.forEach(function(r){ if(r.items && T[r.key]) r.items.push(["pey", T[r.key]]); });
  })();

  /* ---------- ana test: ünite başına 10 ---------- */
  Q6.pey = [
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Mekkelilerin Hz. Muhammed'e “Muhammedülemin” demesinin sebebi aşağıdakilerden hangisidir?", o:["Mekke'nin en zengin tüccarlarından biri olması","Emanetlere sahip çıkması ve sözüne güvenilmesi","Kabilesinin reisi olarak herkesçe tanınması","Kâbe'nin onarımına öncülük etmiş olması"], a:1,
     w:"Emin “güvenilir” demektir. Mekkeliler kıymetli eşyalarını ona emanet eder, o da eksiksiz geri verirdi; bu yüzden “Güvenilir Muhammed” diye anıldı."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Aşağıdakilerden hangisi Cahiliye Dönemi'nin özelliklerinden biri DEĞİLDİR?", o:["Putlara tapılması","Kan davalarının sürmesi","Kumar ve falcılığın yaygın olması","Kız çocuklarına değer verilmesi"], a:3,
     w:"Cahiliye Dönemi'nde kadınlara ve kız çocuklarına değer verilmezdi. Diğer üçü o dönemin özellikleridir."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Hilfülfudul hangi amaçla yapılmış bir antlaşmadır?", o:["Mekke'nin ticaret gelirini artırmak","Kâbe'yi onarmak","Haksızlığa uğrayanların hakkını savunmak","Komşu kabilelere karşı ordu kurmak"], a:2,
     w:"Hilfülfudul; zulmü engellemek, adaleti hâkim kılmak, güvenliği sağlamak ve hakkı korumak için yapıldı. Katılanlara Erdemliler Cemiyeti denir."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Hilfülfudul antlaşması kimin evinde yapılmıştır?", o:["Abdullah bin Cüdan","Erkam bin Ebülerkam","Varaka bin Nevfel","Ebu Talib"], a:0,
     w:"Haksızlıklardan rahatsız olanlar Abdullah bin Cüdan'ın evinde toplandı. Erkam'ın evi (Darülerkam) ise peygamberlikten sonra ilk davet merkezi oldu."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Hz. Hatice'nin ticaret kervanında Hz. Muhammed'e eşlik eden ve dönüşte onun ahlakını öven kişi kimdir?", o:["Zeyd bin Harise","Meysere","Abdullah bin Ebu Hamsa","Zübeyr bin Abdülmuttalib"], a:1,
     w:"Meysere, Hz. Hatice'nin yardımcısıydı. Anlattıkları Hz. Hatice'yi çok etkiledi ve evlilik teklifine yol açtı."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Hz. Hatice, temiz ahlakı sebebiyle Mekke'de hangi adla anılırdı?", o:["Emin","Hanif","Tahire","Ensar"], a:2,
     w:"Tahire “tertemiz kadın” demektir. Emin Hz. Muhammed'in sıfatıdır; hanif tek Allah'a inanan kişi, ensar ise Medineli Müslümanlardır."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Peygamberimizin “Ebülkasım” künyesi nereden gelir?", o:["Dedesinin adından","İlk oğlunun adından","Doğduğu mahallenin adından","Amcasının ona taktığı lakaptan"], a:1,
     w:"İlk oğlunun adı Kasım'dı. Ebülkasım “Kasım'ın babası” demektir."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Kâbe hakemliğinde Hz. Muhammed anlaşmazlığı nasıl çözmüştür?", o:["Aileler arasında kura çekip taşı kazanan aileye teslim ederek","Taşı içlerindeki en yaşlı aile büyüğünün koymasını isteyerek","Taşı hırkasının üzerine koyup aile büyüklerine birlikte taşıtarak","Onarımı durdurup kararı ertesi yıla bırakmayı önererek"], a:2,
     w:"Her ailenin bir büyüğü hırkanın kenarından tuttu; taşı yerine Hz. Muhammed kendi elleriyle yerleştirdi. Böylece hiçbir aile üstün tutulmadı, kavga çıkmadı."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Hz. Muhammed peygamberlikten önce Hira Mağarası'na ne için giderdi?", o:["Müşriklerden saklanmak için","Ticaret kervanlarını karşılamak için","Kabile toplantılarına katılmak için","Toplumdaki sorunlar üzerine derin düşünmek için"], a:3,
     w:"Hira'da tefekkür ederdi. Müşriklerden saklandığı mağara Sevr'dir; o olay yıllar sonra, hicrette yaşandı."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"İlk vahiyle ilgili aşağıdaki bilgilerden hangisi YANLIŞTIR?", o:["610 yılının Ramazan ayında gelmiştir.","Sevr Mağarası'nda gelmiştir.","Vahyi Cebrail getirmiştir.","İlk inen ayetler Alak suresindedir."], a:1,
     w:"İlk vahiy Nur Dağı'ndaki Hira Mağarası'nda geldi. Sevr, hicret sırasında gizlenilen mağaradır."}
  ];

  /* ---------- havuz: yalnız Yanlışlarım'da çıkar, ünite başına 5 ---------- */
  H6.pey = [
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"“Kendisine güvenilen, sözünde duran kimse” anlamına gelen kavram hangisidir?", o:["Hanif","Muhacir","Emin","Müşrik"], a:2,
     w:"Emin, güvenilir demektir. Hanif tek Allah'a inanan, muhacir hicret eden, müşrik puta tapan kişidir."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"“Erdemliler Cemiyeti” adı aşağıdakilerden hangisine katılanlara verilmiştir?", o:["Hilfülfudul'a","Akabe Biati'ne","Habeşistan hicretine","Medine Sözleşmesi'ne"], a:0,
     w:"Haksızlığa karşı söz birliği eden Hilfülfudul topluluğuna Erdemliler Cemiyeti denir. Diğer üçü peygamberlikten sonraki olaylardır."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Hacerülesved nedir?", o:["Nur Dağı'nda tefekkür edilen mağara","Mekke yakınında kurulan büyük panayır","Hz. Hatice'ye ait ticaret kervanı","Kâbe'de tavafın başlandığı kutsal taş"], a:3,
     w:"Hacerülesved Kâbe'nin köşesindeki kutsal taştır. Onu yerine kimin koyacağı tartışması Kâbe hakemliği olayına yol açtı."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Peygamberimizin kızlarından en son dünyaya geleni hangisidir?", o:["Zeyneb","Rukiye","Ümmü Gülsüm","Fatıma"], a:3,
     w:"Kızları sırasıyla Zeyneb, Rukiye, Ümmü Gülsüm ve Fatıma'dır."},
    {u:"ÜNİTE 1 · Gençlik Yıllarında Peygamberimiz", q:"Peygamberimize ilk vahyi getiren melek hangisidir?", o:["Mikail","Cebrail","İsrafil","Azrail"], a:1,
     w:"Cebrail vahiy meleğidir; Allah'ın mesajını peygamberlere iletir."}
  ];

  /* ---------- ek çalışma setleri ----------
     "EK · 1. Yazılı Hazırlık" (24): ağırlık sınav tablosuna göre — ilk 17 soru
     1.1 Ahlaki Özellikleri, son 7 soru 1.2 Vahyin Gelişi'nin başı (Hira, ilk vahiy,
     davetin başlaması).
     "EK · Peygamberlik Yılları" (14): 1.2'nin devamı; dizinin sonunda. */
  EKC6.pey = [
    {u:"EK · 1. Yazılı Hazırlık", q:"Mekkeliler kıymetli eşyalarını korunması için Hz. Muhammed'e bırakırdı.\n\nBu durum onun en çok hangi özelliğini gösterir?", o:["Cesur olmasını","Güvenilir olmasını","Varlıklı olmasını","Güzel konuşmasını"], a:1,
     w:"İnsan değerli eşyasını ancak güvendiği kişiye bırakır. Emanetleri eksiksiz geri verdiği için ona “Emin” denmiştir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Hz. Muhammed, Cahiliye Dönemi'nde yaşadığı hâlde o dönemin kötü alışkanlıklarından hiçbirine katılmamıştır.\n\nBu bilgiden çıkarılabilecek en doğru sonuç hangisidir?", o:["İnsanlardan tamamen uzak yaşamıştır.","Çevresi ne yaparsa ona uymuştur.","Güzel ahlakı bilerek ve kararlılıkla seçmiştir.","Ticaretle hiç ilgilenmemiştir."], a:2,
     w:"Toplumun içinde yaşadı, ticaret yaptı, insanlarla görüştü; ama yanlış olanı yapmadı. Bu, ahlakını çevresine göre değil bilerek ve kararlılıkla seçtiğini gösterir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Hilfülfudul'da kimlerin hakkının savunulmasına söz verilmiştir?", o:["Haşimoğulları'ndan olup haksızlığa uğrayanların","Mekke'de ticaret yaparken haksızlığa uğrayanların","Antlaşmaya katılan ailelerden haksızlığa uğrayanların","Kim olursa olsun haksızlığa uğrayan herkesin"], a:3,
     w:"Antlaşma kimseyi ayırmaz: dili, dini, ırkı ne olursa olsun haksızlığa uğrayanın hakkı savunulacaktı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz yıllar sonra Hilfülfudul için, İslam döneminde de böyle bir antlaşmaya çağrılsa yine katılacağını söylemiştir.\n\nBu söz aşağıdakilerden hangisini gösterir?", o:["Haksızlığa karşı durmak her dönemde değerlidir.","Antlaşma İslam geldikten sonra yapılmıştır.","Antlaşmaya katıldığına sonradan pişman olmuştur.","Antlaşma yalnızca Müslümanları korumuştur."], a:0,
     w:"Hilfülfudul İslam'dan önce yapıldı; Peygamberimiz ona peygamber olduktan sonra da sahip çıktı. Demek ki haksızlığa uğrayanın yanında durmak her zaman doğrudur."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdakilerden hangisi Hilfülfudul'un amaçlarından biri DEĞİLDİR?", o:["Zulmü engellemek","Kabilenin gücünü artırmak","Adaleti hâkim kılmak","Güvenliği sağlamak"], a:1,
     w:"Amaçlar: zulmü engellemek, adaleti hâkim kılmak, güvenliği sağlamak, hakkı korumak. Antlaşma bir kabilenin çıkarı için değil, haksızlığa uğrayan herkes için yapıldı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Abdullah bin Ebu Hamsa, bir alışverişten sonra Hz. Muhammed'e borcunu hemen getireceğini söyleyip ayrılmış ama sözünü unutmuştur. Üç gün sonra geldiğinde onu aynı yerde beklerken bulmuş, Hz. Muhammed de ona kızmamıştır.\n\nBu olay Peygamberimizin en çok hangi özelliklerini gösterir?", o:["Vefalı ve anlayışlı olmasını","Ticarette çok kazanmak istemesini","Yalnız kalmayı sevmesini","Kolayca öfkelenmesini"], a:0,
     w:"Üç gün aynı yerde bekledi ve sözünü unutan kişiye kızmadı. Ders kitabı bu olayı onun vefalı, dürüst ve anlayışlı oluşuna örnek verir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Hz. Hatice'nin Hz. Muhammed'e evlilik teklif etmesinde en çok ne etkili olmuştur?", o:["Kabilesinin Mekke'de güçlü olması","Akrabalarının bu evliliği istemesi","Dürüstlüğünü ve güzel ahlakını öğrenmesi","Mekke'nin en zenginlerinden olması"], a:2,
     w:"Kervanda ona eşlik eden Meysere, dönüşte ahlakını övgüyle anlattı. Hz. Hatice bundan etkilenerek bir arkadaşı aracılığıyla evlilik teklif etti."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Hz. Muhammed, kendisine peygamberlik verildiğini ilk olarak kime anlatmıştır?", o:["Hz. Ebu Bekir'e","Hz. Hatice'ye","Hz. Ali'ye","Ebu Talib'e"], a:1,
     w:"İlk vahiyden sonra eve döndü ve yaşadıklarını eşi Hz. Hatice'ye anlattı. Hz. Hatice onu teselli etti ve destekledi."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimizin Hz. Hatice ile evliliğinden kaç çocuğu olmuştur?", o:["Dört","Beş","Altı","Yedi"], a:2,
     w:"İki oğlu (Kasım, Abdullah) ve dört kızı (Zeyneb, Rukiye, Ümmü Gülsüm, Fatıma) oldu."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kız çocuklarının hor görüldüğü bir dönemde Peygamberimiz ilk kızına “babasının süsü” anlamına gelen bir ad vermiştir. Bu ad hangisidir?", o:["Fatıma","Rukiye","Zeyneb","Ümmü Gülsüm"], a:2,
     w:"İlk kızı Zeyneb'dir. Bu adı vermesi, kız çocuklarına verdiği değeri gösterir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Bir sahabi malının bir kısmını yalnızca bir oğluna bağışlamış ve Peygamberimizi buna şahit tutmak istemiştir. Peygamberimiz ona ne öğütlemiştir?", o:["Malının tamamını yoksullara vermesini","Bağışı en büyük oğluna yapmasını","Kararı akrabalarına bırakmasını","Çocukları arasında adaletli olmasını"], a:3,
     w:"Aynısını bütün çocuklarına yapıp yapmadığını sordu; “Hayır” cevabını alınca çocuklar arasında adaletli olunmasını istedi."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kâbe'nin onarımı sırasında Mekke'nin önde gelen aileleri hangi konuda anlaşmazlığa düşmüştür?", o:["Onarım masrafını kimin ödeyeceği","Hacerülesved'i yerine kimin koyacağı","Kâbe'nin kapısının hangi yöne bakacağı","Onarımda hangi ustaların çalışacağı"], a:1,
     w:"Hacerülesved'i yerine koymak çok şerefli bir görev sayıldığı için her aile bunu kendisi yapmak istedi."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kâbe'deki anlaşmazlıkta hakemin kim olacağına nasıl karar verilmiştir?", o:["Aileler aralarında kura çekmiştir.","En zengin aile hakemi seçmiştir.","Kapıdan ilk girecek kişinin hakem olması kabul edilmiştir.","Hz. Muhammed hakem olmayı kendisi istemiştir."], a:2,
     w:"İçlerinden en yaşlı olanın teklifiyle kapıdan ilk girecek kişi hakem kabul edildi. İçeri giren Hz. Muhammed'di."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Mekkeliler, kapıdan giren kişinin Hz. Muhammed olduğunu görünce sevinmiş ve rahatlamıştır.\n\nBunun sebebi aşağıdakilerden hangisidir?", o:["Onun adaletli ve güvenilir olduğunu bilmeleri","Onun en kalabalık aileden olması","Onun Kâbe'nin bakımıyla görevli olması","Onun içlerinde en yaşlı kişi olması"], a:0,
     w:"Onu “Emin” olarak tanıyorlardı; kimseyi kayırmayacağını biliyorlardı. Bu yüzden vereceği karara baştan razıydılar."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kâbe hakemliğinde bulunan çözümün en önemli sonucu hangisidir?", o:["Görevi yalnızca Haşimoğulları ailesi üstlenmiştir.","Kâbe'nin onarımı yarıda kalmış, aileler dağılmıştır.","Taşın yerleştirilmesi bir yıl sonraya ertelenmiştir.","Bütün aileler göreve ortak olmuş, kavga önlenmiştir."], a:3,
     w:"Taşı her ailenin bir büyüğü birlikte taşıdı; kimse dışarıda kalmadı, kimse üstün tutulmadı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?", o:["Emin – güvenilir","Hanif – putlara tapan kişi","Tahire – tertemiz kadın","Ebülkasım – Kasım'ın babası"], a:1,
     w:"Hanif; putlara tapmayan, Hz. İbrahim'in dinine bağlı, tek Allah'a inanan kişidir. Putlara tapana müşrik denir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Elif, sınıfta bir arkadaşına sürekli haksızlık yapıldığını görüyor. Birkaç arkadaşıyla söz birliği edip haksızlığa uğrayanın yanında durmaya karar veriyor.\n\nElif'in davranışı Peygamberimizin gençliğindeki hangi olaya benzemektedir?", o:["Hz. Hatice'nin kervanını yönetmesine","Hira'da tefekkür etmesine","Hilfülfudul'a katılmasına","Amcasıyla ticaret yolculuğuna çıkmasına"], a:2,
     w:"Hilfülfudul, haksızlığa uğrayanın yanında durmak için verilen ortak sözdür. Elif de aynısını yapıyor."},
    {u:"EK · 1. Yazılı Hazırlık", q:"“Tefekkür” kavramının anlamı aşağıdakilerden hangisidir?", o:["Allah'ın mesajını insanlara bildirme","Derin düşünme, kavramaya çalışma","Bağlılık sözü verme","Bir yerden başka bir yere göç etme"], a:1,
     w:"Tefekkür derin düşünmektir. Allah'ın mesajını bildirmek tebliğ, bağlılık sözü vermek biat, göç etmek ise hicrettir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Hz. Muhammed, Hira'da tefekkür ettiği dönemde aşağıdakilerden hangisini yaşamıştır?", o:["Mekkelilerin onu mağarada sık sık ziyaret etmesini","Cebrail'in her gün yanına gelip onunla konuşmasını","Kâbe'deki putların kendiliğinden yıkılmasını","Gece gördüğü rüyaların gündüz aynen çıkmasını"], a:3,
     w:"Hira günlerinde gördüğü rüyalar gündüz aynen gerçekleşiyor, kendisine selam verildiğini işitiyor ama çevresinde ağaç ve taştan başka bir şey görmüyordu. Cebrail ilk kez 610'da, ilk vahiyle geldi."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İlk vahiyde Cebrail'in getirdiği ilk emir hangisidir?", o:["Oku!","Kalk ve uyar!","Hicret et!","Sabret!"], a:0,
     w:"İlk inen ayetler Alak suresinin ilk beş ayetidir ve “Oku!” emriyle başlar. “Kalk ve uyar!” daha sonra inen Müddessir suresindedir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"“Risalet” kavramı aşağıdakilerden hangisini anlatır?", o:["Derin düşünmeyi","Güvenilir olmayı","Peygamberlik görevini","Haksızlığa karşı yapılan antlaşmayı"], a:2,
     w:"Risalet, Allah'tan gelen vahyi alıp insanlara duyurma görevi, yani peygamberliktir. Derin düşünmek tefekkürdür; güvenilir kişiye emin, haksızlığa karşı yapılan antlaşmaya Hilfülfudul denir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Hz. Hatice, ilk vahiyden sonra olanları yorumlaması için Hz. Muhammed'i kime götürmüştür?", o:["Abdullah bin Cüdan'a","Varaka bin Nevfel'e","Ebu Talib'e","Meysere'ye"], a:1,
     w:"Varaka, Hz. Hatice'nin amcasının oğluydu; Tevrat ve İncil'i iyi bilirdi. Gelenin vahiy meleği Cebrail olduğunu ve bunun peygamberlik işareti olduğunu söyledi."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdaki olaylar oluş sırasına göre dizilirse hangisi EN SONA gelir?", o:["Hilfülfudul'a katılması","Hz. Hatice ile evlenmesi","İlk vahyin gelmesi","Kâbe hakemliği yapması"], a:2,
     w:"Sıra: Hilfülfudul → Hz. Hatice ile evlilik → Kâbe hakemliği → ilk vahiy (610)."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İlk vahiyden bir süre sonra Müddessir suresinin “Kalk ve uyar!” emrini içeren ilk ayetleri inmiştir.\n\nBu ayetlerle Peygamberimizden ne istenmiştir?", o:["Hira'da daha uzun süre kalması","İnsanları İslam'a davet etmeye başlaması","Mekke'den hemen ayrılması","Ticareti tamamen bırakması"], a:1,
     w:"Bu ayetlerle peygamberlik görevini insanlara taşıması istendi. Peygamberimiz davete en yakın çevresinden başladı."},

    /* İkinci set: 1.2'nin devamı (kitabın "ayrıntıya girmeden" özetlediği peygamberlik
       yılları). Sınava girip girmediği okulun nereye kadar işlediğine bağlı; o yüzden
       ayrı set. */
    {u:"EK · Peygamberlik Yılları", q:"Hz. Ebu Bekir aracılığıyla Müslüman olanlardan biri aşağıdakilerden hangisidir?", o:["Hz. Osman","Hz. Ali","Zeyd bin Harise","Hz. Hatice"], a:0,
     w:"Hz. Hatice, Hz. Ali ve Zeyd bin Harise Peygamberimizin ev halkındandı. Aile dışından ilk inananlardan olan Hz. Ebu Bekir'in aracılığıyla Hz. Osman, Zübeyr bin Avvam ve Sad bin Ebu Vakkas Müslüman oldu."},
    {u:"EK · Peygamberlik Yılları", q:"Peygamberimizin Mekke'de ilk davet çalışmalarını yürüttüğü ev kime aittir?", o:["Abdullah bin Cüdan'a","Erkam bin Ebülerkam'a","Varaka bin Nevfel'e","Musab bin Umeyr'e"], a:1,
     w:"Bu eve Darülerkam (Erkam'ın evi) denir; Kâbe'ye yakındı ve müşrikler fark etmeden görüşmeye elverişliydi. Abdullah bin Cüdan'ın evi ise Hilfülfudul'un yapıldığı yerdir."},
    {u:"EK · Peygamberlik Yılları", q:"Müslümanların ilk hicret ettiği yer neresidir?", o:["Medine","Taif","Habeşistan","Şam"], a:2,
     w:"615'te müşriklerin baskısı üzerine bir grup Müslüman, adil bir hükümdarın yönettiği Habeşistan'a hicret etti. Medine'ye hicret 622'dedir."},
    {u:"EK · Peygamberlik Yılları", q:"“Boykot Yılları” ile anlatılan olay aşağıdakilerden hangisidir?", o:["Müslümanların baskı yüzünden Habeşistan'a göç etmesi","Taiflilerin Peygamberimizin davetini reddetmesi","Mekkelilerin Hudeybiye Antlaşması'nı bozması","Müşriklerin Müslümanlarla ilişkiyi ve ticareti kesmesi"], a:3,
     w:"616–619 arasında üç yıl süren boykotta müşrikler, Müslümanlarla ve Haşimoğulları'yla sosyal ilişkiyi ve alışverişi kesti."},
    {u:"EK · Peygamberlik Yılları", q:"620 yılına “Hüzün Yılı” denmesinin sebebi nedir?", o:["Müslümanların Uhud'da zor durumda kalması","Hz. Hatice ile Ebu Talib'in vefat etmesi","Taiflilerin daveti kabul etmemesi","Müslümanların Mekke'den ayrılmak zorunda kalması"], a:1,
     w:"Peygamberimiz en büyük iki destekçisini, eşi Hz. Hatice'yi ve amcası Ebu Talib'i yaklaşık bir ay arayla kaybetti."},
    {u:"EK · Peygamberlik Yılları", q:"I. Akabe Biati'nden sonra Medinelilere İslam'ı öğretmesi için gönderilen sahabi kimdir?", o:["Cafer bin Ebu Talib","Zeyd bin Harise","Musab bin Umeyr","Sad bin Ebu Vakkas"], a:2,
     w:"Musab bin Umeyr Medine'ye öğretmen olarak gönderildi. Cafer bin Ebu Talib ise Habeşistan'a giden ikinci grubun önderiydi."},
    {u:"EK · Peygamberlik Yılları", q:"Hicret gecesi Hz. Ali'nin üstlendiği görev aşağıdakilerden hangisidir?", o:["Peygamberimizle birlikte Sevr Mağarası'nda gizlenmek","Peygamberimizin yatağına yatmak ve emanetleri sahiplerine vermek","Medine'ye önceden gidip hazırlık yapmak","Müşrikleri başka bir yola yönlendirmek"], a:1,
     w:"Peygamberimiz, elindeki emanetleri sahiplerine vermesi için Hz. Ali'yi Mekke'de bıraktı; “Emin” oluşu o gece bile sürdü. Sevr'de yanında olan Hz. Ebu Bekir'dir."},
    {u:"EK · Peygamberlik Yılları", q:"Aşağıdaki eşleştirmelerden hangisi doğrudur?", o:["Ensar – Mekke'den hicret eden Müslümanlar","Muhacir – Medineli Müslümanlar","Ensar – muhacirlere yardım eden Medineli Müslümanlar","Muhacir – Habeşistan'da kalan Müslümanlar"], a:2,
     w:"Ensar “yardım eden” demektir: Medineli Müslümanlar. Muhacir “hicret eden”dir: Mekke'den Medine'ye göç eden Müslümanlar."},
    {u:"EK · Peygamberlik Yılları", q:"Peygamberimizin hicretten sonra Medine'de yaptığı ilk iş hangisidir?", o:["Mescid-i Nebevi'yi inşa etmek","Komşu devletlere mektup göndermek","Mekke'ye sefer hazırlığı yapmak","Hudeybiye Antlaşması'nı imzalamak"], a:0,
     w:"Önce Mescid-i Nebevi yapıldı; bitişiğindeki Suffe'de okuma yazma ve Kur'an öğretildi."},
    {u:"EK · Peygamberlik Yılları", q:"Müslümanlarla Mekkeli müşrikler arasındaki ilk savaş hangisidir?", o:["Uhud","Hendek","Bedir","Mekke'nin Fethi"], a:2,
     w:"Sıra: Bedir (624), Uhud (625), Hendek (627). Mekke 630'da ciddi bir çatışma olmadan fethedildi."},
    {u:"EK · Peygamberlik Yılları", q:"Peygamberimiz, Mekke'yi fethettiğinde kendisine yıllarca düşmanlık eden Mekkelilere nasıl davranmıştır?", o:["Hepsini şehirden çıkarmıştır.","Mallarına el koymuştur.","Onlarla yeni bir savaş antlaşması yapmıştır.","İntikam yerine affetmeyi seçmiştir."], a:3,
     w:"Şehre girince Mekkelileri affetti. Fetih barış ve merhametle tamamlandı."},
    {u:"EK · Peygamberlik Yılları", q:"Aşağıdakilerden hangisi Veda Hutbesi'nde değinilen konulardan biri DEĞİLDİR?", o:["Kadın haklarının gözetilmesi","Kan davalarının yasaklanması","Bütün insanların eşit olması","Habeşistan'a hicret edilmesi"], a:3,
     w:"Habeşistan hicreti 615'te, Mekke yıllarında oldu. Veda Hutbesi 632'dedir; Kur'an ve sünnete bağlılık, kadın hakları, faiz ve kan davalarının yasaklanması, kardeşlik ve eşitlik anlatılmıştır."},
    {u:"EK · Peygamberlik Yılları", q:"Aşağıdaki olaylar oluş sırasına göre dizilirse hangisi EN BAŞA gelir?", o:["Medine'ye hicret","Habeşistan'a hicret","Mekke'nin Fethi","Hudeybiye Antlaşması"], a:1,
     w:"Sıra: Habeşistan'a hicret (615) → Medine'ye hicret (622) → Hudeybiye Antlaşması (628) → Mekke'nin Fethi (630)."},
    {u:"EK · Peygamberlik Yılları", q:"Peygamberimizin tefekkür ettiği mağara ile hicrette gizlendiği mağara sırasıyla hangileridir?", o:["Sevr – Hira","Hira – Sevr","Hira – Nur","Sevr – Uhud"], a:1,
     w:"Hira (Nur Dağı'nda) tefekkürün ve ilk vahyin yeridir. Sevr, hicrette üç gün gizlenilen mağaradır."}
  ];
