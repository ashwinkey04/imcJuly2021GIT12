import { ActiveDescendantKeyManager } from "@angular/cdk/a11y";
import { Component, OnInit, DoCheck } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DataserviceService } from "../../../dataservice.service";
import { NbToastrService } from "@nebular/theme";
// import {map} from 'rxjs/add/operator/map';
// import { map } from 'rxjs/internal/operators/map';

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
  file1: any;
  index: number = 0;
  changedImage: boolean = false;
  spinner: boolean = false;
  nativelanguage: string;
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

        // this.adcount = this.advertismentdata.adcount;
        this.adcount = "1";
        this.position = this.advertismentdata.position;
        this.link = this.advertismentdata.link;

           this.status = this.advertismentdata.status == "active" ? true : false;
        this.imgurl = this.http.ip() +"/images" +this.advertismentdata.images;
        this.files = [];

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
    form.value.status === true
      ? (form.value.status = "active")
      : (form.value.status = "inactive");

    //create api
    if (this.type == "create") {
      let body: any = {
        name: form.value.name,
        position: this.position,
        page: this.page,
        // adcount: form.value.adcount,
        adcount:"1",
        link: form.value.link,
        status: form.value.status
      };
      console.log(body);
      let apibody = JSON.stringify(body);
      this.formdata.append("advertismentInfo", apibody);
      this.formdata.append("image", this.file1);
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
      let data1: any = {
        name: form.value.name,
        position: this.position,
        page: this.page,
        // adcount: form.value.adcount,
        adcount:"1",
        link: form.value.link,
        status: form.value.status,
        imageChanged: this.changedImage,

      };
      let apibody = JSON.stringify(data1);
      console.log(data1);
      this.formdata.append("advertismentInfo", apibody);
      this.formdata.append("image", this.file1);
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
}
