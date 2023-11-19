- Mongo db baglantisini DbService icinde verdigimiz icin baglanti
  dbservice tanimlanmasi gerceklestikten sonra oluyor.
  eger baglanti kurulmadan herhangi bir sekilde istek atarsak, error firlatiyor.
  baglanti kurulumunu `listening on port` kismi icinde yapmam gerekli

• problem kodun neresinde bulundugundan degil. direkt olarak mongodb npm paketinden kaynakli. bundan dolayi `mongoose` paketi ile bir deneme yapmak cok mantikli olacak.
