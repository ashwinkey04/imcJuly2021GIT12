// import { Component, OnInit, ViewChild } from "@angular/core";
// import { MatPaginator } from "@angular/material/paginator";
// import { MatTableDataSource } from "@angular/material/table";
// import { Moment } from "moment/moment.d";
// import { DataserviceService } from "../../../dataservice.service";

// export interface PeriodicElement {
//   Rank: number;
//   image: any;
//   Name: string;
//   Totalevents: string;
//   earnPoint: number;
// }

// @Component({
//   selector: "ngx-list",
//   templateUrl: "./list.component.html",
//   styleUrls: ["./list.component.scss"],
// })
// export class ListComponent implements OnInit {
//   constructor(private http: DataserviceService) { }
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
//   dataSource: any;
//   selectedItem = "0";
//   rankList: Array<any> = [];
//   rank: any = '';
//   isLoading: boolean = true;
//   selected: { startDate: Moment; endDate: Moment };
//   rankingList: any;
//   ngOnInit(): void {
//     this.get();
//     this.getRankList();
//     this.getRankListgrp();
//   }

//   displayedColumns: string[] = [
//     "Rank",
//     "image",
//     "Name",
//     "Email",
//     "Mobile",
//     "Totalevents",
//     "earnPoint",
//   ];

//   changeDate(event) {
//     console.log(event);
//   }

//   get() {
//     this.http.get("/api/v1/ranking/all?rank=" + this.rank).subscribe((data) => {
//       let data1 = data.json();
//       this.rankingList = data1.rankingList;
//       this.dataSource = new MatTableDataSource<PeriodicElement>(
//         this.rankingList
//       );
//       this.isLoading = false;
//       this.dataSource.paginator = this.paginator;
//       console.log("this.dataSource",this.dataSource)
//     });
//   }

//   getRankList() {
//     this.http.get("/api/v1/ranking/number").subscribe((data) => {
//       let data1 = data.json();
//       console.log("data1", data1);
//       this.rankList = data1.rankList;
//       this.rank = 'all'
//     });
//   }

//   getRankListgrp() {
//     this.http.get("/api/v1/points/getRankGrp").subscribe((data) => {
//       let data1 = data.json();
//       console.log("data1", data1);
//       // this.rankList = data1.rankList;
//       // this.rank = 'all'
//     });
//   }


//   selectionItem(event) {
//     console.log("event", event);
//     this.get();
//   }
// }


import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Moment } from "moment/moment.d";
import { DataserviceService } from "../../../dataservice.service";

export interface PeriodicElement {
  Rank: number;
  image: any;
  Name: string;
  Totalevents: string;
  earnPoint: number;
}

@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(private http: DataserviceService) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: any;
  selectedItem = "0";
  rankList: Array<any> = [];
  rank: any = '';
  isLoading: boolean = true;
  selected: { startDate: Moment; endDate: Moment };
  rankingList: any;
  ngOnInit(): void {
    // this.get();
    // this.getRankList();
    this.getRankListgrp();
  }

  displayedColumns: string[] = [
    "Rank",
    "TotalPoints",
    "UserCount",
  ];

  changeDate(event) {
    console.log(event);
  }

  get() {
    this.http.get("/api/v1/ranking/all?rank=" + this.rank).subscribe((data) => {
      let data1 = data.json();
      this.rankingList = data1.rankingList;
      this.dataSource = new MatTableDataSource<PeriodicElement>(
        this.rankingList
      );
      this.isLoading = false;
      this.dataSource.paginator = this.paginator;
      console.log("this.dataSource",this.dataSource)
    });
  }

  getRankList() {
    this.http.get("/api/v1/ranking/number").subscribe((data) => {
      let data1 = data.json();
      console.log("data1", data1);
      this.rankList = data1.rankList;
      this.rank = 'all'
    });
  }

  getRankListgrp() {
    this.http.get("/api/v1/points/getRankGrp").subscribe((data) => {
      let data1 = data.json();
      console.log(data1);
      this.rankingList = data1.userList;
      this.dataSource = new MatTableDataSource<PeriodicElement>(
        this.rankingList
      );
      this.isLoading = false;
      this.dataSource.paginator = this.paginator;
      console.log("this.dataSource",this.dataSource)
    });
  }


  selectionItem(event) {
    console.log("event", event);
    this.get();
  }
}
