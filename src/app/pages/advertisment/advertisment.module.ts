import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertismentRoutingModule } from './advertisment-routing.module';
import { AdvertismentComponent } from './advertisment.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';


// @NgModule({
//   declarations: [AdvertismentComponent, ListComponent, CreateComponent],
//   imports: [
//     CommonModule,
//     AdvertismentRoutingModule
//   ]
// })
// export class AdvertismentModule { }



import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";


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
  declarations: [ListComponent, CreateComponent, AdvertismentComponent],
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
  ],
})
export class AdvertismentModule {}

