import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  title = 'world';
  cont = 0;

  contador() {
    setInterval(() => {
      this.cont = this.cont + 1;
    }, 1000);
  }
}
