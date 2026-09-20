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

## Yayın

`index.html` tek dosyadır, sunucu gerektirmez. GitHub Pages `main` dalının kökünden servis eder;
`git push` sonrası canlı sayfa birkaç dakika içinde güncellenir.

İlerleme kayıtları tarayıcıda (`localStorage`) tutulur ve güncellemelerden etkilenmez.
