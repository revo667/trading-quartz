---
tags: [egitim, ict-smc, halka-2]
kaynak: ["Ham Notlar/EkinYZBB Ileri Seviye ICT Egitimi.md"]
video: "https://www.youtube.com/playlist?list=PLI6WlRvF6Pu-KhvaGNDzkqelBFpJhDtKo"
guncelleme: 2026-07-18
---

# 🎓 Ekin YZB — İleri Seviye ICT Eğitimi

> **Halka 2 — eğitim yön belgesi.** ICT Basics bilenler için ileri seviye
> Inner Circle Trader eğitimi ([kaynak playlist](https://www.youtube.com/playlist?list=PLI6WlRvF6Pu-KhvaGNDzkqelBFpJhDtKo);
> ham not: `Ham Notlar/EkinYZBB Ileri Seviye ICT Egitimi.md`).
> **Canlı belge** — seri ilerledikçe bölümler eklenecek. Çerçeve:
> [[ICT - SMC]] · [[Market Maker Model]].

## Müfredat (konu başlıkları)

- [x] **Open High–Low Close PO3** *(aşağıda)*
- [x] **Failure Swing · Low Resistance Liquidity** *(aşağıda)*
- [x] **Daily Swing Highs–Lows · Internal/External Liquidity** *(aşağıda)*
- [ ] Market Maker nasıl işlem alır · Market Cycle
- [ ] **Mitigation Block** *(todo'daki eksik konseptlerden — bu seri kapatacak)*
- [ ] Breakaway Gap · BPR
- [ ] Zaman dilimi · MMXM nasıl tradelenir
- [ ] Top Down Analiz · Kısa–Orta–Uzun vadeli perspektif

---

## 1) Power of 3 — OHLC / OLHC

Yüksek zaman diliminde yorumlamak ve anlamak çok önemlidir: **High Time
Frame üzerinde anlatılan hikaye, Low Time Frame üzerinde gerçekleşir.**

> **True Day Open = 00.00** — NYAM 9.30'da açılmasına rağmen Daily mum
> 00.00'da başlar; Asya → London → NY killzone'larını kapsayan mumdur.

**Bullish candle (OLHC) ve bullish reversal:**

![[Pasted image 20260718200450.png]]

**Bearish candle (OHLC):**

![[Pasted image 20260718200524.png]]

**Consolidation mumu:**

![[Pasted image 20260718200712.png]]

Kurallar:

- PO3 OHLC/OLHC modeli **HTF'de bias belirlemek** ve grafiği daha rahat
  yorumlamak için kullanılır.
- **Wick'ler günün Daily High/Low'unu, body günün asıl hareketini
  belirler.** Daily H/L wick'leri genellikle **London Manipulation →
  NY.AM Expansion** fazlarında oluşur.
- HTF'deki önemli noktaları (FVG, Likidite, IFVG) PO3 mum
  kombinasyonlarıyla birleştirmek daha net görüş sağlar — Accumulation /
  Manipulation / Distribution kısımları böyle rahat okunur.

> ✍️ **Kendi yorumum (teyit bekliyor):** Consolidation mumları
> *Accumulation* fazını temsil ederken, OHLC/OLHC mumlarının wick'leri
> *Manipulation*, body ise *Distribution* fazını temsil eder.

## 2) Failure Swing & Low Resistance Liquidity

- Market belirli bir alana gidene kadar arkasında **alınmamış ve geri
  alınmak üzere bırakılan Low Resistance Liquidity** bırakır.
- **Key level'a ulaşıldığında** son bırakılan low alınır; rejection yenip
  reversal geldiğinde bu, **marketin yönünün değiştiğini** gösterir.
- Reversal fazından sonra price action sırasında arkada bırakılan low'lar
  **High Resistance Low** olarak adlandırılır (artık kolay kırılmazlar).
- Bu aşamalar **MMXM modellerinde kullanılan mikro hareketlerdir** —
  [[Market Maker Model]] curve'ünün yapı taşları.

**MMBM örneği — failure swing'ler ve high resistance low:**

![[Pasted image 20260718204232.png]]

**MMSM örneği:**

![[Pasted image 20260718204344.png]]

**Gerçek grafikte: DOL'e giden yolda bırakılan LRL, dipte high resistance
liquidity + daily FVG teması, ardından reversal:**

![[Pasted image 20260718204625.png]]

**Monthly FVG ile premium/discount bölgeleri (üst kırmızı = premium,
alt yeşil = discount):**

![[Pasted image 20260718204658.png]]

## 3) Daily Swing High/Low

- HTF üzerinde önemli reversallar **Swing High/Swing Low bırakır.**
- Bullish isek **swing low** oluşmasını isteriz; bearish isek tersi —
  **swing high** bekleriz.
- Daily Swing High-Low aşaması **3-4 günde** oluşur.
- HTF swing'leri, trade ederken **low risk aşamasında yüksek konfirme**
  sağlar.

## 4) Internal / External Liquidity + Zaman Dilimi Eşleşmesi

![[Pasted image 20260720174245.png]]

| Seviye | Bakılacak grafik |
|---|---|
| **Aylık** seviyeler | Daily grafik |
| **Haftalık** seviyeler | 4H |
| **Günlük** seviyeler | 1H |

- External/Internal likiditeler **dönüş noktası** olarak belirlenebilir.
- Markette genellikle 2 yapı vardır: fiyat ya **Draw on Liquidity'lere**
  doğru ilerler, ya da **imbalance'ları (FVG) doldurur.**

## Bağlantılar

- Çerçeve: [[ICT - SMC]] · [[Market Maker Model]] · Merkez: [[Genel Bakış]]
