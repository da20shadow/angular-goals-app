import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoalsListComponent} from "./goals-list.component";

const routes: Routes = [
  {path: '', component: GoalsListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsListRoutingModule { }
