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
import { ProfileComponent } from './modules/author/pages/profile/profile.component';
import { ContentOrganizationComponent } from './modules/content-organization/content-organization.component';
import { CategoryComponent } from './modules/content-organization/pages/category/category.component';
import { TagComponent } from './modules/content-organization/pages/tag/tag.component';

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
      {
        path: 'author',
        component: BlogComponent,
        children: [
          {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full',
          },
          {
            path: 'profile',
            component: ProfileComponent,
          },
        ],
      },
      {
        path: 'content-organization',
        component: ContentOrganizationComponent,
        children: [
          {
            path: '',
            redirectTo: 'category',
            pathMatch: 'full',
          },
          {
            path: 'category',
            component: CategoryComponent,
          },
          {
            path: 'tag',
            component: TagComponent,
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
