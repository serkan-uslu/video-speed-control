# Video Speed Controller Extension

Video Speed Controller, kullanıcıların aktif bir web sayfasındaki video oynatma hızını artırma, azaltma ve sıfırlama yeteneği sağlayan bir Chrome uzantısıdır. Bu, eğitim videoları, dersler ve diğer medya türleri için kullanışlı bir araçtır.

## Özellikler

- Video oynatma hızını kolayca artırın veya azaltın.
- Hızı varsayılan değere sıfırlama.
- Videonun bulunduğu sayfalarda otomatik olarak tanıma ve uygun kontrol araçlarını gösterme.

## Başlangıç

### Gereksinimler

Bu uzantıyı çalıştırmak için Chrome tarayıcısına ihtiyacınız var. Uzantı, modern JavaScript ES6 özellikleri kullanır, bu nedenle Chrome'un güncel bir sürümünü kullanmanız önerilir.

### Kurulum

1. Projeyi lokal makinenize klonlayın:
    ```bash
    git clone https://your-repository-url.git
    ```
2. Chrome tarayıcınızda `chrome://extensions/` sayfasına gidin.
3. Sağ üst köşede bulunan "Geliştirici modu" seçeneğini aktifleştirin.
4. "Paketlenmemiş öğe yükle" seçeneğine tıklayın.
5. Uzantının bulunduğu klasörü seçin ve açın.

### Kullanım

Uzantıyı yükledikten sonra, herhangi bir video içeren web sayfasını açın. Video hız kontrol butonları otomatik olarak sayfada belirecektir:

- `+` butonu: Video oynatma hızını artırır.
- `-` butonu: Video oynatma hızını azaltır.
- `Reset` butonu: Video oynatma hızını varsayılan değere (1.0x) sıfırlar.

## Dökümantasyon

Bu projenin ayrıntılı dökümantasyonunu görmek için, oluşturulan JSDoc HTML dosyalarına projenin `./docs/` dizininde ulaşabilirsiniz. Bu dosyalar, projenin kullanımı, fonksiyonları ve yapılandırması hakkında daha fazla bilgi sağlar.

## Geliştirme

### Yapılandırma

Bu proje, JavaScript ve HTML kullanılarak geliştirilmiştir. Kodun anlaşılabilirliğini artırmak için JSDoc yorumları kullanılmıştır.

### Yapı

Projenin ana dosyaları şunlardır:

- `popup.js`: Video hız kontrollerini yönetir.
- `popup.html`: Kullanıcı arayüzünü tanımlar.
- `README.md`: Proje dokümantasyonu.

## Katkıda Bulunma

Projeye katkıda bulunmak istiyorsanız, lütfen öncelikle değişiklik yapmak istediğiniz konuyu tartışmak üzere bir sorun açın. Pull request'lerinizden önce lütfen bir test yapın.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır - daha fazla detay için [LICENSE](LICENSE) dosyasına bakın.
