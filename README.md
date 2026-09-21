# Ortaokul Yol Haritası

6. ve 7. sınıf için tek sayfalık çalışma paneli. Üstteki seçiciyle sınıf değişir.

Her sınıf için:
- **Plan** — MEB 2026–2027 çalışma takvimine oturtulmuş yıllık konu takvimi, haftalık çalışma programı, dört çalışma kuralı
- **Dersler** — 6 dersin 41 ünitesi; özet, "bilmen gerekenler", kural/formül kutuları, tablolar, sık yapılan hata, ünite sonu açık uçlu sorular ve kapalı cevap anahtarı
- **Testler** — çoktan seçmeli, anında geri bildirimli
- **İlerleme** — ders bazında yüzde ve test skorları
- **Yazdır** — o sınıfın tamamını fasikül olarak çıkarır

İki sınıfın ilerlemesi birbirinden tamamen ayrı tutulur.

---

## Güncelleme nasıl yapılır

Kaynak `src/` altındadır, `index.html` **üretilmiş dosyadır — elle düzenleme.**

```bash
# 1. İlgili src/ dosyasını düzenle
# 2. Yeniden üret:
bash build.sh
# 3. Yayınla:
git add -A && git commit -m "Aciklama" && git push
```

`build.sh` birleştirmeden önce JavaScript sözdizimini `node --check` ile doğrular; hata varsa `index.html`'e dokunmaz.

### src/ dosyaları

| Dosya | İçerik |
|---|---|
| `01-sayfa-ve-stil.html` | HTML iskeleti, CSS, yazdırma stilleri |
| `02-ortak-veri-ve-6sinif-mat-fen.js` | Haftalık program, tatiller, iki sınıfın yıllık takvimi + 6. sınıf Matematik ve Fen |
| `03-6sinif-turkce-sosyal.js` | 6. sınıf Türkçe, Sosyal Bilgiler |
| `04-6sinif-ingilizce-din.js` | 6. sınıf İngilizce, Din Kültürü |
| `05-7sinif-mat-fen.js` | 7. sınıf Matematik, Fen |
| `06-7sinif-turkce-sosyal.js` | 7. sınıf Türkçe, Sosyal Bilgiler |
| `07-7sinif-ingilizce-din.js` | 7. sınıf İngilizce, Din Kültürü |
| `08-testler.js` | Çoktan seçmeli soru havuzları |
| `09-uygulama.js` | Çizim ve etkileşim kodu |

### Ünite veri şeması

```js
{ n:"Ünite adı", w:"Kasım–Aralık",
  lead:"Giriş paragrafı (HTML serbest)",
  p:["madde", "madde"],                      // Bilmen gerekenler
  box:[{t:"Kutu başlığı", h:"HTML içerik"}], // Kural / formül kutusu
  tbl:[{h:["Sütun1","Sütun2"], r:[["a","b"]]}],
  trap:"Sık yapılan hata",
  vid:[{t:"Video başlığı", u:"https://www.youtube.com/watch?v=..."}],
  q:["Soru 1","Soru 2"],                     // Açık uçlu
  a:["Cevap 1","Cevap 2"] }                  // Cevap anahtarı — q ile aynı sırada
```

Tüm alanlar isteğe bağlıdır (`n` ve `w` hariç). `a` dizisi `q` ile **birebir aynı sırada** olmalıdır.

### Video linki eklerken

Link uydurma. Ekleyeceğin her videoyu önce doğrula:

```bash
curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEO_ID&format=json"
```

Başlık ve kanal adı dönüyorsa video gerçek. `author_name` alanı `tonguç 6. SINIF` / `tonguç 7. SINIF` olmalı.
Oynatma listeleri için `url=https://www.youtube.com/playlist?list=LISTE_ID` kullan.
`u` alanında `playlist` geçerse sayfa otomatik olarak "oynatma listesi" etiketi basar.

Videolar **ay ay** ekleniyor; şu an Eylül ve Ekim üniteleri kaplı.
Tonguç video başlıklarındaki `6MAT3 #2026` gibi kodlar dersi, sırayı ve müfredat yılını gösterir — `#2026` olanları tercih et.

## Aylık bakım

Her ayın sonunda, gelecek ay için:

1. **Videolar** — `CAL6`/`CAL7` takviminden gelecek ayın ünitelerini bul, `vid:[]` alanına ekle (doğrulama yöntemi yukarıda).
2. **Sorular** — hedef ünite başına **10 çoktan seçmeli**. Tüm yılı birden yazma; müfredatın 1-2 ay önünden git.
3. **Zayıf üniteler** — İlerleme sekmesindeki *Tekrar gerektiren üniteler* listesine bak. Orada çıkan ünitelere **yeni** sorular yaz; eskileri çocuk zaten çözmüştür.

### Soru ekleme

Sorular `src/08-testler.js` içinde, `Q6` ve `Q7` altında ders ders duruyor:

```js
{u:"TEMA 1 · Sayılar ve Nicelikler (1)", q:"Soru metni",
 o:["A şıkkı","B şıkkı","C şıkkı","D şıkkı"], a:2, w:"Neden doğru olduğunun açıklaması"}
```

`u` alanı **Dersler sekmesindeki ünite başlığıyla birebir aynı** olmalı (`TEMA 1 · …`, `ÜNİTE 3 · …`,
`KONU 5 · …`, `ALAN 2 · …`) — ünite filtresi ve zayıf ünite listesi bu alana göre gruplar.
`a` doğru şıkkın **sıfırdan başlayan** indisidir. Şıklar sayfada karıştırıldığı için sıra önemli değil.

Yeni soruyu dizinin sonuna eklemek güvenlidir: "yanlışlarım" kayıtları soru metninden türeyen
kimliğe bağlı, indise değil.

### Soru havuzu (`src/08c-havuz.js`)

`H6` / `H7` altındaki sorular **ana teste girmez.** Yalnızca **Yanlışlarım** modunda,
çocuğun yanlış yaptığı ünitelerden **taze soru** olarak servis edilir. Amaç, aynı soruyu
ezberlemek yerine aynı konuyu farklı soruyla tekrar çözdürmek.

Yapı ana testle birebir aynı; `u` alanı yine ünite başlığıyla eşleşmeli.
Hedef: aktif her ünite için **5 havuz sorusu**.

Havuz soruları da yanlış yapılırsa hata defterine girer ve tekrar çıkar.
Puan hesabı yalnızca ana test üzerinden yapılır; havuz soruları skoru etkilemez.

### Yanlışın düzeltilmesi

Cevaplanan soru normalde **kilitlidir.** Tek istisna: **Yanlışlarım** modunda yanlış yapılmış
soru. Orada şıklar yeniden açılır ve doğru cevap gizlenir — hata defterinin amacı soruyu
tekrar *çözmek*. Ana testte kilit sürer, çünkü orada doğru cevap zaten ekranda yazıyor;
açık olsaydı düzeltme değil kopyalama olurdu.

`Yanlışlarım` listesi **moda girerken bir kez kurulur ve orada donar** (`yanlisKumeKur()`).
Canlı hesaplansaydı çocuk bir soruyu düzeltir düzeltmez soru ekrandan kaybolurdu.
Liste, moddan çıkıp tekrar girince yenilenir.

Düzeltilen yanlış `wrong` listesinden düşer (o liste `cevap`'tan türetilir), ama
**`hata` kaydı kalıcıdır** — hangi soruyu kaç kez yanlış yaptığını tutar ve düzeltme onu
silmez. Veli raporundaki "önce yanlış yapıp sonra düzeltmiş" sayısı buradan gelir; olmasaydı
çocuğun düzeltme emeği raporda hiç görünmezdi. Bu alan `yanlisHesapla()` içinde de
damgalanır, böylece özellik gelmeden önce yapılmış yanlışlar da kayda geçer.

**Senkron çakışması:** cevaplar artık değişebildiği için `birlestir()` içinde çakışmayı
**doğru cevap kazanır**. Körü körüne yereli korumak, bir cihazdaki düzeltmeyi diğer cihazın
eski yanlışıyla geri alırdı. Düzeltme tek yönlü olduğu için bu kural yapılmamış bir ilerleme
uydurmaz.

### "Şimdi işleniyor" rozeti

Ünitenin `w` alanı (ör. `"Eylül–Ekim"`) cihazın o anki ay adını içeriyorsa yeşil **şimdi işleniyor**,
bir sonraki ayın adını içeriyorsa mavi **sonraki ay** rozeti basılır. Kod tarafında ayar gerekmez,
ay değişince kendiliğinden kayar. Üstteki şerit ise takvimden (`CAL6` / `CAL7`) okunur.

### İlerleme kayıtları güvenli mi?

Evet. Ünite kimliği sırasından değil **adından** türetilir (`uid()` → `mat-sayilar-ve-nicelikler-1`).
Araya ünite eklemek ya da sırayı değiştirmek işaretlenmiş konuları kaydırmaz.
**Ünite adını değiştirirsen** o ünitenin işareti sıfırlanır — bilerek yap.

---

## MEB müfredat notları

2026–2027, **7. sınıfın Maarif Modeli'ne geçtiği ilk yıl**; 6. sınıf ikinci yılında.
İnternetteki "sınıf konuları" listelerinin çoğu hâlâ eski müfredatı veriyor.

Ünite adlarını **her zaman** resmî kaynaktan doğrula: <https://tymm.meb.gov.tr/ogretim-programlari>

Bilinen tuzaklar:
- **İngilizce** artık ÇYDEM (Çoklu Yabancı Dil Eğitim Modeli). 8 tema: *School Life & Education* → *Life in the Universe & Future*. Eski 10 ünitelik liste (*Appearance and Personality, Sports…*) geçersiz.
- **6. sınıf Din Kültürü** ünite adları değişti: *Namaz / Zararlı Alışkanlıklar / Temel Değerlerimiz* yerine *Ramazan ve Oruç / Ahlaki Davranışlar / Kültürümüzdeki Dinî Motifler*.
- **6. sınıf Matematik**'te tam sayılar, kümeler, oran, üslü ifadeler ve hacim yok — başka sınıflara taşındı.
- **6. sınıf Fen**'de *Ses ve Özellikleri* ile *Bitki ve Hayvanlarda Üreme* yok; yerlerine *Işığın Yansıması ve Renkler* ve *Sürdürülebilir Yaşam ve Etkileşim* geldi.

Okulun kendi ünitelendirilmiş yıllık planı her durumda esastır.

---

## Okul saatleri ve ders programı

**Okul** sekmesinde: o anki dersi gösteren canlı kart, sınıfa göre haftalık ders programı ve
günlük zil çizelgesi. Hepsi `src/12-okul.js` içinde — değişiklik olduğunda **yalnızca o dosyayı**
düzenle, `bash build.sh` çalıştır, push at.

| Düzenlenecek | Ne için |
|---|---|
| `ZAMAN` | Zil saatleri. `gun:[1]` alanı "yalnızca Pazartesi" demektir. |
| `PROGRAM.g6` / `PROGRAM.g7` | Sınıf adı, sınıf öğretmeni ve gün gün ders listesi. Her gün `[["DERS ADI","Öğretmen"], …]`, 1. dersten başlayarak sırayla. |
| `DERS_RENK` | Ders adını panelin renkleriyle eşler; yeni bir ders adı eklersen buraya da yazmak isteyebilirsin. |

**Saatler tek yerden gelir.** Ders programı çıktısında (aSc) yazan saatler eskiyebiliyor; sayfa
saatleri her zaman `ZAMAN` tablosundan alır, programdan değil. Program yalnızca "kaçıncı derste
hangi ders" bilgisini verir.

Sınıf değişirse (ör. 7B → 7A) `PROGRAM.g7.sinif` ve `gunler` alanlarını güncellemek yeterli.

## Veli görünümü

Çocuğun cihazındaki ilerleme kendi tarayıcısında durur, dışarı çıkmaz. Veliye ulaştırmak için
**durum kodu** kullanılır:

1. Çocuk: **İlerleme → Durum kodumu üret** → çıkan metni gönderir (~30–400 karakter)
2. Veli: `…/ortaokul/?veli` adresini açar, kodu yapıştırır, **Kodu ekle** der

Rapor: bitirilen ünite sayısı ve yüzdesi, bitirilen test sayısı ve başarı oranı, ders ders ilerleme,
bitirilen ünitelerin adları, yanlış sayısına göre sıralı zayıf konular, son çalışma tarihi.
İki sınıfın raporu yan yana durur; kodlar velinin bilgisayarında saklanır.

Kod kısa kalsın diye ünite ve konu adları değil, **kanonik sıra indeksi** taşınır — iki taraf da
aynı sayfayı çalıştırdığı için indeksten ada çevirme sorunsuz olur. Ünite listesi değişirse
eski kodlar kayabilir; büyük bir yeniden düzenlemeden sonra çocuktan yeni kod iste.

Otomatik ve anlık takip isteniyorsa (Supabase gibi bir arka uç) yalnızca verinin taşınması değişir;
`src/10-veli.js` içindeki rapor ekranı aynen kullanılır.

## Yayın

`index.html` tek dosyadır, sunucu gerektirmez. GitHub Pages `main` dalının kökünden servis eder;
`git push` sonrası canlı sayfa birkaç dakika içinde güncellenir.

İlerleme kayıtları tarayıcıda (`localStorage`) tutulur ve güncellemelerden etkilenmez.
