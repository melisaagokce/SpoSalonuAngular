import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'adres',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule],
  
  template: `<div class="resim">
    <ul>
      <li>
        <img
          src="assets/public/fotolar/1.jpg"
          alt=""
          width="700px"
          height="450px"
        />
      </li>
      <li>
        <img
          src="assets/public/fotolar/harita.jpg"
          alt=""
          width="460px"
          height="450px"
        />
        </li>
        
    </ul>
    <h3 class="yanına">Armada alışveriz merkezi -2.kat</h3> 
  </div>`,
  styles: `
  .resim{
    ul {overflow:hidden;}
    ul li {float:left; margin-right:0px;}
    ul li img {border:2px solid #000;}
    .clear {clear: both}
  }
`
})
export class AdresComponent {
    
  }
  