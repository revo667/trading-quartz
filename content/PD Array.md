---
tags: [kavram, ict-smc]
kaynak: ["Ham Notlar/Dreyko - manipülasyon serisi.pdf"]
guncelleme: 2026-07-09
---

# PD Array (Premium/Discount Array)

**PD Array = Price Delivery Array.** Fiyatın tepki vermesi beklenen,
grafikte önceden işaretlenebilen **yapısal seviyelerin ortak adıdır** —
FVG, Order Block, Breaker, likidite seviyesi, eski high/low gibi yapıların
hepsi birer PD array'dir. "Fiyat nereye çekilir, nereden döner?" sorusunun
adres listesi.

> Journal'ında kullandığın haliyle: *"HTF PD array 4 saatlik FVG, 4 saatlik
> OB, haftalıkta FVG vs. olabilir"* — Market Maker Model (Dreyko PDF).

## Neden "Premium/Discount" Array?

İsim, Premium - Discount mantığından gelir: bir range'in (son swing
high ↔ swing low) üst yarısı **premium** (pahalı), alt yarısı **discount**
(ucuz) bölgedir. Aynı yapı hangi yarıdaysa ona göre kullanılır:

- **Premium PD (array):** Range'in üst yarısındaki yapılar (üstte kalan
  FVG, bearish OB, eski high, buyside likidite). **Satış bölgesi veya
  long hedefi** olarak kullanılır — senin NASDAQ planındaki "üstte 2 adet
  Premium PD" tam bu: long'un taşınacağı hedef seviyeler.
- **Discount PD (array):** Range'in alt yarısındaki yapılar (altta kalan
  FVG, bullish OB, eski low, sellside likidite). **Alış bölgesi veya
  short hedefi** olarak kullanılır.

Kısa formül: **discount'ta al, premium'da sat; karşı taraftaki PD array'i
hedefle.**

## Yaygın PD array türleri

| Tür | Sayfası | Kısa not |
|---|---|---|
| FVG (imbalance) | Fair Value Gap - FVG | En sık kullanılan; 0.5 (CE) noktası kritik |
| Order Block | Order Block | Önemli noktayı alan mum |
| Breaker Block | Breaker Block | Kırılan yapı; en güvenilir entry modeli |
| IFVG / BPR | Inversion FVG - IFVG | Ters dönmüş FVG / dengelenmiş bölge |
| Likidite (BSL/SSL, eski H/L) | Likidite | Eşit dipler/tepeler, seans H/L |
| Volume imbalance / gap | — *(henüz ayrı sayfası yok)* | Haber/açılış boşlukları |

## Kullanım kuralları (Dreyko PDF'ten)

1. **Reversal ancak önemli bir HTF PD array temasından sonra beklenir** —
   MMXM'de re-distribution görünce önemseme, fiyatın
   HTF PD array'e (4H FVG/OB, haftalık FVG) ulaşmasını bekle.
2. Fiyat **hiçbir PD array'e gelmeden de dönebilir** — ama bunlar genellikle
   re-accumulation/re-distribution fazlarıdır (devam, dönüş değil).
3. **Ana bir PD array + likidite hedefin olmalı** — bias böyle netleşir;
   her low'a stop atıp markete manipüle olma.
4. En çok manipülasyon, **önemli PD array/key level temasından sonra**
   arkada bırakılan FVG'nin tap'lenip stop hunt yapıldığı yerdir.
5. PD seviyelerine (0.25/0.5/0.75) çekilmeler genelde **algoritmiktir** ve
   ICT Macro pencerelerinde gerçekleşir.
6. Reversal'da hedefe giderken sellside curve'deki FVG'lerin
   IFVG'leşmesi fiyatı PD array'den PD array'e
   taşır.

## Journal'da nasıl yazılır (örnek)

> *"Üstte 2 Premium PD (4H FVG + eski high), altta alınmamış SSL. Plan:
> SSL alımı → reversal onayı (SMT) → discount'tan long → hedef 1. Premium
> PD, kalan pozisyon 2. Premium PD."* — hedef zinciri bu netlikte olunca
> R:R da önceden hesaplanabilir.

## Bağlantılar

- Hub: [[ICT - SMC]] · Merkez: [[Genel Bakış]]
- İlgili: [[Premium - Discount]]
- İlgili: [[Likidite]]
