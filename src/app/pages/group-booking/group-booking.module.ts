import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupBookingPageRoutingModule } from './group-booking-routing.module';

import { GroupBookingPage } from './group-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupBookingPageRoutingModule
  ],
  declarations: [GroupBookingPage]
})
export class GroupBookingPageModule {}
