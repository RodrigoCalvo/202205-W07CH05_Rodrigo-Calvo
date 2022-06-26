import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MENU_OPTIONS } from './app.component';

const routes: Routes = [
  {
    path: MENU_OPTIONS[0].path,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
  { path: '', pathMatch: 'full', redirectTo: MENU_OPTIONS[0].path },
  { path: '**', redirectTo: MENU_OPTIONS[0].path },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
