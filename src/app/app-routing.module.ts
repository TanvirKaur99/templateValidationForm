import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
 {path:'tempform',
 component:TemplateformComponent},
 {path:'reactform',
 component:ReactiveformComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
