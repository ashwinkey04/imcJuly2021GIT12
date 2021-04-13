import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { timeStamp } from "console";
import { DataserviceService } from "../../../dataservice.service";

export interface PeriodicElement {
  name: string;
  userName: string;
  Mail: any;
  country: string;
  city: string;
  state: string;
  pincode: number;
  status: any;
  Action: any;
}

@Component({
  selector: "ngx-players-list",
  templateUrl: "./players-list.component.html",
  styleUrls: ["./players-list.component.scss"],
})
export class PlayersListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: any;

  playersData: PeriodicElement[];

  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  isLoading: boolean = true;
  TaskListView: any = "all";
  selectedItem = "all";
  search: string = "";

  viewStatus: any[] = [
    { key: 0, name: "all" },
    { key: 1, name: "active" },
    { key: 2, name: "inactive" },
    { key: 3, name: "offline" },
  ];

  pageSize = 10;
  constructor(private http: DataserviceService) {
    this.appendItems(0, this.sum);
  }

  ngOnInit(): void {
    this.players();
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "push");
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, " ", this.generateWord()].join(""));
    }
  }

  generateWord() {}

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  onScrollDown(ev) {
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = "down";
  }

  onUp(ev) {
    console.log("scrolled up!", ev);

    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = "up";
  }

  players() {
    // console.log(this.search);
    // console.log(this.TaskListView);
    this.http
      .get(
        "/api/v1/user/list?status=" +
          this.TaskListView +
          "&search=" +
          this.search
      )
      .subscribe((data) => {
        let data1 = data.json();
        this.playersData = data1.userList;
        this.dataSource = new MatTableDataSource<PeriodicElement>(
          this.playersData
        );
        this.isLoading = false;
        this.dataSource.paginator = this.paginator;
        console.log("this.dataSource",this.dataSource)
      });
  }

  stringChanged() {
    if (this.search.length >= 3) {
      this.players();
    }
    if (this.search.length == 0) {
      this.players();
    }
  }

  selectionItem(event) {
    console.log("event", event);
    this.TaskListView = event;
    this.players();
  }

  Search() {
    this.players();
  }

  // loadNext() {}

  // loadNext(cardData) {
  //   if (cardData.loading) {
  //     return;
  //   }

  //   cardData.loading = true;
  //   cardData.placeholders = new Array(this.pageSize);
  // }
  displayedColumns: string[] = [
    "name",
    "userName",
    "Mail",
    "city",
    "state",
    "country",
    "status",
    "Action",
  ];
}
