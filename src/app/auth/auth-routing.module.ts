import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      // {
      //   path: 'signup',
      //   component: RegistrationComponent,
      // },
      // {
      //   path: 'reset-password',
      //   component: ResetPasswordComponent,
      // },
      // {
      //   path: 'forgot-password',
      //   component: ForgotPasswordComponent,
      // },
      // {
      //   path: 'otp-verify',
      //   component: OtpComponent,
      // },
      // {
      //   path: 'privacy-policy',
      //   component: PrivacyPolicyComponent,
      // },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'login' }
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      // },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
