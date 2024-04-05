import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AngularSvgIconModule, SvgIconComponent } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import packageJson from '../../../../../package.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [NgClass, NgIf, SvgIconComponent, SidebarMenuComponent, RouterLink],
})
export class SidebarComponent implements OnInit {
  public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
