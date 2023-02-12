import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Flight', url: '/folder/Flight', icon: 'airplane' },
    { title: 'Hotel', url: '/folder/Hotel', icon: 'paper-plane' },
    { title: 'Cars', url: '/folder/Cars', icon: 'car-sport' },
    { title: 'Bookings', url: '/folder/Manage-Booking', icon: 'briefcase' },
    { title: 'Offers', url: '/folder/Offers', icon: 'wallet' },
    { title: 'Group', url: '/folder/Group-Booking', icon: 'people' },
  ];
  public labels = ['Check-In', 'Subscribe', 'Visa', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
