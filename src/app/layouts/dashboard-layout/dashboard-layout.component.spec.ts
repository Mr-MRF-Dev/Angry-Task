import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutComponent } from './dashboard-layout.component';
import { ThemeModeService } from '../../services/themeService/theme-mode.service';

describe('DashboardLayoutComponent: Initialize Tests', () => {
  let component: DashboardLayoutComponent;
  let fixture: ComponentFixture<DashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLayoutComponent],
      providers: [ThemeModeService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create the component WHEN initialized', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD have a title of app WHEN initialized', () => {
    const p = fixture.debugElement.nativeElement.querySelector('p');
    expect(p?.textContent).toContain('Angry Task');
  });

  it('SHOULD have menubar tag WHEN initialized', () => {
    const menu = fixture.debugElement.nativeElement.querySelector('p-menubar');
    expect(menu).toBeTruthy();
  });

  it('SHOULD get h screen fully WHEN initialized', () => {
    const hScreen =
      fixture.debugElement.nativeElement.querySelector('#dashboard');
    expect(hScreen?.offsetHeight).toEqual(window.innerHeight);
  });
});

describe('DashboardLayoutComponent: functionality', () => {
  let component: DashboardLayoutComponent;
  let fixture: ComponentFixture<DashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLayoutComponent],
      providers: [ThemeModeService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('SHOULD set the theme moon icon WHEN initialized', () => {
    expect(component['toggleThemeIcon']).toBe('pi pi-moon');
  });

  it('SHOULD set the theme sun icon WHEN theme toggled', () => {
    component.toggleTheme();
    expect(component['toggleThemeIcon']).toBe('pi pi-sun');
  });

  it('SHOULD call toggleThemeMode WHEN toggleTheme is called', () => {
    const themeModeService =
      fixture.debugElement.injector.get(ThemeModeService);
    spyOn(themeModeService, 'toggleThemeMode').and.callThrough();
    component.toggleTheme();
    expect(themeModeService.toggleThemeMode).toHaveBeenCalled();
  });

  it('SHOULD set the theme icon based on the initial theme', () => {
    const themeModeService =
      fixture.debugElement.injector.get(ThemeModeService);
    spyOn(themeModeService, 'getTheme').and.returnValue('dark');
    component = new DashboardLayoutComponent(themeModeService);
    expect(component['toggleThemeIcon']).toBe('pi pi-sun');
  });

  it('SHOULD set the theme moon icon WHEN theme toggled back to light', () => {
    component.toggleTheme();
    component.toggleTheme();
    expect(component['toggleThemeIcon']).toBe('pi pi-moon');
  });
});
