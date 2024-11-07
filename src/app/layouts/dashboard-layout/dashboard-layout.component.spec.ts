import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutComponent } from './dashboard-layout.component';

describe('DashboardLayoutComponent: Initialize Tests', () => {
  let component: DashboardLayoutComponent;
  let fixture: ComponentFixture<DashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLayoutComponent],
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
