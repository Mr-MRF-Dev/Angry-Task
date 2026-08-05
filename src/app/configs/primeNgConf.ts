import Aura from '@primeng/themes/aura';

interface ImportMetaEnv {
  readonly NG_APP_PRIMEUI_LICENSE_KEY?: string;
}

interface ImportMeta {
  readonly env?: ImportMetaEnv;
}

const getPrimeUiLicense = (): string => {
  const meta = import.meta as ImportMeta;
  return meta.env?.NG_APP_PRIMEUI_LICENSE_KEY ?? '';
};

// PNG: Prime NG Config
export const PNGConfPrefix = 'p';
export const PNGDarkModeSelector = 'dark';

export const PNGConfig = {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: `.${PNGDarkModeSelector}`,
      prefix: PNGConfPrefix,
      cssLayer: false,
      license: getPrimeUiLicense(),
    },
  },
};

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
// }
