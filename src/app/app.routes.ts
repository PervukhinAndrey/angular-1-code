import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
  {
    path: 'main',
    canActivate: [authGuard],
    component: MainComponent,
    children: [{ path: 'warehouse/:id', component: MainComponent }],
  },
  { path: 'auth/login', component: LogInComponent },
  { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },

  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
