import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { ThemeMode } from '../../types/themeMode';
import { THEME_MODE_KEY } from '../../configs/localStorageKeys';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  private element: HTMLElement | null;

  constructor(private localStorage: LocalStorageService) {
    this.element = document.querySelector('html');
    if (this.localStorage.get(THEME_MODE_KEY) === 'dark') {
      this.element?.classList.add('set-dark-mode');
    }
  }

  toggleThemeMode(): ThemeMode {
    if (this.localStorage.get(THEME_MODE_KEY) === 'dark') {
      this.element?.classList.remove('set-dark-mode');
      this.localStorage.set(THEME_MODE_KEY, 'light');
      return 'light';
    } else {
      this.element?.classList.add('set-dark-mode');
      this.localStorage.set(THEME_MODE_KEY, 'dark');
      return 'dark';
    }
  }

  getTheme(): ThemeMode {
    const localStorageItem = this.localStorage.get(THEME_MODE_KEY);
    if (localStorageItem === 'dark') return 'dark';
    else if (localStorageItem === 'light') return 'light';

    // Set default theme when local storage is empty or corrupted
    this.localStorage.set(THEME_MODE_KEY, 'light');
    return 'light';
  }
}
