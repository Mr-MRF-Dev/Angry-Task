import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  private element: HTMLElement | null;

  constructor(private localStorage: LocalStorageService) {
    this.element = document.querySelector('html');
    if (this.localStorage.get('prefers-color-scheme') === 'dark') {
      this.element?.classList.add('set-dark-mode');
    }
  }

  toggleThemeMode(): 'dark' | 'light' {
    if (this.localStorage.get('prefers-color-scheme') === 'dark') {
      this.element?.classList.remove('set-dark-mode');
      this.localStorage.set('prefers-color-scheme', 'light');
      return 'light';
    } else {
      this.element?.classList.add('set-dark-mode');
      this.localStorage.set('prefers-color-scheme', 'dark');
      return 'dark';
    }
  }

  getTheme(): 'dark' | 'light' {
    const localStorageItem = this.localStorage.get('prefers-color-scheme');
    if (localStorageItem === 'dark') return 'dark';
    else if (localStorageItem === 'light') return 'light';

    // Set default theme when local storage is empty or corrupted
    this.localStorage.set('prefers-color-scheme', 'light');
    return 'light';
  }
}
