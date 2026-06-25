# My Library Project (Kişisel Kitaplığım)

Bu proje; kullanıcıların okudukları veya kütüphanelerine eklemek istedikleri kitapları yazar isimleriyle birlikte kaydedebileceği, listeleyebileceği ve arama yapabileceği dinamik bir web uygulamasıdır. Tarayıcı hafızasını kullandığı için sayfa yenilense bile veriler kaybolmaz.

##  Canlı Önizleme
Uygulamayı canlıda test etmek için [buraya tıklayabilirsiniz](https://oguzhankinali.github.io/my-library-project/).

##  Özellikler
* **Kitap Ekleme ve Doğrulama (Validation):** Kitap adı veya yazar ismi boş bırakıldığında Bootstrap alert bileşenleri ile dinamik uyarı mesajları gösterilir.
* **Kalıcı Veri Depolama (LocalStorage):** Eklenen tüm kitaplar tarayıcının yerel depolama alanına (`localStorage`) kaydedilir; sayfa kapatılsa dahi veriler korunur.
* **Anlık Arama / Filtreleme:** Arama kutusuna yazılan harfe göre listedeki kitaplar arasında büyük/küçük harf duyarlılığı olmadan (case-insensitive) anlık eşleşme ve filtreleme yapılır.
* **Tekli ve Toplu Silme:** Listeden istenen kitap tek tek silinebilir veya "Tüm Kitapları Temizle" butonuyla hem arayüzden hem de `localStorage` üzerinden tek hamlede temizlenebilir.

##  Kullanılan Teknolojiler
* **HTML5:** Yapısal ve semantik form bileşenleri.
* **Bootstrap 5.3.3:** Responsive (mobil uyumlu) kart yapıları, form tasarımları ve dinamik uyarı (alert) sınıfları.
* **Font Awesome 4.7.0:** Silme işlemi için kullanılan görsel ikonlar.
* **JavaScript (ES6+):** DOM manipülasyonu, gelişmiş event listener (olay dinleyici) yönetimi ve LocalStorage entegrasyonu.

##  Yerel Kurulum

Projeyi kendi bilgisayarınızda çalıştırmak isterseniz:

1. Projeyi bilgisayarınıza klonlayın:
   ```bash
   git clone [https://github.com/oguzhankinali/my-library-project.git](https://github.com/oguzhankinali/my-library-project.git)
