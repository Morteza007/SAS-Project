import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks/stocks.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './management/user/user.component';
import { AuthGuard} from './auth/auth.guard'


const routes: Routes = [
  {path: '', component: StocksComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'management', component: UserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
