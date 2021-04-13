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
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.scss"],
})
export class EntryComponent implements OnInit {
  name: string;
  professional: string;
  biography: string;
  name1: string;
  professional1: string;
  biography1: string;
  status: boolean = true;
  statusValue: string;
  imgurl: any = null;
  formdata = new FormData();
  type: string;
  contestantsdata: any;
  id1: any;
  file1: any;
  index: number = 0;
  changedImage: boolean = false;
  spinner: boolean = false;
  nativelanguage: string;

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
      if (this.type == "update") {
        this.get();
      }
    });
    // let boolean = localStorage.getItem("boolean");
    // if (boolean == "true") {
    //   console.log("hello");
    // }
    // localStorage.setItem("boolean", "false");
  }

  get() {
    this.http
      .get("/api/v1/contestants/info?id=" + this.id1 + "&search=&language=both")
      .subscribe((data1) => {
        let body = data1.json();
        console.log(body);
        this.contestantsdata = body.data;
        console.log(this.contestantsdata);
        this.name = this.contestantsdata.name;
        this.professional = this.contestantsdata.professional;
        this.biography = this.contestantsdata.biography;
        this.nativelanguage = this.contestantsdata.nativeLanguage;
        this.name1 = this.contestantsdata.translation[this.nativelanguage].name;
        this.biography1 = this.contestantsdata.translation[
          this.nativelanguage
        ].biography;
        this.professional1 = this.contestantsdata.translation[
          this.nativelanguage
        ].professional;
        this.status = this.contestantsdata.status == "active" ? true : false;
        this.imgurl = this.http.ip() + this.contestantsdata.images;
        // var reader = new FileReader();
        // reader.readAsDataURL(this.contestantsdata.images);
        this.files = [];
        // reader.onload = (event) => {
        //   console.log(this.imgurl);
        //   this.imgurl = event.target.result;
        // };
        // this.files.push(...[this.imgurl]);
        console.log(this.files);
      });
  }
  onChange(event) {
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);

    //   reader.onload = (event) => {
    //     console.log(this.imgurl);
    //     this.imgurl = event.target.result;
    //   };
    // }

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
        biography: form.value.biography,
        professional: form.value.professional,
        status: form.value.status,
        translation: {
          name: form.value.name1,
          biography: form.value.biography1,
          professional: form.value.professional1,
        },
      };
      console.log(body);
      let apibody = JSON.stringify(body);
      this.formdata.append("contestantInfo", apibody);
      this.formdata.append("image", this.file1);
      this.http.post("/api/v1/contestants", this.formdata).subscribe(
        (data) => {
          console.log(data), (this.spinner = false);
          setTimeout(() => {
            (this.spinner = false),
              this.httpRouter.navigate(["/pages/contestants/list"]);
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
        biography: form.value.biography,
        professional: form.value.professional,
        status: form.value.status,
        imageChanged: this.changedImage,
        translation: {
          name: form.value.name1,
          biography: form.value.biography1,
          professional: form.value.professional1,
        },
      };
      let apibody = JSON.stringify(data1);
      console.log(data1);
      this.formdata.append("contestantInfo", apibody);
      this.formdata.append("image", this.file1);
      this.http
        .put("/api/v1/contestants?id=" + this.id1, this.formdata)
        .subscribe((data) => {
          console.log(data.json());
          setTimeout(() => {
            this.spinner = false;
            this.httpRouter.navigate(["/pages/contestants/list"]);
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

    //   this.index += 1;
    //   this.toastrService.show(status || "Success", `Toast ${this.index}`, {
    //     position,
    //     status,
    //   });
  }
}
