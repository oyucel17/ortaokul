  /* ===================== 7. SINIF · TEMEL DİNÎ BİLGİLER =====================
     İmam hatip ortaokulunda haftada 1 saat. 6. sınıftaki gibi dersin TAMAMI bu
     dosyada: ünite anlatımı (S7'ye eklenir), takvim satırları (CAL7), ana test
     (Q7.tdb), havuz (H7.tdb), ek set (EKC7.tdb). build.sh'te 08g'den SONRA.

     KAYNAK (12 Kasım 2026'da doğrulandı):
     - Okulun kitabı: MEB "Temel Dinî Bilgiler Ders Kitabı (İslam 2)",
       tymm.meb.gov.tr/kitap/534/temel-dini-bilgiler-ders-kitabi-islam-2 (113 s.).
       1. ünite "İslam ve Ahlak" s. 11–34 (1. bölüm s. 12, 2. s. 17, 3. s. 20, 4. s. 23,
       5. Esmayıhüsnayı Tanıyorum s. 27; ölçme 31–34). Öğretmenin yazdırdığı 5 soru bu
       beş bölümle birebir örtüşüyor. Kitabın metni ve soruları teliflidir: anlatım ve
       sorular kendi cümlelerimizle.
     - Sınav kapsamı: Rize İl MEB 2026–2027 tablosu (rize.meb.gov.tr/ksdt/temel-egitim/
       tdb7.pdf, "SINIF: İSLAM 2"). 1. dönem 1. sınav = 1. ünite, 5 senaryo, 6–9 açık uçlu
       soru, beş bölümün hepsinden; Aziz–Rahman–Selam 1–3 soru. 2. sınav = 2. ünite
       (esmadan Kerim, Kuddûs, Tevvâb). Okulun ilinin tablosu farklı olabilir. */

  S7.push(
    {key:"tdb", name:"Temel Dinî Bilgiler", color:"var(--s-tdb)", meta:"4 ünite · MEB İslam 2 ders kitabı · haftada 1 saat", lbl:"ÜNİTE",
     note:"Okulun kitabı MEB'in <b>Temel Dinî Bilgiler (İslam 2)</b> ders kitabıdır; ünite ve bölüm adları oradan alındı. İl konu-soru dağılım tablosuna göre (2026–2027, Rize örneği) ortak yazılılar <b>açık uçlu</b> ve kısa cevaplı sorulardan oluşur; çoktan seçmeli, eşleştirme, doğru-yanlış kullanılmaz. <b>1. dönem 1. yazılı</b> 1. ünitenin beş bölümünün hepsinden 6–9 soru, <b>2. yazılı</b> 2. üniteden gelir. Hangi senaryonun seçildiğini öğretmenden öğren; defterine yazdırdıkları her zaman önceliklidir. Buradaki çoktan seçmeli testler kavramları pekiştirmek içindir.",
     units:[
      {n:"İslam ve Ahlak", w:"Eylül–Ekim–Kasım", t:["ÜNİTE 1 · İslam ve Ahlak","EK · 1. Yazılı Hazırlık"],
       ogr:[{d:"Kasım 2026", h:
         "<p><b>1. yazılı — öğretmenin yazdırdıkları</b></p>" +
         "<ol><li>Allah'a karşı ahlaki sorumluluklarımızdan 4 tane yazınız.</li>" +
         "<li>Peygamberimize karşı ahlaki sorumluluklarımızdan 4 tane yazınız.</li>" +
         "<li>Topluma karşı ahlaki sorumluluklarımızdan 4 tane yazınız.</li>" +
         "<li>Kur'an'a karşı ahlaki sorumluluklarımızdan 4 tane yazınız.</li>" +
         "<li>Allah'ın Rahman, Selam, Aziz isimlerinin anlamlarını yazınız.</li></ol>" +
         "<p><i>Defterde 3. ve 4. satır “//” işaretiyle yazılmış; ilk satırın tekrarı olarak okundu. Cevaplar aşağıdaki “Ezber tablosu”nda.</i></p>"}],
       lead:"Ünite beş bölümdür: <b>1</b> Allah'a Karşı Ahlaki Sorumluluklarımız · <b>2</b> Peygamberimize Karşı Ahlaki Sorumluluklarımız · <b>3</b> Kur'an-ı Kerim'e Karşı Ahlaki Sorumluluklarımız · <b>4</b> Topluma Karşı Ahlaki Sorumluluklarımız · <b>5</b> Esmayıhüsnayı Tanıyorum (Aziz, Rahman, Selam). Öğretmenin yazdırdığı beş soru bu beş bölümden birer tane. İl tablosunda 1. yazılı 6–9 açık uçlu sorudur ve her bölümden en az bir soru gelir. “4 tane yazınız” sorularında her listeden <b>beş madde</b> bil, sınavda dördünü yaz.",
       voc:[["sorumluluk","kişinin kendi davranışlarının sonuçlarını üstlenmesi"],
            ["iman (Allah'a)","Allah'ın varlığını, birliğini; eşi, benzeri ve ortağı olmadığını kabul etmek"],
            ["itaat","Allah'ın emirlerine uymak, yasaklarından uzak durmak"],
            ["ibadet","Allah'ın rızasını kazandıracak her türlü davranış, duygu ve düşünce"],
            ["dua","Allah'a yalvarmak, O'ndan istekte ve dilekte bulunmak; “ibadetin özü”"],
            ["zikir","Allah'ı anmak ve her an hatırda tutmak"],
            ["şükür","Allah'ın verdiği nimetleri fark edip söz ve davranışlarla O'na teşekkür etmek"],
            ["ihlas","samimiyet; bütün söz ve davranışlarda yalnızca Allah'ın rızasını gözetmek"],
            ["sünnet","sözlükte yol, gidişat, metot; Peygamberimizin sözleri, uygulamaları ve sahabenin yaptığı davranışları onaylaması"],
            ["salavat","Peygamberimizi anmak ve ona selam göndermek için okunan dualar"],
            ["teslimiyet","Peygamberimizin bildirdiği hükümlerin doğru olduğuna içtenlikle inanıp itiraz etmeden benimsemek"],
            ["doğruluk","söz ve davranışlarda gerçeği gözetmek, yalandan sakınmak"],
            ["adalet","bir şeyi yerli yerine koymak, hak sahibine hakkını vermek"],
            ["yardımlaşma","insanların birbirine destek olması; güler yüz, teselli, hasta ziyareti de yardımlaşmadır"],
            ["sılayırahim","akrabalık ilişkileri; akrabayı ziyaret edip gözetmek"],
            ["ensar","“yardım edenler”; hicretten sonra Mekkeli Müslümanlara yardım eden Medineliler"],
            ["esmayıhüsna","Allah'ın güzel isimleri"],
            ["Aziz","güç, kuvvet ve şeref sahibi; hiçbir varlığın emir ve iradesine karşı koyamadığı"],
            ["Rahman","bütün canlılara merhamet eden, her türlü nimeti sürekli veren"],
            ["Selam","her türlü eksiklikten ve kusurdan uzak, kullarına güvenlik ve esenlik veren"],
            ["cc (cellecelalüh)","“yüceler yücesi”; Allah'ın adı anılınca söylenir"],
            ["sav (sallallâhu aleyhi ve sellem)","“Allah'ın salat ve selamı onun üzerine olsun”; Peygamberimizin adı anılınca söylenir"]],
       p:["<b>Sorumluluk</b>, kişinin kendi davranışlarının sonuçlarını üstlenmesidir: “İnsan, kendisinin başıboş bırakılacağını mı zanneder.” (Kıyamet suresi 36) Sorumluluklarımızı nasıl yerine getireceğimizi önce <b>Kur'an</b>'dan, sonra Peygamberimizin <b>sünnet</b>inden öğreniriz.",
          "<b>Allah'a karşı:</b> sorumluluklarımızın başında O'na <b>iman</b> etmek gelir. Sonra O'na <b>itaat</b> etmek (emirlerine uymak, yasaklarından kaçınmak), <b>ibadet</b> ve <b>dua</b> etmek, O'nu <b>sevmek ve zikretmek</b>, nimetlerine <b>şükretmek</b>, <b>ihlaslı</b> olmak.",
          "<b>Peygamberimize karşı:</b> peygamber olduğuna ve bildirdiklerine <b>iman</b> etmek ve ona <b>itaat</b> etmek, verdiği hükümlere <b>samimiyetle teslim</b> olmak, <b>sünnetine uyup onu örnek almak</b>, adını saygıyla anıp <b>salavat</b> getirmek, onu <b>herkesten çok sevmek</b>.",
          "<b>Kur'an'a karşı:</b> Allah tarafından Peygamberimize gönderildiğine <b>iman</b> etmek, <b>son ilahi kitap</b> olduğunu ve <b>değişmeden</b> günümüze ulaştığını kabul etmek, onu <b>okumak ve anlamaya çalışmak</b>, hükümlerinin doğruluğuna inanıp <b>teslim</b> olmak, ayetlerini <b>hayatında uygulamak</b>; okurken ve dinlerken ona <b>hürmet</b> göstermek.",
          "<b>Topluma karşı:</b> söz ve davranışlarda <b>doğru</b> olmak ve sözünü tutmak, <b>adaletli</b> olmak, <b>yardımlaşmak</b>, <b>büyüklere saygı, küçüklere sevgi</b> göstermek, <b>iyiliği tavsiye edip kötülükten sakındırmak</b>, <b>akrabayı</b> (sılayırahim) ve <b>komşuları</b> gözetmek.",
          "Kur'an-ı Kerim Peygamberimize <b>yaklaşık yirmi üç yılda</b> indirilen son ilahi kitaptır; hükümleri <b>kıyamete kadar bütün insanlar</b> için geçerlidir.",
          "<b>Aziz:</b> güç, kuvvet ve şeref sahibi; hiçbir varlık O'nun emir ve iradesine karşı koyamaz. <b>Rahman:</b> bütün canlılara merhamet eden, her türlü nimeti sürekli veren; dünyada mümin–kâfir ayırmadan herkese nimet verir. <b>Selam:</b> her türlü eksiklikten ve kusurdan uzak, kullarına güvenlik ve esenlik veren."],
       box:[{t:"“4 tane yazınız” sorusuna cevap", h:"<ul><li>Her maddeyi kısa bir cümle olarak, fiille bitirerek yaz: “Allah'a iman etmek.” “Nimetlerine şükretmek.”</li><li>Aşağıdaki ezber tablosundan her başlık için <b>beş madde</b> bil; biri aklından çıkarsa yerine başkasını yazarsın.</li><li>Aynı şeyi iki kez yazma: “Allah'a inanmak” ile “Allah'a iman etmek” aynı maddedir.</li><li>Maddeleri doğru başlığa yaz: salavat ve sünnete uymak <b>Peygamberimize</b>, okumak ve değişmediğine inanmak <b>Kur'an'a</b>, zikir ve şükür <b>Allah'a</b>, doğruluk ve yardımlaşma <b>topluma</b> karşı sorumluluktur.</li></ul>"},
            {t:"Allah'a karşı sorumluluklarımız — ayetlerle", h:"<ul><li><b>İman etmek:</b> Allah'ın varlığını, birliğini; eşi, benzeri ve ortağı olmadığını kabul etmek. Kâinattaki düzen (mevsimlerin birbirini izlemesi, çiçeklerin açması, kuşların uçması) Allah'ın varlığının ve birliğinin işaretidir: “Eğer yerde ve gökte Allah'tan başka ilahlar olsaydı kesinlikle ikisinin de düzeni bozulurdu...” (Enbiya suresi 22)</li><li><b>İtaat etmek:</b> emirlerine uymak, yasaklarından kaçınmak. “Ey iman edenler! Allah'a ve Resulü'ne itaat edin...” (Enfal suresi 20)</li><li><b>İbadet etmek:</b> “Ben cinleri ve insanları ancak bana kulluk etsinler diye yarattım.” (Zariyat suresi 56) <b>Dua</b> da bir ibadettir: “Dua, ibadetin özüdür.” · “... Bana dua edin ki duanıza icabet edeyim...” (Mümin suresi 60)</li><li><b>Sevmek ve zikretmek:</b> “... İman edenler ise en çok Allah'ı severler...” (Bakara suresi 165) · “... Biliniz ki kalpler ancak Allah'ı anmakla huzur bulur.” (Rad suresi 28)</li><li><b>Şükretmek:</b> “... Bana şükredin, sakın nankörlük etmeyin.” (Bakara suresi 152)</li><li><b>İhlaslı olmak:</b> “... Benim namazım, (her türlü) ibadetim, hayatım ve ölümüm, hepsi âlemlerin Rabbi olan Allah içindir.” (Enam suresi 162)</li></ul>"},
            {t:"Peygamberimize karşı sorumluluklarımız — ayet ve hadislerle", h:"<ul><li><b>İman etmek ve itaat etmek:</b> “Ey iman edenler! Allah'a itaat edin, Peygamber'e itaat edin. Amellerinizi boşa çıkarmayın.” (Muhammed suresi 33)</li><li><b>Samimiyetle teslim olmak:</b> verdiği hükmü itiraz etmeden benimsemek (Nisa suresi 65).</li><li><b>Sünnetine uymak, örnek almak:</b> “Ant olsun, Allah'ın Resulü'nde sizin için ... güzel bir örnek vardır.” (Ahzab suresi 21) · “... Beni namaz kılarken nasıl gördüyseniz siz de aynı şekilde kılın...” Besmeleyle başlamak, selam vermek, hasta ziyareti, hediyeleşmek de onun öğrettikleridir.</li><li><b>Salavat getirmek, saygıyla anmak:</b> “Şüphesiz Allah ve melekleri Peygamber'e salat ediyorlar. Ey iman edenler! Siz de ona salat getirin ve tam bir teslimiyetle selam verin.” (Ahzab suresi 56) · “Ey iman edenler! Seslerinizi, Peygamber'in sesinin üstüne yükseltmeyin...” (Hucurat suresi 2) Namazdaki oturuşlarda <b>Salli–Barik</b> duaları okunur.</li><li><b>Herkesten çok sevmek:</b> “Herhangi biriniz beni babasından, evladından ve bütün insanlardan daha çok sevmedikçe iman etmiş olmaz.”</li></ul>"},
            {t:"Kur'an'a ve topluma karşı sorumluluklarımız — ayet ve hadislerle", h:"<p><b>Kur'an'a karşı</b></p><ul><li>“Şüphesiz o zikri (Kur'an'ı) biz indirdik biz! Onun koruyucusu da elbette biziz.” (Hicr suresi 9): değişmediğine inanırız.</li><li>“... Kur'an'ı ağır ağır, tane tane oku.” (Müzzemmil suresi 4) · “Bu Kur'an, ayetlerini düşünsünler ve akıl sahipleri öğüt alsınlar diye sana indirdiğimiz mübarek bir kitaptır.” (Sad suresi 29): okur, anlamaya ve düşünmeye çalışırız.</li><li>“Kur'an okunduğu zaman ona kulak verip dinleyin ve susun ki size rahmet edilsin.” (Araf suresi 204): okunurken hürmetle dinleriz.</li><li>“Sizin en hayırlınız, Kur'an'ı öğrenen ve öğretendir.”</li></ul><p><b>Topluma karşı</b></p><ul><li><b>Doğruluk:</b> “... Verdiğiniz sözü de yerine getirin. Çünkü verilen söz, sorumluluğu gerektirir.” (İsra suresi 34)</li><li><b>Adalet:</b> kendimizin, anne babamızın ve akrabamızın aleyhine de olsa adaletten ayrılmamak (Nisa suresi 135). “Müslüman, diğer Müslümanların elinden ve dilinden güvende olduğu kimsedir.”</li><li><b>Yardımlaşma:</b> “... İyilik ve takva üzere yardımlaşın. Ama günah ve düşmanlık üzere yardımlaşmayın...” (Maide suresi 2) Medineliler, hicret eden Mekkelilere yardım ettikleri için <b>ensar</b> diye anıldı.</li><li><b>Büyüklere saygı, küçüklere sevgi:</b> “Küçüğümüze merhamet etmeyen, büyüğümüze saygı göstermeyen bizden değildir.”</li><li><b>İyiliği tavsiye, kötülükten sakındırma:</b> “Bir kötülük gören kişi, eli ile değiştirmeye gücü yetiyorsa onu eli ile değiştirsin. Buna gücü yetmez ise dili ile ... buna da gücü yetmezse kalbi ile ...”</li><li><b>Akrabayı ve komşuyu gözetmek:</b> “... Kim Allah'a ve ahiret gününe inanıyorsa akraba ile irtibatını sürdürsün...” · “Cebrail bana komşu hakkına saygı göstermeyi o kadar çok tavsiye etti ki komşunun komşuya mirasçı kılınacağını zannettim.”</li></ul>"},
            {t:"Aziz · Rahman · Selam", h:"<ul><li><b>Aziz</b> sözlükte “eşi ve benzeri bulunmayacak kadar değerli, karşı konulamaz derecede güçlü, yenilmez” demektir. Allah'ın ismi olarak: güç, kuvvet ve şeref sahibi; kâinattaki hiçbir varlık O'nun emir ve iradesine karşı koyamaz. Kur'an'da en çok geçen isimlerdendir. “... Dilediğini aziz edersin, dilediğini zelil edersin...” (Al-i İmran suresi 26) <b>Bu ismi bilen Müslüman</b> iyilik ve güzellikleri Allah'tan ister, kötülük ve sıkıntılardan O'na sığınır.</li><li><b>Rahman</b> sözlükte “her varlığa merhamet eden, sonsuz şefkatiyle lütuf ve ihsanda bulunan” demektir. Allah'ın ismi olarak: bütün canlılara merhamet eden, her türlü nimeti sürekli veren; dünyada mümin–kâfir, itaatkâr–günahkâr ayırmadan herkese nimet verir. Yalnızca Allah'a aittir (Bakara suresi 163) ve <b>besmelede</b> geçer. “Merhamet edenlere Rahman (olan Allah) da merhamet eder...” <b>Bu ismi bilen Müslüman</b> canlılara merhametle yaklaşır, ihtiyaç sahiplerine yardım eder.</li><li><b>Selam</b> sözlükte “güven, esenlik, emniyet, huzur” demektir. Allah'ın ismi olarak: her türlü eksiklikten ve kusurdan uzak, yaratmasında kusursuz, kullarına güvenlik ve esenlik veren. <b>Bu ismi bilen Müslüman</b> herkesin kendisinden emin olduğu, kimseye kötülük yapmayan güvenilir biri olmaya çalışır ve selamı yayar: “Size bir selam verildiği zaman, ondan daha güzeliyle veya aynı selamla karşılık verin…” (Nisa suresi 86) “Selamünaleyküm – Aleykümselam”: “Selam sizin üzerinize olsun, Allah sizi her türlü kaza ve beladan korusun.”</li></ul>"}],
       tbl:[{h:["Kime karşı?","Ahlaki sorumluluklarımız (beşini bil, sınavda dördünü yaz)"], r:[
              ["<b>Allah'a</b>","1 O'na iman etmek · 2 Emirlerine uymak, yasaklarından kaçınmak (itaat) · 3 İbadet ve dua etmek · 4 O'nu sevmek ve zikretmek (anmak) · 5 Verdiği nimetlere şükretmek · 6 İhlaslı (samimi) olmak"],
              ["<b>Peygamberimize</b>","1 Peygamber olduğuna ve bildirdiklerine iman etmek, ona itaat etmek · 2 Verdiği hükümlere samimiyetle teslim olmak · 3 Sünnetine uymak ve her konuda onu örnek almak · 4 Adını saygıyla anmak ve ona salavat getirmek · 5 Onu herkesten çok sevmek"],
              ["<b>Kur'an'a</b>","1 Allah tarafından Peygamberimize gönderildiğine iman etmek · 2 Son ilahi kitap olduğunu kabul etmek · 3 Değişmeden ulaştığına, kıyamete kadar değişmeyeceğine inanmak · 4 Okumak ve anlamaya çalışmak · 5 Hükümlerinin doğruluğuna inanıp teslim olmak · 6 Ayetlerini hayatının her alanında uygulamak · 7 Okunurken hürmetle dinlemek"],
              ["<b>Topluma</b>","1 Söz ve davranışlarda doğru olmak, sözünü tutmak · 2 Adaletli olmak · 3 Yardımlaşmak ve dayanışmak · 4 Büyüklere saygı, küçüklere sevgi göstermek · 5 İyiliği tavsiye edip kötülükten sakındırmak · 6 Akrabayı (sılayırahim) ve komşuları gözetmek"]]},
            {h:["İsim","Anlamı","Bu ismi bilen Müslüman"], r:[
              ["<b>Rahman</b>","Bütün canlılara merhamet eden, her türlü nimeti sürekli veren","Canlılara merhametle yaklaşır, ihtiyaç sahiplerine yardım eder, sıkıntıdakine destek olur."],
              ["<b>Selam</b>","Her türlü eksiklikten ve kusurdan uzak, kullarına güvenlik ve esenlik veren","Güvenilir olur, kimseye kötülük yapmaz, selamlaşır."],
              ["<b>Aziz</b>","Güç, kuvvet ve şeref sahibi; her şeye galip gelen, iradesine kimsenin karşı koyamadığı","İyilikleri Allah'tan ister, sıkıntılardan O'na sığınır."]]},
            {h:["Şükrün çeşidi","Nasıl yapılır?"], r:[
              ["Dilin şükrü","“Şükürler olsun.”, “Hamdolsun.”, “Teşekkür ederim.” demek"],
              ["Kalbin şükrü","Nimetlerin bilincinde olup Allah'a şükran duymak"],
              ["Bedenin şükrü","Allah'ın emirlerini yapıp yasaklarından uzak durmak"],
              ["Malın şükrü","Zekât ve sadaka vermek"]]},
            {h:["Bölüm (1. yazılı)","S1","S2","S3","S4","S5"], r:[
              ["1 Allah'a karşı sorumluluklar","2","1","3","1","1"],
              ["2 Peygamberimize karşı","1","1","1","1","1"],
              ["3 Kur'an'a karşı","1","1","1","1","2"],
              ["4 Topluma karşı","2","1","1","3","1"],
              ["5 Aziz, Rahman, Selam","1","2","1","3","3"],
              ["<b>Toplam</b>","7","6","7","9","8"]]}],
       trap:"<b>Aziz ile Rahman'ı karıştırmak:</b> merhamet ve nimet <b>Rahman</b>'dır; güç, şeref ve yenilmezlik <b>Aziz</b>'dir; eksiksizlik ve güven <b>Selam</b>'dır. İkinci tuzak: maddeyi yanlış başlığa yazmak. Salavat ve sünnete uymak Peygamberimize, değişmediğine inanmak ve okumak Kur'an'a, zikir ve şükür Allah'a, doğruluk ve yardımlaşma topluma karşı sorumluluktur. Üçüncüsü: dört madde istenirken aynı şeyi iki kez yazmak.",
       q:["Allah'a karşı ahlaki sorumluluklarımızdan dört tanesini yaz.",
          "Sorumluluk ne demektir? Sorumluluklarımızı nasıl yerine getireceğimizi hangi iki kaynaktan öğreniriz?",
          "Kâinattaki düzen (mevsimler, çiçekler, kuşlar) bize neyi gösterir? Allah'a karşı hangi sorumluluğumuzla ilgilidir?",
          "Şükür nedir? Dilin, kalbin, bedenin ve malın şükrü nasıl yapılır?",
          "İhlas ne demektir? Bir örnekle açıkla.",
          "Peygamberimize karşı ahlaki sorumluluklarımızdan dört tanesini yaz.",
          "Peygamberimizin adı anılınca “Sallallâhu aleyhi ve sellem” denir. Bu söz ne anlama gelir? Peygamberimize salavat getirmek hangi sorumluluğumuzdur?",
          "Peygamberimiz “Beni namaz kılarken nasıl gördüyseniz siz de aynı şekilde kılın.” buyurmuştur. Bu söz Peygamberimize karşı hangi sorumluluğumuzu hatırlatır?",
          "Kur'an'a karşı ahlaki sorumluluklarımızdan dört tanesini yaz.",
          "Müzzemmil suresi 4. ayet ve Sad suresi 29. ayete göre Kur'an nasıl okunmalıdır?",
          "Topluma karşı ahlaki sorumluluklarımızdan dört tanesini yaz.",
          "Doğruluk ne demektir? Doğru bir insan sözlerinde nelere dikkat eder?",
          "“Küçüğümüze merhamet etmeyen, büyüğümüze saygı göstermeyen bizden değildir.” hadisine göre nasıl davranmalıyız? İki örnek ver.",
          "Sılayırahim ne demektir? Akrabalarımıza karşı yapmamız gereken iki şey yaz.",
          "Allah'ın Rahman, Selam ve Aziz isimlerinin anlamlarını yaz.",
          "Rahman ismini bilen bir Müslüman canlılara nasıl davranır? İki örnek ver.",
          "Selam ismini bilen bir Müslüman nasıl bir insan olmaya çalışır? Selamlaşırken söylenen sözlerin anlamı nedir?",
          "Aziz ismini bilen bir Müslüman iyilik isterken ve sıkıntı karşısında ne yapar?"],
       a:["Örnek (dördü yeterli): <b>Allah'a iman etmek</b> · <b>emirlerine uymak, yasaklarından kaçınmak</b> · <b>ibadet ve dua etmek</b> · <b>O'nu sevmek ve zikretmek</b> · <b>verdiği nimetlere şükretmek</b> · <b>ihlaslı olmak</b>.",
          "<b>Sorumluluk</b>, kişinin kendi davranışlarının sonuçlarını üstlenmesidir. Sorumluluklarımızı önce <b>Kur'an-ı Kerim</b>'den, sonra Peygamberimizin <b>sünnet</b>inden öğreniriz.",
          "Kâinatta mükemmel bir düzen olduğunu gösterir; bu düzen <b>Allah'ın varlığının ve birliğinin</b> en önemli işaretidir. Allah'a <b>iman etme</b> sorumluluğumuzla ilgilidir. (“Eğer yerde ve gökte Allah'tan başka ilahlar olsaydı ikisinin de düzeni bozulurdu.” Enbiya 22)",
          "<b>Şükür</b>, Allah'ın verdiği nimetleri fark edip söz ve davranışlarla O'na teşekkür etmektir. <b>Dilin şükrü:</b> “Şükürler olsun, hamdolsun, teşekkür ederim.” demek. <b>Kalbin şükrü:</b> nimetlerin bilincinde olup şükran duymak. <b>Bedenin şükrü:</b> emirleri yapıp yasaklardan uzak durmak. <b>Malın şükrü:</b> zekât ve sadaka vermek.",
          "<b>İhlas</b> samimiyet demektir; kişinin bütün söz ve davranışlarında <b>yalnızca Allah'ın rızasını</b> gözetmesidir. Örnek: Yaptığı iyiliği kimse görmese de, övülmek için değil Allah rızası için yapmak.",
          "Örnek (dördü yeterli): <b>peygamber olduğuna ve bildirdiklerine iman etmek</b> · <b>verdiği hükümlere samimiyetle teslim olmak</b> · <b>sünnetine uymak ve onu örnek almak</b> · <b>adını saygıyla anmak ve salavat getirmek</b> · <b>onu herkesten çok sevmek</b>.",
          "“<b>Allah'ın salat ve selamı onun üzerine olsun.</b>” demektir. Salavat getirmek, Peygamberimize karşı sorumluluklarımızdandır: onu <b>saygıyla anmak</b>, ona olan <b>sevgi ve bağlılığımızı</b> göstermektir. Bu, Allah'ın da bir emridir (Ahzab 56).",
          "<b>Sünnetine uymak ve her konuda onu örnek almak.</b> Kur'an namaz kılmayı emreder; namazın nasıl, hangi vakitte ve kaç rekât kılınacağını Peygamberimizin uygulamasından öğreniriz.",
          "Örnek (dördü yeterli): <b>Allah tarafından gönderildiğine iman etmek</b> · <b>son ilahi kitap olduğunu kabul etmek</b> · <b>değişmeden ulaştığına inanmak</b> · <b>okumak ve anlamaya çalışmak</b> · <b>hükümlerine teslim olmak</b> · <b>ayetlerini hayatımızda uygulamak</b> · <b>okunurken hürmetle dinlemek</b>.",
          "<b>Ağır ağır, tane tane</b>, acele etmeden okunmalı; ayetler <b>özümsenmeli</b>, üzerinde <b>düşünülmeli</b> ve onlardan <b>öğüt alınmalıdır</b>.",
          "Örnek (dördü yeterli): <b>söz ve davranışlarda doğru olmak</b> · <b>adaletli olmak</b> · <b>yardımlaşmak</b> · <b>büyüklere saygı, küçüklere sevgi göstermek</b> · <b>iyiliği tavsiye edip kötülükten sakındırmak</b> · <b>akrabayı ve komşuları gözetmek</b>.",
          "<b>Doğruluk</b>, söz ve davranışlarda gerçeği gözetmek ve yalandan sakınmaktır. Doğru insan bildiğini ve gördüğünü olduğu gibi söyler, <b>verdiği sözü tutar</b>, tutamayacağı sözü vermez.",
          "Büyüklerimize <b>saygı</b>, küçüklerimize <b>sevgi ve merhamet</b> göstermeliyiz. Örnekler: büyüklere yer vermek, sözlerini dinlemek; küçüklere vakit ayırmak, ihtiyaç duyduklarında yardım etmek, güler yüz göstermek.",
          "<b>Sılayırahim</b> akrabalık ilişkileri demektir (sıla: bağ, ilişki; rahim: akrabalık). Akrabalarımızı <b>ziyaret edip hatırlarını sormak</b>, ihtiyaç duyduklarında <b>yardım etmek</b>, iyi ve kötü günde yanlarında olmak.",
          "<b>Rahman:</b> bütün canlılara merhamet eden, her türlü nimeti sürekli veren. <b>Selam:</b> her türlü eksiklikten ve kusurdan uzak, kullarına güvenlik ve esenlik veren. <b>Aziz:</b> güç, kuvvet ve şeref sahibi; hiçbir varlığın emir ve iradesine karşı koyamadığı.",
          "Canlılara <b>merhametle</b> yaklaşır. Örnekler: ihtiyaç sahiplerine yardım etmek, sıkıntılı anında birine destek olmak, hayvanlara iyi davranmak. Peygamberimiz: “Merhamet edenlere Rahman da merhamet eder.”",
          "Herkesin kendisinden emin olduğu, kimseye kötülük yapmayan, <b>güvenilir</b> biri olmaya çalışır ve selamı yayar. “Selamünaleyküm – Aleykümselam”: “<b>Selam sizin üzerinize olsun, Allah sizi her türlü kaza ve beladan korusun.</b>”",
          "Hiçbir varlığın Allah'ın iradesine karşı koyamayacağını bilir. Bu yüzden <b>iyilik ve güzellikleri Allah'tan ister</b>, kötülük ve <b>sıkıntılardan O'na sığınır</b>."]},

      {n:"İslam ve Temizlik", w:"Kasım–Aralık–Ocak",
       lead:"İslam'ın temizliğe verdiği önemi ve ibadete hazırlığı işler. Kitaptaki bölümler: <b>1</b> Temizlik İmanın Yarısıdır · <b>2</b> Temizlik Çeşitleri · <b>3</b> İbadete Hazırlanıyorum (gusül, abdest, teyemmüm) · <b>4</b> Esmayıhüsnayı Tanıyorum. 1. dönemin <b>2. yazılısı</b> bu üniteden gelir (il tablosunda esmadan Kerim, Kuddûs, Tevvâb). Konu anlatımı ve sorular ünite başlarken eklenecek."},

      {n:"İslam'ın Direği Namaz", w:"Şubat–Mart–Nisan",
       lead:"Kitaptaki bölümler: <b>1</b> Namazla İlgili Hükümler · <b>2</b> Sehiv ve Tilavet Secdesi · <b>3</b> Namazda Okunan Dua ve Tesbihler · <b>4</b> Allah'ın Evleri: Mescitler · <b>5</b> Esmayıhüsnayı Tanıyorum. Konu anlatımı ve sorular ünite başlarken eklenecek."},

      {n:"İslam ve Günlük Hayat", w:"Nisan–Mayıs–Haziran",
       lead:"Kitaptaki bölümler: <b>1</b> İslam Ahlakının Özü: Edep ve Hayâ · <b>2</b> Dostluk ve Arkadaşlık · <b>3</b> Nimetlerin Kadrini Bilmek: Şükür · <b>4</b> Kul Hakkını Gözetmek · <b>5</b> Esmayıhüsnayı Tanıyorum. Konu anlatımı ve sorular ünite başlarken eklenecek."}
     ]}
  );

  (function(){
    var T = {
      eylul:"İslam ve Ahlak", ekim:"İslam ve Ahlak", kasim:"İslam ve Ahlak / İslam ve Temizlik",
      aralik:"İslam ve Temizlik", ocak:"İslam ve Temizlik",
      subat:"İslam'ın Direği Namaz", mart:"İslam'ın Direği Namaz",
      nisan:"İslam'ın Direği Namaz / İslam ve Günlük Hayat",
      mayis:"İslam ve Günlük Hayat", haziran:"İslam ve Günlük Hayat"
    };
    CAL7.forEach(function(r){ if(r.items && T[r.key]) r.items.push(["tdb", T[r.key]]); });
  })();

  /* ---------- ana test: ünite başına 10 ---------- */
  Q7.tdb = [
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"Kitaba göre Allah'a karşı sorumluluklarımızın başında hangisi gelir?", o:["Akrabaları ziyaret etmek","O'na iman etmek","Komşuları gözetmek","Kur'an'ı ezberlemek"], a:1,
     w:"Allah'a karşı yerine getirilmesi gereken sorumlulukların başında O'na iman etmek gelir: varlığını, birliğini; eşi, benzeri ve ortağı olmadığını kabul etmek."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"Kişinin kendi davranışlarının sonuçlarını üstlenmesine ne denir?", o:["İhlas","Teslimiyet","Zikir","Sorumluluk"], a:3,
     w:"Sorumluluk budur. Kur'an'da “İnsan, kendisinin başıboş bırakılacağını mı zanneder.” (Kıyamet suresi 36) buyrulur."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"“... Benim namazım, (her türlü) ibadetim, hayatım ve ölümüm, hepsi âlemlerin Rabbi olan Allah içindir.” (Enam suresi 162)\n\nBu ayet Allah'a karşı hangi sorumluluğumuzla ilgilidir?", o:["İhlaslı olmak","Peygamberimize salavat getirmek","Komşuların hakkını gözetmek","Kur'an'ı tane tane okumak"], a:0,
     w:"İhlas, bütün söz ve davranışlarda yalnızca Allah'ın rızasını gözetmektir. Ayet, hayatın tamamının Allah için olması gerektiğini anlatır."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"Sahip olunan mal varlığının şükrü nasıl yerine getirilir?", o:["Daha çok mal biriktirerek","Yalnızca “Teşekkür ederim.” diyerek","Zekât ve sadaka vererek","Malı kimseye göstermeyerek"], a:2,
     w:"Her nimetin şükrü kendi cinsinden yapılır. Malın şükrü zekât ve sadaka vermektir; “Teşekkür ederim.” demek dilin şükrüdür."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"Peygamberimizi anmak ve ona selam göndermek için okunan dualara ne ad verilir?", o:["Zikir","Tesbih","Besmele","Salavat"], a:3,
     w:"Salavat getirmek Peygamberimize karşı sorumluluklarımızdandır. Namazdaki oturuşlarda Salli–Barik duaları okunur."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"“Ey iman edenler! Seslerinizi, Peygamber'in sesinin üstüne yükseltmeyin...” (Hucurat suresi 2)\n\nBu ayet Peygamberimize karşı hangi sorumluluğumuzu vurgular?", o:["Sünnetini ezberlemek","Ona saygı göstermek","Kur'an'ı ondan öğrenmek","Onun doğduğu şehri ziyaret etmek"], a:1,
     w:"Peygamberimize duyulan sevgi ve bağlılık ona saygı duymayı da gerektirir; ayet bütün Müslümanların ona saygı göstermesi gerektiğini bildirir."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"Kitaba göre Kur'an-ı Kerim'e karşı sorumluluklarımızın başında hangisi gelir?", o:["Onu başka dillere çevirmek","Onu güzel sesle okumak","Ona iman etmek","Onu güzel bir kılıfta saklamak"], a:2,
     w:"Kur'an'a karşı sorumlulukların başında ona iman etmek gelir: Allah tarafından Peygamberimize vahyedildiğine ve içeriğinin tümüyle doğru olduğuna inanmak."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"“... Verdiğiniz sözü de yerine getirin. Çünkü verilen söz, sorumluluğu gerektirir.” (İsra suresi 34)\n\nBu ayet topluma karşı hangi sorumluluğumuzla ilgilidir?", o:["Doğruluk","Yardımlaşma","Akrabayı gözetme","İyiliği tavsiye etme"], a:0,
     w:"Kitaba göre verdiği sözü tutmak ve tutamayacağı sözü vermemek doğru kimselerin özelliğidir."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"Akrabalık ilişkilerini ve akrabayı gözetmeyi anlatan kavram hangisidir?", o:["İhlas","Sılayırahim","Ensar","Salavat"], a:1,
     w:"Sıla “bağ, ilişki”, rahim “akrabalık bağı” demektir; sılayırahim akrabalık ilişkileridir."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"“Her türlü eksiklikten ve kusurdan uzak olan, kullarına güvenlik ve esenlik veren” anlamındaki isim hangisidir?", o:["Aziz","Rahman","Rahim","Selam"], a:3,
     w:"Selam sözlükte güven, esenlik, emniyet ve huzur demektir. Bu ismi bilen Müslüman güvenilir olmaya çalışır ve selamı yayar."}
  ];

  /* ---------- havuz: yalnız Yanlışlarım'da çıkar, ünite başına 5 ---------- */
  H7.tdb = [
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"“Dua, ibadetin özüdür.” hadisine göre dua için ne söylenebilir?", o:["Kulluğun en özlü ifadesidir.","Yalnızca zor günlerde yapılır.","Sadece camide yapılabilir.","Yalnızca sesli yapılmalıdır."], a:0,
     w:"Dua Allah ile kul arasındaki iletişim yoludur; Peygamberimiz onu ibadetin özü saymıştır."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"“Sünnet” kelimesinin sözlük anlamı hangisidir?", o:["Samimiyet, içtenlik","Bağ, ilişki","Yol, gidişat, metot","Güven, esenlik, huzur"], a:2,
     w:"Sünnet sözlükte yol, gidişat, metot demektir. “Güven, esenlik” Selam'ın, “samimiyet” ihlasın, “bağ, ilişki” sılanın anlamıdır."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"Kur'an-ı Kerim Peygamberimize yaklaşık kaç yılda indirilmiştir?", o:["On","Kırk","Beş","Yirmi üç"], a:3,
     w:"Kur'an yaklaşık yirmi üç yıllık bir zaman diliminde indirilen son ilahi kitaptır."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"“Bir kötülük gören kişi, eli ile değiştirmeye gücü yetiyorsa onu eli ile değiştirsin...” hadisi topluma karşı hangi sorumluluğumuzla ilgilidir?", o:["Akrabalarla görüşmek","İyiliği tavsiye edip kötülükten sakındırmak","Komşuları ziyaret etmek","Büyüklere yer vermek"], a:1,
     w:"Toplumun ahlak düzenini korumak için iyiliği emretmek ve kötülükten sakındırmak herkesin sorumluluğudur."},
    {u:"ÜNİTE 1 · İslam ve Ahlak", q:"“Bütün canlılara merhamet eden, her türlü nimeti sürekli veren” anlamındaki isim hangisidir?", o:["Selam","Kuddûs","Rahman","Aziz"], a:2,
     w:"Rahman ismi Allah'ın bütün varlıklara rahmetinin göstergesidir; besmelede de geçer."}
  ];

  /* ---------- ek çalışma seti ----------
     "EK · 1. Yazılı Hazırlık" (25): Allah'a karşı (5), Peygamberimize karşı (5),
     Kur'an'a karşı (4), topluma karşı (5), Aziz–Rahman–Selam (6). */
  EKC7.tdb = [
    {u:"EK · 1. Yazılı Hazırlık", q:"Mevsimlerin birbirini izlemesi, çiçeklerin rengârenk açması, kuşların gökyüzünde uçması kâinatta mükemmel bir düzen olduğunu gösterir.\n\nBu düzen en çok neyin işaretidir?", o:["Allah'ın varlığının ve birliğinin","Her şeyin kendiliğinden oluştuğunun","Doğanın kimseye ihtiyaç duymadığının","İnsanların doğayı yönettiğinin"], a:0,
     w:"Kâinattaki düzen Allah'ın varlığının ve birliğinin en önemli işaretidir: “Eğer yerde ve gökte Allah'tan başka ilahlar olsaydı kesinlikle ikisinin de düzeni bozulurdu...” (Enbiya suresi 22)"},
    {u:"EK · 1. Yazılı Hazırlık", q:"“Ben cinleri ve insanları ancak bana kulluk etsinler diye yarattım.” (Zariyat suresi 56)\n\nBu ayete göre ibadet insan için neyi ifade eder?", o:["Boş zamanını değerlendirme yolunu","Yaratılış amacını","İsteğe bağlı bir uğraşı","Ailesinden gördüğü bir geleneği"], a:1,
     w:"Allah'ın kulları üzerindeki hakkı diye tanımlanan ibadet, insanın yaratılış amacını ifade eder."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Ali gün içinde Allah'ı sık sık anar, O'nun yüceliğini düşünür ve O'na gönülden yönelir.\n\nAli'nin bu davranışı Allah'a karşı hangi sorumluluğuyla ilgilidir?", o:["Teslimiyet","Sılayırahim","Salavat","Zikir"], a:3,
     w:"Zikir Allah'ı anmak ve her an hatırda tutmaktır: “... Biliniz ki kalpler ancak Allah'ı anmakla huzur bulur.” (Rad suresi 28)"},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aşağıdakilerden hangisi “bedenin şükrü”ne örnektir?", o:["Allah'ın emirlerini yapıp yasaklarından uzak durmak","“Şükürler olsun.” demek","Zekât ve sadaka vermek","Nimetlerin bilincinde olup şükran duymak"], a:0,
     w:"Bedenin şükrü emirleri yapıp yasaklardan uzak durmaktır. “Şükürler olsun.” demek dilin, zekât vermek malın, şükran duymak kalbin şükrüdür."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Zehra yaptığı iyilikleri kimse görmese de, övülmek için değil yalnızca Allah rızası için yapar.\n\nZehra'nın bu tutumu hangi kavramla açıklanır?", o:["Salavat","Teslimiyet","İhlas","Sılayırahim"], a:2,
     w:"İhlas samimiyet demektir: bütün söz ve davranışlarda yalnızca Allah'ın rızasını gözetmek."},

    {u:"EK · 1. Yazılı Hazırlık", q:"Kitaba göre Peygamberimize karşı sorumluluklarımızın başında hangisi gelir?", o:["Ona salavat getirmek","Onun sünnetine uymak","Onu herkesten çok sevmek","Onun peygamber olduğuna iman etmek"], a:3,
     w:"Seçeneklerin hepsi Peygamberimize karşı sorumluluktur; kitaba göre bunların başında onun Allah'ın peygamberi olduğuna iman etmek gelir. Bu iman, ona bildirilen her şeyi kabul etmeyi de gerektirir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz bir konuda hüküm verdiğinde Müslümanlar bunu itiraz etmeden, içlerinde hiçbir sıkıntı duymadan benimser.\n\nBu tutum Peygamberimize karşı hangi sorumluluğumuzdur?", o:["Komşuları gözetmek","Ona samimiyetle teslim olmak","Ona salavat getirmek","Kur'an'ı tane tane okumak"], a:1,
     w:"Teslimiyet, Peygamberimizin tebliğ ettiği hükümlerin doğru olduğuna içtenlikle inanmak ve verdiği hükmü itiraz etmeden benimsemektir (Nisa suresi 65)."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimizin adı anıldığında söylenen “Sallallâhu aleyhi ve sellem” ifadesinin anlamı nedir?", o:["Allah yüceler yücesidir.","Allah'a hamdolsun.","Allah'ın salat ve selamı onun üzerine olsun.","Allah ondan razı olsun."], a:2,
     w:"Bu ifade bir salavattır. “Yüceler yücesi” anlamındaki söz ise Allah'ın adı anılınca söylenen “cellecelalüh”tür."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz “Herhangi biriniz beni babasından, evladından ve bütün insanlardan daha çok sevmedikçe iman etmiş olmaz.” buyurmuştur.\n\nBu hadis Peygamberimize karşı hangi sorumluluğumuzu anlatır?", o:["Onu herkesten çok sevmek","Ona salavat getirmek","Sünnetine uymak","Ona samimiyetle teslim olmak"], a:0,
     w:"Peygamberimizi herkesten çok sevmek hem ahlaki bir sorumluluk hem de imanın bir gereğidir: “Peygamber, müminlere kendi canlarından daha yakındır...” (Ahzab suresi 6)"},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz bir işe besmeleyle başlar, insanlara selam verir, hastaları ziyaret eder, hediyeleşirdi.\n\nBu davranışları kendi hayatına taşıyan bir Müslüman hangi sorumluluğunu yerine getirir?", o:["Akrabayı gözetmek","Sünnetine uyup onu örnek almak","Ona salavat getirmek","Kur'an'ı tane tane okumak"], a:1,
     w:"Peygamberimizin örnek yaşantısı hayatın her alanında yol gösterir; onun sünnetine uymak ve onu örnek almak ona karşı sorumluluklarımızdandır."},

    {u:"EK · 1. Yazılı Hazırlık", q:"“... Kur'an'ı ağır ağır, tane tane oku.” (Müzzemmil suresi 4)\n\nBu ayete göre Kur'an nasıl okunmalıdır?", o:["Yalnızca ezberleyerek","Hızlıca bitirerek","Sadece başkasından dinleyerek","Acele etmeden, tane tane"], a:3,
     w:"Kur'an'ı okumak, ayetlerini özümsemek ve onlar üzerine düşünmek demektir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kur'an'a iman eden bir Müslüman aşağıdakilerden hangisini kabul ETMEZ?", o:["Hükümlerinin yalnızca belli bir dönem için geçerli olduğunu","Allah tarafından Peygamberimize vahyedildiğini","Son ilahi kitap olduğunu","Değişmeden günümüze ulaştığını"], a:0,
     w:"Kur'an'ın hükümleri kıyamete kadar yaşayacak bütün insanlar için geçerlidir; hem bireysel hem toplumsal hayatı düzenler."},
    {u:"EK · 1. Yazılı Hazırlık", q:"“Kur'an okunduğu zaman ona kulak verip dinleyin ve susun ki size rahmet edilsin.” (Araf suresi 204)\n\nBu ayet Kur'an'a karşı hangi davranışı öğütler?", o:["Kur'an'ı yüksek sesle ezberlemek","Kur'an'ı başka kitaplarla karşılaştırmak","Okunurken ona hürmet edip dinlemek","Kur'an'ı yalnız başına okumak"], a:2,
     w:"Müslüman Kur'an'ı hem okurken hem dinlerken ona hürmet gösterir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz “Sizin en hayırlınız, Kur'an'ı öğrenen ve öğretendir.” buyurmuştur.\n\nBu hadise göre Kur'an'a karşı neyi önemsemeliyiz?", o:["Yalnızca dinlemeyi","Sadece saklamayı","Yalnızca ezberlemeyi","Öğrenmeyi ve öğretmeyi"], a:3,
     w:"Peygamberimiz her gün Kur'an okumuş ve Müslümanlardan da Kur'an'ı hayatlarına katmalarını, öğrenip öğretmelerini istemiştir."},

    {u:"EK · 1. Yazılı Hazırlık", q:"“Doğruluk” kavramının anlamı aşağıdakilerden hangisidir?", o:["Herkese güler yüz göstermek","Gerçeği gözetip yalandan sakınmak","Allah'ı her an anmak","Akrabalık bağını sürdürmek"], a:1,
     w:"Doğruluk söz ve davranışlarda gerçeği gözetmek, yalandan sakınmaktır. Allah'ı her an anmak zikir, akrabalık bağını sürdürmek sılayırahimdir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"“Ey iman edenler! Kendinizin veya anne babanızın ve akrabanızın aleyhine de olsa adaletten asla ayrılmayan ... kimseler olun...” (Nisa suresi 135)\n\nBu ayete göre bir Müslüman nasıl davranmalıdır?", o:["İşine geldiğinde adaletli olmalıdır.","Tanımadıklarına adil olmak zorunda değildir.","Kimin aleyhine olursa olsun adil olmalıdır.","Yalnızca akrabalarına adil davranmalıdır."], a:2,
     w:"Müslüman, şartlar ne olursa olsun söz ve davranışlarında adaleti gözetir; kul hakkına yol açacak davranışlardan kaçınır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Elif üzgün arkadaşını teselli ediyor, bildiği konuları ona anlatıyor, arkadaşı hastalanınca da ziyaretine gidiyor.\n\nElif'in bu davranışları topluma karşı hangi sorumluluğumuz kapsamındadır?", o:["Yardımlaşma","İhlas","Salavat","Teslimiyet"], a:0,
     w:"Yardımlaşmanın geniş bir anlamı vardır; yalnızca maddi yardım değil, bu davranışlar da yardımlaşmadır (Maide suresi 2)."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Hicretten sonra Mekke'den gelen Müslümanlara yardım eden Medinelilere ne ad verilmiştir?", o:["Mümin","Ensar","Muhacir","Hanif"], a:1,
     w:"Ensar “yardım edenler, yardımcı olanlar” demektir. Peygamberimiz Mekkelilerle Medinelileri kardeş ilan etmiş, Medineliler onların sıkıntılarını hafifletmiştir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Peygamberimiz “Cebrail bana komşu hakkına saygı göstermeyi o kadar çok tavsiye etti ki komşunun komşuya mirasçı kılınacağını zannettim.” buyurmuştur.\n\nBu hadisten çıkarılabilecek en doğru sonuç hangisidir?", o:["Komşular birbirinin mirasçısıdır.","Komşularla yalnızca bayramlarda görüşülmelidir.","Komşuluk ilişkileri isteğe bağlıdır.","Komşu hakları dinimizde çok önemlidir."], a:3,
     w:"Hadis komşuya verilen değeri vurgular; komşuların mirasçı yapıldığını söylemez. Komşunun sevincini ve üzüntüsünü paylaşmak, hastalığında ziyaret etmek bu sorumluluğun gereğidir."},

    {u:"EK · 1. Yazılı Hazırlık", q:"Aziz isminin anlamı aşağıdakilerden hangisidir?", o:["Güç, kuvvet ve şeref sahibi","Kullarını kolayca affeden","Her şeyi bilen","Kullarına rızık veren"], a:0,
     w:"Aziz sözlükte eşi ve benzeri bulunmayacak kadar değerli, karşı konulamaz derecede güçlü ve yenilmez demektir. Kâinatta hiçbir varlık O'nun emir ve iradesine karşı koyamaz."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Allah'ın dünyada mümin–kâfir, itaatkâr–günahkâr ayırmadan bütün varlıklara nimetlerinden vermesi hangi isminin göstergesidir?", o:["Selam","Kuddûs","Rahman","Aziz"], a:2,
     w:"Rahman ismi Allah'ın yarattığı bütün varlıklara rahmetinin göstergesidir."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Müslümanların işe başlarken söylediği “Bismillâhirrahmânirrahîm” ifadesinde Allah'ın hangi ismi geçer?", o:["Aziz","Selam","Kerim","Rahman"], a:3,
     w:"Besmelede Rahman ismi geçer; Müslümanlar bu sözle Allah'ın şefkat ve merhametini isterler."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Kitaba göre “Selamünaleyküm – Aleykümselam” sözlerinin anlamı nedir?", o:["Merhamet edenlere Allah da merhamet eder.","Selam sizin üzerinize olsun, Allah sizi her türlü kaza ve beladan korusun.","Allah sana uzun ömür ve bol rızık versin.","Allah'ın salat ve selamı onun üzerine olsun."], a:1,
     w:"Selamlaşma bir duadır; Selam ismini bilen Müslüman selamı insanlar arasında yayar (Nisa suresi 86)."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Aziz ismini bilen bir Müslüman için aşağıdakilerden hangisi söylenebilir?", o:["Güçlü insanların her istediğini yapabileceğini düşünür.","Dua etmenin gereksiz olduğunu düşünür.","İyilikleri Allah'tan ister, sıkıntıda O'na sığınır.","Her şeyi kendi gücüyle başaracağını düşünür."], a:2,
     w:"Allah dilemedikçe kimseye fayda ya da zarar dokunmaz; O'nun dilediğine de kimse engel olamaz. Bunu bilen Müslüman iyilikleri Allah'tan ister, kötülük ve sıkıntılardan O'na sığınır."},
    {u:"EK · 1. Yazılı Hazırlık", q:"Selam ismini bilen bir Müslüman nasıl bir insan olmaya çalışır?", o:["Herkesin kendisinden emin olduğu, güvenilir biri","Kimseyle konuşmayan, içine kapanık biri","Yalnızca kendi işini düşünen biri","Herkesin kendisinden korktuğu biri"], a:0,
     w:"Selam esenlik ve güven veren demektir. Bu ismin bilincindeki Müslüman çevresine kötülük yapmaz, güvenilir olur ve selamlaşır."}
  ];
