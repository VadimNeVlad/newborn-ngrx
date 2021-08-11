import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'overview',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./overview/overview.module').then((m) => m.OverviewModule),
  },
  {
    path: 'assortment',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./assortment/assortment.module').then((m) => m.AssortmentModule),
  },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
