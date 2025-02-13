import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';



@Component({
    selector: 'app-hakkimizda',
    standalone: true,
    imports: [ RouterOutlet],
    template: `
      <div class="bolum2">
      <div>
        <h1>KARDİYO</h1>
        <h5>Nabzını yükselten ve solunumunu hızlandıran kardiyo antrenmanları yüksek derece yağ yakımı sağlarken, kalbini ve dolaşım sistemini güçlendirir.

        Aqua Dance’ten Cardio Kickbox’a, Step & Aerobics derslerinden Insanity Workout’a uzanan geniş bir yelpaze içinde senin tarzına uygun bir kardiyo grup dersi mutlaka bulacaksın. Yağ yakarken kondisyonunu artırabilir ya da sadece çok eğlenceli bir zaman geçirmek için derse katılabilirsin. MAC+ uygulamamızdan istediğin derste yerini ayır ve keyfini çıkar!

        </h5>
        <button class="btn"
        routerLink="kurslar">KURSA KAYDOL</button>
        
      </div>
      <div class="resim1">
        <img src="assets/public/fotolar/15.png" width="700px" height="450px" />
      </div>
    </div>
    <div class="bolum2">
    <div class="resim1">
        <img src="assets/public/fotolar/14.png" width="700px" height="450px" />
      </div>
      <div>
        <h1>YOGA</h1>
        <h5>
        Hindistan’da doğan ve Sanskritçe ‘bütünleşme’ anlamına gelen Yoga, bedensel faydalarının yanı sıra zihni dinlendirmesi ve ruhu beslemesiyle biliniyor. Çeşitli kas gruplarını aynı anda çalıştıran duruşları doğru nefes alarak uygulama ilkeleri üzerine kurulu Yoga, her yaş ve her seviyede rahatlıkla yapılabilir. Farklı tarzlarıyla beden, zihin ve ruhunun ihtiyacına uygun dersi kulübünde bulabilirsin. Yoga deneyimi ile hayata yeni bir bakış açısı yakala.

        </h5>
        <button class="btn"
        routerLink="kurslar">KURSA KAYDOL</button>
      </div>
      
    </div>
    <div class="bolum2">
      <div>
        <h1>SPİNNİNG</h1>
        <h5>Ritmin pedallarla buluştuğu bu grup dersinde müziği yönettiğini hissedeceksin! Zamanın nasıl geçtiğini, dersin nasıl bittiğini anlayamadan hem yağ yakımı hem kondisyon artışı hedeflerine ulaşacaksın. İster yeni başlayanlar için 30 dakika, ister profesyonel bir bisiklet sporcusu gibi antrenman yapmak isteyenler için 90 dakika… farklı seviyelere hitap eden derslerdeki herkesin, yüzünde geniş bir gülümsemeyle ayrıldığı bu pedallı kardiyo eğlencesinde sana uygun bir grup mutlaka var.
        </h5>
        <button class="btn"
        routerLink="kurslar">KURSA KAYDOL</button>
        
      </div>
      <div class="resim1">
        <img src="assets/public/fotolar/13 (1).png" width="700px" height="450px" />
      </div>
    </div>
    
      
    
     `,
    
    styles: [`.bolum2 {
        display: flex;
        align-items: center; /* İki div'in dikey olarak ortalanmasını sağlar */
        justify-content: space-between; /* Aralarındaki boşluğu dengeler */
        margin:20px 0 ;
        }
      
        .resim1 img {
          width: 700px;
          height: 450px;
        }
      
        .bolum2 h2 {
          margin: 0;
          padding-left: 20px; /* Görsel ile başlık arasındaki boşluğu ayarlayabilirsiniz */
        }
        .btn {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 25px;
    color: #f6b93b;
    letter-spacing: 3px;
    padding: 10px 20px;
    border: 3px solid #f6b93b;
    position: relative;
    transition: all 0.5s;
    overflow: hidden;
    margin-top: 30px;
}

  .btn::before, 
  .btn::after,
  span::before,

  .btn::before {
      top: 0;
      left: -25%;
  }

  .btn:hover::before {
      top: 0;
      left: 0;
  }

  .btn::after {
      top: -100%;
      left: 25%;
  }

  .btn:hover::after {
      top: 0;
      left: 25%;
  }

  .btn span::before {
      top: 100%;
      right: 25%;
  }

  .btn:hover span::before {
      top: 0%;
      right: 25%;
  }

  .btn span::after {
      top: 0;
      right: -25%;
  }

  .btn:hover span::after {
      top: 0%;
      right: 0%;
  }

  .btn:hover {
      color: black;
  }`]
})

export class HakkimizdaComponent{

}