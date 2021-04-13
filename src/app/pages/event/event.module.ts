import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbMenuModule } from "@nebular/theme";
import { MatTableModule } from "@angular/material/table";
import {
  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbToggleModule,
} from "@nebular/theme";
import { FormsModule } from "@angular/forms";
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
  NbFormFieldModule,
  NbDialogModule,
} from "@nebular/theme";
import { MatCardModule } from "@angular/material/card";
import { NbMomentDateModule, NbMomentDateService } from "@nebular/moment";
import { MatPaginatorModule } from "@angular/material/paginator";

import { EventRoutingModule } from "./event-routing.module";
import { EventComponent } from "./event.component";
import { EventListComponent } from "./event-list/event-list.component";
import { EventCreateComponent } from "./event-create/event-create.component";
import { EventImageUpdateComponent } from "./event-image-update/event-image-update.component";
import { WeeklyEventEntryComponent } from "./weekly-event-entry/weekly-event-entry.component";
import { CreateFavContestantsComponent } from "./create-fav-contestants/create-fav-contestants.component";
import { CreateWinnerContestantsComponent } from "./create-winner-contestants/create-winner-contestants.component";
import { NgxDropzoneModule } from "ngx-dropzone";
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
} from "@angular-material-components/datetime-picker";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
@NgModule({
  declarations: [
    EventComponent,
    EventListComponent,
    EventCreateComponent,
    EventImageUpdateComponent,
    WeeklyEventEntryComponent,
    CreateFavContestantsComponent,
    CreateWinnerContestantsComponent,
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    NbTabsetModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbUserModule,
    NbMenuModule,
    NbActionsModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbToggleModule,
    FormsModule,
    NbRadioModule,
    MatTableModule,
    MatCardModule,
    NbMomentDateModule,
    NbFormFieldModule,
    NgxDropzoneModule,
    NbSpinnerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    MatSelectModule,
    NgxMatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    NbDialogModule.forChild(),
  ],
})
export class EventModule {}
