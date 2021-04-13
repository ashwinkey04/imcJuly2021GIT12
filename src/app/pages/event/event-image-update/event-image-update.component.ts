import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataserviceService } from "../../../dataservice.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "ngx-event-image-update",
  templateUrl: "./event-image-update.component.html",
  styleUrls: ["./event-image-update.component.scss"],
})
export class EventImageUpdateComponent implements OnInit {
  EventName: string;
  selectedItem = "";
  taskList: any;
  taskname: any;
  id: any;
  Create(UpdateForm: NgForm) {}

  constructor(
    private http: DataserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
      console.log(this.id);
    });
  }

  TaskList() {
    this.http.get("/api/v1/task?language=both").subscribe((data) => {
      let data1 = data.json();
      this.taskList = data1.taskList;
      console.log(data1.taskList);
    });
  }

  getTaskInfo() {
    this.http
      .get("/api/v1/task/info?language=both&id=" + this.id)
      .subscribe((data) => {
        console.log(data);
        let data1 = data.json();
        this.taskname = data1.data.name;
        //console.log(data1.data);
      });
  }
}
