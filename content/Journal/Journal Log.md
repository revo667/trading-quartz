---
tags: [journal, log]
guncelleme: 2026-07-02
---

# 📓 Journal Log — İşlem Kayıtları

> Her açılan işlem `Trading/Journal/YYYY-MM-DD <yön> <setup>.md` olarak kaydedilir.
> Bu tablo tüm işlemlerin özet defteridir. Şema: vault kökü `CLAUDE.md`.
> **Yeni kayıtlar [[Journal Template]] kopyalanarak açılır** (Wui
> data-driven şablonu, 2026-07-24) — 6 bölüm: kurgu → parametreler →
> yönetim → sonuç → davranış verisi → post-mortem.

## İşlemler

| Tarih      | Yön  | Setup                    | Hesap | R:R (planlanan) | Durum      | Sonuç                | Not                        |
| ---------- | ---- | ------------------------ | ----- | --------------- | ---------- | -------------------- | -------------------------- |
| 2026-07-01 | Long | FVG mitigation           | demo  | ~1:1            | 🟢 kapandı | +300,80 USD (~0,18R) | [[2026-07-01 Long FVG]]    |
| 2026-07-02 | Long | NASDAQ (setup girilmedi) | demo  | —               | 🟢 kapandı | +433,80 USD          | [[2026-07-02 Long NASDAQ]] |
| 2026-07-09 | Short ×4 | XAUUSD sell curve (MMSM, piramit) | demo | ? (SL kaydı yok) | 🟢 kapandı | +126,63 USD brüt | [[journal-2026-07-09-xauusd]] |
| 2026-07-09 | Short | NQ breaker retest + SMT | demo | 1.61 ⚠ | 🔵 açık | risk −167$ / hedef +270$ | [[2026-07-09 Short NQ]] |

> ℹ️ Mevcut işlemler **demo hesap** (kullanıcı düzeltmesi, 2026-07-09).
> Demo dönemi = plan disiplini antrenmanı; funded'a geçişte `hesap:` alanı
> `funded` olarak işaretlenecek ve istatistikler ayrı tutulacak.

## Seans Öncesi Analizler

Yeni tür: işlem kaydı değil, **plan/analiz** kaydı (kurgula aşaması).

| Tarih | Kapsam | Not |
|---|---|---|
| 2026-07-09 | NASDAQ · XAUUSD · BTCUSD (NY Midnight/Asia) | [[2026-07-09]] — MMBM tespitleri, if/then senaryoları; işlem gerçekleşirse ayrı kayıt açılacak |

## İstatistik (kapanan işlemler)
- Toplam işlem: 3 kapalı / 0 açık (07-09'daki 4 giriş tek işlem sayıldı)
- Kazanma oranı: %100 (3/3) — *az veri, henüz istatistiksel anlam taşımıyor*
- Ortalama R: hesaplanamıyor — 3 işlemin 2'sinde SL kaydı yok
- Journal'lanan P/L: **+861,23 USD**

> ⚠️ **Tutarsızlık:** [[journal-2026-07-09-xauusd]] hesap durumu bakiyeyi
> **$9.504,12** (dönem K/Z **−444,16**) gösteriyor — yani journal'a
> girilmemiş **kayıp işlemler var**. Journal sadece kazançları içerirse
> istatistikler yalan söyler; kayıp işlemler geriye dönük eklenmeli.

> ⚠️ Notlar:
> - [[2026-07-01 Long FVG]]: TP planlanan +1.733,60 idi, sadece +300,80'de
>   (~%17) manuel kapatıldı — planlanan R:R'nin çok altında.
> - [[2026-07-02 Long NASDAQ]]: giriş setup/gerekçesi henüz kaydedilmedi,
>   SL/TP planı yok — R hesaplanamıyor.
> - Her iki işlemde de **post-mortem ("Hata / Ders") bölümü** doldurulmayı
>   bekliyor — bu, journal'ın en değerli kısmı olacak.
