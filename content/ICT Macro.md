---
tags: [kavram, ict-smc, zaman]
kaynak: ["Ham Notlar/Dreyko - manipülasyon serisi.pdf"]
guncelleme: 2026-07-09
---

# ICT Macro — Algoritmik Fiyat Hareketi

**Macro**, algoritmanın belirli saat pencerelerinde likidite arayışına
çıktığı kısa zaman dilimleridir. Fiyat bu pencerelerde bir likidite
havuzuna/FVG'ye doğru hızlı hareket eder — Kill Zones'un mikro ölçeği.

## Bilinen macro pencereleri (ET / New York saati)

| Pencere           | Not                                                    |
| ----------------- | ------------------------------------------------------ |
| **2.50 – 3.10**   | London macrosu (London açılış likidite koşusu)         |
| **9.50 – 10.10**  | NY sabah macrosu — 9.30 manipülasyonu sonrası ilk koşu |
| **10.50 – 11.10** | NY ikinci macro — FVG tap'leri sıklıkla bu pencerede   |

- 9.30 NYAM session manipülasyonundan sonra genellikle piyasa **9.45–9.50'ye
  doğru manipülasyon hareketini bitirir ve expansion fazına geçer**
  (kendi gözlemin — 9.50-10.10 Macrosu notundan).
- Genelde piyasada önemli pd seviyelerine (0.25/0.5/0.75) çekilmeler
  algoritmiktir — macro zamanları içinde bir FVG ya da likidite snap'i arar.
- Fiyat macro zamanında bir FVG'ye ya da likiditeye temas etmemişse,
  taplemesini ve sonrasındaki tepkiyi bekle; en güzel entry'ler macro
  penceresinde alınan 5m FVG'leridir (stop son bırakılan high seviyesi,
  hatta daily FVG üstüne stop koyulabilir).
- Haber öncesi macro'da oluşan minör sellside/buyside alımları sonrası
  fiyat kendini kanıtlamalı — Cuma sert satış öncesi BPR yapısı gibi
  hafta açılmadan bırakılan yapılar takip edilir.

## Kullanım (nasıl tradelenir)

1. Macro öncesi likidite haritası çıkar: fiyat nereye gidebilir, en yakın
   likidite/FVG nerede (DOL)?
2. Macro penceresinde likidite alımı + SMT /
   Turtle Soup oluşumu → reversal ya da continuation kararı.
3. Sonrasında Breaker Block / IFVG / CISD ile
   entry.

## Bağlantılar

- Hub: [[ICT - SMC]] · Merkez: [[Genel Bakış]]
- İlgili: [[Kill Zones]]
- İlgili: [[9.50-10.10 Macrosu]]
