---
tags: [kavram, ict-smc]
kaynak: ["Ham Notlar/Order Block.md"]
guncelleme: 2026-07-02
---

# Order Block (OB)

**Order Block nedir?** → Fiyat önemli bir seviyeye (ör. FVG, Likidite, Session High/Low) geldikten
sonra, o önemli noktayı **alan mum**, Order Block'a dönüşür.

## Oluşum koşulu

- Order Block **rastgele** bir swing high/low'dan oluşmaz — önemli bir
  noktayı (FVG, likidite bölgesi, seans H/L gibi) almış olması gerekir.
  **"Order Block için kesinlikle önemli bir nokta olmalıdır."**
- Order Block genelde **FVG ile birlikte** oluşur
  — ikisi aynı hareketin parçasıdır.

## Geçerlilik / önem kazanma mekaniği

- Order Block oluştuktan sonra, onu takip eden **ters taraflı mumla OB
  arasında bir boşluk** olur.
- Bir sonraki mumun **gövdesi** bu OB'yi **geçtiğinde**, Order Block
  **önemli bir nokta** haline gelir — fiyatın ileride buraya geri
  dönebileceği bir seviye olur.

## Bağlantılar

- Hub: [[ICT - SMC]] · Merkez: [[Genel Bakış]]
- İlgili: [[Fair Value Gap - FVG]]
- İlgili: [[Breaker Block]]
