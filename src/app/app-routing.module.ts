import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorInfoComponent } from './color-info/color-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: ColorInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
