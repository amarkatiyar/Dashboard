import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { Tab1Component } from './tab1/tab1.component';


const routes: Routes = [
  {path:'' , component:ContentComponent},
  {path:'tab1' , component:Tab1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
