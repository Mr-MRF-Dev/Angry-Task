import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { PNGConfig } from './configs/primeNgConf';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angry Task';
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set(PNGConfig);
  }
}
