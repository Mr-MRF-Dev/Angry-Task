import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';
import { Lara } from 'primeng/themes/lara';
import { usePreset, updatePrimaryPalette } from 'primeng/themes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angry-Task';
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: '.set-dark-mode',
        cssLayer: false,
      },
    });
  }
}

// import { PrimeNGConfig } from 'primeng/api';
// import { Nora } from 'primeng/themes/nora';
// import { Lara } from 'primeng/themes/lara';
// import { Aura } from 'primeng/themes/aura';
// import {
//   definePreset,
//   updatePreset,
//   updatePrimaryPalette,
//   usePreset,
// } from 'primeng/themes';
// import { ButtonModule } from 'primeng/button';

//   constructor(private config: PrimeNGConfig) {
//     const MyPreset = definePreset(Aura);

//     this.config.theme.set({
//       preset: Aura,
//       options: {
//         prefix: 'p',
//         darkModeSelector: '.system',
//         cssLayer: false,
//       },
//     });
//     // this.config.theme.set({
//     //   preset: Aura,
//     // });

//     // sasds
//     this.toggleDarkMode();
//   }

//   changeTheme() {
//     // this.config.theme.set({
//     //   preset: Lara,
//     // });
//     // Aura.semantic.primary = Aura.primitive.red;
//     // updatePrimaryPalette({
//     //   50: '{red.50}',
//     //   100: '{red.100}',
//     //   200: '{red.200}',
//     //   300: '{red.300}',
//     //   400: '{red.400}',
//     //   500: '{red.500}',
//     //   600: '{red.600}',
//     //   700: '{red.700}',
//     //   800: '{red.800}',
//     //   900: '{red.900}',
//     //   950: '{red.950}',
//     // });
//     // updatePrimaryPalette(Aura.primitive.red);
//     updatePreset(Lara);
//     updatePrimaryPalette(Lara.primitive.red);
//   }

//   toggleDarkMode() {
//     const element = document.querySelector('html');
//     // element?.classList.toggle('system');

//     // read from local storage
//     // prefers-color-scheme
//     if (localStorage.getItem('prefers-color-scheme') === 'dark') {
//       element?.classList.remove('system');
//       localStorage.setItem('prefers-color-scheme', 'light');
//     } else {
//       element?.classList.add('system');
//       localStorage.setItem('prefers-color-scheme', 'dark');
//     }
//   }
// }
