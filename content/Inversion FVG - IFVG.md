---
tags: [kavram, ict-smc]
kaynak: ["Ham Notlar/Inversion FVG - IFVG.md", "Ham Notlar/Dreyko - manipülasyon serisi.pdf"]
guncelleme: 2026-07-09
---

# Inversion FVG (IFVG)

**IFVG nedir?** → Bir FVG'ye saygı duyulmayıp,
onu görmezden gelip **kapatan mum**, artık **destek/direnç görevi** gören
bir yapıya dönüşür — buna **Inversion FVG (IFVG)** denir.

## Oluşum koşulu

- Bir mumun **gövdesi**, FVG'nin **middle point'ini (orta noktasını)**
  geçtiği zaman, o FVG **IFVG**'ye dönüşür.
- **IFVG işleminden önce likiditenin alınmış olması gerekir** — yani IFVG
  tek başına yeterli değil, öncesinde bir likidite alımı
  şart.

## Ne anlama gelir / nasıl kullanılır

- IFVG oluşumu, **işlemin aynı yönde devam edeceğinin** bir göstergesidir.
- IFVG'den sonra fiyatın önce **FVG'nin orta noktasına (middle point)**
  geri çekilip, sonra asıl yönünde **devam etmesi** beklenir.
- İşlem, piyasa emriyle **IFVG görüldükten sonra middle point'ten**
  açılabilir.

## Diyagram (örnek yapı)

Fiyat önce aşağı gidip **alt likiditeyi** alır → bu sırada küçük bir FVG
oluşur → bu FVG'ye saygı duyulmadan kapatılır (**IFVG**'ye dönüşür) →
fiyat yukarı döner ve **üst likiditeye** doğru güçlü şekilde devam eder.

```
alt likidite alımı → küçük FVG oluşur → FVG saygısız kapanır
  → IFVG → orta noktaya geri çekilme → asıl yönde devam → üst likidite
```

## En kullanışlı IFVG stratejisi (Dreyko PDF'ten)

Setup bileşenleri (GBPUSD 1H + DXY günlük örneği):

1. **Bağlam:** konsolidasyon + gap, net bir düşüş ve buyside likiditesine
   doğru bir yükseliş gözlemleniyor; ters korele pair'de (DXY) **volume
   imbalance + daily FVG** var (SMT mantığı).
2. Buyside neden önemli: fiyat her ne kadar low resistance likiditeler
   bıraksa da DXY'de bullish bir flow varsa GBP'de short bakılır.
3. **Tetik:** fiyat 3 güçlü mum atarak buyside likiditesini temizliyor ve
   daha sonra **yavaş yavaş düşerek** hareket gözlemliyoruz; bu hareket
   4 saatlik FVG'nin orta noktasına denk geliyorsa **IFVG dönüşümü** işlem
   sinyalidir.
4. **İkinci konfirmasyon:** fiyatın bıraktığı sellside likiditesini
   temizlediğini görmek — bunlar bullish/bearish emareleridir.
5. DXY tarafında fiyat daily FVG'nin orta noktasını vermesi için FVG'yi
   **wick'leri atarak** çiziyoruz (iğneler değil gövdeler esas —
   Premium - Discount kuralıyla aynı).

Ayrıca Breaker Block ile iç içe kullanım: 4H OB içindeki IFVG'nin orta
noktasına temas, 9.30 sonrası manipülasyonun bittiği yer olabilir.

## Bağlantılar

- Hub: [[ICT - SMC]] · Merkez: [[Genel Bakış]]
- İlgili: [[Fair Value Gap - FVG]]
- İlgili: [[Breaker Block]]
