import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {DataService} from './data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';

import {LoginUserService} from './login-user.service';
import {AutoguardGuard} from './autoguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { UploadComponent } from './upload/upload.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { PicturesComponent } from './pictures/pictures.component';
import {FormsExtensionModule} from 'angular-forms-extension';
import {routing} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    FooterComponent,
    ErrorComponent,
    RegisterComponent,
    NotfoundComponent,
    ContactComponent,
    UploadComponent,
    UsersComponent,
    ProfileComponent,
    AboutComponent,
    PicturesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    routing,
    FormsExtensionModule.forRoot(),
  ],
  providers: [DataService, LoginUserService, AutoguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
