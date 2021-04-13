import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../../../dataservice.service";

export interface PeriodicElement {
  logo: any;
  nativeLanguage: string;
  name: string;
  status: string;
  Edit: any;
}

@Component({
  selector: "ngx-show-list",
  templateUrl: "./show-list.component.html",
  styleUrls: ["./show-list.component.scss"],
})
export class ShowListComponent implements OnInit {
  eventlist1: any;
  selectedItem = "all";
  isLoading: any = true;
  viewStatus: any[] = [
    { key: 0, name: "all" },
    { key: 1, name: "active" },
    { key: 2, name: "inactive" },
  ];
  showStatusView: any = "all";
  search: string = "";

  selectionItem(event) {
    console.log("event", event);
    this.showStatusView = event;
    this.eventslist();
  }

  constructor(private http: DataserviceService) {}

  ip: any = this.http.ip();

  ngOnInit(): void {
    this.eventslist();
  }
  eventslist() {
    this.http
      .get("/api/v1/event/list?status=" + this.showStatusView)
      .subscribe((data) => {
        let data1 = data.json();
        this.eventlist1 = data1.eventList;
        this.isLoading = false;
      });
  }

  stringChanged() {
    if (this.search.length >= 3) {
      this.eventslist();
    }
    if (this.search.length == 0) {
      this.eventslist();
    }
  }

  Search() {
    this.eventslist();
  }

  displayedColumns: string[] = ["name", "language", "status", "Edit"];
}
