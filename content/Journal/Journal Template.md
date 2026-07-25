---
tags: [journal, trade, ŞABLON]
tarih: YYYY-MM-DD
yon: long | short
setup: 
durum: planlandi | acik | kapandi
enstruman: 
hesap: FTMO Phase 1
session: asia | london(gözlem!) | nyam | lunch | nypm
po3_faz: consolidation | expansion | retracement | reversal
plan_disi: hayır | evet
a_plus: evet | hayır
rr_planlanan: 
guncelleme: YYYY-MM-DD
---

# YYYY-MM-DD · Yön · Enstrüman

> **Şablon** — Wui'nin "journal bir duygu defteri değil, **karar veri
> tabanıdır**" ilkesine göre ([[Wui Journal Floods]]). Kopyala,
> doldur; boş bırakılan soru = ölçülmemiş davranış. *"Data egoyu keser."*

## 1️⃣ İşlem Öncesi — Kurgu *(entry'den ÖNCE doldur)*

| Wui sorusu                                               | Cevap        |
| -------------------------------------------------------- | ------------ |
| Setup neydi? (model + PD array)                          |              |
| Hangi session'da alındı?                                 |              |
| Trade öncesi plan var mıydı? (yazılı senaryo)            | evet / hayır |
| HTF bias + gerekçesi (tek cümle)                         |              |
| PO3 fazı                                                 |              |
| SMT teyidi (hangi pair, ne gösterdi?)                    |              |
| Invalidation (beni ne haksız çıkarır?)                   |              |
| İşlem öncesi duygusal durum (sakin/aceleci/FOMO/intikam) |              |
| **Bu işlem A+ mı, yoksa sıkıldığım için mi?**            |              |

## 2️⃣ Parametreler *(bot çıktısı: `python3 bot.py kontrol`)*

| Alan                                      | Değer |
| ----------------------------------------- | ----- |
| Entry                                     |       |
| Stop Loss (mesafe)                        |       |
| Take Profit (hedef PD array/likidite)     |       |
| R:R (planlanan)                           |       |
| Risk % ($)                                |       |
| Pozisyon büyüklüğü                        |       |
| Kısmi kâr planı (3R'de %70 / 0.5'te news) |       |

## 3️⃣ İşlem Sırasında — Yönetim *(kapanışta işaretle)*

- [ ] Entry plana uygun muydu?
- [ ] Stop önceden belliydi ve **hiç oynatılmadı** mı?
- [ ] Take profit mantıklı mıydı (plana göre)?
- [ ] İşlem sırasında plana müdahale edildi mi? (erken kısmi, stop
      genişletme, ekleme) — edildiyse **ne ve neden:**
- İşlem sırasında baskın duygu:

## 4️⃣ Sonuç

- **Çıkış fiyatı / zamanı:**
- **Net P/L ($ ve R):**
- **Plana uygunluk (1-5):** — *5 = plan harfiyen; sonuçtan bağımsız
  puanla! Kazanan plansız işlem = düşük puan.*

## 5️⃣ Davranış Verisi *(Wui metrikleri — istatistik için)*

| Metrik                                            | Değer                    |
| ------------------------------------------------- | ------------------------ |
| Plan dışı işlem miydi?                            | evet / hayır             |
| Stop sonrası 1 saat içinde mi açıldı?             | evet / hayır / ilk işlem |
| Session'ın ilk 30 dk'sında impulsive entry mi?    | evet / hayır             |
| Plana müdahale sayısı                             | 0 / 1 / 2+               |
| Kârda erken mi çıkıldı? (plan R vs gerçekleşen R) |                          |
| Risk plana uygun muydu?                           | evet / aşıldı            |

## 6️⃣ Post-Mortem — Hata / Ders

- **Doğru karar mıydı?** (sonuçtan bağımsız — iyi karar kaybettirebilir)
- **Hata varsa hangisi:** overtrading / revenge / strategy hopping /
  erken çıkış / stop oynatma / teyitsiz giriş / diğer:
- **Bu hata hangi koşulda çıktı?** (session, duygu, drawdown, haber...)
- **Tekrar eden bir hata mı?** (journal'da kaçıncı kez?)
- **Tek cümlelik ders:**

## Bağlantılar

- [[Journal Log]] · Seans analizi: [[YYYY-MM-DD]] · Kurallar:
  [[revo667's Trading Mindset#Hızlı kural kartı|Hızlı kural kartı]]
