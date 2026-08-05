import { Component, inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ThemeModeService } from '../../services/themeService/theme-mode.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [AvatarModule, MenubarModule, ButtonModule, RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {
  private themeModeService = inject(ThemeModeService);
  protected toggleThemeIcon: 'pi pi-moon' | 'pi pi-sun';

  constructor() {
    if (this.themeModeService.getTheme() == 'dark') {
      this.toggleThemeIcon = 'pi pi-sun';
    } else {
      this.toggleThemeIcon = 'pi pi-moon';
    }
  }

  toggleTheme() {
    if (this.themeModeService.toggleThemeMode() === 'dark') {
      this.toggleThemeIcon = 'pi pi-sun';
    } else {
      this.toggleThemeIcon = 'pi pi-moon';
    }
  }
}
