import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportListComponent } from "./report-list/report-list.component";
import { ReportComponent } from "./report.component";

const routes: Routes = [
  {
    path: "",
    component: ReportComponent,
    children: [
      {
        path: "report-list",
        component: ReportListComponent,
      },
      {
        path: "",
        redirectTo: "report-list",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "report-list",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
