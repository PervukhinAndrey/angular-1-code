import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
export interface IData {
  actionName: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [KENDO_BUTTONS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);

  public data = [
    { text: 'My Profile' },
    { text: 'Friend Requests' },
    { text: 'Account Settings' },
    { text: 'Support' },
    {
      text: 'Log Out',
      click: (dataItem: IData): void => {
        localStorage.removeItem('auth');
        this.router.navigate([`/auth/login`]);
      },
    },
  ];
}
