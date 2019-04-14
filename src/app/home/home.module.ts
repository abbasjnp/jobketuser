import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule,Routes} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
 const homeRoutes : Routes=[
   {path:'home',component:HomeComponent},
   {path:'',redirectTo:'/home',pathMatch:'full'}
  
 ]
   

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule {
  constructor(){
    console.log('home module');
  }
 }
