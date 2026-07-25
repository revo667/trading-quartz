---
tags: [genel-bakis]
kaynak: ["Ham Notlar/DAYTRADING.md"]
guncelleme: 2026-07-01
---

# Genel Bakış — Trading Wiki

Bu wiki, bir trading bootcamp'inden alınan el yazısı notların dijitalleştirilip
düzenlenmiş halidir. Orijinal ham notlar `Ham Notlar/` klasöründe değişmeden
duruyor (bkz. [[Trading Beyni]] → Ham Notlar bölümü); burası onların üzerine
kurulan, birbirine bağlanmış, yaşayan özetidir.

## 🌳 Üç kol (hub yapısı — 2026-07-17)

Trading beyni üç ana kola ayrılır; her kavram sayfası kendi hub'ına
bağlıdır (kullanıcının çizdiği şema):

```
                    TRADING (bu sayfa)
          ┌───────────────┼───────────────┐
     [[ICT - SMC]]  [[Market Maker Model]]  [[Mentality]]
      (temeller)     (MMXM/manipülasyon)    (psikoloji/risk)
```

- **[[ICT - SMC]]** → likidite, FVG/IFVG/OB, PD Array, Premium-Discount,
  Kill Zones/Macro, piyasa temelleri
- **[[Market Maker Model]]** → PO3/AMD, manipülasyon modelleri, SMT,
  Turtle Soup, Breaker, strateji ve news/asia modelleri
- **[[Mentality]]** → risk & fon yönetimi, kişisel kurallar, felsefe

Öğrenme sırası: piyasa mekaniği → kurumsal davranış teorisi → bu teorinin
grafikteki izi → sistem ve disiplin. Tek dosyalık özet:
*revo667's Trading Mindset* (katalogdan).

## Açık Sorular / Eksikler

Wiki büyüdükçe bu bölüm güncellenecek (bkz. `CLAUDE.md` → Lint iş akışı).
Şu an notlarda **olmayan** ama ICT/SMC pratiğinde kritik olan noktalar:

1. **Somut giriş/çıkış kuralları** — ✅ Strateji - Likidite-FVG Reversal
   ile karşılandı: üst TF likidite tepkisi → küçük TF reversal (Sharp
   Turn/IFVG) → MSS → FVG/IFVG'den giriş → stop/hedef/risk kuralları.
2. **Killzone saat aralıkları** — ✅ Dreyko PDF ile kapandı: Kill Zones
   sayfasına ET bazlı somut saat tablosu eklendi (Asia 20.00-00.00, macrolar,
   9.30 vb.); ICT Macro sayfası açıldı.
3. **Pozisyon büyüklüğü hesaplama** — Risk Yönetimi'ndeki %1/%0.5/%0.25
   risk yüzdelerinin lot/kontrat büyüklüğüne nasıl çevrildiği yok.
   *(Hâlâ açık — formül: bakiye × risk% ÷ SL mesafesi × point value.)*
4. **Risk artırma kuralı eksik** — 🟡 kısmen: Fon Yönetimi - Prop Firm
   faz bazlı risk tavanları verdi (Phase 1: %2-3, Funded: %1/%0.5); ama
   kayıp sonrası küçültülen riskin kazanç serisinde ne zaman tavana geri
   döneceği hâlâ tanımsız.
5. **R:R oranı / SL-TP mesafesi** — ✅ Strateji - Likidite-FVG Reversal
   ile karşılandı: stop son swing/FVG başlangıç mumunun gövdesine, hedef
   1:2 / 1:3 R:R. *(Not: bu kural tek bir kaynağa dayanıyor, farklı
   setup'larda değişip değişmediği netleşmedi.)*
6. **Trade journal / backtest** — ✅ journal katmanı açıldı
   (`Trading/Journal/`, bkz. Journal Log). 2 kapalı işlem var. Backtest
   / geriye dönük test verisi hâlâ eksik; win rate & beklenti için daha
   fazla kapalı işlem birikmesi gerekiyor.
7. **Teknik-Temel Analiz kesişimi** — ✅ Dreyko PDF ile kapandı:
   Dreyko News Model (NFP/CPI takvimi × killzone zamanlaması ×
   pattern recognition).
8. **MSS (Market Structure Shift)** — 🟡 büyük ölçüde kapandı:
   Breaker Block sayfası MSS'in pratik karşılığını verdi ("breaker
   block aslında market structure break'tir" + entry tipleri). Açık kalan:
   "neden trader MSB yüzünden manipüle olur?" anlatısı.
9. **PO3 sayfasındaki diğer açık başlıklar** — ✅/🟡 Dreyko PDF ile büyük
   ölçüde kapandı: SMT ✅ (SMT - Smart Money Tool), Turtle Soup ✅
   (Turtle Soup), Judas Swing ✅, FVG-manipülasyon ilişkisi ✅
   (örneklerle). Hâlâ açık: **Retail Logic Manipulation** (PDF'te de ayrı
   bölüm yok), Time & Price Manipulation (kısmen — ICT Macro).
10. **Market Cycle Rules eksik/kesik** — ✅ çözüldü: PDF kuralları "6 basit
    kural" olarak veriyor; kesik sanılan 7. madde yokmuş (liste tam).
11. **CISD tanımsız** *(yeni)* — Notes/Intraday Notes'ta "daima Change in
    State of Delivery bekle" kuralı var ve PDF işlem yönetiminde CISD'yi
    konfirmasyon olarak kullanıyor, ama CISD'nin kendisi (tanım + tespit)
    henüz bir sayfada işlenmedi. Aday: `Trading/CISD.md`.
12. **OTE (Optimal Trade Entry) tanımsız** *(yeni)* — PDF retracement
    setuplarında OTE'yi sayıyor (Piyasa Manipülasyonu - PO3 (AMD)),
    Premium - Discount fib mantığıyla ilişkili ama ayrı tanımı yok.

Bu maddeler, bir sonraki ham not/ekran görüntüsü eklendiğinde veya kullanıcı
bootcamp'ten yeni bilgi aldığında öncelikli olarak doldurulmalı.

## Sayfalar

Tüm sayfaların kataloğu için → [[Trading Beyni]]
