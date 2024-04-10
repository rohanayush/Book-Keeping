import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './auth/login/login.module';
import { SignupModule } from './auth/signup/signup.module';


@NgModule({

  declarations: [AppComponent],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterOutlet,
    HeaderModule,
    LoginModule,
    SignupModule
  ],

  providers: [
    provideRouter(routes)
  ],

  bootstrap: [AppComponent],

})
export class AppModule {}
