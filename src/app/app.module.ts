import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './services/guards/auth.guard';
import { LoginGuardGuard } from './services/guards/login-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormItemComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi:true
  },
AuthGuard,LoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
