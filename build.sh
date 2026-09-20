#!/usr/bin/env bash
# src/ altındaki parçaları birleştirip yayınlanabilir index.html üretir.
# Kullanım:  bash build.sh
set -e
cd "$(dirname "$0")"

OUT="index.html"
TMP=".build.tmp"

# 1) Parçaları sırayla birleştir
cat src/01-sayfa-ve-stil.html \
    src/02-ortak-veri-ve-6sinif-mat-fen.js \
    src/03-6sinif-turkce-sosyal.js \
    src/04-6sinif-ingilizce-din.js \
    src/05-7sinif-mat-fen.js \
    src/06-7sinif-turkce-sosyal.js \
    src/07-7sinif-ingilizce-din.js \
    src/08-testler.js \
    src/08b-testler-ek.js \
    src/09-uygulama.js > "$TMP"

# 2) JavaScript sözdizimini doğrula (node varsa)
if command -v node >/dev/null 2>&1; then
  awk '/^<script>$/{f=1;next} /^<\/script>$/{f=0} f' "$TMP" > .check.js
  if ! node --check .check.js; then
    echo "HATA: JavaScript sozdizimi bozuk. index.html guncellenmedi." >&2
    rm -f "$TMP" .check.js
    exit 1
  fi
  rm -f .check.js
else
  echo "UYARI: node bulunamadi, sozdizimi kontrolu atlandi."
fi

# 3) Tam HTML belgesine sar
{
  printf '%s\n' '<!doctype html>' '<html lang="tr">' '<head>' \
    '<meta charset="utf-8">' \
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">' \
    '<meta name="description" content="6. ve 7. sinif 2026-2027 Maarif Modeli: yillik takvim, haftalik program, unite ozetleri, sorular ve cevap anahtari.">' \
    '<meta name="theme-color" content="#F6F7F4">'
  sed 's|^<header class="top">|</head>\n<body>\n<header class="top">|' "$TMP"
  printf '%s\n' '</body>' '</html>'
} > "$OUT"

rm -f "$TMP"
echo "TAMAM: $OUT uretildi ($(wc -c < "$OUT") bayt)"
