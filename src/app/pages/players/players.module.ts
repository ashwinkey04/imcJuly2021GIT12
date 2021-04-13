import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import {
  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbToggleModule,
  NbListModule,
  NbUserModule,
  NbFormFieldModule,
} from "@nebular/theme";

import { PlayersRoutingModule } from "./players-routing.module";
import { PlayersComponent } from "./players.component";
import { PlayersListComponent } from "./players-list/players-list.component";
import { PlayersUpdateComponent } from "./players-update/players-update.component";
import { FormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material/paginator";
@NgModule({
  declarations: [
    PlayersComponent,
    PlayersListComponent,
    PlayersUpdateComponent,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MatTableModule,
    NbToggleModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule,
    NbSelectModule,
    NbListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NbIconModule,
    NbInputModule,
    NbFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    PDFExportModule,
  ],
})
export class PlayersModule {}
