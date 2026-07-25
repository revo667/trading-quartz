---
tags: [kavram, ict-smc]
kaynak: ["Ham Notlar/Dreyko Manipulation - PO3.md", "Ham Notlar/Dreyko - manipülasyon serisi.pdf"]
guncelleme: 2026-07-09
---

# Piyasa Manipülasyonu — PO3 (AMD Döngüsü)

> Ham nottaki orijinal başlık **"Dreyko Manipulation"** — Smart Money'nin
> pozisyon oluşturmak için piyasayı nasıl manipüle ettiğini anlatan döngü.

**Smart Money'nin amacı** → düşük maliyetli işlemler kullanarak marketi
hareket ettirmek. Bunun için çeşitli **manipülasyon tekniklerine**
başvurur.
![[Pasted image 20260705144459.png]]
## Market'in 4 Fazı (döngüsel)

![[dreyko-market-cycle-4-faz.png]]

Market sürekli tekrar eden 4 fazdan oluşur:

1. **Consolidation** — Smart Money pozisyon oluşturmak için piyasayı
   **akümüle** eder (biriktirir).
2. **Expansion** — Consolidation fazı bu fazla **terk edilir**.
3. **Retracement** — geri kalan (retail) yatırımcıyı **manipüle etmek**
   için görülen faz.
4. **Reversal** — Retracement'ten sonra tekrar Expansion gelir, fiyat
   hedefine ulaştığında **Reversal** fazı görülür.

```
Consolidation → Expansion → Retracement → Expansion (tekrar) → Reversal
        ↑                                                         │
        └─────────────────────── (döngü tekrarlanır) ─────────────┘
```

> Diyagramda bu döngü, merkezinde **"Price Delivery"** yazan dairesel bir
> akış olarak çiziliyor — Consolidation → Expansion → Retracement →
> Reversal sırasıyla.

### Manipülasyon fazları özeti (PDF'ten)

**3 fazda manipülasyon görülür: Consolidation, Retracement, Reversal** —
ve her manipülasyon sonucu **Expansion** görülür. Markette büyük hareketleri
yakalamak istiyorsak bu 4 fazı anlamalıyız; buradaki manipülasyonlar bizi
expansion fazına götürür.

- HTF'de bullish giderken LTF'de gelen düşüşler aslında **HTF'nin
  retracement'ıdır** — LTF'de manipülasyon görürken HTF'de retracement
  fazındayızdır. (Senin "Not" bölümündeki kuralın PDF'teki teyidi.)
- Reversal fazı **ana manipülasyonumuzdur** — artık orderflow değişmiştir.

### Market neden bu cycle'ları takip eder?

Sınırsız paranın olduğunu ve fiyatı **düşük maliyetli pozisyonlarla**
hareket ettirmek zorunda olduğunu düşün: Smart Money / MM'in amacı budur.
Düşük maliyetle pozisyon oluşturmak için karşı tarafına hedge fonları,
bankalar vs. gibi kurumları alarak pozisyonlarını inşa eder:

- Pozisyonlarını inşa etmek için **accumulation** fazını,
- Belirlenen fiyata ulaşmak için **expansion** fazını,
- Geç kalan trader'ların stoplarını kullanmak/manipüle etmek için
  **retracement** fazını,
- Teslimattaki değişimlere göre ise **reversal** fazını yaratır.

FX tarafında bankalar hedge fonların pozisyonlarını büyük önem taşır
(COT datasından okunur); kripto tarafında
ise likidite sağlayan büyük yatırımcılar reversal için önemlidir.

## Institutional PO3 (Power of Three)

**Classic PO3:** Expansion gerektiren fazlarda PO3'e rastlanır.
Trader olarak fiyatın major cycle'larını anlamamız gerekir — **marketin
continuation ve reversal fazları PO3 üzerine kuruludur.**

**Institutional PO3'ün normal PO3'ten farkı: time faktörünü de ekliyoruz.**
PO3 ile HTF'deki bias'ımızı birleştirip time faktörünü de ekleyerek
kusursuz expansion fazlarını yakalarız (bkz. Kill Zones, ICT Macro).

### The Accumulation Phase
Smart Money'nin **long/short pozisyonlarını akümüle ettiği** (biriktirdiği)
evre. *(Not: "Akümüle" = toplamak/biriktirmek.)*

- Piyasanın **en hacimsiz** olduğu evredir; bu dönemde genelde **open
  interest çok düşük** olur.
- Akümülasyon fazı tamamen kurumsal market olarak geçer — bu fazda topluluk
  markete ilgi göstermez, lakin Smart Money pozisyonlarını akümüle etmeye
  devam eder.
- Genellikle burası, büyük yükseliş/düşüş hareketlerinin başladığı yerdir.

### The Expansion Phase
**Pozisyon doygunluğu sonrası** gelen expansion evresi.

- Fiyatın **akümülasyon fazının bittiğini** gösterir.
- Akümülasyon süreci sonrası önemli bir **haber**, **yeni Quarter (yılın
  çeyreği) başlangıcı** veya intraday'de **session'larda oluşan key level
  temasları** sonrası görülür (Quarter Theory). Price action (FVG, Likidite)
  tetikleyebilir.
- **En fazla hacim bu aşamada gerçekleşir. Fiyat expansion sonrası
  arkasında FVG bırakır.**
- **Güçlü trendlerde fiyat retracement vermez, yerine konsolide olur** —
  yani güçlü bir expansion sırasında geri çekilme yerine dar bir
  consolidation bekleriz. ✅ *PDF teyit etti: bu duruma **compression
  accumulation** denir — güçlü trendde retracement yerine akümülasyona
  girilir; retracement gibi görünen şey aslında bir compression
  (re-accumulation)'dır, SMT'ye bakarak ayrıştırılır.*

### The Retracement Phase (detay — PDF'ten)

- Retracement, bize **high probability setuplar sunan bir fiyat
  hareketidir.**
- Burada akümülasyonda pozisyonlarını inşa eden Smart Money, fiyat
  yükseldikten sonra pozisyonlarını **kısmi kapatarak** ve spot satışı ile
  fiyatı düşürür.
- Amaç geç long/short'ları tedirgin etmek ve onların stoplarını kullanarak
  yeniden pozisyon inşa etmektir.
- Bu aşamada **OTE, FVG, OB, Breaker gibi yapılar kullanılarak WR'si
  yüksek, riski düşük setuplar oluşur** (Order Block, Breaker Block).
- Herhangi bir FVG ya da orderblock'a retracement görülür, sonra tekrar
  expansion.

> Diyagram: önce düşüş dalgaları, sonra dar bir range'de sıkışma
> (consolidation), ardından güçlü bir yukarı expansion.

### The Distribution Phase
**Fiyat hedefe ulaşınca** Smart Money'nin pozisyonlarını **dağıtıma
soktuğu** evre.

### Reversal (detay)

- **Orderflow'un artık yön değiştirdiği** faz.
- Bu aşamada fiyat **iyice güçsüzlük belirtileri** verir ve **son
  manipülasyonu** ile yer değiştirir.
- Trendin tersine işlem alındığı için burada **riskli**, fakat **R:R
  oranı güzel setuplar** oluşur.
- Reversal alanlarında **SMT bizim emniyet kemerimizdir** — ✅ SMT artık
  tanımlı: SMT - Smart Money Tool (korele pariteler arası uyumsuzluk).
- Reversal'da görmek istediğimiz yapı (MMXM):
  original consolidation → re-distribution 1 → re-distribution 2 →
  **reversal** (+ SMT) → re-accumulation 1 → re-accumulation 2 → hedef.
  Burada görmemiz gereken en önemli şey **SMT**; HTF PD array →
  likidite/FVG/OB teması.
- **Market reversal aşamasında arkada bırakılan FVG'lere gelmek, trendin
  devamı için re-accumulation bölgesi olarak kullanılabilir** (senin
  notundaki kural — PDF'te "low risk buy" fazı olarak geçiyor).

### Bullish / Bearish PO3 (mum anatomisi)
Candle Open/High/Low/Close noktalarıyla **Bullish PO3** ve **Bearish PO3**
(mumun gövde/fitil yapısına göre yön ayrımı) — PDF'teki orijinal diyagramlar:

![[dreyko-po3-bullish-mum.png]]
![[dreyko-po3-bearish-mum.png]]

### The Open

- **Bullish Manipulation:** Smart Money'nin **long pozisyonları akümüle
  ettiği** faz.
- **Bearish Manipulation:** **Short pozisyonların akümüle edildiği** faz.

![[dreyko-the-open-bullish.png]]
![[dreyko-the-open-bearish.png]]

**Pratik kural (PDF'ten — daily open çapası):**

- HTF'de fiyatın **bullish** gideceğinden eminsek, **daily open altındaki
  fiyat hareketleri bizim için bullish manipülasyondur → alış fırsatıdır.**
  (Açılış → altına manipülasyon → expansion yukarı.)
- HTF'de fiyatın **bearish** gideceğinden eminsek, **daily open üstündeki
  fiyat hareketleri bearish manipülasyondur → satış fırsatıdır.**
- Retail, fiyatın açılıştan sonra düştüğünü görünce short'lar; aslında
  manipülasyona uğrar — Smart Money bu düşüşü HTF'deki bullish yapıyı
  desteklemek için oluşturur.
- Bu mantık fraktal: haftalık mumun açılışı (pazartesi/salı London-NY'de
  haftanın low'u — Range Manipülasyonu) ve 4 saatlik mumun açılışı
  (4H mum açılışı altındaki hareketler intraday judas — aşağıda) için de
  geçerli.

Expansion fazının open'a göre iki yönü (bullish/bearish):

![[dreyko-expansion-bullish-bearish.png]]

> Diyagramda bu, Smart Money'nin genel pozisyonunun altta
> **Accumulation**, üstte **Distribution** olarak gösterildiği dikey bir
> yapı ile özetleniyor: `Smart Money Accumulation → ... → Smart Money Dist.`

## Judas Swing

**Judas Swing →** Fiyatın belirli bir yöne doğru giderken piyasayı
manipüle etmek ve stopları toplamak için yaptığı **ters harekettir**.

- İsmini İncil'deki Yahuda'nın ihanetinden alır — fiyat "yanlış yöne
  gidiyormuş gibi" görünüp asıl yönüne dönmeden önce yatırımcıyı
  yanıltır.
- Strateji'deki "küçük TF'de reversal
  işaretlerine bak" adımıyla ilişkili — Judas Swing, o küçük TF'deki
  yanıltıcı harekete iyi bir örnek olabilir.

## Seans İçi Likidite Hedefi (In Trade Day)

Bir gün içinde **Asya seansında** akümülasyon hareketi görülüyorsa,
hedef **Asia High** ve **Asia Low** olur:

- Asya seansında bir **Range** oluşur.
- Range'in **iki tarafında da** (üst ve alt) stoplar birikir — bu,
  Londra/NY seanslarının hedefleyebileceği likidite
  havuzlarıdır.

> Bu, Kill Zones sayfasındaki "Asya'da toplanan likiditenin Londra'da
> tersine kullanılması" fikrinin **somut bir örneği**.

## Market Cycle Rules

![[dreyko-market-cycle-6-kural.png]]

- Market her zaman **Consolidation** bölgesini **Expansion** ile terk eder.
- Fiyatın Expansion fazı sonrası **retracement** bekleyebiliriz.
- Fiyatın Expansion fazı sonrası **consolidation** bekleyebiliriz.
- Fiyatın Expansion fazı sonrası **reversal** bekleyebiliriz.
- Fiyat **hiçbir zaman** Consolidation sonrası doğrudan **reversal**
  vermez.
- Fiyat **hiçbir zaman** consolidasyon fazından sonra doğrudan
  **retracement** vermez.

> ✅ *Kesik kural çözüldü:* PDF (s.8) kural listesini **"Fiyat, döngülerde
> 6 basit kurala saygı duyar"** başlığıyla veriyor — toplam **6 kural** var
> ve yukarıdaki liste tam. Ham nottaki "kesik 7. kural" yokmuş; not alırken
> sayfa kesilmiş ama içerik bu 6 kuraldan ibaret. (PDF ayrıca ekliyor:
> bullish'se bullish expansion, bearish'se bearish expansion.)

## Seri konu başlıkları — durum (PDF ile güncellendi)

Ham nottaki "Ana konu başlıkları" listesi, PDF'in (Dreyko manipülasyon
serisi) 6 konu başlığıymış. Güncel durum:

- ~~**SMT nedir?**~~ — ✅ tanımlandı: SMT - Smart Money Tool (korele
  pariteler arası uyumsuzluk; buy/sell programı gösterir).
- ~~**Turtle Soup**~~ — ✅ tanımlandı: Turtle Soup (önceki high/low
  iğnelemesi sonrası reversal setup'ı; SMT ile birlikte kullanılır).
- ~~**Judas Swing**~~ — ✅ tanımlandı, bkz. "Judas Swing" bölümü. PDF ek:
  Judas Swing **HTF'de bias belirlerken kullanılır**; mantığı PO3'e
  (open–low–close) dayanır.
- ~~**FVG bir manipülasyon çeşidi midir?**~~ — ✅ PDF'te örnekle işlendi
  (bitcoin aylık/günlük yapı): sellside likiditesi alınıp market FVG
  oluşturuyor, daha sonra o FVG **iğneleniyor** — aylıktaki FVG'ye dönüş,
  günlükte manipülasyonun kendisi oluyor ("turtle soup manipülasyon").
  Yani FVG'ler manipülasyonun hem izi hem hedefi olarak kullanılıyor;
  3 aylık FVG high'ının iğnelenip 2 kez test edilmesi reversal işareti +
  sonrası expansion. Bkz. Fair Value Gap - FVG.
- **Neden trader MSB/MSS yüzünden manipüle olur?** — 🟡 kısmen: Breaker Block sayfası MSS'in ("breaker block aslında market structure
  break'tir") pratik karşılığını veriyor; ama "neden manipüle olur"
  sorusunun açık cevabı hâlâ yazılmadı. Muhtemel cevap: LTF'deki her yapı
  kırılımı (MSB) gerçek dönüş değildir — HTF retracement'ı içindeki
  manipülasyondur (bkz. "Not" bölümü). Teyit için seri videosuna bakılmalı.
- **Retail Logic Manipulation** — 🔴 PDF'te ayrı bölüm olarak işlenmemiş
  (başlıkta vaat edilmiş ama açık anlatım yok; The Open'daki "retail
  açılış altında düşüş görünce short'lar" anlatısı bunun örneği sayılabilir).
- **Time and Price Manipulation** — 🟡 kısmen: Institutional PO3 "time
  faktörü", ICT Macro ve Kill Zones saatleriyle karşılanıyor;
  ayrı bir bölüm olarak yazılmadı.

## Bağlantılar

- Hub: [[Market Maker Model]] · Merkez: [[Genel Bakış]]
- İlgili: [[SMT - Smart Money Tool]]
- İlgili: [[Range Manipülasyonu]]
