import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateComponent } from './components/updateProfile/update.component';

const routes: Routes = [
  {path:'', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'user', component:ProfileUserComponent},
  {path:'admin', component:ProfileComponent},
  {path:'update', component:UpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
