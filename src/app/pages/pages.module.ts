import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { NbIconLibraries } from "@nebular/theme";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MatFormFieldModule,
    MatInputModule,
    PDFExportModule,
  ],
  declarations: [PagesComponent,],
})
export class PagesModule {}
