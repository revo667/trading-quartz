---
tags: [kavram, ict-smc, strateji]
kaynak: ["[[Ham Notlar/Dreyko - manipülasyon serisi.pdf]]"]
guncelleme: 2026-07-25
---

# Market Maker Model (MMXM)

[(Dreyko)](https://www.youtube.com/watch?v=r-8PpvofDDM&list=PLwoFQQZWD2QoFbOrI7Tv-44eewvZJMsDJ&index=12)

Market Maker Modeli temel olarak [[Piyasa Manipülasyonu - PO3 (AMD)|market cycle'ın 4 fazının]] tespit edilmesiyle oluşur.

Özet olarak öncelikle consolidation, re-distribution fazı yakalamak ve sonrasında smart money reversal'ı doğru yorumlayıp low risk buy zone'da işlem almak.

- İşlem almak için High Time Frame'deki önemli noktalar beklenir.

Dreyko'nun stratejisi:
1. High Time Frame COT analizi → [[COT - Commitment of Traders]]
2. MMXM
3. Manipülasyon (Retracement ve 2. Distribution bölümleri)
4. Entry

## Yapı (Market Maker Buy Model)

![[dreyko-mmxm-reversal-yapisi.png]]
> *Dreyko PDF: "trade etmek istediğimiz yapı tam anlamıyla bu" — original
> consolidation → re-distribution 1-2 → HTF PD array → reversal (SMT!) →
> re-accumulation 1-2.*

```
Original Consolidation
  → Sellside Curve: re-distribution 1 → re-distribution 2
  → HTF PD array temas (4H FVG/OB, haftalık FVG vb.)
  → Smart Money Reversal (+ [[SMT - Smart Money Tool|SMT]] onayı)
  → Buyside Curve: low risk buy → re-accumulation 1 → re-accumulation 2
  → hedef: original consolidation / buyside likidite
```

- Reversal'dan sonra fiyatın reversal düşüşüne **saygı duyması** ve sellside
  curve'deki FVG'lerden oluşan [[Inversion FVG - IFVG|IFVG]]'lerle hedefe
  taşınması beklenir. Sell model bunun aynadaki simetriğidir.

## Kritik kurallar (PDF'ten)

- **Reversal'ı doğru yorumlamak her şeydir.** Re-distribution görünce
  önemseme; fiyatın **HTF PD array'e ulaşmasını bekle** (4H FVG, 4H OB,
  haftalık FVG). Fiyat hiçbir PD array'e gelmeden de dönebilir, ama bunlar
  genellikle re-accumulation/re-distribution fazlarıdır (devam, dönüş değil).
- **En çok manipüle olunan yer:** re-distribution/re-accumulation'ın
  **2. fazları** — önemli PD array/key level temasından sonra arkada
  bırakılan FVG'nin tap'lenip tekrar stop hunt yapıldığı yer.
- En sık hata: sell curve'deki re-distribution fazlarını yanlış yorumlayıp
  **erken long almak**. Ana bir PD array ve likidite hedefin olmalı — bias
  böyle netleşir.
- Fiyatın re-distribution'da SMT vermesi anlamsızdır, trade alınmaz. Her
  hareketi tradelemek zorunda değiliz; önemli olan modelin/sistemin olması.
- MMXM yapısı göremiyorsan zorlamadan bekle: [[Turtle Soup]], low risk buy,
  2. re-accumulation/re-distribution, original consolidation fazlarını
  yakala. **Markette fırsat bitmez.**

> **Anekdot (stop kuralı):** Net bir stop yerin yoksa, 20 pip TP bekliyorsan
> **en az 10 pip SL** koy; her low'a stop atarak markete manipüle olma.

# Not

Piyasada işlem yapıyorsanız belirli bir hedefiniz olmalı.

Örneğin yüksek zaman dilimi [[Likidite]].

Hedefimizi unutmamalı ve buna göre işlem yapmalıyız. Hedef tek olursa yapacağımız işlem daha risksiz olur.

- Hedef belirlerken önce piyasanın hangi yapıda olduğuna bak
  ([[Likidite]] → Low/High Resistance). Range'den işlem aldıysan
  **internal likiditeler** hedefindir (ör. range high short'unda alttaki
  eşit dipler) → bkz. [[Range Manipülasyonu]].

## 🌿 Bu kolun sayfaları (MMXM / Manipülasyon hub'ı)

> **Hub sayfası** — manipülasyon ve ileri seviye modeller kolu. Merkez:
> [[Genel Bakış]] · Diğer kollar: [[ICT - SMC]] · [[Mentality]]

- **Döngü:** [[Piyasa Manipülasyonu - PO3 (AMD)]] · [[Range Manipülasyonu]]
- **Onay araçları:** [[SMT - Smart Money Tool]] · [[Turtle Soup]]
- **Entry modelleri:** [[Breaker Block]] · [[Strateji - Likidite-FVG Reversal]] · [[A+ Model - Asia Range]] · [[Dreyko News Model]]
- **HTF bias:** [[COT - Commitment of Traders]]
- **Usta notları (Halka 2):** [[Range Anatomisi]] · [[RE-Acc nedir?]]
