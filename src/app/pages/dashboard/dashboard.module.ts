import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from "@angular/forms";

import { NbUserModule, NbBadgeModule } from "@nebular/theme";
import { NgImageSliderModule } from "ng-image-slider";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatListModule,
    NbUserModule,
    NbBadgeModule,
    NgImageSliderModule,
    FormsModule
  ],
})
export class DashboardModule {}
