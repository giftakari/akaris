import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupBookingPage } from './group-booking.page';

const routes: Routes = [
  {
    path: '',
    component: GroupBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupBookingPageRoutingModule {}
