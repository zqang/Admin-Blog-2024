import { Routes } from '@angular/router';
import { BlogComponent } from './modules/blog/blog.component';
import { PostDashboardComponent } from './modules/blog/pages/post-dashboard/post-dashboard.component';
import { CreatePostComponent } from './modules/blog/pages/create-post/create-post.component';
import { EditPostComponent } from './modules/blog/pages/edit-post/edit-post.component';
import { MaintenanceGuard } from './core/guards/maintenance.guard';
import { ErrorComponent } from './core/pages/error/error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminComponent } from './layout/pages/admin/admin.component';
import { AuthComponent } from './core/pages/auth/auth.component';
import { SignInComponent } from './core/pages/auth/pages/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/blog/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [MaintenanceGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: SignInComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [MaintenanceGuard],
    children: [
      {
        path: 'blog',
        component: BlogComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            component: PostDashboardComponent,
          },
          {
            path: 'new',
            component: CreatePostComponent,
          },
          {
            path: ':id',
            component: EditPostComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'error',
    component: ErrorComponent,
    canActivate: [MaintenanceGuard],
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
