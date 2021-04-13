import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowEntryComponent } from "./show-entry/show-entry.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { ShowComponent } from "./show.component";

const routes: Routes = [
  {
    path: "",
    component: ShowComponent,
    children: [
      {
        path: "show-list",
        component: ShowListComponent,
      },
      {
        path: "show-entry",
        component: ShowEntryComponent,
      },
      {
        path: "",
        redirectTo: "show-list",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "show-list",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRoutingModule {}
