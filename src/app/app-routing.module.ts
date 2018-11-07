import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {MainComponent} from './view/home/main/main.component';
import {ProfileComponent} from './view/home/profile.component';
import { CreateFormComponent } from './view/login/createForm';
import { EditFormComponent } from './view/login/editForm';
import { HttpLoadComponent } from './view/http-load/http-load.component';
import { AnimationComponent } from './view/animation/animation.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent,
  children: [
      {path:'create', component:CreateFormComponent}
  ]},
  {path:'profile/:userName', component:ProfileComponent},
  {path:'profile', component:ProfileComponent, children: [
      {path:':userName/edit', component:EditFormComponent}
  ]},
  {path:'home', component:MainComponent},
  {path:'animation', component:AnimationComponent},
  {path:'rest', component:HttpLoadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
