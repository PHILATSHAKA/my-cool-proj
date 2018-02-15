import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {PicturesComponent} from './pictures/pictures.component';
import {ContactComponent} from './contact/contact.component';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {ErrorComponent} from './error/error.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    // canActivate: [AutoguardGuard],
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'pictures',
    component: PicturesComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    // otherwise redirect to Login
    path: '***', redirectTo: ''
}
]
export const routing = RouterModule.forRoot(appRoutes);
