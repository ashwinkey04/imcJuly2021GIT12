import { ContestantsComponent } from "./contestants.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntryComponent } from "./entry/entry.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "",
    component: ContestantsComponent,
    children: [
      {
        path: "list",
        component: ListComponent,
      },
      {
        path: "entry",
        component: EntryComponent,
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
export class ContestantsRoutingModule {}
