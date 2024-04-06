import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveHelperComponent } from '../../../shared/components/responsive-helper/responsive-helper.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  imports: [
    RouterOutlet,
    ResponsiveHelperComponent,
    SidebarComponent,
    NavbarComponent,
  ],
})
export class AdminComponent {}
