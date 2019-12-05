import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListingComponent } from './components/listing/listing.component';
import { EventviewComponent } from './components/eventview/eventview.component';
import { EventeditComponent } from './components/eventedit/eventedit.component';
import { EventlistComponent } from './components/eventlist/eventlist.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
   {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'event',component:EventlistComponent},
  {path:'event/:id',component:EventviewComponent},
  {path:'edit/:id',component:EventeditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
