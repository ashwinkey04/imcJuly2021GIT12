import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { DataserviceService } from "../../dataservice.service";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  infoMessage: any;
  userName: any;
  password: any;
  type: string = "password";
  slashed: boolean;
  showPassword = true;
  success: any = false;
  constructor(
    private _http: HttpClient,
    private http: DataserviceService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    console.log(form.value);
    this._http
      .post("http://173.224.67.115:3250/api/v1/admin/login", form.value)
      .subscribe(
        (data) => {
          //console.log(data);
          localStorage.setItem("loginToken", JSON.stringify(data));
          this.route.navigate(["/pages/dashboard"]);
        },
        (err) => {
          console.log(err);
          this.success = true;
          this.infoMessage = err.error.message;
          // console.log("Hello-1");
        }
      );
    // this._http
    // .post("http://103.99.149.26:3250/api/v1/admin/login", form.value)
    // .subscribe((data) => {
    //   console.log(data);
    //   localStorage.setItem("loginToken", JSON.stringify(data));
    // });
  }

  gotoForgotPassword() {}

  getInputType() {
    if (this.showPassword) {
      return "password";
    }
    return "text";
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  passwordShowAndHide() {
    this.showPassword = !this.showPassword;
    // if (this.type == "password") {
    //   this.slashed = true;
    //   this.type = "text";
    // } else {
    //   this.slashed = false;
    //   this.type = "password";
    // }
  }
}
