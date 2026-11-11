  /* ===================== 7. SINIF · PEYGAMBERİMİZİN HAYATI =====================
     6. sınıftaki 08e dosyasının 7. sınıf eşi. Dersin TAMAMI bu dosyada: ünite
     anlatımı (S7'ye eklenir), yıllık takvim satırları (CAL7), ana test (Q7.pey),
     havuz (H7.pey) ve ek çalışma setleri (EKC7.pey). build.sh'te 08e'den SONRA,
     09'dan ÖNCE gelmeli — S7, CAL7, Q7, H7 ve EKC7 tanımlanmış olmalı.

     KAYNAK (10 Kasım 2026'da doğrulandı):
     - Ünite adları: tymm.meb.gov.tr/ogretim-programlari/peygamberimizin-hayati-dersi-temel-egitim/8
       (URL'deki 8 = 7. sınıf). Ünite sayfaları başında /ogretim-programlari OLMADAN açılır:
       tymm.meb.gov.tr/peygamberimizin-hayati-dersi-temel-egitim/unite/210 … 213.
     - Konu anlatımı: MEB 7. sınıf ders kitabı,
       tymm.meb.gov.tr/kitap/537/peygamberimizin-hayati-7sinif-ders-kitabi
       (adresin sonundaki ad şart; yalnız /kitap/537 → 500). 1. ünite s. 14–51.
       Kitabın metni ve soruları teliflidir: buradaki anlatım ve sorular kendi
       cümlelerimizle yazıldı, kitaptan soru KOPYALAMA.
     - Sınav kapsamı: il ÖDM konu-soru dağılım tablosu (Antalya, 2026–2027). 1. dönem
       1. yazılı = 5 / 6 / 7 açık uçlu soru; PH.7.1.1 (gizli ve açık davet) 3 / 2 / 3,
       PH.7.1.2 (isra ve miraç) 2 / 3 / 3, PH.7.1.3 (Hicret'in sebepleri) 0 / 1 / 1 —
       yalnız sınava kadar işlenen kısım. "Hicret Yolculuğu" bölümü bu sınavın
       kapsamı dışında. Bu dersin ülke geneli tablosu yok; senaryoyu okulun zümresi seçer.
     - Yıllar kitabın s. 42–43'teki zaman şeridinden (Bilgi Grafiği 1.3). İsra ve miraç
       şeritte 621'de duruyor; aynı kitabın bilmecesi "Hüzün yılındaydı" diyor. Bu yüzden
       sayfada "Hüzün Yılı ve Taif'ten sonra (kitabın zaman şeridinde 621)" diye verildi;
       testte yılını SORMA.
     - Kitabın ünite sonu sorularına (s. 46–50) kurgusu yakın düşen sorular 10 Kasım'daki
       denetimde yeniden yazıldı; yeni soru eklerken de aynı kökü + aynı şıkları kullanma.
     - Gizli/açık davetin benzerlikleri ve Hicret'in sebeplerinin dinî/ekonomik/sosyal
       ayrımı kitapta boş tablo olarak öğrenciye bırakılmış; buradaki maddeler kitabın
       metninden çıkarıldı ve sayfada öyle olduğu yazıyor.

     2–4. ünitelerde şimdilik yalnız resmî ad ve kapsam var; anlatım ve sorular
     aylık bakımda, ünite başlamadan önce yazılacak. */

  S7.push(
    {key:"pey", name:"Peygamberimizin Hayatı", color:"var(--s-pey)", meta:"4 ünite · MEB TYMM resmî program · haftada 2 saat", lbl:"ÜNİTE",
     note:"Ünite adları MEB'in resmî programından, konu anlatımının sırası MEB'in ders kitabından alındı. <b>1. dönem 1. yazılı</b> açık uçlu sorulardan oluşur ve 1. ünitenin ilk bölümlerini kapsar: il konu-soru dağılım tablosunda (2026–2027, Antalya örneği) 5–7 sorunun <b>2–3'ü</b> gizli ve açık davetten (boykot, Hüzün Yılı ve Taif dâhil), <b>2–3'ü</b> isra ve miraçtan, en çok <b>1'i</b> Hicret'in sebeplerinin sınava kadar işlenen kısmından gelir; <b>Hicret Yolculuğu</b> bölümü bu sınava girmez. Hangi senaryonun seçildiğini ve nereye kadar sorulacağını öğretmenden öğren; defterine yazdırdıkları her zaman önceliklidir.",
     units:[
      {n:"Hicretten Önce Peygamberimiz", w:"Eylül–Ekim–Kasım", t:["ÜNİTE 1 · Hicretten Önce Peygamberimiz","EK · 1. Yazılı Hazırlık","EK · Hicret Yolculuğu"],
       lead:"Ünite beş bölümdür: <b>1.1 İslam'a Davet</b> (gizli davet, açık davet, boykot ve Hüzün Yılı) · <b>1.2 Taif Yolculuğu</b> · <b>1.3 İsra ve Miraç</b> · <b>1.4 Yeni Yurt Arayışı</b> (Akabe Biatleri) · <b>1.5 Hicret Yolculuğu</b>. 1. yazılının ağırlığı <b>ilk üç bölümdedir</b>. Sorular açık uçlu olduğu için gizli ve açık daveti <b>karşılaştırabilmen</b>, isra ve miracı <b>kendi cümlelerinle anlatabilmen</b> ve Hicret'in <b>sebeplerini</b> sayabilmen gerekir.",
       voc:[["davet","İslam'a ve İslam'ın esaslarını uygulamaya çağrı"],
            ["tebliğ","Allah'ın mesajını insanlara bildirme"],
            ["Muhammedülemin","“Güvenilir Muhammed”; Mekkelilerin peygamberlikten önce ona verdiği ad"],
            ["fetretülvahiy","ilk vahiyden sonra, Müddessir suresinin ilk ayetleri gelene kadar vahyin inmediği dönem"],
            ["Gizli Davet Dönemi","610'dan sonraki üç yıl; İslam yalnız güvenilen kişilere gizlice anlatıldı"],
            ["Açık Davet Dönemi","peygamberliğin dördüncü yılında başlayan, herkese açıktan tebliğ dönemi"],
            ["müşrik","Allah'a ortak koşan, putlara tapan kişi"],
            ["Safa Tepesi","İslam'ın bütün Mekkelilere açıkça duyurulduğu yer"],
            ["panayır","belli zamanlarda kurulan büyük pazar; Mekke dışından gelenlere İslam burada anlatıldı"],
            ["boykot","müşriklerin Müslümanlarla konuşmayı, evlenmeyi, ticareti ve yardımı kesmesi (616–619)"],
            ["Hüzün Yılı","Hz. Hatice ile Ebu Talib'in vefat ettiği yıl (620)"],
            ["Taif","620'de İslam'ı anlatmak ve yeni yurt aramak için gidilen şehir"],
            ["tevekkül","elinden geleni yaptıktan sonra sonucu Allah'a bırakıp O'na güvenme"],
            ["mucize","Allah'ın izniyle peygamberlerin gösterdiği olağanüstü olay"],
            ["isra","“gece yürüyüşü”; Mescid-i Haram'dan Mescid-i Aksa'ya götürülme"],
            ["miraç","“göğe çıkma, yükselme”; Mescid-i Aksa'dan göklere yükseltilme"],
            ["Mescid-i Haram","Mekke'de, Kâbe'nin bulunduğu mescit"],
            ["Mescid-i Aksa","Kudüs'teki mescit; Beytülmakdis de denir"],
            ["Miraç Kandili","isra ve miracın gerçekleştiği gece; Recep ayının 27. gecesi"],
            ["tasdik","doğrulama, doğru olduğunu kabul etme"],
            ["ümmet","bir peygambere inanıp onun yolundan giden topluluk"],
            ["Yesrib","Medine'nin Hicret'ten önceki adı"],
            ["Akabe","Mekke'de, Mescid-i Haram'a yaklaşık üç kilometre uzaklıktaki vadi"],
            ["biat","söz verme; birinin önderliğini kabul edip ona bağlılığını bildirme"],
            ["Hicret","Peygamberimizin ve Müslümanların 622'de Mekke'den Medine'ye göçü"],
            ["muhacir","Mekke'den Medine'ye göç eden Müslüman"],
            ["ensar","muhacirlere yardım eden Medineli Müslüman"],
            ["suikast","birini öldürmek için gizlice plan yapıp saldırma"],
            ["kan davası","öldürülen kişinin yakınlarının öç almak için sürdürdüğü düşmanlık"],
            ["Sevr","Hicret sırasında üç gün gizlenilen mağara"],
            ["Kuba","Medine yakınındaki köy; İslam tarihinin ilk mescidi burada yapıldı"]],
       p:["<b>İlk vahiy (610):</b> Mekke'de içki, kumar, puta tapma, haksızlık ve zulüm yaygındı; güçlü olan zayıfı eziyordu. Peygamberimiz bu ortamdan rahatsızdı; <b>Hira Mağarası</b>'na çekilip tefekkür ederdi. 610 yılının Ramazan ayında Cebrail, “Oku!” emriyle başlayan <b>Alak suresinin ilk beş ayetini</b> getirdi. Peygamberlik böyle başladı.",
          "<b>Fetretülvahiy:</b> ilk vahiyden sonra bir süre vahiy gelmedi. Peygamberimiz bu sürede Cebrail'le yeniden karşılaşma ümidiyle sık sık Hira'ya gitti. Bir gün oradan dönerken Cebrail'i gördü; eve varınca Hz. Hatice'ye “Beni örtünüz.” dedi. O sırada <b>Müddessir suresinin ilk beş ayeti</b> indi: “Ey örtüsüne bürünen! Kalk ve uyar!” Böylece insanları uyarması, İslam'ı <b>tebliğ etmesi</b> emredildi.",
          "<b>İlk Müslümanlar:</b> davete en yakınlarından başladı. İlk iman eden eşi <b>Hz. Hatice</b>'dir; ardından evlatlığı <b>Zeyd bin Harise</b> ve amcasının oğlu <b>Hz. Ali</b> Müslüman oldu. Ailesi dışından davet ettiği ilk kişi yakın dostu <b>Hz. Ebu Bekir</b>'dir.",
          "<b>Gizli Davet Dönemi (610–613):</b> ilk <b>üç yıl</b>. Peygamberimiz, müşriklerin tepkisinden korunmak ve Müslümanların zarar görmesini önlemek için yalnız <b>çok güvendiği kişilere</b> tebliğ etti; Müslümanlar ibadetlerini de gizlice yaptı. Bu sürede sayıları <b>otuza</b> ulaştı.",
          "<b>Açık Davet Dönemi (613'ten itibaren):</b> peygamberliğin <b>dördüncü yılında</b> “Yakın akrabanı da uyar.” (Şuara 214) ve “Sana buyurulanı açıkça duyur, müşriklere aldırış etme!” (Hicr 94) ayetleri indi. Peygamberimiz önce yakın akrabalarını <b>yemeğe çağırıp</b> İslam'ı anlattı. Amcası <b>Ebu Leheb</b> karşı çıktı; amcası <b>Ebu Talib</b> ise daveti kabul etmedi ama ona destek olacağını söyledi.",
          "<b>Safa Tepesi:</b> ardından bütün Mekkelileri Safa Tepesi'ne çağırdı. Onlara önce şunu sordu: “Şu dağın arkasından üzerinize atlılar geliyor desem bana inanır mısınız?” Mekkeliler “Senin yalan söylediğini hiç duymadık.” dediler; çünkü onu peygamberlikten önce de <b>Muhammedülemin</b> (güvenilir Muhammed) diye tanırlardı. Peygamberimiz de onları uyardı ve “Allah'tan başka ilah yoktur.” demeye çağırdı. Daha sonra Mekke çevresindeki <b>panayırlara</b> gelen tüccarlara da İslam'ı anlattı.",
          "<b>Müşriklerin tepkisi:</b> Müslümanların çoğalması, özellikle <b>Hz. Hamza</b> ve <b>Hz. Ömer</b> gibi önde gelenlerin Müslüman olması müşrikleri öfkelendirdi; İslam onların çıkarlarını ve yıllardır süren düzenini sarsıyordu. Önce Peygamberimizi <b>ikna</b> ederek vazgeçirmeyi denediler; olmayınca <b>iftira, hakaret ve eziyete</b> başvurdular.",
          "<b>Boykot (616–619):</b> müşrikler Müslümanlarla <b>konuşmama, evlenmeme, ticaret yapmama</b> ve onlara <b>hiçbir yardım etmeme</b> kararı aldı. Müslümanlar bu yıllarda Mekke'de <b>Ebu Talib Mahallesi</b>'nde yaşadı. Boykot, bazı Mekkelilerin çabasıyla <b>üç yıl sonra</b> sona erdi.",
          "<b>Hüzün Yılı (620):</b> boykot bittikten sonra Peygamberimizin eşi <b>Hz. Hatice</b> ve amcası <b>Ebu Talib</b> art arda vefat etti. En büyük iki destekçisini kaybettiği bu yıla, yani peygamberliğin <b>onuncu yılına</b> Hüzün Yılı denir.",
          "<b>Taif yolculuğu (620):</b> Ebu Talib'in vefatından sonra Mekke'de baskı arttı. Peygamberimiz İslam'ı Mekke dışında da anlatmak ve <b>yeni bir yurt</b> bulmak için <b>Zeyd bin Harise</b> ile Taif'e gitti; kabul görmedi, taşlandı (ayrıntısı aşağıdaki kutuda).",
          "<b>İsra ve Miraç:</b> Hüzün Yılı ve Taif'ten sonra Allah, Peygamberimizi bir gece Mescid-i Haram'dan Mescid-i Aksa'ya götürdü (<b>isra</b>), oradan göklere yükseltti (<b>miraç</b>). Bu mucizeler ona büyük bir <b>moral ve manevi destek</b> oldu (ayrıntısı kutuda).",
          "<b>Yeni yurt arayışı:</b> isra ve miraçtan sonra müşrikler baskıyı daha da artırdı; Müslümanların can ve mal güvenliği kalmamıştı, inançlarını özgürce yaşayamıyorlardı. Peygamberimiz panayırlarda Mekke dışından gelenlere İslam'ı anlatmayı sürdürdü.",
          "<b>Akabe Biatleri:</b> <b>Yesrib</b>'den (Medine'nin eski adı) gelenlerle Mekke'deki <b>Akabe</b> vadisinde üç yıl üst üste buluşuldu: 620'de 6 kişiyle <b>Akabe Görüşmesi</b>, 621'de 12 kişiyle <b>Birinci Akabe Biati</b>, 622'de 75 kişiyle <b>İkinci Akabe Biati</b>. Bu buluşmalar İslam'ın Medine'de yayılmasını sağladı ve <b>hicretin zeminini</b> hazırladı (ayrıntısı tabloda).",
          "<b>Hicret (622):</b> İkinci Akabe Biati'nden sonra Peygamberimiz Müslümanlara izin verdi; küçük gruplar hâlinde <b>gizlice</b> Medine'ye göç ettiler. Sonra kendisi de Hz. Ebu Bekir ile yola çıktı (ayrıntısı son kutuda)."],
       box:[{t:"Gizli ve açık davet — nasıl karşılaştırılır?", h:"<p>Ünitenin ilk kazanımı tam olarak budur: iki dönemi <b>karşılaştırabilmek</b>. <b>Farklar</b> aşağıdaki ilk tabloda; <b>benzerlikler</b> şunlar:</p><ul><li>İkisi de <b>Allah'ın emriyle</b>, ayetlerle başladı.</li><li>İkisinin de <b>amacı aynıdır</b>: insanları Allah'ın birliğine inanmaya, İslam'a çağırmak.</li><li>İkisinde de Peygamberimiz işe <b>en yakınlarından</b> başladı: gizli davette ailesi ve dostları, açık davette yakın akrabaları.</li><li>İkisinde de <b>kararlılıkla</b> çalıştı; zorluk çıkınca vazgeçmedi.</li></ul><p>Ders kitabı bu karşılaştırmayı boş tablo olarak sana bırakır; buradaki maddeler kitabın anlattıklarından çıkarılmıştır. Öğretmenin tahtaya yazdırdıysa <b>onunkini</b> esas al.</p>"},
            {t:"Müşriklerin tepkisi — adım adım", h:"<ul><li><b>Neden rahatsız oldular?</b> Müslümanlar çoğalıyor, Hz. Hamza ve Hz. Ömer gibi önde gelenler Müslüman oluyordu. İslam'ın emir ve yasakları çıkarlarını ve alışılmış düzenlerini sarsıyordu.</li><li><b>1. İkna:</b> önce Peygamberimizi davasından vazgeçmeye ikna etmeye çalıştılar.</li><li><b>2. İftira, hakaret, eziyet:</b> sonuç alamayınca onu itibarsızlaştırmak istediler; Müslümanlara baskı ve zulüm yaptılar.</li><li><b>3. Boykot (616):</b> konuşmak yok · evlenmek yok · ticaret yok · yardım yok. Üç yıl sürdü.</li></ul><p><b>Kararlılık örneği:</b> Mekke'nin ileri gelenleri, Haşimoğulları'nın reisi <b>Ebu Talib</b>'e gidip yeğenini vazgeçirmesini ya da onu korumayı bırakmasını istedi. Peygamberimiz amcasına “Güneş'i sağ elime, Ay'ı sol elime koysalar bile bu görevi bırakmam.” dedi. Ebu Talib de onu hiçbir zaman korumasız bırakmayacağını söyledi.</p>"},
            {t:"Taif yolculuğu — beş soruda", h:"<ul><li><b>Neden gitti?</b> Ebu Talib'in vefatından sonra Mekke'de baskı artmıştı. İslam'ı Mekke dışında da anlatmak ve <b>yeni bir yurt</b> bulmak istiyordu.</li><li><b>Ne zaman, kiminle?</b> <b>620</b>'de, evlatlığı <b>Zeyd bin Harise</b> ile. Taif'te <b>on gün</b> kaldı.</li><li><b>Taifliler ne yaptı?</b> Peygamberimiz putperest Taif halkına İslam'ı anlatmak için şehrin ileri gelenlerine gitti; hiçbiri onunla görüşmeyi de daveti de kabul etmedi. Gençlerinin Müslüman olmasından korkup şehri terk etmesini istediler. Peygamberimizin, bu ziyareti Mekkelilere söylememeleri yönündeki ricasını da geri çevirdiler ve ayrılırken onu <b>taşlattılar</b>. Zeyd kendini siper etti ama Peygamberimiz yine de yaralandı.</li><li><b>Bağda ne oldu?</b> Yol üstünde bir bağa sığındılar. Bağın sahipleri <b>Utbe ve Şeybe bin Rebia</b> kardeşler, köleleri <b>Addas</b> ile üzüm gönderdi. Peygamberimiz yemeden önce <b>besmele</b> çekti; Ninovalı bir Hristiyan olan Addas buna şaşırdı. Peygamberimiz Ninova'nın <b>Hz. Yunus</b>'un memleketi olduğunu, Yunus'un da kendisi gibi peygamber olduğunu söyleyince Addas <b>Müslüman oldu</b>. O bağın yerine sonradan <b>Mescid-i Addas</b> yapılmıştır.</li><li><b>Dönüş yolunda?</b> Bir melek, emrederse iki dağı Taiflilerin üstüne yıkabileceğini söyledi. Peygamberimiz <b>kabul etmedi</b>; Allah'ın, onların soyundan yalnız Allah'a ibadet eden bir nesil çıkaracağını umduğunu söyledi.</li></ul><p>Bu yolculuk onun <b>sabrını, merhametini</b> ve <b>tevekkülünü</b> gösterir: kötülüğe kötülükle karşılık vermedi, ümidini kaybetmedi.</p>"},
            {t:"İsra ve Miraç — ne oldu, ne anlama gelir?", h:"<ul><li><b>İsra</b> (“gece yürüyüşü”): Peygamberimizin bir gece Mekke'deki <b>Mescid-i Haram</b>'dan Kudüs'teki <b>Mescid-i Aksa</b>'ya Allah'ın izniyle götürülmesi.</li><li><b>Miraç</b> (“göğe çıkma, yükselme”): aynı gece Mescid-i Aksa'dan <b>göklere yükseltilmesi</b>; kendisine Allah'ın ayetlerinin ve olağanüstü nimetlerinin gösterilmesi.</li><li><b>Ne zaman?</b> <b>Recep ayının 27. gecesi</b>; Hüzün Yılı ve Taif'te yaşananlardan <b>sonra</b> (kitabın zaman şeridinde 621). Bu gece <b>Miraç Kandili</b> olarak kutlanır.</li><li><b>Kur'an'da:</b> isra, <b>İsra suresinin 1. ayetinde</b> bildirilir.</li><li><b>Mekkeliler ne dedi?</b> Peygamberimiz sabah olanları anlattı. Müslümanlar <b>tasdik etti</b> (doğruladı). Müşrikler, bir gecede Kudüs'e gidip gelinemeyeceğini söyleyerek <b>inkâr etti</b>; Kudüs'ü görmüş olanlar Mescid-i Aksa'nın kapı sayısı gibi ayrıntılar sordu. Allah aradaki mesafeyi kaldırdı; Peygamberimiz sorulanları mescide <b>bakarak</b> cevapladı.</li><li><b>Neden mucize?</b> İnsan gücüyle yapılamayacak, ancak Allah'ın kudretiyle gerçekleşen <b>olağanüstü</b> olaylardır. (Sınıfta mucize için bir tanım yazdırıldıysa onu kullan.)</li><li><b>Peygamberimiz ve Müslümanlar için anlamı:</b> müşriklerin eziyetlerine karşı Peygamberimize <b>moral ve manevi destek</b> oldu. Müslümanlar Allah'ın yardımını bir kez daha hissetti; Peygamberimize saygı ve bağlılıkları arttı.</li><li><b>Mescid-i Haram → Mescid-i Aksa:</b> Müslümanlarla önceki peygamberlerin ümmetleri arasındaki <b>ortak bağa</b> işaret eder; Allah bütün insanlığa <b>aynı kaynaktan</b> mesaj göndermiştir.</li><li><b>Miraçta verilen üç şey:</b> <b>beş vakit namaz</b>, Bakara suresinin son iki ayeti (Amenerresulü) ve Allah'a ortak koşmadan ölenlerin günahlarının bağışlanacağı müjdesi.</li></ul>"},
            {t:"Hicret'in sebepleri ve Akabe", h:"<ul><li><b>Hicret'in sebepleri:</b> müşriklerin inananlara <b>eziyet etmesi</b> · Müslümanların <b>can ve mal güvenliğinin</b> tehlikede olması · inançlarını <b>özgürce yaşayabilecekleri</b> bir yere ihtiyaç duymaları · İslam'ı <b>Mekke dışındaki insanlara</b> ulaştırma isteği.</li><li><b>Sınıflandırma (örnek):</b> <b>dinî</b> — inancını özgürce yaşayamama, İslam'ı başka yerlere ulaştırma isteği; <b>ekonomik</b> — ticaretin engellenmesi, mal güvenliğinin kalmaması; <b>sosyal</b> — hakaret, iftira, dışlanma, can güvenliğinin kalmaması. Kitaptaki etkinlik bu ayırmayı sana bırakır; öğretmeninki farklıysa <b>onu</b> yaz.</li><li><b>Akabe neden önemli?</b> Mekke'de bunalan Müslümanlara güvenli bir yurdun kapısını açtı: Medineliler önce Müslüman oldu, sonra Peygamberimizi ve Müslümanları şehirlerine davet edip onu <b>korumaya söz verdi</b>.</li><li><b>Yesrib → Medine:</b> şehrin eski adı Yesrib'dir. Hicret'ten sonra “Medinetü'r-Resul” (Peygamber Şehri) dendi; kısaca Medine adıyla anıldı.</li></ul>"},
            {t:"Hicret yolculuğu — ünitenin son bölümü", h:"<p>İl tablosuna göre bu bölüm 1. yazılıya <b>girmez</b>; yine de öğretmenine sor. Ünite bitince ve 2. yazılıda lazım olur.</p><ul><li><b>Hicret</b> “terk etmek, ayrılmak” demektir: İslam'ı yaşamak, Allah'ın emirlerini başka insanlara duyurmak ve müşriklerin kötü muamelesinden kurtulmak için <b>622</b>'de Mekke'den Medine'ye yapılan göç.</li><li><b>İlk gidenler:</b> Müslümanlar gruplar hâlinde göç etti. Medine'ye ilk hicret eden <b>Ebu Seleme</b>'dir; kabilesi izin vermediği için eşi Ümmü Seleme'yi ve oğlunu Mekke'de bırakmak zorunda kaldı, onlar ancak bir yıl sonra gelebildi.</li><li><b>Mekke'de kalanlar:</b> Peygamberimiz, Hz. Ebu Bekir ve aileleri, Hz. Ali ile hicrete gücü yetmeyen ya da engellenen Müslümanlar. Hz. Ebu Bekir sık sık hicret izni istiyor, Peygamberimiz ona <b>sabır</b> tavsiye ediyordu.</li><li><b>Müşrikler neden telaşlandı?</b> İslam'ın Medine'de yayılıp Müslümanların güçlenmesinden korktular; Medine, <b>Şam ticaret yolu</b> üzerindeydi.</li><li><b>Suikast planı:</b> müşriklerin ileri gelenleri Peygamberimizi öldürmeye karar verdi. <b>Her kabileden bir kişi</b> seçtiler; gece evini basacaklardı. Böylece kimin yaptığı belli olmayacak, kan davası da güdülmeyecekti (yakınları öç alamayacaktı).</li><li><b>Hz. Ali'nin görevi:</b> Allah planı Cebrail aracılığıyla bildirdi. Peygamberimiz, Hz. Ali'den o gece <b>kendisinin yerine yatağında yatmasını</b>, sabah <b>emanetleri sahiplerine verdikten sonra</b> yola çıkmasını istedi. Peygamberimiz hava kararınca evden çıktı; bir avuç toprağı Yasin suresinden ayetler okuyarak müşriklere doğru savurdu ve onlara görünmeden ayrıldı.</li><li><b>Sevr:</b> müşrikler onu bulana <b>yüz deve</b> ödül koydu. Peygamberimiz ve hicret arkadaşı <b>Hz. Ebu Bekir</b>, izlerini kaybettirmek için Medine'nin <b>ters yönüne</b> gidip Sevr Mağarası'nda <b>üç gün</b> kaldı. İz sürücüler mağaranın önüne kadar geldi; Peygamberimiz telaşlanan arkadaşına “Tasalanma! Allah bizimle beraberdir.” dedi. Müşrikler içeri bakmadan döndü.</li><li><b>Kuba:</b> Medine yakınındaki bu köyde konakladılar; Hz. Ali onlara burada yetişti. Burada yapılan <b>Kuba Mescidi</b>, İslam tarihinin <b>ilk mescidi</b>dir.</li><li><b>Ranuna Vadisi:</b> <b>ilk cuma namazı</b> burada kılındı. <b>12 Rebiyülevvel 622 Cuma</b> günü Medine'ye ulaşıldı.</li><li><b>Muhacir – ensar:</b> her şeyini Mekke'de bırakıp göç edenler <b>muhacir</b>, onlara kucak açan Medineliler <b>ensar</b>dır. Aralarındaki kardeşlik <b>dayanışma, fedakârlık ve yardımlaşmanın</b> en güzel örneğidir. Peygamberimiz, hicret olmasaydı kendisinin de ensardan biri olacağını söylemiştir.</li></ul>"},
            {t:"Ünitede geçen hadisler", h:"<p>Kitaptaki “Bir Hadis Öğreniyorum” kutularının özeti. Hadisin <b>hangi konuyla</b> ilgili olduğunu ve <b>ne öğütlediğini</b> bilmen yeter.</p><ul><li><b>Davet:</b> Peygamberimiz, görevle gönderdiği sahabilere “Müjdeleyin, nefret ettirmeyin; kolaylaştırın, zorlaştırmayın!” derdi.</li><li><b>Taif:</b> “İnsanlar iyilik yaparsa biz de iyilik yaparız, kötülük yaparsa biz de kötülük yaparız.” diyenler gibi olmamayı; iyiliğe iyilikle karşılık vermeyi, kötülük görünce de <b>zulmetmemeyi</b> alışkanlık edinmeyi öğütlemiştir.</li><li><b>Miraç:</b> miraçta üç şey verilmiştir: beş vakit namaz, Bakara suresinin son iki ayeti ve Allah'a ortak koşmadan ölenlerin bağışlanacağı müjdesi.</li><li><b>Hicret:</b> “Ameller niyetlere göredir.” Kim Allah ve Resulü için hicret ederse hicreti Allah'a ve Resulü'nedir; kim dünyalık için hicret ederse hicreti onadır.</li><li><b>Ensar:</b> “Hicret olmasaydı ben mutlaka ensardan biri olurdum.”</li></ul>"}],
       tbl:[{h:["","Gizli davet","Açık davet"], r:[
              ["Ne zaman?","610–613; ilk <b>üç yıl</b>","613'ten itibaren; peygamberliğin <b>4. yılında</b> başladı"],
              ["Hangi ayetlerle?","Müddessir suresinin ilk beş ayeti: “Kalk ve uyar!”","Şuara 214: “Yakın akrabanı da uyar.” · Hicr 94: “…açıkça duyur…”"],
              ["Kimlere?","Ailesi, dostları, <b>çok güvendiği</b> kişiler","Önce yakın akrabaları, sonra <b>bütün Mekkeliler</b> ve panayırlara gelen tüccarlar"],
              ["Nasıl?","Gizlice; ibadetler de gizli","Açıktan: akrabalara yemek daveti, Safa Tepesi konuşması, panayırlar"],
              ["Neden böyle?","Müşriklerin tepkisinden korunmak, Müslümanların zarar görmesini önlemek","Allah'ın emri: tebliğ artık herkese açıkça duyurulacaktı"],
              ["Sonuç","Müslümanların sayısı <b>otuza</b> ulaştı","İslam bütün Mekke'ye duyuruldu; müşriklerin tepkisi sertleşti (eziyet, boykot)"]]},
            {h:["Buluşma","Kimler?","Ne oldu?"], r:[
              ["Akabe Görüşmesi (620)","Medineli <b>6</b> kişi","Peygamberimiz İslam'ı anlattı; Müslüman oldular ve ertesi yıl aynı yerde buluşmaya söz verdiler."],
              ["I. Akabe Biati (621)","<b>12</b> kişi (ilk altısı da içinde)","<b>Dinî konularda, bireysel sözler:</b> Allah'a ortak koşmamak, hırsızlık ve iffetsizlik yapmamak, iftira atmamak, Allah'ın emir ve yasaklarına uymak. Ardından <b>Musab bin Umeyr</b> Medine'ye gönderildi; bir yılda İslam orada yayıldı."],
              ["II. Akabe Biati (622)","Medineli <b>75</b> Müslüman","<b>Daha çok toplumsal sözler:</b> Peygamberimizi kendi canları gibi korumak, ona her türlü desteği vermek, iyiliği emredip hakkı savunmak, ona itaat etmek. Onu ve Müslümanları <b>Medine'ye davet ettiler</b>; ardından hicrete izin verildi."]]},
            {h:["Kişi","Kimdir?"], r:[
              ["Hz. Hatice","Eşi; <b>ilk iman eden</b> kişi. Cömert, ahlaklı, akıllı ve merhametliydi; sonraki dönemlerde <b>Haticetülkübra</b> diye anıldı. 620'de vefat etti."],
              ["Zeyd bin Harise","Evlatlığı; ilk Müslümanlardan. Taif'e onunla gitti."],
              ["Hz. Ali","Amcasının oğlu; ilk Müslümanlardan. Hicret gecesi Peygamberimizin yatağında yattı."],
              ["Hz. Ebu Bekir","Yakın dostu; aile dışından davet edilen ilk kişi, <b>hicret arkadaşı</b>"],
              ["Ebu Talib","Amcası, Haşimoğulları'nın reisi. Müslüman olmadı ama onu hep korudu. 620'de vefat etti."],
              ["Ebu Leheb","Davete <b>karşı çıkan</b> amcası"],
              ["Hz. Hamza ve Hz. Ömer","Müslüman olmaları müşrikleri daha da öfkelendiren iki önemli kişi"],
              ["Addas","Taif dönüşünde bağda Müslüman olan Ninovalı köle"],
              ["Musab bin Umeyr","I. Akabe Biati'nden sonra İslam'ı anlatması için Medine'ye gönderilen sahabi"],
              ["Ebu Seleme","Medine'ye ilk hicret eden sahabi"]]},
            {h:["Yıl","Olay"], r:[
              ["610","İlk vahiy (Hira); gizli davet başlar"],
              ["613","Açık davet başlar"],
              ["615","Habeşistan'a ilk hicret: bir grup Müslüman baskıdan kurtulmak için oraya göç etti"],
              ["616","Habeşistan'a ikinci hicret; <b>boykot başlar</b>"],
              ["619","Boykot sona erer"],
              ["620","<b>Hüzün Yılı</b> (Hz. Hatice ve Ebu Talib'in vefatı) · Taif yolculuğu · Akabe Görüşmesi"],
              ["621","<b>İsra ve Miraç</b> · I. Akabe Biati · Musab bin Umeyr Medine'de"],
              ["622","II. Akabe Biati · <b>Hicret</b> · Kuba Mescidi · ilk cuma namazı"]]}],
       trap:"<b>İsra</b> ile <b>miracı</b> karıştırmak: isra yeryüzündeki yolculuktur (Mekke → Kudüs), miraç Kudüs'ten göklere yükseliştir. İkinci tuzak: <b>Ebu Talib</b>'i Müslüman sanmak — daveti kabul etmedi ama yeğenini hep korudu; davete karşı çıkan amca <b>Ebu Leheb</b>'dir. Üçüncüsü: iki Akabe Biati'ni karıştırmak — <b>12 kişi, bireysel sözler, Musab</b> birincidir; <b>75 kişi, toplumsal sözler, Medine'ye davet</b> ikincidir. Dördüncüsü: sırayı şaşırmak — boykot (616–619) <b>önce</b>, Hüzün Yılı (620) <b>sonra</b>dır.",
       q:["Fetretülvahiy nedir? Bu dönem hangi ayetlerle sona ermiş, Peygamberimize ne emredilmiştir?",
          "İlk Müslümanlar kimlerdir? Her birinin Peygamberimize yakınlığını yaz.",
          "Gizli davet nedir, ne kadar sürmüştür? Peygamberimiz daveti başlangıçta neden gizli yürütmüştür?",
          "Açık davet ne zaman ve nasıl başlamıştır? Peygamberimiz açık davette sırasıyla kimlere seslenmiştir?",
          "Peygamberimiz Safa Tepesi'nde konuşmasına nasıl bir soruyla başlamıştır? Mekkelilerin verdiği cevap neyi gösterir?",
          "Gizli davet ile açık davetin <b>iki benzerliğini</b> ve <b>üç farkını</b> yaz.",
          "Müşrikler İslam'ın yayılmasından neden rahatsız olmuştur? Yayılmasını engellemek için sırasıyla neler yapmışlardır?",
          "Boykot nedir? Boykot kararında neler yer alıyordu; ne zaman başlayıp nasıl sona erdi?",
          "Hüzün Yılı hangi yıldır? Bu ad neden verilmiştir?",
          "Müşrikler, yeğenini vazgeçirmesi için Ebu Talib'e baskı yaptığında Peygamberimiz amcasına ne demiştir? Bu söz onun hangi özelliğini gösterir?",
          "Peygamberimiz Taif'e neden, ne zaman ve kiminle gitmiştir? Taifliler ona nasıl davranmıştır?",
          "Taif dönüşünde melek Peygamberimize ne teklif etmiş, o ne cevap vermiştir? Bu cevap hangi ahlaki özelliklerini gösterir?",
          "Addas kimdir? Müslüman olması nasıl gerçekleşmiştir?",
          "İsra ve miraç ne demektir? İkisi arasındaki farkı yaz.",
          "Peygamberimiz isra ve miracı anlattığında Müslümanlar ve müşrikler nasıl tepki vermiştir? Müşriklerin sorularını nasıl cevaplamıştır?",
          "İsra ve miraç neden mucize kabul edilir? Bu mucizeler hangi olaylardan sonra gerçekleşmiştir ve Peygamberimiz için ne anlam taşır?",
          "İsranın Mescid-i Haram'da başlayıp Mescid-i Aksa'da bitmesi neye işaret eder? Miraçta Peygamberimize neler verilmiştir?",
          "Peygamberimizi yeni bir yurt aramaya yönelten sebepler (Hicret'in sebepleri) nelerdir?",
          "Birinci ve İkinci Akabe Biatlerini karşılaştır: Ne zaman, kaç kişiyle yapıldı; hangi sözler verildi; sonucu ne oldu?",
          "<b>Yorum:</b> Sana kötü davranan biri oldu. Peygamberimizin Taif'teki tutumunu örnek alırsan nasıl davranırsın? İki cümleyle yaz.",
          "<b>Yorum:</b> Peygamberimiz peygamberlikten önce de “Muhammedülemin” diye tanınıyordu. Bu, İslam'a davetini nasıl etkilemiş olabilir? İlk inananların kimler olduğunu da düşünerek yaz.",
          "<b>Son bölüm:</b> Müşrikler Peygamberimize neden ve nasıl bir suikast planlamıştır? Peygamberimiz o gece Hz. Ali'den ne istemiştir?",
          "<b>Son bölüm:</b> Hicret yolculuğunu anlat: Sevr, Kuba ve Ranuna'da neler oldu? Medine'ye ne zaman ulaşıldı?",
          "<b>Son bölüm:</b> Muhacir ve ensar kimlere denir? Aralarındaki kardeşlik bize ne öğretir?"],
       a:["İlk vahiyden (Alak suresinin ilk beş ayeti) sonra bir süre vahyin gelmediği dönemdir. <b>Müddessir suresinin ilk beş ayetiyle</b> sona erdi. Bu ayetlerde “Kalk ve uyar!” buyrularak Peygamberimize insanları uyarması ve İslam'ı <b>tebliğ etmesi</b> emredildi.",
          "<b>Hz. Hatice</b> (eşi; ilk iman eden), <b>Zeyd bin Harise</b> (evlatlığı), <b>Hz. Ali</b> (amcasının oğlu) ve <b>Hz. Ebu Bekir</b> (yakın dostu; ailesi dışından davet ettiği ilk kişi).",
          "İlk vahyin geldiği 610'dan sonra İslam'ın yalnızca <b>çok güvenilen kişilere</b>, gizlice anlatıldığı <b>üç yıllık</b> dönemdir. Sebebi: <b>müşriklerin tepkisinden korunmak</b> ve <b>Müslümanların zarar görmesini önlemek</b>. Bu dönemde ibadetler de gizli yapıldı; Müslümanların sayısı otuza ulaştı.",
          "Peygamberliğin <b>dördüncü yılında</b> (613), “Yakın akrabanı da uyar.” ve “Sana buyurulanı açıkça duyur.” ayetleriyle başladı. Peygamberimiz önce <b>yakın akrabalarını</b> yemeğe çağırıp İslam'ı anlattı; sonra <b>bütün Mekkelileri</b> Safa Tepesi'nde toplayıp uyardı; ardından panayırlara gelen <b>Mekke dışındaki</b> insanlara anlattı.",
          "Dağın arkasından üzerlerine atlıların geldiğini haber verse kendisine inanıp inanmayacaklarını sordu. Mekkeliler “Senin yalan söylediğini hiç duymadık.” dediler. Bu cevap, Mekkelilerin onu <b>doğru sözlü ve güvenilir</b> biri (<b>Muhammedülemin</b>) olarak tanıdığını gösterir; Peygamberimiz uyarısını bu güvenin üzerine kurmuştur.",
          "<b>Benzerlikler:</b> ikisi de Allah'ın emriyle (ayetlerle) başladı; ikisinin de amacı insanları İslam'a çağırmaktır. (Önce yakınlardan başlanması ve kararlılıkla sürdürülmesi de benzerlik olarak yazılabilir.) <b>Farklar:</b> gizli davet ilk üç yılda, açık davet 4. yıldan itibaren yapıldı; gizli davette yalnız çok güvenilen kişilere, açık davette akrabalara, bütün Mekkelilere ve dışarıdan gelenlere seslenildi; gizli davet gizlice yürütüldü, açık davet herkesin önünde (Safa Tepesi, panayırlar).",
          "Müslümanların sayısı artıyor, Hz. Hamza ve Hz. Ömer gibi önde gelen kişiler Müslüman oluyordu; İslam'ın emir ve yasakları <b>çıkarlarını ve yıllardır süren düzenlerini</b> sarsıyordu. Önce Peygamberimizi <b>ikna</b> yoluyla vazgeçirmeye çalıştılar; başaramayınca <b>iftira, hakaret ve eziyete</b> başvurdular, Müslümanlara baskı ve zulüm yaptılar; sonunda <b>boykot</b> kararı aldılar.",
          "Müşriklerin Müslümanlarla her türlü ilişkiyi kesmesidir. Karara göre Müslümanlarla <b>konuşulmayacak, evlenilmeyecek, ticaret yapılmayacak</b> ve onlara <b>hiçbir yardım edilmeyecekti</b>. <b>616</b>'da başladı; Müslümanlar bu yıllarda Ebu Talib Mahallesi'nde yaşadı. Bazı Mekkelilerin çabasıyla <b>üç yıl sonra (619)</b> sona erdi.",
          "<b>620</b> yılı, yani peygamberliğin <b>onuncu yılıdır</b>. Boykot bittikten sonra Peygamberimizin eşi <b>Hz. Hatice</b> ve amcası <b>Ebu Talib</b> art arda vefat etti. En büyük iki destekçisini, çok sevdiği iki insanı kaybettiği için bu yıla Hüzün Yılı dendi.",
          "“Güneş'i sağ elime, Ay'ı sol elime koysalar bile bu görevi bırakmam.” demiştir. Bu söz onun <b>kararlılığını</b> ve görevine bağlılığını gösterir: hiçbir tehdit onu tebliğden vazgeçiremezdi. Ebu Talib de bunun üzerine onu hiçbir zaman korumasız bırakmayacağını söyledi.",
          "Ebu Talib'in vefatından sonra Mekke'de baskı artmıştı. <b>İslam'ı Mekke dışında da anlatmak</b> ve <b>yeni bir yurt</b> bulmak için <b>620</b>'de <b>Zeyd bin Harise</b> ile gitti; on gün kaldı. Taif'in ileri gelenleri onunla görüşmeyi de daveti de <b>kabul etmedi</b>, şehri terk etmesini istedi; ayrılırken de onu <b>taşlattı</b>. Zeyd kendini siper etti ama Peygamberimiz yine de yaralandı.",
          "Melek, emrederse <b>iki dağı Taiflilerin üstüne yıkabileceğini</b> söyledi. Peygamberimiz <b>kabul etmedi</b>; Allah'ın onların soyundan yalnız Allah'a ibadet eden bir nesil çıkaracağını umduğunu söyledi. Bu cevap onun <b>sabrını, merhametini</b> ve <b>tevekkülünü</b> (Allah'a güvenip ümidini korumasını) gösterir: kötülüğe kötülükle karşılık vermemiştir.",
          "Addas, Taif dönüşünde sığınılan bağın sahiplerinin <b>Ninovalı, Hristiyan kölesidir</b>. Peygamberimize üzüm getirdi; onun yemeden önce <b>besmele</b> çektiğini duyunca şaşırdı. Peygamberimiz Ninova'nın <b>Hz. Yunus</b>'un memleketi olduğunu, Yunus'un da kendisi gibi peygamber olduğunu söyledi. Addas bunun üzerine onun Allah'ın elçisi olduğuna inandı ve Müslüman oldu.",
          "<b>İsra</b> “gece yürüyüşü” demektir: Peygamberimizin bir gece Mekke'deki <b>Mescid-i Haram</b>'dan Kudüs'teki <b>Mescid-i Aksa</b>'ya götürülmesidir. <b>Miraç</b> “göğe çıkma, yükselme” demektir: aynı gece <b>Mescid-i Aksa'dan göklere yükseltilmesi</b>, kendisine Allah'ın ayetlerinin ve olağanüstü nimetlerinin gösterilmesidir. Fark: isra yeryüzünde iki mescit arasındaki yolculuk, miraç göklere yükseliştir.",
          "Müslümanlar onu <b>tasdik etti</b> (doğruladı). Müşrikler <b>inkâr etti</b>; bir gecede Kudüs'e gidip gelmenin imkânsız olduğunu söylediler. Kudüs'ü görmüş olanlar Mescid-i Aksa'nın kaç kapısı olduğu gibi sorular sordu. Allah, Peygamberimizle Mescid-i Aksa arasındaki mesafeyi kaldırdı; o da sorulanları <b>oraya bakarak</b> cevapladı.",
          "Çünkü insan gücüyle yapılamayacak, ancak Allah'ın kudretiyle gerçekleşen <b>olağanüstü</b> olaylardır (bir gecede Mekke'den Kudüs'e, oradan göklere). <b>Hüzün Yılı</b> ve <b>Taif</b>'te yaşananlardan sonra gerçekleşti. Allah, müşriklerin eziyetlerine karşı Peygamberimize <b>moral ve manevi destek</b> verdi; Müslümanlar da Allah'ın yardımını bir kez daha hissetti, Peygamberimize bağlılıkları arttı.",
          "Müslümanlarla önceki peygamberlerin ümmetleri arasındaki <b>ortak bağa</b> işaret eder: Allah bütün insanlığa <b>aynı kaynaktan</b> mesaj göndermiştir. Miraçta üç şey verildi: <b>beş vakit namaz</b>, <b>Bakara suresinin son iki ayeti</b> (Amenerresulü) ve Allah'a ortak koşmadan ölenlerin günahlarının bağışlanacağı <b>müjdesi</b>.",
          "Müşriklerin Müslümanlara <b>eziyet etmesi</b> ve isra–miraçtan sonra baskıyı daha da artırması; Müslümanların <b>can ve mal güvenliğinin</b> tehlikede olması; inançlarını <b>özgürce yaşayamamaları</b>; İslam'ı <b>Mekke dışındaki insanlara</b> ulaştırma isteği. Mekke, Müslümanlar için yaşanması zor bir şehir olmuştu.",
          "<b>Birinci (621):</b> 12 Medineli. Allah'a ortak koşmamaya, hırsızlık ve iffetsizlik yapmamaya, iftira atmamaya, Allah'ın emir ve yasaklarına uymaya söz verdiler (dinî konularda <b>bireysel</b> sözler). Sonuç: <b>Musab bin Umeyr</b> Medine'ye gönderildi, İslam orada yayıldı. <b>İkinci (622):</b> 75 Medineli. Peygamberimizi canları gibi korumaya, desteklemeye, iyiliği emredip hakkı savunmaya ve ona itaat etmeye söz verdiler (daha çok <b>toplumsal</b> sözler); onu ve Müslümanları Medine'ye davet ettiler. Sonuç: <b>hicrete izin verildi</b>.",
          "Örnek cevap: Kötülüğe <b>kötülükle karşılık vermem</b>; öfkeyle hareket etmek yerine sabreder, o kişinin bir gün yanlışını anlayacağını umarım. Doğru bildiğimi söylemekten de vazgeçmem. (Sabır, kötülüğe kötülükle karşılık vermeme ve ümit yazılmalı.)",
          "Örnek cevap: İnsanlar onun <b>doğru sözlü ve güvenilir</b> olduğunu yıllardır biliyordu; Safa Tepesi'nde “Senin yalan söylediğini hiç duymadık.” dediler. Bu güven, sözünün dinlenmesini kolaylaştırdı. İlk inananların onu en yakından tanıyan eşi, evlatlığı, amcasının oğlu ve en yakın dostu olması da <b>doğruluğundan şüphe edilmediğini</b> gösterir. Güzel ahlak, söylenen sözü <b>inandırıcı</b> kılar.",
          "Müslümanların Medine'de güçlenmesinden korktular; Medine'nin Şam ticaret yolu üzerinde olması da onları endişelendiriyordu. <b>Her kabileden bir kişi</b> seçip gece evini basmaya karar verdiler; böylece kimin yaptığı belli olmayacak, kan davası güdülmeyecekti. Peygamberimiz Hz. Ali'den <b>yatağında yatmasını</b> ve sabah <b>emanetleri sahiplerine verdikten sonra</b> yola çıkmasını istedi.",
          "Peygamberimiz ve Hz. Ebu Bekir, takip edenleri yanıltmak için Medine'nin ters yönüne gidip <b>Sevr Mağarası</b>'nda <b>üç gün</b> kaldı. Sonra Medine yakınındaki <b>Kuba</b>'da konakladılar; Hz. Ali onlara burada yetişti ve İslam tarihinin <b>ilk mescidi</b> (Kuba Mescidi) yapıldı. <b>Ranuna Vadisi</b>'nde <b>ilk cuma namazı</b> kılındı. <b>12 Rebiyülevvel 622 Cuma</b> günü Medine'ye ulaştılar.",
          "<b>Muhacir:</b> dinini yaşamak için bütün varlığını geride bırakıp Mekke'den Medine'ye göç eden Müslüman. <b>Ensar:</b> muhacirlere kucak açan, her konuda yardım eden Medineli Müslüman. Bu kardeşlik <b>dayanışmanın, fedakârlığın ve yardımlaşmanın</b> en güzel örneğidir; ensar, kendi ihtiyacı olsa bile kardeşini kendine tercih etmiştir."]},

      {n:"Peygamberimizin Mekkeli Arkadaşları", w:"Aralık–Ocak",
       lead:"Peygamberimizin Mekkeli sahabilerle kurduğu, güvene dayanan iletişimi ve muhacirlerin ona bağlılığını işler. Kitaptaki bölümler: <b>2.1</b> Peygamberimizin Mekkeli Sahabilerle İletişimi · <b>2.2</b> Muhacirlerin Dilinden Peygamberimiz · <b>2.3</b> Peygamberimizin Mekke'deki Yakın Arkadaşları. Konu anlatımı ve sorular ünite başlarken eklenecek."},

      {n:"Rehberim Peygamberim", w:"Şubat–Mart–Nisan",
       lead:"Peygamberimizin hayatında sabrın, orucun, infak ve sadakanın yerini işler. Kitaptaki bölümler: <b>3.1</b> Peygamberimizin Hayatında Sabır · <b>3.2</b> Peygamberimizin Hayatında Oruç · <b>3.3</b> Peygamberimizin Hayatında İnfak ve Sadaka. Konu anlatımı ve sorular ünite başlarken eklenecek."},

      {n:"İlim Hayatında Peygamberimiz", w:"Nisan–Mayıs–Haziran",
       lead:"Peygamberimizin ilme verdiği önemi ve ilme teşvik ettiği sahabileri işler. Kitaptaki bölümler: <b>4.1</b> Peygamberimizin İlme Verdiği Önem · <b>4.2</b> Peygamberimizin İlme Teşvik Ettiği Sahabiler. Konu anlatımı ve sorular ünite başlarken eklenecek."}
     ]}
  );

  /* Yıllık takvime bu dersin satırları. Süreler resmî programdan (20 + 16 + 16 + 16
     ders saati, haftada 2 saat) — 6. sınıfla aynı bölünme: 1. ünite Kasım sonuna,
     2. ünite yarıyıl tatiline, 3. ünite Nisan başına kadar sürer. */
  (function(){
    var T = {
      eylul:"Hicretten Önce Peygamberimiz", ekim:"Hicretten Önce Peygamberimiz", kasim:"Hicretten Önce Peygamberimiz",
      aralik:"Peygamberimizin Mekkeli Arkadaşları", ocak:"Peygamberimizin Mekkeli Arkadaşları",
      subat:"Rehberim Peygamberim", mart:"Rehberim Peygamberim",
      nisan:"Rehberim Peygamberim / İlim Hayatında Peygamberimiz",
      mayis:"İlim Hayatında Peygamberimiz", haziran:"İlim Hayatında Peygamberimiz"
    };
    CAL7.forEach(function(r){ if(r.items && T[r.key]) r.items.push(["pey", T[r.key]]); });
  })();

  /* ---------- ana test: ünite başına 10 ---------- */
  Q7.pey = [
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Peygamberimiz, İslam'a daveti ilk yıllarda neden gizli yürütmüştür?", o:["Müslümanları müşriklerin tepkisinden korumak için","Mekke'de İslam'ı anlatacak uygun bir yer bulamadığı için","Yakın akrabaları davetin duyulmasını istemediği için","Kendisine henüz tebliğ emri verilmediği için"], a:0,
     w:"Müşriklerin tepkisinden korunmak ve Müslümanların zarar görmesini önlemek için yalnız çok güvendiği kişilere tebliğ etti. Tebliğ emri ise Müddessir suresinin ilk ayetleriyle zaten gelmişti."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Gizli Davet Dönemi ile ilgili aşağıdakilerden hangisi doğrudur?", o:["Bir yıl sürmüş, yalnız Hz. Hatice Müslüman olmuştur.","Üç yıl sürmüş, Müslümanların sayısı otuza ulaşmıştır.","Safa Tepesi'ndeki konuşmayla başlamıştır.","Müşriklerin boykot kararıyla sona ermiştir."], a:1,
     w:"İlk vahyin geldiği 610'dan sonraki üç yıl Gizli Davet Dönemi'dir; bu sürede Müslümanların sayısı otuza ulaştı. Dönem, peygamberliğin dördüncü yılında açık davet emrinin gelmesiyle sona erdi."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Peygamberimizin ailesi dışından İslam'a davet ettiği ilk kişi kimdir?", o:["Hz. Ali","Zeyd bin Harise","Hz. Ebu Bekir","Hz. Ömer"], a:2,
     w:"Hz. Hatice eşi, Zeyd bin Harise evlatlığı, Hz. Ali amcasının oğluydu. Ailesi dışından davet ettiği ilk kişi yakın dostu Hz. Ebu Bekir'dir. Hz. Ömer daha sonra Müslüman oldu."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Açık davet başladığında Peygamberimiz ilk olarak kimleri İslam'a çağırmıştır?", o:["Panayıra gelen tüccarları","Yakın akrabalarını","Taif'in ileri gelenlerini","Medineli hacıları"], a:1,
     w:"“Yakın akrabanı da uyar.” ayeti üzerine önce akrabalarını yemeğe çağırıp İslam'ı anlattı. Sonra Safa Tepesi'nde bütün Mekkelilere, ardından panayırlara gelenlere seslendi."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Müşriklerin Müslümanlara uyguladığı boykotla ilgili aşağıdakilerden hangisi YANLIŞTIR?", o:["616 yılında başlamıştır.","Müslümanlarla ticaret yapılması yasaklanmıştır.","Hz. Hatice'nin vefatından sonra başlamıştır.","Bazı Mekkelilerin çabasıyla sona ermiştir."], a:2,
     w:"Boykot 616'da başladı ve üç yıl sürdü. Hz. Hatice ile Ebu Talib boykot bittikten sonra, 620'de vefat etti."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Peygamberliğin onuncu yılına “Hüzün Yılı” denmesinin sebebi nedir?", o:["Müşriklerin boykotu başlatması","Taiflilerin daveti kabul etmemesi","Hz. Hatice ile Ebu Talib'in vefat etmesi","Müslümanların Habeşistan'a göç etmesi"], a:2,
     w:"Peygamberimiz 620'de en büyük iki destekçisini, eşi Hz. Hatice'yi ve amcası Ebu Talib'i art arda kaybetti."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Taif'ten ayrılırken atılan taşlardan Peygamberimizi korumak için kendini siper eden sahabi kimdir?", o:["Hz. Ebu Bekir","Hz. Ali","Musab bin Umeyr","Zeyd bin Harise"], a:3,
     w:"Peygamberimiz Taif'e 620'de evlatlığı Zeyd bin Harise ile gitti. Taifliler taş attırdığında Zeyd kendini siper etti, yine de Peygamberimizin yaralanmasına engel olamadı. Hz. Ebu Bekir ise hicret arkadaşıdır."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"“Gece yürüyüşü” anlamına gelen kavram aşağıdakilerden hangisidir?", o:["Miraç","İsra","Hicret","Biat"], a:1,
     w:"İsra “gece yürüyüşü” demektir: Peygamberimizin bir gece Mescid-i Haram'dan Mescid-i Aksa'ya götürülmesidir. Miraç ise aynı gece Mescid-i Aksa'dan göklere yükseltilmesidir."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Aşağıdakilerden hangisi isra ve miraç mucizelerinin sonuçlarından biridir?", o:["Müşriklerin boykotu hemen kaldırması","Mekkeli müşriklerin topluca Müslüman olması","Müslümanların Peygamberimize bağlılığının artması","Müslümanların aynı gün Medine'ye göç etmesi"], a:2,
     w:"Bu mucizeler Peygamberimize moral ve manevi destek oldu; Müslümanların ona saygısı ve bağlılığı da arttı. Müşrikler ise olayı inkâr edip baskıyı artırdı. Boykot bu olaydan önce, 619'da bitmişti."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Peygamberimiz, Birinci Akabe Biati'nden sonra Musab bin Umeyr'i Medine'ye hangi amaçla göndermiştir?", o:["Medine halkını İslam'a davet etmesi için","Medine'de ticaret yapması için","Hicret yolunu önceden belirlemesi için","Kuba'da bir mescit yaptırması için"], a:0,
     w:"Musab bin Umeyr bir yıl boyunca Medine'de İslam'ı anlattı; İslam orada yayıldı ve ertesi yıl İkinci Akabe Biati'ne yetmiş beş Medineli geldi."}
  ];

  /* ---------- havuz: yalnız Yanlışlarım'da çıkar, ünite başına 5 ---------- */
  H7.pey = [
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Aşağıdakilerden hangisi “fetretülvahiy” döneminde yaşanmıştır?", o:["Müslümanların Ebu Talib Mahallesi'nde yaşaması","Peygamberimizin sık sık Hira Mağarası'na gitmesi","Mekkelilerin Safa Tepesi'nde toplanması","Medinelilerin Akabe'de biat etmesi"], a:1,
     w:"Fetretülvahiy, ilk vahiyden sonra bir süre vahyin gelmediği dönemdir. Peygamberimiz bu sürede Cebrail'le yeniden karşılaşma ümidiyle sık sık Hira'ya gitti; dönem Müddessir suresinin ilk beş ayetiyle sona erdi."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Peygamberimiz akrabalarını yemeğe çağırıp İslam'ı anlattığında davete karşı çıkan amcası kimdir?", o:["Ebu Talib","Hz. Hamza","Ebu Leheb","Abdülmuttalib"], a:2,
     w:"Karşı çıkan Ebu Leheb'dir. Ebu Talib Müslüman olmadı ama yeğenini destekleyeceğini söyledi; Hz. Hamza sonradan Müslüman oldu. Abdülmuttalib ise Peygamberimizin çocukken kaybettiği dedesidir."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Taif dönüşünde sığınılan bağda Müslüman olan Ninovalı köle kimdir?", o:["Addas","Zeyd bin Harise","Utbe bin Rebia","Şeybe bin Rebia"], a:0,
     w:"Addas, Peygamberimizin besmele çektiğini duyup onunla konuştuktan sonra Müslüman oldu. Utbe ve Şeybe bağın sahipleri, Zeyd ise Peygamberimizin yol arkadaşıdır."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"“Miraç” sözcüğünün anlamı aşağıdakilerden hangisidir?", o:["Gece yürüyüşü","Göğe çıkma, yükselme","Söz verme, bağlılık bildirme","Terk etme, ayrılma"], a:1,
     w:"Miraç “göğe çıkma, yükselme” demektir. “Gece yürüyüşü” isra, “söz verme” biat, “terk etme, ayrılma” ise hicret sözcüğünün anlamıdır."},
    {u:"ÜNİTE 1 · Hicretten Önce Peygamberimiz", q:"Medine'nin Hicret'ten önceki adı nedir?", o:["Yesrib","Kuba","Akabe","Ebva"], a:0,
     w:"Şehrin eski adı Yesrib'dir. Hicret'ten sonra “Medinetü'r-Resul” (Peygamber Şehri) denmiş, kısaca Medine adıyla anılmıştır."}
  ];

  /* ---------- ek çalışma setleri ----------
     "EK · 1. Yazılı Hazırlık" (26): ağırlık sınav tablosuna göre — ilk 10 soru
     İslam'a Davet (gizli/açık davet, boykot, Hüzün Yılı), 4 soru Taif, 8 soru
     İsra ve Miraç, son 4 soru Yeni Yurt Arayışı (Hicret'in sebepleri, Akabe).
     "EK · Hicret Yolculuğu" (14): 1.5 bölümü; il tablosuna göre 1. yazılıya
     girmediği için ayrı set. */
  EKC7.pey = [
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz, Müddessir suresinin “Kalk ve uyar!” emrinden sonra daveti kimlerden başlatmıştır?", o:["Mekke'nin ileri gelenlerinden ve zenginlerinden","Ailesinden ve güvendiği dostlarından","Panayıra gelen tüccarlardan ve yabancılardan","Komşu şehirlerin halkından ve yöneticilerinden"], a:1,
     w:"Önce ailesini, sonra dostlarını ve güvendiği kişileri davet etti. İlk iman eden eşi Hz. Hatice oldu."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdakilerden hangisi İslam'ı ilk kabul eden dört kişiden biri DEĞİLDİR?", o:["Hz. Hatice","Zeyd bin Harise","Hz. Ömer","Hz. Ali"], a:2,
     w:"İlk Müslümanlar Hz. Hatice, Zeyd bin Harise, Hz. Ali ve Hz. Ebu Bekir'dir. Hz. Ömer daha sonra Müslüman oldu; onun ve Hz. Hamza'nın Müslüman olması müşrikleri daha da öfkelendirdi."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Gizli davet ile açık davetin ORTAK özelliği aşağıdakilerden hangisidir?", o:["İkisinin de üç yıl sürmesi","İkisinde de yalnız güvenilen kişilere seslenilmesi","İkisinin de Allah'ın emriyle başlaması","İkisinin de Safa Tepesi'nde duyurulması"], a:2,
     w:"Gizli davet Müddessir suresinin ilk ayetleriyle, açık davet “Yakın akrabanı da uyar.” ve “…açıkça duyur…” ayetleriyle başladı; yani ikisi de Allah'ın emriyle başladı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdakilerden hangisi açık davet döneminde yaşanmıştır?", o:["Müslümanların ibadetlerini gizlice yapması","Müslümanların sayısının otuza ulaşması","Peygamberimizin yalnız çok güvendiği kişilerle görüşmesi","Peygamberimizin panayırlardaki tüccarlara İslam'ı anlatması"], a:3,
     w:"Peygamberimiz açık davet döneminde, İslam'ı Mekke dışından gelenlere de duyurmak için panayırlardaki tüccarlara anlattı. Diğer üçü gizli davet döneminin özellikleridir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz Safa Tepesi'nde Mekkelilere, dağın arkasından atlılar geldiğini haber verse inanıp inanmayacaklarını sormuş; onlar da “Senin yalan söylediğini hiç duymadık.” demiştir.\n\nBu cevap aşağıdakilerden hangisini gösterir?", o:["Mekkelilerin onu güvenilir biri olarak tanıdığını","Mekkelilerin o gün topluca Müslüman olduğunu","Mekkelilerin gerçekten bir saldırı beklediğini","Mekkelilerin onu daha önce hiç dinlemediğini"], a:0,
     w:"Mekkeliler onu doğru sözlü biri olarak tanıyordu; Peygamberimiz uyarısını bu güvenin üzerine kurdu."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Açık davet başladığında Peygamberimizin amcası Ebu Talib nasıl bir tutum almıştır?", o:["Müslüman olmuş ve daveti yaymıştır.","Müslüman olmamış ama yeğenini desteklemiştir.","Müslüman olmamış ve davete karşı çıkmıştır.","Müslüman olmuş ama bunu gizli tutmuştur."], a:1,
     w:"Ebu Talib daveti kabul etmedi ama Peygamberimize destek olacağını söyledi ve onu korudu. Davete karşı çıkan amca Ebu Leheb'dir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Müşrikler, Peygamberimizi davetinden vazgeçirmek için İLK olarak hangi yolu denemiştir?", o:["Boykot uygulamak","Hakaret ve eziyet etmek","İkna etmeye çalışmak","Suikast düzenlemek"], a:2,
     w:"Önce ikna yoluyla vazgeçirmeye çalıştılar. Sonuç alamayınca iftira, hakaret ve eziyete başvurdular; ardından boykot kararı aldılar. Suikast planı ise Hicret'ten hemen önce yapıldı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdakilerden hangisi boykot kararında yer alan maddelerden biri DEĞİLDİR?", o:["Müslümanlarla konuşulmaması","Müslümanlarla evlenilmemesi","Müslümanlarla ticaret yapılmaması","Müslümanların Mekke'den çıkarılması"], a:3,
     w:"Karara göre Müslümanlarla konuşulmayacak, evlenilmeyecek, ticaret yapılmayacak ve onlara yardım edilmeyecekti. Müslümanlar bu yıllarda Mekke'de, Ebu Talib Mahallesi'nde yaşadı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Müşrikler Ebu Talib'e baskı yaptığında Peygamberimiz, “Güneş'i sağ elime, Ay'ı sol elime koysalar bile bu görevi bırakmam.” demiştir.\n\nBu söz onun en çok hangi özelliğini gösterir?", o:["Cömertliğini","Kararlılığını","Alçak gönüllülüğünü","Misafirperverliğini"], a:1,
     w:"Hiçbir tehdit onu tebliğ görevinden vazgeçiremezdi. Bu söz, davasındaki kararlılığını gösterir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdaki olaylar oluş sırasına göre dizilirse hangisi EN SONA gelir?", o:["Açık davetin başlaması","Boykotun sona ermesi","Boykotun başlaması","Hz. Hatice'nin vefatı"], a:3,
     w:"Sıra: açık davetin başlaması (613) → boykotun başlaması (616) → boykotun sona ermesi (619) → Hz. Hatice'nin vefatı (620, Hüzün Yılı)."},

    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimizin Taif'e gitmesinin amacı aşağıdakilerden hangisidir?", o:["İslam'ı anlatmak ve yeni bir yurt aramak","Taiflilerle ticaret antlaşması yapmak","Boykottan kurtulmak için saklanmak","Taif'teki akrabalarını ziyaret etmek"], a:0,
     w:"Ebu Talib'in vefatından sonra Mekke'de baskı artmıştı. Peygamberimiz İslam'ı Mekke dışında da anlatmak ve yeni bir yurt bulmak için 620'de Taif'e gitti."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Taiflilerin Peygamberimize davranışı için aşağıdakilerden hangisi doğrudur?", o:["Onu dinleyip topluca Müslüman olmuşlardır.","Daveti kabul etmemiş, onu taşlatmışlardır.","Onu Mekkeli müşriklere teslim etmişlerdir.","Ona şehirde kalması için ev vermişlerdir."], a:1,
     w:"Taif'in ileri gelenleri daveti kabul etmedi, şehri terk etmesini istedi ve ayrılırken onu taşlattı. Zeyd bin Harise kendini siper etti ama Peygamberimiz yine de yaralandı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Taif dönüşünde bir melek, Peygamberimiz emrederse iki dağı Taiflilerin üstüne yıkabileceğini söylemiştir.\n\nPeygamberimiz bu teklife nasıl karşılık vermiştir?", o:["Kabul etmemiş, onların soyundan inanan bir nesil gelmesini ummuştur.","Kararı yol arkadaşı Zeyd bin Harise'ye bırakmıştır.","Önce Mekke'ye dönüp düşünmek istediğini söylemiştir.","Yalnızca kendisini taşlayanların cezalandırılmasını istemiştir."], a:0,
     w:"Peygamberimiz teklifi reddetti; Allah'ın, onların soyundan yalnız Allah'a ibadet eden bir nesil çıkaracağını umduğunu söyledi. Kötülüğe kötülükle karşılık vermedi."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimizin Taif'te yaşadıkları karşısındaki tutumu, en çok hangi iki özelliğini gösterir?", o:["Sabır ve tevekkül","Cömertlik ve tutumluluk","Çalışkanlık ve düzenlilik","Alçak gönüllülük ve sadelik"], a:0,
     w:"Taşlanmasına rağmen Taiflilerin cezalandırılmasını istemedi; Allah'a güvenip onlar için ümidini korudu. Ders kitabı bu yolculuğu sabır ve tevekkül örneği olarak anlatır."},

    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdaki eşleştirmelerden hangisi doğrudur?", o:["İsra – Mescid-i Aksa'dan göklere yükseltilme","Miraç – Mekke'den Medine'ye göç etme","İsra – Mescid-i Haram'dan Mescid-i Aksa'ya götürülme","Miraç – Mekke'den Taif'e yolculuk yapma"], a:2,
     w:"İsra, Mekke'deki Mescid-i Haram'dan Kudüs'teki Mescid-i Aksa'ya götürülmedir. Miraç, Mescid-i Aksa'dan göklere yükseltilmedir. Mekke'den Medine'ye göç ise hicrettir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İsra suresinin 1. ayetinde aşağıdakilerden hangisi bildirilir?", o:["Peygamberimize “Kalk ve uyar!” diye emredildiği","Peygamberimize yakın akrabasını uyarmasının emredildiği","Müslümanların Medine'ye göç etmesine izin verildiği","Peygamberimizin bir gece Mescid-i Aksa'ya götürüldüğü"], a:3,
     w:"İsra suresinin 1. ayeti, Allah'ın kulunu bir gece Mescid-i Haram'dan Mescid-i Aksa'ya götürdüğünü bildirir. “Kalk ve uyar!” Müddessir suresinde, “Yakın akrabanı da uyar.” Şuara suresindedir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz isra ve miracı anlattığında müşrikler nasıl tepki vermiştir?", o:["Olayı doğrulayıp hemen Müslüman olmuşlardır.","İnkâr edip Mescid-i Aksa ile ilgili sorular sormuşlardır.","Hiç ilgilenmeyip konuyu hemen kapatmışlardır.","Gerçeği görmek için topluca Kudüs'e gitmişlerdir."], a:1,
     w:"Müşrikler bir gecede Kudüs'e gidip gelinemeyeceğini söyleyerek inkâr etti; Kudüs'ü görmüş olanlar mescidin kapı sayısı gibi ayrıntılar sordu. Peygamberimiz sorulanları mescide bakarak cevapladı. Müslümanlar ise onu tasdik etti."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İsra ve miraç olaylarının “mucize” sayılmasının sebebi aşağıdakilerden hangisidir?", o:["Çok sayıda insanın gözü önünde gerçekleşmesi","Allah'ın kudretiyle gerçekleşen olağanüstü olaylar olması","Mekkeli müşriklerin de bu olaylara inanması","Her yıl aynı gece yeniden yaşanması"], a:1,
     w:"Mucize, Allah'ın izniyle peygamberlerin gösterdiği olağanüstü olaydır. Bir gecede Mekke'den Kudüs'e, oradan göklere yolculuk insan gücüyle yapılamaz; Allah'ın kudretiyle gerçekleşmiştir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdakilerden hangisi, Müslümanlarla önceki peygamberlerin ümmetleri arasındaki ortak bağa işaret eder?", o:["İsra yolculuğunun Mescid-i Aksa'da tamamlanması","Boykotun bazı Mekkelilerin çabasıyla sona ermesi","Taiflilerin Peygamberimizin davetini geri çevirmesi","Açık davetin yakın akrabalardan başlaması"], a:0,
     w:"İsra, Mekke'deki Mescid-i Haram'da başlayıp Kudüs'teki Mescid-i Aksa'da tamamlanmıştır. Bu, Allah'ın bütün insanlığa aynı kaynaktan mesaj gönderdiğini hatırlatır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdakilerden hangisi miraçta Peygamberimize verilenlerden biridir?", o:["Ramazan orucu","Beş vakit namaz","Hac ibadeti","Kurban ibadeti"], a:1,
     w:"Miraçta üç şey verildi: beş vakit namaz, Bakara suresinin son iki ayeti (Amenerresulü) ve Allah'a ortak koşmadan ölenlerin bağışlanacağı müjdesi."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Müslümanların Recep ayının 27. gecesinde kutladığı kandil hangisidir?", o:["Mevlit Kandili","Regaip Kandili","Miraç Kandili","Berat Kandili"], a:2,
     w:"İsra ve miraç Recep ayının 27. gecesinde gerçekleşmiştir; bu gece Miraç Kandili olarak kutlanır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İsra ve miraç mucizeleri Peygamberimizin hayatının hangi döneminde gerçekleşmiştir?", o:["İlk vahyin gelmesinden hemen sonra","Gizli davetin sürdüğü ilk yıllarda","Medine'ye hicretten birkaç yıl sonra","Hüzün Yılı ve Taif yolculuğundan sonra"], a:3,
     w:"Bu mucizeler, Peygamberimizin eşini ve amcasını kaybettiği Hüzün Yılı ile Taif'te yaşadıklarından sonra gerçekleşti ve ona büyük bir moral oldu."},

    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdakilerden hangisi Hicret'in sebeplerinden biri DEĞİLDİR?", o:["Müslümanların can ve mal güvenliğinin tehlikede olması","Müslümanların inançlarını özgürce yaşayamaması","İslam'ı Mekke dışındaki insanlara ulaştırma isteği","Müslümanların Medine'de zenginleşmek istemesi"], a:3,
     w:"Hicret dünyalık kazanç için yapılmadı; muhacirler bütün servetlerini Mekke'de bıraktı. Sebepler: müşriklerin eziyeti, can ve mal güvenliğinin kalmaması, inancı özgürce yaşama ihtiyacı ve İslam'ı başka insanlara ulaştırma isteği."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Birinci Akabe Biati ile ilgili aşağıdakilerden hangisi doğrudur?", o:["622 yılında, Hicret'ten hemen önce yapılmıştır.","Yetmiş beş Medineli Müslüman katılmıştır.","Dinî konularda bireysel sözler verilmiştir.","Müslümanlar Medine'ye davet edilmiştir."], a:2,
     w:"Birinci Akabe Biati 621'de on iki Medineliyle yapıldı; Allah'a ortak koşmamak, hırsızlık yapmamak, iftira atmamak gibi bireysel sözler verildi. 622'de yetmiş beş kişiyle yapılan ve Medine'ye davetin geldiği biat ise ikincisidir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"İkinci Akabe Biati'nin en önemli sonucu aşağıdakilerden hangisidir?", o:["Müşriklerin boykotu sona erdirmesi","Müslümanlara hicret izninin verilmesi","Taif halkının İslam'ı kabul etmesi","Mekke'de açık davetin başlaması"], a:1,
     w:"Medineliler Peygamberimizi ve Müslümanları şehirlerine davet edip onu koruyacaklarına söz verdi. Bunun üzerine Peygamberimiz Müslümanlara Medine'ye gitmeleri için izin verdi; küçük gruplar hâlinde gizlice hicret başladı."},
    {u:"EK · 1. Yazılı Hazırlık", q:"“Biat” kavramının anlamı aşağıdakilerden hangisidir?", o:["Söz verme, bağlılığını bildirme","İslam'a ve esaslarına çağırma","Bir yerden ayrılma, göç etme","Derin düşünme, kavramaya çalışma"], a:0,
     w:"Biat; söz verme, birinin önderliğini kabul edip ona bağlılığını bildirme demektir. İslam'a çağırmaya davet, göç etmeye hicret, derin düşünmeye tefekkür denir."},

    /* İkinci set: 1.5 Hicret Yolculuğu. İl tablosuna göre 1. yazılının kapsamı
       dışında; ünite bitince ve 2. yazılı öncesinde çözülür. */
    {u:"EK · Hicret Yolculuğu", q:"Peygamberimizin ve Müslümanların Mekke'den Medine'ye göçü hangi yılda gerçekleşmiştir?", o:["610","615","620","622"], a:3,
     w:"Hicret 622'dedir. 610 ilk vahyin, 615 Habeşistan'a ilk hicretin, 620 Hüzün Yılı'nın tarihidir."},
    {u:"EK · Hicret Yolculuğu", q:"Mekkeli müşrikler, Müslümanların Medine'ye göç etmesinden neden endişe duymuştur?", o:["Medine, Şam ticaret yolu üzerinde olduğu için","Medine, Mekke'den daha kalabalık olduğu için","Medineliler Mekke'ye savaş açmış olduğu için","Müslümanlar mallarını da götürdüğü için"], a:0,
     w:"Müşrikler, Müslümanların Medine'de güçlenip kendileri için tehlike oluşturmasından korktu; Medine, Şam ticaret yolu üzerinde önemli bir yerdi."},
    {u:"EK · Hicret Yolculuğu", q:"Müşrikler suikast için neden her kabileden bir kişi seçmiştir?", o:["Peygamberimizin evini kolayca bulabilmek için","Kan davası güdülmesini önlemek için","Her kabile ödülden pay almak istediği için","Mekke'de başka gönüllü bulunmadığı için"], a:1,
     w:"Suikastı her kabileden bir kişi birlikte yaparsa kimin yaptığı belli olmayacak, kan davası da güdülmeyecekti."},
    {u:"EK · Hicret Yolculuğu", q:"Hicret gecesi Peygamberimiz Hz. Ali'den ne istemiştir?", o:["Kendisiyle birlikte Sevr Mağarası'na gelip gizlenmesini","Yatağında yatmasını ve emanetleri sahiplerine vermesini","Medine'ye önceden gidip Müslümanlara haber vermesini","Müşrikleri konuşarak evin önünden uzaklaştırmasını"], a:1,
     w:"Hz. Ali o gece Peygamberimizin yatağında yattı; sabah, Peygamberimize bırakılmış emanetleri sahiplerine verdikten sonra yola çıktı ve Kuba'da ona yetişti."},
    {u:"EK · Hicret Yolculuğu", q:"Peygamberimizle birlikte Sevr Mağarası'nda gizlenen sahabi kimdir?", o:["Hz. Ali","Zeyd bin Harise","Hz. Ebu Bekir","Musab bin Umeyr"], a:2,
     w:"Hicret arkadaşı Hz. Ebu Bekir'dir. İz sürücüler mağaranın önüne kadar geldiğinde telaşlanmış, Peygamberimiz ona “Tasalanma! Allah bizimle beraberdir.” demiştir."},
    {u:"EK · Hicret Yolculuğu", q:"Peygamberimiz, Mekke'den çıkınca neden Medine'nin ters yönüne gitmiştir?", o:["Medine yolunu iyi bilmediği için","Sevr'de bekleyen Müslümanlarla buluşmak için","Müşriklerin kendisini takip edeceğini düşündüğü için","Önce Taif'e uğramak istediği için"], a:2,
     w:"Müşrikler onu Medine yolunda arayacaktı. İzini kaybettirmek için ters yöndeki Sevr Dağı'na gidip mağarada üç gün kaldı."},
    {u:"EK · Hicret Yolculuğu", q:"Kuba Mescidi'ni önemli kılan özellik aşağıdakilerden hangisidir?", o:["İlk cuma namazının burada kılınması","Miraç yolculuğunun burada başlaması","İslam tarihinde inşa edilen ilk mescit olması","Akabe Biatlerinin burada yapılması"], a:2,
     w:"Peygamberimiz Medine'ye varmadan önce konakladığı Kuba köyünde bir mescit yaptırdı; bu, İslam tarihinde inşa edilen ilk mescittir."},
    {u:"EK · Hicret Yolculuğu", q:"İlk cuma namazı nerede kılınmıştır?", o:["Kuba köyünde","Sevr Mağarası'nda","Akabe'de","Ranuna Vadisi'nde"], a:3,
     w:"Peygamberimiz bir cuma günü Kuba'dan Medine'ye doğru yola çıktı ve Ranuna Vadisi'nde ilk cuma namazını kıldırdı."},
    {u:"EK · Hicret Yolculuğu", q:"Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?", o:["Muhacir – Mekke'den Medine'ye göç eden Müslüman","Ensar – muhacirlere yardım eden Medineli Müslüman","Yesrib – Medine'nin Hicret'ten önceki adı","Kuba – Hicret sırasında üç gün gizlenilen mağara"], a:3,
     w:"Hicret sırasında üç gün gizlenilen mağara Sevr'dir; Kuba ise Medine yakınındaki bir köydür."},
    {u:"EK · Hicret Yolculuğu", q:"Ebu Seleme, kabilesi izin vermediği için eşini ve oğlunu Mekke'de bırakarak hicret etmiş; ailesi ancak bir yıl sonra yanına gelebilmiştir.\n\nBu olay muhacirlerle ilgili aşağıdakilerden hangisini gösterir?", o:["Hicretin kolay ve hızlı gerçekleştiğini","Dinleri uğruna büyük fedakârlıklara katlandıklarını","Mekke'den isteyerek ve sevinçle ayrıldıklarını","Medine'de kendilerine yer bulamadıklarını"], a:1,
     w:"Muhacirler servetlerini, evlerini, kimi zaman ailelerini geride bıraktı. Hicret, dinini yaşayabilmek için katlanılan büyük bir fedakârlıktır."},
    {u:"EK · Hicret Yolculuğu", q:"Ensar ile muhacirler arasındaki kardeşlik, İslam toplumunda en çok hangi değerlere örnektir?", o:["Dayanışma ve yardımlaşma","Ticaret ve zenginlik","Rekabet ve üstünlük","Tedbir ve gizlilik"], a:0,
     w:"Ensar, kendi ihtiyacı olsa bile muhacir kardeşini kendine tercih etti. Bu kardeşlik dayanışmanın, fedakârlığın ve yardımlaşmanın en güzel örneğidir."},
    {u:"EK · Hicret Yolculuğu", q:"Aşağıdaki olaylar oluş sırasına göre dizilirse hangisi EN BAŞA gelir?", o:["Kuba Mescidi'nin yapılması","İkinci Akabe Biati","Sevr Mağarası'nda gizlenilmesi","Ranuna Vadisi'nde ilk cuma namazı"], a:1,
     w:"Sıra: İkinci Akabe Biati → Sevr Mağarası → Kuba Mescidi → Ranuna'da ilk cuma namazı → Medine'ye varış."},
    {u:"EK · Hicret Yolculuğu", q:"Müşrikler, Peygamberimizi bulana ödül olarak ne vereceklerini ilan etmiştir?", o:["Yüz deve","Bin altın","Bir ticaret kervanı","Mekke'de bir ev"], a:0,
     w:"Peygamberimizi evinde bulamayan müşrikler, onu bulana yüz deve vereceklerini duyurdu; pek çok kişi aramaya çıktı."},
    {u:"EK · Hicret Yolculuğu", q:"Aşağıdakilerden hangisi Peygamberimizin hicret yolculuğunda uğradığı yerlerden biri DEĞİLDİR?", o:["Sevr Mağarası","Kuba","Ranuna Vadisi","Taif"], a:3,
     w:"Taif'e Hicret'ten iki yıl önce, 620'de davet için gitmişti; hicret yolculuğunda uğranan yerlerden biri değildir."}
  ];
