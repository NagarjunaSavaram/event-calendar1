import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './LoginPage/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path : 'home', component:HomePageComponent, canActivate: [AuthGuardService] },
  {path:'', redirectTo: 'login', pathMatch :'full' },
  { path: 'login', component: LoginPageComponent},
  // {path: '**', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
