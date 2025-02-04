import { Component, inject } from '@angular/core';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    KENDO_BUTTONS,
    InputsModule,
    LabelModule,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  constructor(private http: HttpClient) {}
  private readonly router = inject(Router);
  public login = '';
  public password = '';
  public isShowError = false;

  clearError() {
    console.log('clear');
    this.isShowError = false;
  }
  onButtonClick() {
    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        })
      )
      .subscribe((resp: object) => {
        if (this.login === 'user@qaz.com' && this.password === 'user') {
          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: 'ghvHbhbyg^7guyVhVGVGCRUccGHVGVKHVGHKVHVCV',
              timestamp: Date.now(),
            })
          );
          this.router.navigate(['']);
        } else {
          this.isShowError = true;
        }
        this.login = '';
        this.password = '';
      });
  }
}
