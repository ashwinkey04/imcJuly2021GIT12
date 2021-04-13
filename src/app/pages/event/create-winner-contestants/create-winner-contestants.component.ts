import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataserviceService } from "../../../dataservice.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "ngx-create-winner-contestants",
  templateUrl: "./create-winner-contestants.component.html",
  styleUrls: ["./create-winner-contestants.component.scss"],
})
export class CreateWinnerContestantsComponent implements OnInit {
  name: string;
  selectedItem = "";
  date: any;
  changeddate: any;
  contestants: any;
  contestantsName: any[] = [];
  taskList: any;
  taskname: any;
  WinnerName: any;
  id: any;
  id1: any;
  spinner: boolean = false;

  constructor(
    private http: DataserviceService,
    private route: ActivatedRoute,
    private httpRouter: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
      console.log(this.id);
    });
    this.contestantsList();
    this.TaskList();
    this.getTaskInfo();
  }

  Winner(form: NgForm) {
    this.spinner = true;
    this.id1 = form.value.taskname;
    //console.log(this.id1);
    let Winner = {
      winningContestants: form.value.WinnerName,
    };
    this.http
      .post("/api/v1/task/winningcontestant?id=" + this.id1, Winner)
      .subscribe((data) => {
        console.log(data);
        this.spinner = false;
        setTimeout(() => {
          this.spinner = false;
          this.httpRouter.navigate(["/pages/event/event-list"]);
        }, 1000);
      });

    console.group(form.value);
  }

  contestantsList() {
    this.http
      .get("/api/v1/contestants?search=&language=both")
      .subscribe((data) => {
        let data1 = data.json();
        this.contestants = data1.contestantList;
        // for (let i = 0; i < this.contestants.length; i++) {
        //   //console.log(this.contestants[i].name);
        //   this.contestantsName.push(this.contestants[i].name);
        // }
        // console.log(this.contestants);
      });
  }

  TaskList() {
    this.http.get("/api/v1/task?language=both").subscribe((data) => {
      let data1 = data.json();
      this.taskList = data1.taskList;
      // console.log(data1.taskList);
    });
  }

  getTaskInfo() {
    this.http
      .get("/api/v1/task/info?language=both&id=" + this.id)
      .subscribe((data) => {
        console.log(data);
        let data1 = data.json();
        this.taskname = data1.data._id;
        this.WinnerName = data1.data.winningContestants;
      });
  }

  ChangedDate(event) {}
}
