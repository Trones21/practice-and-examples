import { NgModule } from '@angular/core';
import { PreloadAllModules ,RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.component').then((m) => m.HomeComponentModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'orderList',
    loadChildren: () => 
    import('./order-list/order-list.component').then((m) => m.OrderListComponent)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}