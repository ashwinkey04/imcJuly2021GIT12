import { Component } from "@angular/core";

import { MENU_ITEMS } from "./pages-menu";
import { NbIconLibraries } from "@nebular/theme";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;

  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack("fa", {
      packClass: "fa",
      iconClassPrefix: "fa",
    });
    iconsLibrary.registerFontPack("far", {
      packClass: "far",
      iconClassPrefix: "fa",
    });
    iconsLibrary.registerFontPack("fas", {
      packClass: "fas",
      iconClassPrefix: "fa",
    });
    iconsLibrary.registerFontPack("fab", {
      packClass: "fab",
      iconClassPrefix: "fa",
    });
    // iconsLibrary.registerFontPack("flaticon1", {
    //   iconClassPrefix: "flaticon1",
    // });
    iconsLibrary.registerFontPack("flaticon", { iconClassPrefix: "flaticon" });
    iconsLibrary.registerFontPack("icon", { iconClassPrefix: "icon" });
    iconsLibrary.registerFontPack("ion", { iconClassPrefix: "ion" });
  }
}
