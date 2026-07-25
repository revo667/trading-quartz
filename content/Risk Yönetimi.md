---
tags: [kavram, yon-ve-risk]
kaynak: ["Ham Notlar/Risk Yonetimi.md", "Ham Notlar/DAYTRADING.md"]
guncelleme: 2026-07-01
---

# Risk Yönetimi

**Risk yönetimi, daytradingi kumardan ayıran şeydir.**

![[Pasted image 20260701063336.png]]

## Ekin Yüzbaşıoğlu sistemi — kademeli risk küçültme (drawdown recovery)

- **%1** riske girip kaybedersen → riskini **%0.5**'e düşürüyorsun; ta ki
  %1 riskle ettiğin zararı kapatana kadar.
- **%0.5** riske girip kaybedersen → riskini **%0.25**'e düşürüyorsun; ve
  %0.5'te ettiğin zararı toparlayana kadar %0.25 ile devam ediyorsun.

> **Mantık:** Her art arda gelen kayıpta risk yarıya iniyor, bir önceki
> seviyedeki zarar telafi edilene kadar da o düşük risk seviyesinde
> kalınıyor. Ardışık kayıp serilerinde hesabı büyük düşüşlerden koruyan
> klasik bir sermaye koruma yöntemi — riski kayıptan *sonra* düşürüyorsun,
> önceden tahmin etmeye çalışmıyorsun.

## Somut kullanım

Strateji - Likidite-FVG Reversal artık risk yüzdesini net veriyor:
**bakiyenin %1 / %0.5'i** riske edilir (adım 7), **1:2 / 1:3 R:R** hedeflenir
(adım 6) — kademeli risk küçültme sistemiyle birlikte kullanılıyor.

## Bağlantılar

- Hub: [[Mentality]] · Merkez: [[Genel Bakış]]
- İlgili: [[Fon Yönetimi - Prop Firm]]

## Açık noktalar

- Sistemde risk **düşürülüyor** ama kazanç serisinde riskin tekrar
  **artırılacağına** dair bir kural notlarda yok (ör. %1'e geri dönüş ne
  zaman/nasıl oluyor?).
- Pozisyon büyüklüğünün (lot/kontrat) bu yüzdelerden nasıl hesaplandığı
  (hesap bakiyesi × risk% / SL mesafesi gibi) henüz not edilmemiş.
  Bkz. Genel Bakış → Açık Sorular.
