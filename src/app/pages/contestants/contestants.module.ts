import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";

import { ContestantsRoutingModule } from "./contestants-routing.module";
import { ListComponent } from "./list/list.component";
import { EntryComponent } from "./entry/entry.component";
import { ContestantsComponent } from "./contestants.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { NbMenuModule } from "@nebular/theme";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbToggleModule,
  NbFormFieldModule,
  NbCalendarModule,
  NbToastrModule,
  NbSpinnerModule,
} from "@nebular/theme";
import { FormsModule } from "@angular/forms";

import { NbMomentDateModule, NbMomentDateService } from "@nebular/moment";
import { NgxDropzoneModule } from "ngx-dropzone";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ThemeModule } from "app/@theme/theme.module";

@NgModule({
  declarations: [ListComponent, EntryComponent, ContestantsComponent],
  imports: [
    CommonModule,
    ContestantsRoutingModule,
    MatTableModule,
    RouterModule,
    NbMenuModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    FormsModule,
    NbToggleModule,
    NbFormFieldModule,
    NbCalendarModule,
    NbMomentDateModule,
    HttpClientModule,
    HttpModule,
    NbSpinnerModule,
    NgxDropzoneModule,
    NbToastrModule.forRoot(),
    PDFExportModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    ThemeModule,
  ],
})
export class ContestantsModule {}
