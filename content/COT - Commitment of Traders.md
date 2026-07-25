---
tags: [kavram, temel-analiz, htf-bias]
kaynak: ["Ham Notlar/Dreyko - manipülasyon serisi.pdf"]
guncelleme: 2026-07-09
---

# COT (Commitment of Traders) — Kurumsalın Ayak İzi

**COT**, ABD Emtia Vadeli İşlemler Komisyonu (**CFTC**) tarafından her hafta
yayınlanan rapordur; vadeli işlem (futures) ve opsiyon piyasalarındaki büyük
katılımcıların pozisyonlarını gösterir. Dreyko sisteminin 1. katmanı: HTF bias buradan gelir.

## Rapor mekaniği

- Rapor **CME kapanışı ile birlikte resmi** olarak yayınlanır; Salı günü
  kapanışına kadar olan pozisyonları gösterir, **Cuma günü** yayınlanır.
- Bu yüzden Çarşamba–Perşembe–Cuma günü oluşturulan pozisyonları **1 hafta
  geç** görürüz.
- Kaynaklar: cftc.gov raporları; grafik olarak **barchart.com** (Commitment
  of Traders chart — open interest ile birlikte).
- Piyasadaki yaklaşık **%30-40'lık** kurumsal katılımın şeffaflığını
  amaçlar; piyasa manipülasyonunu önlemek için vardır.

## Trader grupları

![[dreyko-cot-trader-gruplari.png]]

| Grup | Kim | Ne yapar |
|---|---|---|
| **Small Speculators** | Küçük/retail yatırımcı | Genelde yanlış tarafta |
| **Large Speculators (Non-Commercials)** | Hedge fonlar | Çeşitli para yönetimi; doğrudan işlemler, trend takibi |
| **Commercials** | Piyasa işlem yapan kurumsallar | Fark pariteleri, farklı enstrümanlarla hedge; üretici-çiftçi-işletme kategorisi |

## COT – Time ilişkisi (okuma sırası)

![[dreyko-cot-time-iliskisi.png]]

1. Önce **son 26–52 haftada** oluşan likidite/pozisyonlara bak.
2. Sonra **son 6–12–18 ayda** alınan pozisyonlar.
3. En son **son 20–40–60 günde** oluşturulan pozisyonlar.

## Kurumsalların pozisyon oluşturma mantığı

![[dreyko-kurumsal-pozisyon-mantigi.png]]

- **Kurumsallar piyasa düştükçe alır, yükselirken satar** — orderblock'ların
  oluşma sebebi de budur. COT raporunda bullish bir piyasa bekleniyorsa,
  fiyat düştükçe kurumsalların long pozisyonlarını artırdığını görürüz.
- Fiyat swing low'a ulaştığında reversal vererek hedefine gider; bu süreçte
  smart money eklediği pozisyonları kapatır veya elindeki malı satmaya başlar.
- HTF'de aylıkta bir orderblock, FVG, BPR, breaker gibi noktaya
  ulaştığında fiyat reversal verir.
- Kurumsalların yaptığı aslında (legal) bir **martingale**'e benzer:
  kaybettikçe pozisyon büyütüp maliyeti düşürerek kazanana kadar eklemek —
  sınırsız paran varsa fiyatı düşük maliyetli pozisyonlarla hareket
  ettirmek zorundasın.
- **Extreme points:** COT verisinde tarihsel uç noktalara (maksimum/minimum
  pozisyon) bakılır — fiyat extreme'e ulaşınca büyük dönüşler gelir
  (ör. GBP datasında 1985'ten beri oluşan uçlar). 6-12-18 ay ve haftalara
  bu gözle bakılır.

## Yılın çeyrekleri (Quarter Theory) — HTF bias

- Yıl 4 çeyrek: **Q1** Ocak-Şubat-Mart · **Q2** Nisan-Mayıs-Haziran ·
  **Q3** Temmuz-Ağustos-Eylül · **Q4** Ekim-Kasım-Aralık.
- 1 yıl içerisinde fiyatlar yaklaşık **60-120 günlük akümülasyon süreci**
  görülür; çeyrek başlangıçları expansion tetikleyebilir.
- Örnek okuma: yeni çeyreğe net bir flow ile girilirse (Q1 sonu akümülasyon
  → Q2 expansion), çeyrek yapısı HTF bias verir. Akümülasyonla başlayan
  yılda Q1 sonuna kadar net yön beklenmez.

## Bağlantılar

- Hub: [[Market Maker Model]] · Merkez: [[Genel Bakış]]
