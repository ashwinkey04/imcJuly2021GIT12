import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../../../dataservice.service";
import { Router, ActivatedRoute } from "@angular/router";

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
      this.status1 = this.PlayerInfo.status == "active" ? true : false;
    });
  }

  changeEvent(event) {
    this.status = event == true ? "active" : "inactive";
  }

  playersUpdate() {
    // let statusInfo = this.status;
    let status = {
      status: this.status,
    };
    console.log(JSON.stringify(status));
    this.http
      .post("/api/v1/user/status?uid=" + this.id, status)
      .subscribe((data) => {
        console.log(data);
        this.route1.navigate(["/pages/players/players-list"]);
      });
  }
}
