import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatTableModule } from "@angular/material/table";

import { ShowRoutingModule } from "./show-routing.module";
import { ShowComponent } from "./show.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { ShowEntryComponent } from "./show-entry/show-entry.component";
import { FormsModule } from "@angular/forms";
import { NgxDropzoneModule } from "ngx-dropzone";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import {
  NbToggleModule,
  NbSelectModule,
  NbFormFieldModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
} from "@nebular/theme";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
} from "@angular-material-components/datetime-picker";

@NgModule({
  declarations: [ShowComponent, ShowListComponent, ShowEntryComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    NbToggleModule,
    NbSelectModule,
    NbFormFieldModule,
    NbButtonModule,
    NbInputModule,
    NgxDropzoneModule,
    MatProgressSpinnerModule,
    NbIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
  ],
  // exports: [RouterModule]
})
export class ShowModule {}
