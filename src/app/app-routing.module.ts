import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full'
  },
  {
    path: 'flights',
    loadChildren: () => import('./pages/flights/flights.module').then( m => m.FlightsPageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./pages/hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./pages/cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'manage-booking',
    loadChildren: () => import('./pages/manage-booking/manage-booking.module').then( m => m.ManageBookingPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'group-booking',
    loadChildren: () => import('./pages/group-booking/group-booking.module').then( m => m.GroupBookingPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
