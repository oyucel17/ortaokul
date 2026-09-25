  /* ===================== EK ÇALIŞMA SETLERİ =====================
     Kullanıcının istediği konuya özel çalışma setleri.

     ANA TESTE GİRMEZ. Sebebi: ders puanının paydası her yeni sette
     şişmesin ("Matematik 28" → 48 → 68 …) ve bir kez bitirilen test
     yeniden yarım kalmasın. Kendi çipinden açılır, doğru/yanlışı
     normal şekilde kaydedilir, veli raporunda ayrı satır olur,
     yanlışlar "Yanlışlarım" modunda tekrar çıkar.

     u alanı "EK · <set adı>" biçiminde olmalı — çip bu adı gösterir
     ve ana testin ünite çiplerinden ayrı, mor çerçeveli çizilir.

     Yeni set eklerken: ilgili sınıfın altına ders anahtarıyla yeni
     dizi aç ya da mevcut diziye yeni u başlığıyla ekle. */

  var EKC6 = {
    mat:[
      {u:"EK · Bölünebilme Kuralları", q:"Aşağıdaki sayılardan hangisi 2 ile tam bölünür?", o:["3457","5862","7129","4003"], a:1,
       w:"Bir sayının 2 ile bölünmesi için son rakamı çift olmalı. 5862'nin son rakamı 2, çifttir."},
      {u:"EK · Bölünebilme Kuralları", q:"4173 sayısı aşağıdakilerden hangisine tam bölünür?", o:["2","3","5","9"], a:1,
       w:"Rakamları toplamı 4+1+7+3 = 15. 15, 3'ün katı olduğu için sayı 3'e bölünür. 15, 9'un katı olmadığından 9'a bölünmez; son rakam 3 olduğu için 2'ye de 5'e de bölünmez."},
      {u:"EK · Bölünebilme Kuralları", q:"Bir sayının 4 ile tam bölünebilmesi için hangi şart gerekir?", o:["Son rakamı 4 olmalı","Son iki basamağının oluşturduğu sayı 4'ün katı olmalı","Rakamları toplamı 4'ün katı olmalı","Sayının çift olması yeterli"], a:1,
       w:"4 kuralı son İKİ basamağa bakar. Örneğin 1316 → son iki basamak 16, 4'ün katı olduğu için sayı 4'e bölünür. Çift olmak tek başına yetmez: 26 çifttir ama 4'e bölünmez."},
      {u:"EK · Bölünebilme Kuralları", q:"72_4 sayısının 9 ile tam bölünebilmesi için boş bırakılan yere hangi rakam gelmelidir?", o:["3","5","7","9"], a:1,
       w:"7+2+4 = 13. Toplamın 9'un katı olması gerekir; 13'ten sonraki kat 18'dir. 18 − 13 = 5."},
      {u:"EK · Bölünebilme Kuralları", q:"Aşağıdaki sayılardan hangisi 6 ile tam bölünür?", o:["2345","4128","7251","5114"], a:1,
       w:"6 = 2 · 3 olduğu için sayı hem çift olmalı hem de rakamları toplamı 3'ün katı olmalı. 4128 çifttir ve 4+1+2+8 = 15, 3'ün katıdır."},
      {u:"EK · Bölünebilme Kuralları", q:"36_0 sayısının hem 4 hem 5 ile tam bölünebilmesi için boşluğa gelebilecek rakamların toplamı kaçtır?", o:["12","16","20","24"], a:2,
       w:"Son rakam 0 olduğu için 5 kuralı her durumda sağlanır. 4 için son iki basamak (boşluk ve 0) 4'ün katı olmalı: 00, 20, 40, 60, 80 → rakamlar 0, 2, 4, 6, 8. Toplamları 20."},
      {u:"EK · Bölünebilme Kuralları", q:"5481 sayısının 9 ile bölümünden kalan kaçtır?", o:["0","1","3","6"], a:0,
       w:"Rakamları toplamı 5+4+8+1 = 18. 18, 9'un katı olduğu için sayı 9'a tam bölünür, kalan 0'dır."},
      {u:"EK · Bölünebilme Kuralları", q:"Aşağıdakilerden hangisi hem 2 hem 5 ile tam bölünür?", o:["1235","4682","7890","3505"], a:2,
       w:"2 için son rakam çift, 5 için son rakam 0 ya da 5 olmalı. İkisini birden sağlayan tek durum son rakamın 0 olmasıdır: 7890."},
      {u:"EK · Bölünebilme Kuralları", q:"23_ sayısı 3 ile tam bölünüyorsa boşluğa gelebilecek en büyük rakam kaçtır?", o:["4","7","8","9"], a:1,
       w:"2+3 = 5. Toplam 3'ün katı olmalı: 5+1 = 6, 5+4 = 9, 5+7 = 12. Uygun rakamlar 1, 4, 7 → en büyüğü 7."},
      {u:"EK · Bölünebilme Kuralları", q:"9 ile tam bölünen bir sayı, aşağıdakilerden hangisine de kesinlikle tam bölünür?", o:["2","3","4","6"], a:1,
       w:"9 = 3 · 3 olduğu için 9'un her katı aynı zamanda 3'ün katıdır. Diğerleri için ayrıca çift olma şartı gerekir; örneğin 27, 9'a bölünür ama 2'ye, 4'e ve 6'ya bölünmez."},
      {u:"EK · Bölünebilme Kuralları", q:"12_6 sayısının 4 ile tam bölünebilmesi için boşluğa kaç farklı rakam gelebilir?", o:["3","4","5","6"], a:2,
       w:"Son iki basamak 4'ün katı olmalı. 06, 16, 26, 36, 46, 56, 66, 76, 86, 96 içinden 4'ün katı olanlar: 16, 36, 56, 76, 96 → 5 farklı rakam."},
      {u:"EK · Bölünebilme Kuralları", q:"Bir sınıftaki öğrenci sayısı 2'ye, 3'e ve 4'e tam bölünmektedir. Mevcut 30'dan az olduğuna göre sınıfta en fazla kaç öğrenci vardır?", o:["12","18","24","28"], a:2,
       w:"Sayı 2, 3 ve 4'ün ortak katı olmalı. EKOK(2, 3, 4) = 12; katları 12, 24, 36… 30'dan küçük en büyüğü 24'tür."},
      {u:"EK · Bölünebilme Kuralları", q:"453_ sayısının 6 ile tam bölünebilmesi için boşluğa gelebilecek rakamların toplamı kaçtır?", o:["3","6","9","12"], a:1,
       w:"6 için sayı hem çift olmalı hem 3'e bölünmeli. 4+5+3 = 12; toplamın 3'ün katı olması için rakam 0, 3, 6 ya da 9 olmalı. Bunlardan çift olanlar 0 ve 6 → toplamları 6."},
      {u:"EK · Bölünebilme Kuralları", q:"Aşağıdaki sayılardan hangisi 9 ile tam bölünmez?", o:["1233","4518","6345","2707"], a:3,
       w:"Rakam toplamları: 1233 → 9, 4518 → 18, 6345 → 18 (hepsi 9'un katı). 2707 → 2+7+0+7 = 16, 9'un katı değildir."},
      {u:"EK · Bölünebilme Kuralları", q:"38_ sayısı 5 ile tam bölünüyor ve çift bir sayı ise boşluktaki rakam kaçtır?", o:["0","2","5","8"], a:0,
       w:"5 kuralına göre son rakam 0 ya da 5 olabilir. Sayının çift olması istendiği için 5 elenir, geriye 0 kalır."},
      {u:"EK · Bölünebilme Kuralları", q:"Bir sayı 3 ile tam bölünüyorsa, 6 ile de tam bölüneceği kesin midir?", o:["Evet, kesindir","Hayır; ayrıca çift olması gerekir","Hayır; ayrıca 9'a bölünmesi gerekir","Hayır; ayrıca 5'e bölünmesi gerekir"], a:1,
       w:"6 = 2 · 3'tür, yani hem 2 hem 3 şartı aranır. 15 sayısı 3'e bölünür ama tek olduğu için 6'ya bölünmez."},
      {u:"EK · Bölünebilme Kuralları", q:"732_ sayısının 4 ile tam bölünebilmesi için boşluğa gelebilecek en küçük rakam kaçtır?", o:["0","2","4","8"], a:0,
       w:"Son iki basamak (2 ve boşluk) 4'ün katı olmalı: 20, 24, 28. En küçük rakam 0'dır."},
      {u:"EK · Bölünebilme Kuralları", q:"1'den 50'ye kadar olan sayılardan kaç tanesi 9 ile tam bölünür?", o:["4","5","6","9"], a:1,
       w:"9, 18, 27, 36, 45 → 5 tane. Sonraki kat 54 olup 50'yi geçer."},
      {u:"EK · Bölünebilme Kuralları", q:"24680 sayısı için aşağıdakilerden hangisi YANLIŞTIR?", o:["2 ile tam bölünür","3 ile tam bölünür","4 ile tam bölünür","5 ile tam bölünür"], a:1,
       w:"Rakamları toplamı 2+4+6+8+0 = 20, 3'ün katı değildir. Son rakam 0 olduğu için 2 ve 5 kuralları sağlanır; son iki basamak 80, 4'ün katı olduğu için 4 kuralı da sağlanır."},
      {u:"EK · Bölünebilme Kuralları", q:"Bir manav elindeki elmaları 2'şerli, 3'erli ve 5'erli gruplara ayırdığında hiç elma artmıyor. Elma sayısı 100'den az olduğuna göre en çok kaç elma vardır?", o:["60","75","90","96"], a:2,
       w:"Sayı 2, 3 ve 5'in ortak katı olmalı. EKOK(2, 3, 5) = 30; katları 30, 60, 90, 120… 100'den küçük en büyüğü 90'dır."}
    ]
  };

  var EKC7 = {};
