import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  private element: HTMLElement | null;

  constructor() {
    this.element = document.querySelector('html');
    if (localStorage.getItem('prefers-color-scheme') === 'dark') {
      this.element?.classList.add('set-dark-mode');
    }
  }

  toggleThemeMode(): 'dark' | 'light' {
    if (localStorage.getItem('prefers-color-scheme') === 'dark') {
      this.element?.classList.remove('set-dark-mode');
      localStorage.setItem('prefers-color-scheme', 'light');
      return 'light';
    } else {
      this.element?.classList.add('set-dark-mode');
      localStorage.setItem('prefers-color-scheme', 'dark');
      return 'dark';
    }
  }

  getTheme(): 'dark' | 'light' {
    const localStorageItem = localStorage.getItem('prefers-color-scheme');
    if (localStorageItem === 'dark') return 'dark';
    else if (localStorageItem === 'light') return 'light';

    // Set default theme when local storage is empty or corrupted
    localStorage.setItem('prefers-color-scheme', 'light');
    return 'light';
  }
}
