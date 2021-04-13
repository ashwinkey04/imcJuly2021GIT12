import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";

import { LayoutService } from "../../../@core/utils";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { DataserviceService } from "../../../dataservice.service";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any = {
    name: "A D",
  };
  selectedItem = "";
  eventlist: Array<any> = [];

  themes = [
    {
      value: "default",
      name: "Light",
    },
    {
      value: "dark",
      name: "Dark",
    },
    {
      value: "cosmic",
      name: "Cosmic",
    },
    {
      value: "corporate",
      name: "Corporate",
    },
  ];

  currentTheme = "default";

  userMenu = [{ title: "Log out" }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private http: DataserviceService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {
    menuService.onItemClick().subscribe((bag) => {
      if (bag.item.title == "Log out") {
        localStorage.clear();
        this.route.navigate(["/auth/login"]);
      }
    });

    console.log(this.route.url);
  }

  ngOnInit() {
    this.Dropdown();
    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));
  }

  //EventList DropDown
  Dropdown() {
    this.http.get("/api/v1/event/list").subscribe((data) => {
      let data1 = data.json();
      this.eventlist = data1.eventList;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  selectionItem(event) {
    localStorage.setItem("Event_Id", event);
    var currentUrl = this.route.url;
    
    const queryParams: Params = { s: event };
    
     if (currentUrl == '/pages/dashboard') {
      this.route
      .navigateByUrl("/pages/rank-view/list", { skipLocationChange: false })
      .then(() => {
        this.route.navigate([currentUrl]);
      });
    } else {
      this.route
        .navigateByUrl("/pages", { skipLocationChange: true })
        .then(() => {
          this.route.navigate([currentUrl]);
        });
    }

    // this.route.navigateByUrl("/", {
    //   skipLocationChange: false,
    // });
    // this.route.navigate(["/pages/contestants/list"]);

    // this.route.navigateByUrl("/", { skipLocationChange: false }).then(() => {
    //   this.getmethod.contestantsList();
    //  this.getmethod.ngOnInit();
    // });
  }

  clickOnUser() { }

  // users(event) {
  //   console.log(event);
  // }

  logout() {
    // this.route.navigate(["auth/login"]);
  }
}
