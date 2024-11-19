import { TestBed } from '@angular/core/testing';

import { ThemeModeService } from './theme-mode.service';
import { THEME_MODE_KEY } from '../../configs/localStorageKeys';

describe('ThemeModeService: Functionality', () => {
  let service: ThemeModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeModeService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('SHOULD be created WHEN the service is instantiated', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD load the theme mode WHEN constructed', () => {
    expect(service.getTheme()).toBe('light');
  });

  it('SHOULD toggle theme mode WHEN toggleThemeMode is called', () => {
    expect(service.toggleThemeMode()).toBe('dark');
    expect(service.toggleThemeMode()).toBe('light');
  });

  it('SHOULD return theme mode WHEN getTheme called', () => {
    expect(service.getTheme()).toBe('light');
  });

  it('SHOULD get dark mode WHEN toggleThemeMode & getTheme is called', () => {
    service.toggleThemeMode();
    expect(service.getTheme()).toBe('dark');
  });
});

describe('ThemeModeService: Local Storage', () => {
  let service: ThemeModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeModeService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('SHOULD set dark mode WHEN loaclStorage is set to dark', () => {
    localStorage.setItem(THEME_MODE_KEY, 'dark');
    expect(service.getTheme()).toBe('dark');
  });

  it('SHOULD set light mode WHEN loaclStorage is set to light', () => {
    localStorage.setItem(THEME_MODE_KEY, 'light');
    expect(service.getTheme()).toBe('light');
  });

  it('SHOULD set light mode WHEN loaclStorage is set to invalid value', () => {
    localStorage.setItem(THEME_MODE_KEY, 'invalid');
    expect(service.getTheme()).toBe('light');
  });

  it('SHOULD set light mode WHEN loaclStorage is empty', () => {
    localStorage.removeItem(THEME_MODE_KEY);
    expect(service.getTheme()).toBe('light');
  });

  it('SHOULD set local storage to dark WHEN toggleThemeMode is called', () => {
    service.toggleThemeMode();
    expect(localStorage.getItem(THEME_MODE_KEY)).toBe('dark');
  });

  it('SHOULD set local storage to light WHEN toggleThemeMode is called twice', () => {
    service.toggleThemeMode();
    service.toggleThemeMode();
    expect(localStorage.getItem(THEME_MODE_KEY)).toBe('light');
  });

  it('SHOULD return theme mode WHEN getTheme called', () => {
    expect(service.getTheme()).toBe('light');
  });

  it('SHOULD return light mode WHEN theme mode is set to light', () => {
    localStorage.setItem(THEME_MODE_KEY, 'light');
    expect(service.getTheme()).toBe('light');
  });

  it('SHOULD return dark mode WHEN theme mode is set to dark', () => {
    localStorage.setItem(THEME_MODE_KEY, 'dark');
    expect(service.getTheme()).toBe('dark');
  });

  it('SHOULD return default theme WHEN theme mode is set to invalid value', () => {
    localStorage.setItem(THEME_MODE_KEY, 'invalid');
    expect(service.getTheme()).toBe('light');
  });

  it('SHOULD return default theme WHEN theme mode is set to empty', () => {
    localStorage.removeItem(THEME_MODE_KEY);
    expect(service.getTheme()).toBe('light');
  });
});
