// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'ngx-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.scss']
// })
// export class ListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers, RequestOptions } from "@angular/http";
import { DataserviceService } from "../../../dataservice.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
export interface PeriodicElement {
  images: any;
  name: string;
  professional: string;
  // biography: string;
  brandname: string;
  status: string;
  Edit: any;
  position:any;
  // translation:any;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     img: "./assets/images/Avatar1.png",
//     Name: "Ramya Pandian",
//     Professional: "Anchor",
//     Biography: "Z Tamil",
//     Status: "Active",
//     Edit: "./assets/images/edit-outline.png",
//   },
//   {
//     img: "./assets/images/Avatar1.png",
//     Name: "Shivani",
//     Professional: "Dancer",
//     Biography: "Vijay Tv",
//     Status: "Inactive",
//     Edit: "./assets/images/edit-outline.png",
//   },
// ];

@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  mydata:any;
  token: any;
  headers: string[];
  config: any;
  id: any;
  contestantsdata: PeriodicElement[];
  nativelanguage: string;
  data: PeriodicElement[];
  isLoading: boolean = true;
  selectedItem = "all";
  dataSource: any;
  viewStatus: any[] = [
    { key: 0, name: "all" },
    { key: 1, name: "active" },
    { key: 2, name: "inactive" },
  ];
  contestantsStatusView: string = "all";
  search: string = "";

  constructor(
    private http: DataserviceService,
    private san: DomSanitizer,
    private route: Router
  ) {}
  active: string = "active";
  ip: any = this.http.imageip();
  ngOnInit(): void {
    this.contestantsList();
  }

  selectionItem(event) {
    console.log("event", event);
    this.contestantsStatusView = event;
    this.contestantsList();
    console.log(this.contestantsStatusView);
  }

  contestantsList() {
       this.mydata = [{
        biography: "Acted in movie",
        brandname:"dairy milk",
        position:{top:true,bottom:false,left:true,right:false},
        createdAt: "2021-04-16T06:21:31.651Z",
        images: ["/60124dcfd12b8626d8d3df04/contestant/60792ceb7d6ee94577e8ac39_20210417000000.png"],
        isFavorited: false,
        modifiedAt: "2021-04-17T08:08:07.334Z",
        name: "Ramya  Pandiann",
        nativeLanguage: "ta",
        percentage: 20,
        professional: "actor",
        status: "active",
        Edit:true,
        translation: {ta: {biography: "movie",
            name: "sandy",
            professional: "dancer"}, en:{biography: "movie",
            name: "sandy",
            professional: "dancer"}}
          },
          {
            biography: "Acted in movie",
            brandname:"Kit kat",
            position:{top:true,bottom:false,left:true,right:false},
            createdAt: "2021-04-16T06:21:31.651Z",
            images: ["/60124dcfd12b8626d8d3df04/contestant/60792ceb7d6ee94577e8ac39_20210417000000.png"],
            isFavorited: false,
            modifiedAt: "2021-04-17T08:08:07.334Z",
            name: "halsey",
            nativeLanguage: "ta",
            percentage: 20,
            professional: "actor",
            status: "active",
            Edit:true,
            translation: {ta: {biography: "movie",
            name: "sandy",
            professional: "dancer"}, en:{biography: "movie",
            name: "sandy",
            professional: "dancer"}}
          },];

            console.log("data --->",this.mydata[0].biography);
            this.contestantsdata = this.mydata;
            this.dataSource = new MatTableDataSource<PeriodicElement>(
              this.contestantsdata
            );
            this.dataSource.paginator = this.paginator;
        this.isLoading = false;

    // this.http
    //   .get(
    //     "/api/v1/contestants?search=" +
    //       this.search +
    //       "&language=both&status=" +
    //       this.contestantsStatusView
    //   )
    //   .subscribe((data) => {
    //     let data1 = data.json();
    //     // console.log(data);
    //     // console.log(data1);
    //     this.contestantsdata = data1.contestantList;
    //     console.log("this.contestantsdata",this.contestantsdata);
    //     this.dataSource = new MatTableDataSource<PeriodicElement>(
    //       this.contestantsdata
    //     );
    //     console.log(this.search);
    //     this.dataSource.paginator = this.paginator;
    //     this.isLoading = false;
    //   });
    this.data = this.contestantsdata;
  }

  Search() {
    this.contestantsList();
  }

  stringChanged() {
    if (this.search.length >= 3) {
      this.contestantsList();
    }
    if (this.search.length == 0) {
      this.contestantsList();
    }
  }

  displayedColumns: string[] = [
    "images",
    "name",
    "professional",
    // "biography",
    "status",
    "Edit",
  ];

  changeDate(event) {}

  ngAfterViewInit() {}

  // delete(id) {
  //   this.http.delete("/api/v1/contestants/info?id=" + id);
  // }
}
