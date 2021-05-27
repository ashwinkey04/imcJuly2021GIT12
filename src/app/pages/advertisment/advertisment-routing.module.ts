import { AdvertismentComponent } from "./advertisment.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntryAdvertismentComponent } from "./entry/entryAdvertisment.component";
import { ListAdvertismentComponent } from "./list/listAdvertisment.component";

const routes: Routes = [
  {
    path: "",
    component: AdvertismentComponent,
    children: [
      {
        path: "list",
        component: ListAdvertismentComponent,
      },
      {
        path: "entry",
        component: EntryAdvertismentComponent,
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
  exports: [RouterModule],
})
export class AdvertismentRoutingModule {}
