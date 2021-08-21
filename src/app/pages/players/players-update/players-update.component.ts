import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../../../dataservice.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "ngx-players-update",
  templateUrl: "./players-update.component.html",
  styleUrls: ["./players-update.component.scss"],
})
export class PlayersUpdateComponent implements OnInit {
  constructor(
    private http: DataserviceService,
    private route: ActivatedRoute,
    private route1: Router
  ) {}
  type: any;
  id: any;
  PlayerInfo: any;
  status1: any;
  status: any;
  name:any;
  username:any;
  email:any;
  eventId: any;
  weeksList: Array<any> = [];
  userWeek: any;
  week: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.type = params["type"];
      this.id = params["id"];
      console.log(this.id);
      if (this.type == "PlayerView") {
        this.get();
      }
    });
  }

  get() {
    console.log(this.id);
    this.http.get("/api/v1/user/details?uid=" + this.id).subscribe((data) => {
      let data1 = data.json();
      this.PlayerInfo = data1.user;
      this.name = this.PlayerInfo.name;
      this.username = this.PlayerInfo.userName;
      this.email = this.PlayerInfo.email;
      console.log(this.name,this.username,this.email);
      this.status1 = this.PlayerInfo.status == "active" ? true : false;
    });
    this.http
    .get("/api/v1/event/weeks").subscribe((data) => {
      var list = data.json();
      this.weeksList = list.weekList || [];
      if (this.week != null) {
        console
        console.log("weekList", this.weeksList, this.weeksList.find(w => w == this.week), this.week);
        this.week = this.weeksList.find(w => w == this.week);
      }
    });

    this.eventId = localStorage.getItem("Event_Id");
    console.log("hello"+this.eventId);

    this.http.get("/api/v1/user/admin/week?uid="+this.id +"&event=" + this.eventId).subscribe((data) => {
      var list = data.json();
      this.userWeek = list.week;
      console.log("week"+list.week);
    });

  }



  changeEvent(event) {
    this.status = event == true ? "active" : "inactive";
  }

  playersUpdate(form: NgForm) {
    // let statusInfo = this.status;
    // let status = {
    //   status: this.status,
    // };
    let status =  {
      "name":form.value.name,
      "email":form.value.email,
      "userName":form.value.username
  }
    let week = {
      "uid": this.id,
      "event": this.eventId,
      "week": form.value.week
    }
    console.log("testing"+JSON.stringify(week));

    console.log(JSON.stringify(status));
     this.http
      .put("/api/v1/user/profile?uid=" + this.id, status)
      .subscribe((data) => {
        console.log(data);
        this.route1.navigate(["/pages/players/players-list"]);
      });
      this.http
      .post("/api/v1/user/week/update" , week)
      .subscribe((data) => {
        console.log(data);
        this.route1.navigate(["/pages/players/players-list"]);
      });
    // https://demo.emeetify.com:82/api/v1/user/profile?
    // this.http
    //   .post("/api/v1/user/status?uid=" + this.id, status)
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.route1.navigate(["/pages/players/players-list"]);
    //   });
  }
}
