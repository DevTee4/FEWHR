import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: "", component: UserComponent },
  { path: "user", component: UserComponent },
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: []
})
export class UserModule { }
