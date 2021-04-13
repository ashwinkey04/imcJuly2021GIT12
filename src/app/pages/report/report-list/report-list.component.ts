import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DataserviceService } from "../../../dataservice.service";

export interface PeriodicElement {
  userName: string;
  mailId: string;
  mobileNo: number;
  state: string;
  city: string;
  country: string;
  lastLogin: any;
}

@Component({
  selector: "ngx-report-list",
  templateUrl: "./report-list.component.html",
  styleUrls: ["./report-list.component.scss"],
})
export class ReportListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: any;
  constructor(private http: DataserviceService) { }

  ngOnInit(): void {
    this.get();
    this.ReportList();
  }

  isLoading: boolean = true;
  selectedItem = "all";
  selectedItem1;
  User: any;
  search: any;
  country: any;
  city: any;
  state: any;
  selectedDay: any = "";
  selectedCountry: any = "";
  selectedState: any = "";
  selectedCity: any = "";
  stateName: any;
  viewStatus: any[] = [
    { key: 0, name: "all", label: 'All' },
    { key: 0, name: "today", label: 'Today' },
    { key: 1, name: "week", label: 'This Week' },
    { key: 2, name: "month", label: 'This Month' },
  ];
  displayedColumns: string[] = [
    "userName",
    "mailId",
    "mobileNo",
    "state",
    "city",
    "country",
    "lastLogin",
  ];

  selectionItem(event) {
    this.selectedDay = event;
    this.ReportList();
  }
  Search() { }

  countrySelection(event) {
    this.selectedCountry = event;
    this.ReportList();
  }

  stateSelectionItem(event) {
    this.selectedState = event;
    this.ReportList();
  }

  citySelectionItem(event) {
    this.selectedCountry = event;
    this.ReportList();
  }

  ReportList() {
    this.http
      .get(
        "/api/v1/report?byCountry=" +
        this.selectedCountry +
        "&byState=" +
        this.selectedState +
        "&byCity=" +
        this.selectedCity +
        "&registerdOn=" +
        this.selectedDay
      )
      .subscribe((data) => {
        let data1 = data.json();
        console.log(data1.userList);
        this.User = data1.userList;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.User);
        this.isLoading = false;
        this.dataSource.paginator = this.paginator;
      });
  }

  get() {
    this.http.get("/api/v1/user/country").subscribe((data) => {
      let data1 = data.json();
      console.log(data1)
      var all = [{ country: "all" }]
      this.country = all.concat(data1.countryList);
      setTimeout(() => {
        this.selectedItem1 = 'all';
      }, 200);

    });

    this.http.get("/api/v1/user/state").subscribe((data) => {
      let data1 = data.json();
      var all = [{ state: "all" }]
      this.state = all.concat(data1.stateList);
      console.log(this.state)
      setTimeout(() => {
        this.stateName = 'all';
      }, 200);
    });

    // this.http.get("/api/v1/user/city").subscribe((data) => {
    //   let data1 = data.json();
    //   console.log(data1)

    //   var all = [{ city: "all" }]
    //   this.city = all.concat(data1.cityList);
    //   setTimeout(() => {
    //     console.log(this.city)
    //     this.cityName = this.city[0];
    //   }, 200);

    // });
  }
}
