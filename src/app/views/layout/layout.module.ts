import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];
@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule.forChild(appRoutes), CommonModule],
  exports: [],
})
export class LayoutModule {}
