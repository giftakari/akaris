import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'flight', url: 'flights', icon: 'airplane' },
    { title: 'hotel', url: 'hotels', icon: 'paper-plane' },
    { title: 'cars', url: 'cars', icon: 'car-sport' },
    { title: 'bookings', url: 'manage-booking', icon: 'briefcase' },
    { title: 'offers', url: 'offers', icon: 'wallet' },
    { title: 'group', url: 'group-booking', icon: 'people' },
  ];
  public labels = ['Check-In', 'Subscribe', 'Visa', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
