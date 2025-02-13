import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'homepage',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule],
  styles: `
    .resim{
      ul {overflow:hidden;}
      ul li {float:left; margin-right:0px;}
      ul li img {border:2px solid #000;}
      .clear {clear: both}
    }
    .bolum2 {
  display: flex;
  align-items: center; /* İki div'in dikey olarak ortalanmasını sağlar */
  justify-content: space-between; /* Aralarındaki boşluğu dengeler */
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
    margin: 30px;

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
  }
  `,
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
            src="assets/public/fotolar/3.jpg"
            alt=""
            width="460px"
            height="450px"
          />
        </li>
      </ul>
    </div>
    <div class="bolum2">
      <div>
        <h2>İLHAM VEREN BİR TOPLULUKLA SENDE TANIŞ</h2>
        <button class="btn"
        routerLink="kayit">TOPLULUKLA TANIŞ</button>
      </div>
      <div class="resim1">
        <img src="assets/public/fotolar/12.png" width="700px" height="450px" />
      </div>
    </div> `,
})
export class HomepageComponent {
  title = 'projem';
}
