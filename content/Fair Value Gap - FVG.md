---
tags: [kavram, ict-smc]
kaynak: ["Ham Notlar/Fair Value Gap - FVG.md", "Ham Notlar/DAYTRADING.md", "Ham Notlar/Sharp Turn.md"]
guncelleme: 2026-07-01
---

# Fair Value Gap (FVG)

**FVG →** Fiyat dengesizlikleridir (*imbalance*).

- Market sürekli alış (veya satış) emrindeyse fiyat dengesizliği oluşur;
  sonra market gelir bu dengesizliği düzeltmeye çalışır. Biriken
  likiditeyi ve emirleri toplar, ondan sonra ilgili yönde
  (örn. yukarı) açılır.
- **Büyük mumlarla yapılan hareketlere "displacement" denir.**
- **FVG 3 mumla belirlenir.**
- Piyasaya çok likidite girdiğinde ve fiyat tek yönlü ilerleyip
  dengesizleştiğinde, algoritmaya göre fiyat FVG'ye geri çekilir.
- FVG doldurulduğunda o bölgeye **Balance Price Range (BPR)** denir. Market
  bu noktalardan tepki verebilir.
- **FVG, likidite hedefi olarak da kullanılabilir.**

![[Pasted image 20260701063223.png]]

![[Pasted image 20260701063248.png]]

## Sharp Turn

Market bir likidite bölgesini aldığında, o alım sırasında
arkasında bir **FVG** bırakır. Sonrasında market genellikle **hemen
reversal** yapar ve bıraktığı bu FVG'ye geri döner.

- **Kural:** Market likiditeyi aldıktan sonra aynı bölgede durmaz — ters
  yönde bir hareket (sharp turn) beklenmelidir.
- Bu, Likidite alımı ile FVG oluşumunu doğrudan birbirine bağlayan bir
  örüntüdür: likidite alımı → FVG bırakma → keskin dönüş → FVG'ye dönüş.

> Kaynak: Ham Notlar/Sharp Turn.md

## Bağlantı

FVG mantığı, Likidite ve Kill Zones kavramlarının **fiyat grafiği
üzerindeki somut izidir**: dengesizlik oluşur → algoritma fiyatı geri çeker
→ doldurulan bölge (BPR) potansiyel tepki noktası olur. Zincirin tamamı:

```
Seans/zaman → likidite toplama → displacement
  → FVG (dengesizlik) → BPR (dolum) → tepki
```

## Bağlantılar

- Hub: [[ICT - SMC]] · Merkez: [[Genel Bakış]]
- İlgili: [[Likidite]]
- İlgili: [[Inversion FVG - IFVG]]
R