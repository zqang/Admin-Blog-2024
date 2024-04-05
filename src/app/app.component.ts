import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    SidebarComponent,
    SvgIconComponent,
    NavbarComponent,
    ResponsiveHelperComponent,
  ],
})
export class AppComponent {
  title = 'Admin-Blog-2024';
}
