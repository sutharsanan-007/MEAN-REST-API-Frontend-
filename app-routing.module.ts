import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdComponent } from './upd/upd.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'upd/:id',component:UpdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
