import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthenticationGuard } from "../authentication.guard";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "contestants",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./contestants/contestants.module").then(
            (m) => m.ContestantsModule
          ),
      },
      {
        path: "rank-view",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./rank-view/rank-view.module").then((m) => m.RankViewModule),
      },
      {
        path: "players",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./players/players.module").then((m) => m.PlayersModule),
      },
      {
        path: "report",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./report/report.module").then((m) => m.ReportModule),
      },
      {
        path: "event",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./event/event.module").then((m) => m.EventModule),
      },
      {
        path: "show",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./show/show.module").then((m) => m.ShowModule),
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "dashboard",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
