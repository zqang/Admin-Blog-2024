import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-post-dashboard',
  standalone: true,
  templateUrl: './post-dashboard.component.html',
  styleUrl: './post-dashboard.component.css',
  imports: [ButtonComponent],
})
export class PostDashboardComponent {}
