import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { FormComponent } from './components/form/form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './services/guards/auth.guard';
import { LoginGuardGuard } from './services/guards/login-guard.guard';

const routes: Routes = [
  // {path:'',  component:HomePageComponent},
  // { path: 'login', component: LoginPageComponent, canDeactivate:[LoginGuardGuard] },
  { path: 'forms',  component: FormComponent,},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
