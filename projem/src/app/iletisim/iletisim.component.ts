import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <div class="iletisim1">
    <ul>
      <li>
        <img
          class="buyukresim"
          src="./assets/public/fotolar/1.jpg"
          width="700px"
          height="450px"
          
        />
      </li>
      <li>
        <div class="iletisim2">
          <img 
            
            src="./assets/public/fotolar/4.jpg"
            width="50px"
            height="50px"
          />
          <p class="yanina" [align]="left">--Melisa.gym</p>
        </div>
        <div class="iletisim3">
          <img 
            
            src="./assets/public/fotolar/7.jpg"
            width="50px"
            height="50px"
          />
          <p class="yanina1">--0 555 55 55</p>
        </div>
        <div class="iletisim4">
          <img 
            
            src="./assets/public/fotolar/5.jpg"
            width="50px"
            height="50px"
          />
          <p class="yanina2" >--melisa.gymcenter&#64;gmail.com</p>
        </div>
      </li>
    </ul>
  </div>`,
  styles: [`
    .iletisim1 {
    ul {
        overflow: hidden;
    }
    ul li {
        float: left;
    }
    ul li img {
        border: 2px solid #000;
    }
    .clear {
        clear: both;
    }

    .iletisim2, .iletisim3, .iletisim4 {
        display: flex; /* Yazıları ve img öğelerini aynı satıra yerleştirir /
        align-items: center; / Yazıların img ile aynı hizaya gelmesini sağlar /
        margin-top: 0;
        padding: 0;
    }

    .yanina, .yanina1, .yanina2 {
        margin-left: 5px; / img ile yazı arasında çok az bir boşluk bırakır */
        padding: 0;
    }

    .buyukresim {
        margin-right: 10px;
    }
}
    `,
  ],
})
export class IletisimComponent {
left: any;
right: any;
}
