import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlayersListComponent } from "./players-list/players-list.component";
import { PlayersUpdateComponent } from "./players-update/players-update.component";
import { PlayersComponent } from "./players.component";

const routes: Routes = [
  {
    path: "",
    component: PlayersComponent,
    children: [
      {
        path: "players-list",
        component: PlayersListComponent,
      },
      {
        path: "players-update",
        component: PlayersUpdateComponent,
      },
      {
        path: "",
        redirectTo: "players-list",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "players-list",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
