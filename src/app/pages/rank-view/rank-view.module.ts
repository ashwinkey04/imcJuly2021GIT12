import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";

import { RankViewRoutingModule } from "./rank-view-routing.module";
import { RankViewComponent } from "./rank-view.component";
import { ListComponent } from "./list/list.component";

import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import {
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbFormFieldModule,
  NbCalendarModule,
} from "@nebular/theme";
import { FormsModule } from "@angular/forms";

import { NbMomentDateModule, NbMomentDateService } from "@nebular/moment";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";

@NgModule({
  declarations: [RankViewComponent, ListComponent],
  imports: [
    CommonModule,
    RankViewRoutingModule,
    MatTableModule,
    RouterModule,
    NbIconModule,
    FormsModule,
    NbInputModule,
    NbFormFieldModule,
    // NbRangepickerComponent,
    NbDatepickerModule,
    NbSelectModule,
    NbCalendarModule,
    NbMomentDateModule,
    NgxDaterangepickerMd.forRoot(),
    MatPaginatorModule,
    MatProgressSpinnerModule,
    PDFExportModule,
  ],
})
export class RankViewModule {}
