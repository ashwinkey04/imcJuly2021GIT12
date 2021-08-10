import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../../dataservice.service";
import { NgForm } from "@angular/forms";

declare var $: any;

@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  m: any;
  top3players: Array<any> = [{}, {}, {}];
  top10players: any;
  top1players: boolean = false;
  tasklist: any;
  contestantsList: any;
  titledata: any;
  welcomeMsg: any;
  images: any[] = [];
  image = "images";
  formdata = new FormData();

  constructor(private http: DataserviceService) {}
  ip: any = this.http.ip();


  ngOnInit(): void {
    this.get();
    //this.eventList();
  }

  onSubmit(f: NgForm) {
    console.log(this.welcomeMsg);
      this.http
        .put("/api/v1/welcome/update?uid=61014ce5926661823ec59481", {message: this.welcomeMsg})
        .subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }
        );
        alert("Welcome Message Updated!!");
  }

  

  get() {
    //Task List
    this.http
      .get("/api/v1/task?language=both&status=" + "live" + "&search=" + " ")
      .subscribe((data) => {
        let data1 = data.json();
        this.tasklist = data1.taskList;
        console.log("this.tasklist", data1);
        for (let i = 0; i < this.tasklist.length; i++) {
          let name = this.http.ip() + this.tasklist[i].images;
          let taskname = this.tasklist[i].name;
          this.images.push({ image: name, thumbImage: name, title: taskname });
        }
        console.log("images", this.images);
      });

    //Contestants List
    this.http
      .get(
        "/api/v1/contestants?search=" + "" + "&language=both&status=" + "all"
      )
      .subscribe((data) => {
        let data1 = data.json();
        this.contestantsList = data1.contestantList;
      });

    //Tile data
    this.http.get("/api/v1/dashboard/tiles").subscribe((data) => {
      this.titledata = data.json();
    });

    this.http.get("/api/v1/welcome").subscribe((data)=> {
      let data1 = data.json();
      //console.log(data1.messageList[0].message);
      this.welcomeMsg = data1.messageList[0].message;
      console.log(this.welcomeMsg);
    })

    //top 3 players
    this.http.get("/api/v1/top3/ranking").subscribe((data) => {
      let data1 = data.json();
      if (data1.rankingList.length >= 3) {
        this.top1players = true;
      }
      console.log(this.top1players);
      this.top3players = data1.rankingList;
      console.log(this.top3players);
    });

    this.http.get("/api/v1/top10/ranking").subscribe((data) => {
      let data1 = data.json();
      this.top10players = data1.rankingList;
      console.log(this.top10players);
    });
  }
}
