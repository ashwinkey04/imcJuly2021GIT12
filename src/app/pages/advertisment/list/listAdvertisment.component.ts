import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers, RequestOptions } from "@angular/http";
import { DataserviceService } from "../../../dataservice.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
export interface PeriodicElement {
  brandname: string;
  position: string;
  page: string;
  adcount: string;
  link: string;
  status: string;
  images:string,
  Edit: any;
}

@Component({
  selector: "ngx-list",
  templateUrl: "./listAdvertisment.component.html",
  styleUrls: ["./listAdvertisment.component.scss"],
})
export class ListAdvertismentComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  token: any;
  headers: string[];
  config: any;
  id: any;
  advertismentsdata: PeriodicElement[];
  nativelanguage: string;
  data: PeriodicElement[];
  isLoading: boolean = true;
  selectedItem = "all";
  images ="/images";
  dataSource: any;
  viewStatus: any[] = [
    { key: 0, name: "all" },
    { key: 1, name: "active" },
    { key: 2, name: "inactive" },
  ];
  viewposition: any[] = [

    { key: 100, name: "Please select the Position for the advertisment" },
    { key: 0, name: "Top" },
    { key: 1, name: "Top Left" },
    { key: 2, name: "Top Right" },
    { key: 3, name: "Center" },
    { key: 4, name: "Center Left" },
    { key: 5, name: "Center Right" },
    { key: 6, name: "Bottom"},
    { key: 7, name: "Bottom Left" },
    { key: 8, name: "Bottom Right" },
    { key: 9, name: "Top Right-2" },
    { key: 10, name: "Top Right-3" },
  ];
  viewPage: any[] = [
    { key: 0, name: "Please select the Advertisment Screen" },
    { key: 1, name: "Home" },
    { key: 2, name: "Dashboard" },
    { key: 3, name: "Favourite-choose" },
    { key: 4, name: "Select Contestant - Task play" },
    { key: 5, name: "Task screen" },
    { key: 6, name: "Profile" },
    { key: 7, name: "Page 5" },
    { key: 8, name: "Page 6" },
  ];
  contestantsStatusView: string = "all";
  search: string = "";

  constructor(
    private http: DataserviceService,
    private san: DomSanitizer,
    private route: Router
  ) {}
  active: string = "active";
  ip: any = this.http.ip();
  ngOnInit(): void {
    this.advertismentsList();
  }

  selectionItem(event) {
    console.log("event", event);
    this.contestantsStatusView = event;
    this.advertismentsList();
    console.log(this.contestantsStatusView);
  }

  advertismentsList() {
    this.http
      .get(
        "/api/v1/advertisment"
      )
      .subscribe((data) => {
        let data1 = data.json();
        console.log(data);
        this.advertismentsdata = data1.eventList;
        console.log(this.advertismentsdata);
        this.dataSource = new MatTableDataSource<PeriodicElement>(
          this.advertismentsdata
        );
        console.log(this.search);
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      });
    this.data = this.advertismentsdata;
  }

  Search() {
    this.advertismentsList();
  }

  stringChanged() {
    if (this.search.length >= 3) {
      this.advertismentsList();
    }
    if (this.search.length == 0) {
      this.advertismentsList();
    }
  }

  displayedColumns: string[] = [
    "images",
    "brandname",
    "position",
    "page",
    "adcount",
    "link",
    "status",
    "Edit",

  ];

  changeDate(event) {}

  ngAfterViewInit() {}


}
