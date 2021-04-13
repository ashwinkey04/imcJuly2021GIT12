import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "../rank-view/list/list.component";
import { RankViewComponent } from "./rank-view.component";

const routes: Routes = [
  {
    path: "",
    component: RankViewComponent,
    children: [
      {
        path: "list",
        component: ListComponent,
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
export class RankViewRoutingModule {}
