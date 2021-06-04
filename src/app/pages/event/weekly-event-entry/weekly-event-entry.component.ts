// import { Component, OnInit } from "@angular/core";
// import { Router, ActivatedRoute } from "@angular/router";
// import { NgForm } from "@angular/forms";
// import { ThemePalette } from "@angular/material/core";
// import { DataserviceService } from "../../../dataservice.service";

// import * as moment from "moment";
// @Component({
//   selector: "ngx-weekly-event-entry",
//   templateUrl: "./weekly-event-entry.component.html",
//   styleUrls: ["./weekly-event-entry.component.scss"],
// })
// export class WeeklyEventEntryComponent implements OnInit {
//   weeksList: Array<any> = [];
//   constructor(
//     private httproute: Router,
//     private route: ActivatedRoute,
//     private http: DataserviceService
//   ) { }
//   week: any = null;
//   disabled = false;
//   showSpinners = true;
//   showSeconds = false;
//   touchUi = false;
//   enableMeridian = true;
//   maxDate: moment.Moment;
//   stepHour = 1;
//   stepMinute = 1;
//   stepSecond = 1;
//   color: ThemePalette = "primary";
//   minDate: moment.Moment;
//   startdaytime: any;
//   enddaytime: any;
//   formdata = new FormData();
//   changedImage: boolean = false;
//   stepHours = [1, 2, 3, 4, 5];
//   stepMinutes = [1, 5, 10, 15, 20, 25];
//   stepSeconds = [1, 5, 10, 15, 20, 25];

//   nativeRules: string;
//   name: string;
//   nativeName: string;
//   TotalChangeCount: number;
//   MinSelectCount: number;
//   MaxSelectCount: number;
//   StartDay: string;
//   EndDay: string;
//   StartTime: any;
//   EndTime: any;
//   rules: string;
//   WinnerPoint: number;
//   LosserPoint: number;
//   status: any;
//   type: string;
//   imgurl: any;
//   flagStatus: boolean = false;
//   id: any;
//   language: any;
//   startdaytime1: any;
//   enddaytime1: any;
//   status1: any;
//   contestants: any;
//   WinnerName: any;

//   Imageclick: boolean = false;

//   taskData: any;

//   spinner: boolean = false;

//   file1: any;
//   files: File[] = [];
//   buttondisabled: boolean = false;
//   Enabled: boolean = false;

//   selectedItem = "active";
//   viewStatus: any[] = [
//     { key: 0, name: "active" },
//     { key: 1, name: "inactive" },
//     { key: 2, name: "live" },
//   ];

//   notification: any;
//   notificationNativeLanguage: any;
//   notificationStop: any;
//   notificationStopNativeLanguage: any;
//   selectionItem(event) {
//     this.status1 = event;
//   }

//   ngOnInit(): void {
//     this.route.queryParams.subscribe((params) => {
//       this.type = params["type"];
//       this.id = params["id"];
//     });
//     if (this.type == "update1") {
//       this.Enabled = true;
//       this.get();
//       this.contestantsList();
//     } else {
//       this.getWeek(null);
//     }
//   }

//   contestantsList() {
//     this.http
//       .get("/api/v1/contestants?search=&language=both")
//       .subscribe((data) => {
//         let data1 = data.json();
//         this.contestants = data1.contestantList;
//         console.log(this.contestants)
//       });
//   }

//   getWeek(week) {
//     this.http
//       .get("/api/v1/event/weeks")
//       .subscribe((data) => {
//         var list = data.json();
//         this.weeksList = list.weekList || [];
//         if (week != null) {
//           console
//           console.log("weekList", this.weeksList, this.weeksList.find(w => w == week), week);
//           this.week = this.weeksList.find(w => w == week);
//         }
//       });
//   }

//   get() {
//     this.http
//       .get("/api/v1/task/info?language=both&id=" + this.id)
//       .subscribe((data) => {
//         this.taskData = data.json();
//         // console.log(this.taskData.data);
//         this.name = this.taskData.data.name;
//         this.TotalChangeCount = this.taskData.data.totalChangesAccept;
//         this.MinSelectCount = this.taskData.data.minContestants;
//         this.MaxSelectCount = this.taskData.data.maxContestants;
//         this.startdaytime = this.taskData.data.startAt;
//         this.enddaytime = this.taskData.data.endAt;
//         this.WinnerPoint = this.taskData.data.pointToAdd;
//         this.LosserPoint = this.taskData.data.pointToRemove;
//         this.rules = this.taskData.data.rules;
//         this.language = this.taskData.data.nativeLanguage;
//         this.nativeName = this.taskData.data.translation[this.language].name;
//         this.nativeRules = this.taskData.data.translation[this.language].rules;
//         this.status = this.taskData.data.status;
//         this.flagStatus = this.taskData.data.isFeatured;
//         this.WinnerName = this.taskData.data.winningContestants;
//         this.imgurl = this.http.ip() + this.taskData.data.images;
//         this.getWeek(this.taskData.data.week);
//         this.notification = this.taskData.data.startNotification;
//         this.notificationNativeLanguage = this.taskData.data.translation[this.language].startNotification;
//         // this.notificationStop = this.taskData.data.stopNotification;
//         // this.notificationStopNativeLanguage = this.taskData.data.translation[this.language].stopNotification;
//       });
//   }

//   // Task Entry
//   Task(form: NgForm) {
//     this.spinner = true;
//     this.buttondisabled = true;
//     if (this.type == "create1" && this.Imageclick == true) {
//       let body: any = {
//         name: form.value.name,
//         totalChangesAccept: form.value.TotalChangeCount,
//         maxContestants: form.value.MaxSelectCount,
//         minContestants: form.value.MinSelectCount,
//         startAt: this.startdaytime1,
//         endAt: this.enddaytime1,
//         pointToAdd: form.value.WinnerPoint,
//         pointToRemove: form.value.LosserPoint,
//         rules: form.value.rules,
//         status: this.status1,
//         isFeatured: form.value.flagStatus,
//         week: form.value.week,
//         startNotification: form.value.notification,
//         stopNotification: form.value.notificationStop,
//         translation: {
//           name: form.value.nativeName,
//           rules: form.value.nativeRules,
//           startNotification: form.value.notificationNativeLanguage,
//           stopNotification: form.value.notificationStopNativeLanguage,
//         },
//       };
//       console.log(body);
//       let apibody = JSON.stringify(body);
//       this.formdata.append("taskInfo", apibody);
//       this.formdata.append("image", this.file1);
//       this.http.post("/api/v1/task", this.formdata).subscribe(
//         (data) => {
//           console.log(data.json()), (this.spinner = false);
//           setTimeout(() => {
//             this.spinner = false;
//             this.httproute.navigate(["/pages/event/event-list"]);
//           }, 1000);
//         },
//         (err) => {
//           console.log(err), (this.spinner = false);
//         }
//       );
//     } else if (this.type == "update1") {
//       let data1: any = {
//         name: form.value.name,
//         totalChangesAccept: form.value.TotalChangeCount,
//         maxContestants: form.value.MaxSelectCount,
//         minContestants: form.value.MinSelectCount,
//         startAt: this.startdaytime,
//         endAt: this.enddaytime,
//         imageChanged: this.changedImage,
//         pointToAdd: form.value.WinnerPoint,
//         pointToRemove: form.value.LosserPoint,
//         rules: form.value.rules,
//         status: this.status1,
//         isFeatured: form.value.flagStatus,
//         week: form.value.week,
//         startNotification: form.value.notification,
//         stopNotification: form.value.notificationStop,
//         translation: {
//           name: form.value.nativeName,
//           rules: form.value.nativeRules,
//           startNotification: form.value.notificationNativeLanguage,
//           stopNotification: form.value.notificationStopNativeLanguage,
//         },
//       };
//       console.log(data1);
//       let apibody = JSON.stringify(data1);
//       // console.log(data1);
//       this.formdata.append("taskInfo", apibody);
//       this.formdata.append("image", this.file1);

//       this.http.put("/api/v1/task?id=" + this.id, this.formdata).subscribe(
//         (data) => {
//           console.log(data);
//           this.spinner = false;
//           console.log(form.value.WinnerName, "3")
//           if (form.value.WinnerName != null && form.value.WinnerName != undefined && form.value.WinnerName != '') {
//             console.log(form.value.WinnerName, "2")
//             if (form.value.WinnerName.length > 0) {
//               console.log(form.value.WinnerName, "1")
//               let Winner = {
//                 winningContestants: form.value.WinnerName,
//               };
//               this.http
//                 .post("/api/v1/task/winningcontestant?id=" + this.id, Winner).subscribe((data) => {
//                   console.log(data)
//                   setTimeout(() => {
//                     this.spinner = false;
//                     this.httproute.navigate(["/pages/event/event-list"]);
//                   }, 1000);
//                 })
//             }
//           } else {
//             setTimeout(() => {
//               this.spinner = false;
//               this.httproute.navigate(["/pages/event/event-list"]);
//             }, 1000);
//           }

//         },
//         (err) => {
//           this.spinner = false;
//           console.log(err.json());
//         }
//       );
//       this.changedImage = false;
//     }else{
//       this.spinner = false;
//     }
//   }

//   start(event) {
//     this.StartDay = event;
//     console.log(this.StartDay);
//   }

//   end(event) {
//     this.EndDay = event;
//     console.log(this.EndDay);
//   }

//   onChange(event) {
//     if ((this.type = "create1")) {
//       this.Imageclick = true;
//     }
//     console.log(event);
//     this.files.push(...event.addedFiles);

//     this.changedImage = true;
//     this.file1 = event.addedFiles[0];
//     console.log(this.file1);
//   }

//   onRemove(event) {
//     console.log(event);
//     this.files.splice(this.files.indexOf(event), 1);
//   }

//   StartDate(event) {
//     this.startdaytime1 = moment(event.value).format("ddd MMM DD YYYY HH:mm:ss");
//     console.log(event.value);
//   }
//   EndDate(event) {
//     this.enddaytime1 = moment(event.value).format("ddd MMM DD YYYY HH:mm:ss");
//     console.log(this.enddaytime);
//   }
// }


//new code

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ThemePalette } from "@angular/material/core";
import { DataserviceService } from "../../../dataservice.service";

import * as moment from "moment";
@Component({
  selector: "ngx-weekly-event-entry",
  templateUrl: "./weekly-event-entry.component.html",
  styleUrls: ["./weekly-event-entry.component.scss"],
})
export class WeeklyEventEntryComponent implements OnInit {
  weeksList: Array<any> = [];
  selectedValue: any;
  constructor(
    private httproute: Router,
    private route: ActivatedRoute,
    private http: DataserviceService
  ) { }
  normalType:boolean;
  numberType:boolean;
  week: any = null;
  disabled = false;
  showSpinners = true;
  showSeconds = false;
  touchUi = false;
  enableMeridian = true;
  maxDate: moment.Moment;
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1;
  color: ThemePalette = "primary";
  minDate: moment.Moment;
  startdaytime: any;
  enddaytime: any;
  formdata = new FormData();
  changedImage: boolean = false;
  stepHours = [1, 2, 3, 4, 5];
  stepMinutes = [1, 5, 10, 15, 20, 25];
  stepSeconds = [1, 5, 10, 15, 20, 25];

  nativeRules: string;
  name: string;
  nativeName: string;
  TotalChangeCount: number;
  MinSelectCount: number;
  MaxSelectCount: number;
  StartDay: string;
  EndDay: string;
  StartTime: any;
  EndTime: any;
  rules: string;
  WinnerPoint: number;
  LosserPoint: number;
  status: any;
  type: string;
  imgurl: any;
  flagStatus: boolean = false;
  id: any;
  language: any;
  startdaytime1: any;
  enddaytime1: any;
  status1: any;
  contestants: any;
  WinnerName: any;
  selectoptions: any = [
    { key: 0, name: "0" },
    { key: 1, name: "1" },
    { key: 2, name: "2" },
    { key: 3, name: "3" },
    { key: 4, name: "4" },
    { key: 5, name: "5" },
    { key: 6, name: "6" },
    { key: 7, name: "7" },
    { key: 8, name: "8" },
    { key: 9, name: "9" },
    { key: 10, name: "10" },

  ];
  Imageclick: boolean = false;

  taskData: any;

  spinner: boolean = false;

  file1: any;
  files: File[] = [];
  buttondisabled: boolean = false;
  Enabled: boolean = false;

  selectedItem = "active";
  viewStatus: any[] = [
    { key: 0, name: "active" },
    { key: 1, name: "inactive" },
    { key: 2, name: "live" },
  ];

  notification: any;
  notificationNativeLanguage: any;
  notificationStop: any;
  notificationStopNativeLanguage: any;
  selectionItem(event) {
    this.status1 = event;
  }

  ngOnInit(): void {
    this.normalType = true;
    this.route.queryParams.subscribe((params) => {
      this.type = params["type"];
      this.id = params["id"];
    });
    if (this.type == "update1") {
      this.Enabled = true;
      this.get();
      this.contestantsList();
    } else {
      this.getWeek(null);
    }
  }

  contestantsList() {
    this.http
      .get("/api/v1/contestants?search=&language=both")
      .subscribe((data) => {
        let data1 = data.json();
        this.contestants = data1.contestantList;
        console.log(this.contestants)
      });
  }

  getWeek(week) {
    this.http
      .get("/api/v1/event/weeks")
      .subscribe((data) => {
        var list = data.json();
        this.weeksList = list.weekList || [];
        if (week != null) {
          console
          console.log("weekList", this.weeksList, this.weeksList.find(w => w == week), week);
          this.week = this.weeksList.find(w => w == week);
        }
      });
  }

  get() {
    this.http
      .get("/api/v1/task/info?language=both&id=" + this.id)
      .subscribe((data) => {
        this.taskData = data.json();
        // console.log(this.taskData.data);
        this.name = this.taskData.data.name;
        this.TotalChangeCount = this.taskData.data.totalChangesAccept;
        this.MinSelectCount = this.taskData.data.minContestants;
        this.MaxSelectCount = this.taskData.data.maxContestants;
        this.startdaytime = this.taskData.data.startAt;
        this.enddaytime = this.taskData.data.endAt;
        this.WinnerPoint = this.taskData.data.pointToAdd;
        this.LosserPoint = this.taskData.data.pointToRemove;
        this.rules = this.taskData.data.rules;
        this.language = this.taskData.data.nativeLanguage;
        this.nativeName = this.taskData.data.translation[this.language].name;
        this.nativeRules = this.taskData.data.translation[this.language].rules;
        this.status = this.taskData.data.status;
        this.flagStatus = this.taskData.data.isFeatured;
        this.WinnerName = this.taskData.data.winningContestants;
        this.imgurl = this.http.imageip() + this.taskData.data.images;
        this.getWeek(this.taskData.data.week);
        this.notification = this.taskData.data.startNotification;
        this.notificationNativeLanguage = this.taskData.data.translation[this.language].startNotification;
        this.selectedValue = this.taskData.data.type == undefined ? "normal":this.taskData.data.type;
        // this.notificationStop = this.taskData.data.stopNotification;
        // this.notificationStopNativeLanguage = this.taskData.data.translation[this.language].stopNotification;
        this.status1 = this.status;
      });
  }

  // Task Entry
  Task(form: NgForm) {
    this.spinner = true;
    this.buttondisabled = true;
    if (this.type == "create1" && this.Imageclick == true) {
      let body: any = {
        name: form.value.name,
        totalChangesAccept: form.value.TotalChangeCount,
        maxContestants: form.value.MaxSelectCount,
        minContestants: form.value.MinSelectCount,
        startAt: this.startdaytime1,
        endAt: this.enddaytime1,
        pointToAdd: form.value.WinnerPoint,
        pointToRemove: form.value.LosserPoint,
        rules: form.value.rules,
        status: this.status1,
        isFeatured: form.value.flagStatus,
        week: form.value.week,
        startNotification: form.value.notification,
        stopNotification: form.value.notificationStop,
        type:this.selectedValue,
        translation: {
          name: form.value.nativeName,
          rules: form.value.nativeRules,
          startNotification: form.value.notificationNativeLanguage,
          stopNotification: form.value.notificationStopNativeLanguage,
        },
      };
      console.log("body",body);
      let apibody = JSON.stringify(body);
      this.formdata.append("taskInfo", apibody);
      this.formdata.append("image", this.file1);
      this.http.post("/api/v1/task", this.formdata).subscribe(
        (data) => {
          console.log("data.json()",data.json()), (this.spinner = false);
          setTimeout(() => {
            this.spinner = false;
            this.httproute.navigate(["/pages/event/event-list"]);
          }, 1000);
        },
        (err) => {
          console.log("err",err), (this.spinner = false);
        }
      );
    } else if (this.type == "update1") {
      let data1: any = {
        name: form.value.name,
        totalChangesAccept: form.value.TotalChangeCount,
        maxContestants: form.value.MaxSelectCount,
        minContestants: form.value.MinSelectCount,
        startAt: this.startdaytime,
        endAt: this.enddaytime,
        imageChanged: this.changedImage,
        pointToAdd: form.value.WinnerPoint,
        pointToRemove: form.value.LosserPoint,
        rules: form.value.rules,
        status: this.status1,
        isFeatured: form.value.flagStatus,
        week: form.value.week,
        startNotification: form.value.notification,
        stopNotification: form.value.notificationStop,
        type:this.selectedValue,
        translation: {
          name: form.value.nativeName,
          rules: form.value.nativeRules,
          startNotification: form.value.notificationNativeLanguage,
          stopNotification: form.value.notificationStopNativeLanguage,
        },
      };
      console.log(data1);
      let apibody = JSON.stringify(data1);
      // console.log(data1);
      this.formdata.append("taskInfo", apibody);
      this.formdata.append("image", this.file1);

      this.http.put("/api/v1/task?id=" + this.id, this.formdata).subscribe(
        (data) => {
          console.log(data);
          this.spinner = false;
          console.log(form.value.WinnerName, "3")
          if (form.value.WinnerName != null && form.value.WinnerName != undefined && form.value.WinnerName != '') {
            console.log(form.value.WinnerName, "2");
            console.log(form.value.WinnerName.length);
            if(this.selectedValue == "normal"){
            if (form.value.WinnerName.length > 0) {
              console.log(form.value.WinnerName, "1");
              console.log(typeof(form.value.WinnerName));
              console.log(JSON.stringify(form.value.WinnerName));
              let Winner = {
                winningContestants: form.value.WinnerName,
              };
              console.log("Winner");
              console.log(Winner);
            console.log(JSON.stringify(Winner));
              this.http
                .post("/api/v1/task/winningcontestant?id=" + this.id, Winner).subscribe((data) => {
                  console.log(data)
                  setTimeout(() => {
                    this.spinner = false;
                    this.httproute.navigate(["/pages/event/event-list"]);
                  }, 1000);
                })
            }else{
              console.log("else");
            }
          }else{
            if(form.value.WinnerName < this.contestants.length){
            console.log(typeof(form.value.WinnerName));
            let data = [];
            for(let i=0;i<form.value.WinnerName;i++){
              data.push(this.contestants[i]._id)
            }
            let Winner = {
              // winningContestants: data,
              noOfContestants:form.value.WinnerName
            };
            console.log("Winner");
            console.log(Winner);
            console.log(JSON.stringify(Winner));
            this.http
              .post("/api/v1/task/winningcontestant?id=" + this.id, Winner).subscribe((data) => {
                console.log(data)
                setTimeout(() => {
                  this.spinner = false;
                  this.httproute.navigate(["/pages/event/event-list"]);
                }, 1000);
              })
          }
        }
          } else {
            setTimeout(() => {
              this.spinner = false;
              this.httproute.navigate(["/pages/event/event-list"]);
            }, 1000);
          }

        },
        (err) => {
          this.spinner = false;
          console.log(err.json());
        }
      );
      this.changedImage = false;
    }else{
      this.spinner = false;
    }
  }
  changeEvent(event){
    console.log(event);
    if(event){
      this.numberType = false;
      this.normalType = true;
    }

  }
  changeEvent1(event){
    console.log(event);
    this.selectedValue = event;
    if(event){
      this.numberType = true;
    this.normalType = false;

    }
  }
  start(event) {
    this.StartDay = event;
    console.log(this.StartDay);
  }

  end(event) {
    this.EndDay = event;
    console.log(this.EndDay);
  }

  onChange(event) {
    console.log(this.type);
    if ((this.type == "create1")) {
      this.Imageclick = true;
    }
    console.log("event",event);
    this.files.push(...event.addedFiles);

    this.changedImage = true;
    this.file1 = event.addedFiles[0];
    console.log(this.file1);
    console.log(this.type);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  StartDate(event) {
    this.startdaytime1 = moment(event.value).format("ddd MMM DD YYYY HH:mm:ss");
    console.log(event.value);
  }
  EndDate(event) {
    this.enddaytime1 = moment(event.value).format("ddd MMM DD YYYY HH:mm:ss");
    console.log(this.enddaytime);
  }
}
