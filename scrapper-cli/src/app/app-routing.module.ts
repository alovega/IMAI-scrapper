import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { ImageComponent } from './image/image.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile-detail/:name', component: ProfileComponent },
  {path: 'get-profile', component:GetProfileComponent},
  {path: 'image', component:ImageComponent},
  {path:'', redirectTo:'/get-profile', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
