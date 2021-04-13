import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";

import { ReportRoutingModule } from "./report-routing.module";
import { ReportComponent } from "./report.component";
import { ReportListComponent } from "./report-list/report-list.component";

import {
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbFormFieldModule,
  NbCalendarModule,
  NbAutocompleteComponent,
} from "@nebular/theme";
import { FormsModule } from "@angular/forms";

import { PDFExportModule } from "@progress/kendo-angular-pdf-export";

import { NbMomentDateModule, NbMomentDateService } from "@nebular/moment";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@NgModule({
  declarations: [ReportComponent, ReportListComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReportRoutingModule,
    MatTableModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbFormFieldModule,
    NbCalendarModule,
    NbMomentDateModule,
    PDFExportModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
})
export class ReportModule {}
