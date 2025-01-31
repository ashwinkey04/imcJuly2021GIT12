import { ActiveDescendantKeyManager } from "@angular/cdk/a11y";
import { Component, OnInit, DoCheck } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DataserviceService } from "../../../dataservice.service";
import { NbToastrService } from "@nebular/theme";
// import {map} from 'rxjs/add/operator/map';
// import { map } from 'rxjs/internal/operators/map';
import * as moment from "moment";
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: "ngx-entry",
  templateUrl: "./entryAdvertisment.component.html",
  styleUrls: ["./entryAdvertisment.component.scss"],
})
export class EntryAdvertismentComponent implements OnInit {
  name: string;
  position: string;
  page:string;
  adcount:string;
  link: string;
  status: boolean = true;
  statusValue: string;
  imgurl: any = null;
  formdata = new FormData();
  type: string;
  advertismentdata: any;
  selectedItem:number;
  selectedPageItem:number;
  pagename:any = null;
  positionname:any = null;
  id1: any;
  startdaytime: any;
  enddaytime: any;
  startdaytime1: any;
  enddaytime1: any;
  disabled: false;
  showSpinners = true;
  showSeconds = false;
  touchUi = false;
  enableMeridian = true;
  MinCount: number;
  MaxCount: number;
  maxDate: moment.Moment;
  minDate: moment.Moment;
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1;
  color: ThemePalette = "primary";
  stepHours = [1, 2, 3, 4, 5];
  stepMinutes = [1, 5, 10, 15, 20, 25];
  stepSeconds = [1, 5, 10, 15, 20, 25];
  file1: any;
  index: number = 0;
  changedImage: boolean = false;
  spinner: boolean = false;
  nativelanguage: string;
  evStatus: boolean = false;
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
    { key: 1, name: "Home - Center Left" },
    { key: 2, name: "Home - Bottom" },
    { key: 3, name: "Home - Top Right" },
    { key: 4, name: "Carousel Dashboard" },
    { key: 5, name: "Dashboard - Top Right -2" },
    { key: 6, name: "Dashboard - Top Right -3" },
    { key: 7, name: "Dashboard - Bottom" },
    { key: 8, name: "Favourite-choose - Bottom Left" },
    { key: 9, name: "Select Contestant - Task play - Bottom Left" },
    { key: 10, name: "Task screen - Left" },
    { key: 11, name: "Task screen - Right" },
    { key: 12, name: "Profile - Top Right" },
    { key: 13, name: "Home Page PopUp" },
    { key: 14, name: "Dashboard PopUp" },
    { key: 15, name: "Home Page video-basic" },
    { key: 16, name: "Dashboard video-basic" },
    { key: 17, name: "Home Page video-youtube" },
    { key: 18, name: "Dashboard video-youtube" },
    { key: 19, name: "Claim After" },
    { key: 20, name: "Claim Before" },
  ];

  files: File[] = [];

  constructor(
    private http: DataserviceService,
    private route: ActivatedRoute,
    private httpRouter: Router,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.type = params["type"];
      this.id1 = params["id"];
      this.selectedItem =100;
      this.selectedPageItem=0;
      if (this.type == "update") {
        this.get();
      }
    });

  }

  get() {
    this.http
      .get("/api/v1/advertisment/info?id=" + this.id1)
      .subscribe((data1) => {
        let body = data1.json();
        console.log(body);
        this.advertismentdata = body.data;
        console.log(this.advertismentdata);
        this.name = this.advertismentdata.brandname;
        this.page = this.advertismentdata.page;
        this.evStatus = this.advertismentdata.evStatus== "active" ? true : false;
        let imgArray = this.safeJSONParse(this.advertismentdata.images);
        // this.adcount = this.advertismentdata.adcount;
        this.adcount = "1";
        this.position = this.advertismentdata.position;
        this.link = this.advertismentdata.link;

           this.status = this.advertismentdata.status == "active" ? true : false;
        // this.imgurl = this.http.ip() +"/images" +this.advertismentdata.images;
        this.files = [];

        this.imgurl = [];
        // tslint:disable-next-line: typeof-compare
        console.log(typeof imgArray);
        if (typeof imgArray === 'object') {
          for (let img of imgArray) {
            this.imgurl.push(this.http.ip() + '/images' + img);
          }
        } else {
          this.imgurl = imgArray;
        }

        this.selectedItem=parseInt(this.position);
        this.selectedPageItem=parseInt(this.page);
        console.log(this.files);
      });
  }
  onChange(event) {

    console.log(event);
    this.files.push(...event.addedFiles);

    this.changedImage = true;
    this.file1 = event.addedFiles[0];
    console.log(this.file1);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  Update(form: NgForm) {
    this.spinner = true;
    form.value.evStatus === true
      ? (form.value.evStatus = "active")
      : (form.value.evStatus = "inactive");
      form.value.status === true
      ? (form.value.status = "active")
      : (form.value.status = "inactive");

    //create api
    if (this.type == "create") {
      let l = localStorage.getItem("Event_Id");
      console.log("eventid"+l)
      let body: any = {
        name: form.value.name,
        position: "0",
        page: this.page,
        // adcount: form.value.adcount,
        adcount:"1",
        link: form.value.link,
        status: form.value.status,
        evStatus: form.value.evStatus,
        eventId: l,
      };
      console.log(body);
      let apibody = JSON.stringify(body);
      this.formdata.append("advertismentInfo", apibody);
      // this.formdata.append("image", this.file1);
      for  (let i =  0; i <  this.files.length; i++)  {
        this.formdata.append("image[]",  this.files[i]);
      }
      this.http.post("/api/v1/advertisment", this.formdata).subscribe(
        (data) => {
          console.log(data), (this.spinner = false);
          setTimeout(() => {
            (this.spinner = false),
              this.httpRouter.navigate(["/pages/advertisment/list"]);
          }, 1000);
        },
        (err) => {
          console.log(err), (this.spinner = false);
          // this.httpRouter.navigate(["/pages/contestants/list"]);
        }
      );

      //Update Api
    } else if (this.type == "update") {
      console.log(this.changedImage);
      let l = localStorage.getItem("Event_Id");
      console.log("eventid"+l)
      let data1: any = {
        name: form.value.name,
        position: this.position,
        status: form.value.status,
        page: this.page,
        // adcount: form.value.adcount,
        adcount:"1",
        link: form.value.link,
        evStatus: form.value.evStatus,
        eventId: form.value.evStatus == "active" ? l : 'null',
        imageChanged: this.changedImage,

      };

      let apibody = JSON.stringify(data1);
      console.log(data1);
      this.formdata.append("advertismentInfo", apibody);
      // this.formdata.append("image", this.file1);
      for  (let i =  0; i <  this.files.length; i++)  {
        this.formdata.append('image[]',  this.files[i]);
      }
      this.http
        .put("/api/v1/advertisment?id=" + this.id1, this.formdata)
        .subscribe((data) => {
          console.log(data.json());
          setTimeout(() => {
            this.spinner = false;
            this.httpRouter.navigate(["/pages/advertisment/list"]);
          }, 1000);
        });
      this.changedImage = false;
    }
  }

  showToast(position, status) {
    this.toastrService.show(
      status || "Success",
      "SuccessFully " + this.type == "create" ? "Created" : "Updated",
      {
        position,
        status,
      }
    );

  }

  selectionItem(event) {
  console.log("Event_Id", event);
   this.position = event

  }
  selectionPageItem(event) {
    console.log("Event_Id", event);
     this.page = event

    }
    StartDate(event) {
      this.startdaytime1 = moment(event.value).format("ddd MMM DD YYYY HH:mm:ss");
      console.log(event.value);
    }
    EndDate(event) {
      this.enddaytime1 = moment(event.value).format("ddd MMM DD YYYY HH:mm:ss");
      console.log(this.enddaytime);
    }


    safeJSONParse(data) {
      if (data) {
        if (Array.isArray(data)) {
          return data;
        } else {
          try {
            return JSON.parse(data);
          } catch (e) {
            return [data];
          }
        }
      } else {
        return [];
      }
    }
}

