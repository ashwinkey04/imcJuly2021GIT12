import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertismentComponent } from './advertisment.component';
const routes: Routes = [
  {
    path: "",
    component: AdvertismentComponent,
    children: [
      {
        path: "list",
        component: ListComponent,
      },
      {
        path: "create",
        component: CreateComponent,
      },
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "list",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertismentRoutingModule { }
