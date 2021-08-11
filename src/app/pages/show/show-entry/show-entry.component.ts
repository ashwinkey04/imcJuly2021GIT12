import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DataserviceService } from "../../../dataservice.service";
import { ThemePalette } from "@angular/material/core";
import * as moment from "moment";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "ngx-show-entry",
  templateUrl: "./show-entry.component.html",
  styleUrls: ["./show-entry.component.scss"],
})
export class ShowEntryComponent implements OnInit {
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
  stepHours = [1, 2, 3, 4, 5];
  stepMinutes = [1, 5, 10, 15, 20, 25];
  stepSeconds = [1, 5, 10, 15, 20, 25];

  defaultLanguage: string = "English";
  id: any;
  language: any;
  eventName: string;
  countryName: string;
  favCount: string;
  imgurl: any;
  logourl: any;
  frameurl: any;
  type: any;
  file1: any;
  files: File[] = [];
  file2: any;
  file3: any;
  files1: File[] = [];
  files2: File[] = [];
  lanDropdown: any;
  changedImage: boolean = false;
  status: boolean = false;
  format: boolean = false;
  spinner: boolean = false;
  enddaytime1: any;
  startdaytime1: any;
  rules: any;
  description: any;
  nativeName: any;
  nativeRules: any;
  nativeDescription: any;
  changedImage1: boolean = false;
  changedImage2: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private http: DataserviceService,
    private httproute: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.type = params["type"];
      this.id = params["id"];
    });
    this.get();
    this.eventList();
  }

  onChange(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    this.changedImage = true;
    this.file1 = event.addedFiles[0];
    console.log(this.file1);
  }
  onLogoChange(event) {
    console.log(event);
    this.files1.push(...event.addedFiles);

    this.changedImage1 = true;
    this.file2 = event.addedFiles[0];
    console.log(this.file2);
  }
  onFrameChange(event) {
    console.log(event);
    this.files2.push(...event.addedFiles);

    this.changedImage2 = true;
    this.file3 = event.addedFiles[0];
    console.log(this.file3);
  }

  SelectionItem(event) {
    console.log(event);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  showform(form: NgForm) {
    //console.log(form.value);
    form.value.enddaytime = moment(form.value.enddaytime).format(
      "ddd MMM DD YYYY hh:mm:ss"
    );
    form.value.startdaytime = moment(form.value.startdaytime).format(
      "ddd MMM DD YYYY hh:mm:ss"
    );
    form.value.format === true
    ? (form.value.format = "week")
    : (form.value.format = "day");
    form.value.status === true
      ? (form.value.status = "active")
      : (form.value.status = "inactive");
    console.log(form.value);
    if (this.type == "update2") {
      let body: any = {
        name: form.value.eventName,
        country: form.value.countryName,
        favCount: form.value.favCount,
        language: [this.defaultLanguage, form.value.lanDropdown],
        rules: form.value.rules,
        description: form.value.description,
        startAt: form.value.startdaytime,
        endAt: form.value.enddaytime,
        status: form.value.status,
        format: form.value.format,
        imageChanged: this.changedImage,
        logoChanged: this.changedImage1,
        frameChanged: this.changedImage2,
        translation: {
          name: form.value.nativeName,
          rules: form.value.nativeRules,
          description: form.value.nativeDescription,
        },
      };
      console.log(body);
      let apibody = JSON.stringify(body);
      this.formdata.append("eventInfo", apibody);
      this.formdata.append("image", this.file1);
      this.formdata.append("logo", this.file2);
      this.formdata.append("frame",this.file3);
      this.http
        .put("/api/v1/event/update?id=" + this.id, this.formdata)
        .subscribe(
          (data) => {
            console.log(data);
            setTimeout(() => {
              this.httproute.navigate(["/pages/show/show-list"]);
            }, 1000);
          },
          (err) => {
            console.log(err);
          }
        );
      this.changedImage = false;
      this.changedImage1 = false;
      this.changedImage2 = false;
    }
  }

  eventList() {
    this.http.get("/api/v1/event/info?id=" + this.id).subscribe((data) => {
      // console.log(data);
      let data1 = data.json();
      console.log(data1.data);
      this.eventName = data1.data.name;
      this.countryName = data1.data.country;
      this.favCount = data1.data.favCount;
      this.startdaytime = data1.data.startedDate;
      this.enddaytime = data1.data.endDate;
      this.rules = data1.data.rules;
      this.description = data1.data.description;
      this.nativeName = data1.data.translation.name;
      this.nativeRules = data1.data.translation.rules;
      this.nativeDescription = data1.data.translation.description;
      this.status = data1.data.status == "active" ? true : false;
      this.format = data1.data.format == "week" ? true : false;
      this.imgurl = this.http.imageip() + data1.data.banner;
      this.lanDropdown = data1.data.language[1];
      this.logourl = this.http.imageip() + data1.data.logo;
      this.frameurl = this.http.imageip() + data1.data.frame;
    });
  }

  get() {
    this.http.get("/api/v1/language/withoutEnglish").subscribe((data) => {
      let data1 = data.json();
      this.language = data1.languageList;
    });
  }

  EndDate(event) {
    this.enddaytime1 = moment(event.value).format("ddd MMM DD YYYY hh:mm:ss");
    console.log(this.enddaytime);
  }
  StartDate(event) {
    this.startdaytime1 = moment(event.value).format("ddd MMM DD YYYY hh:mm:ss");
    console.log(event.value);
  }
}
