import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";

import { AdvertismentRoutingModule } from "./advertisment-routing.module";
 import { ListAdvertismentComponent } from "./list/listAdvertisment.component";
 import { EntryAdvertismentComponent } from "./entry/entryAdvertisment.component";
import { AdvertismentComponent } from "./advertisment.component";
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
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
} from "@angular-material-components/datetime-picker";
import { FormsModule } from "@angular/forms";

import { NbMomentDateModule, NbMomentDateService } from "@nebular/moment";
import { NgxDropzoneModule } from "ngx-dropzone";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ThemeModule } from "app/@theme/theme.module";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
@NgModule({
  declarations: [ ListAdvertismentComponent, EntryAdvertismentComponent,AdvertismentComponent],
  imports: [
    CommonModule,
    AdvertismentRoutingModule,
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
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    NgxMatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class AdvertismentModule {}
