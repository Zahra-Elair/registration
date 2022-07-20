import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateComponent } from './updateProfile/update.component';

const routes: Routes = [
  {path:'', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'user', component:ProfileUserComponent},
  {path:'admin', component:ProfileComponent},
  {path:'update', component:UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
