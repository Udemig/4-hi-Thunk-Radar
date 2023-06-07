# Kütüphaneler

- react-leaflet
- react-redux
- @reduxjs/toolkit
- axios

# Kaynaklar

- API: https://rapidapi.com/apidojo/api/flight-radar1

- Bodrum:
- - lat: 37.036472
- - lon: 27.425467

- Ardahan:
- - lat: 41.112950
- - lon: 42.702280

# Yapılacaklar

- liste görünümü için ``ListView.jsx` oluştur
- harita görünümü için ``MapView.jsx` oluştur
- `App.jsx` içerisinde bu iki görünüm arasında geçiş sağla
- `MapView.jsx` içerisine harita kurlumunu yap
- redux toolkit kurulumunu yap
- Uygulama ekrana geldiği anda Api'den Türkiye Üzerinde Uçan Uçak verisini çek ve store'a aktar

- bize dizi içerisinde dizi geliyor
- - uçaklar dizi içerisindeki dizilerin enlem boylam id kuyruk kodlarını al ve bunlarla birer obje oluştur ve yeni diziye aktarak

- - Elimde Olan: [
    [0:id,1:kuyruk,2:enlem,3:boylam....],
    [0:id,1:kuyruk,2:enlem,3:boylam....],
    [0:id,1:kuyruk,2:enlem,3:boylam....],
    ]
- - Elde Etmek istediğim : [
    {
    id:123213
    code: asd145
    lat: 123.578
    lon: 123.2362
    },
    ]

- uçuşlar dizisindeki her bir uçak objesi için ekran bir tane imleç (marker) bas
- - markera position olrak uçağın lat be lng değerlerini ver

- `SideDetail.jsx` e gelen id parametresini al ve id her değiştiğinde o id ile alakalı uçak verisini çek
- - ve gelen veriyi listele

- `ListView.jsx` 'de store a abone ve uçuş verilini tablo şeklinde listele
