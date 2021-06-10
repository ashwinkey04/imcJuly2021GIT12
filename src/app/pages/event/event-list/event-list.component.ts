import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { DataserviceService } from "../../../dataservice.service";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { NbDialogService } from "@nebular/theme";

export interface SearchResponse {}

export interface PeriodicElement {
  text: string;
  Status: string;
  Edit: any;
}

//weekly event
export interface PeriodicElement1 {
  Name: string;
  Total_Change_Count: number;
  Max_Select_Count: number;
  Start_Day_Time: any;
  End_Day_Time: any;
  Status: string;
  Action: any;
}

//Fav Contestants
export interface PeriodicElement2 {
  Name: String;
  Max_Select_Count: number;
  Total_Point: number;
  Reduced_Point: number;
  Action: any;
}

//winner Contestants
export interface PeriodicElement3 {
  Winner_Date: any;
  Winner_Name: string;
  Event_Name: string;
  Total_Winner_Players_Count: number;
  Action: any;
}

const ELEMENT_DATA3: PeriodicElement3[] = [
  {
    Winner_Date: "12-01-2021",
    Winner_Name: "Rio",
    Event_Name: "Best Captian",
    Total_Winner_Players_Count: 2,
    Action: "",
  },
];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {
    Name: "Select Captian",
    Total_Change_Count: 2,
    Max_Select_Count: 4,
    Start_Day_Time: "Thursday & 6pm",
    End_Day_Time: "Friday & 12pm",
    Status: "Active",
    Action: "",
  },
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {
    Name: "Select Fav Contestants",
    Max_Select_Count: 2,
    Total_Point: 2,
    Reduced_Point: 250,
    Action: "",
  },
];

@Component({
  selector: "ngx-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class EventListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private http: DataserviceService,
    private dialogbox: NbDialogService
  ) {}

  expandedElement: SearchResponse | null;

  taskList: Array<any> = [];
  icon: boolean = false;
  ip: any = this.http.ip();
  selectedItem = "all";
  datasource: any;
  boxViewData: any;
  viewStatus: any[] = [
    { key: 0, name: "all" },
    { key: 1, name: "live" },
    { key: 2, name: "active" },
    { key: 3, name: "inactive" },
  ];
  taskStatusView: any = "all";
  search: string = "";

  ngOnInit(): void {
    this.TaskList();
  }

  selectionItem(event) {
    this.taskStatusView = event;
    this.TaskList();
  }

  TaskList() {
    console.log(this.taskStatusView);
    this.http
      .get(
        "/api/v1/task?language=both&status=" +
          this.taskStatusView +
          "&search=" +
          this.search
      )
      .subscribe((data) => {
        let data1 = data.json();
        console.log(data1);
        this.taskList = data1.taskList;
        this.datasource = new MatTableDataSource<PeriodicElement1>(
          this.taskList
        );
        this.datasource.paginator = this.paginator;
        console.log(data1.taskList);
      });
  }

  stringChanged() {
    if (this.search.length >= 3) {
      this.TaskList();
    }
    if (this.search.length == 0) {
      this.TaskList();
    }
  }

  Search() {
    this.TaskList();
  }

  displayedColumns: string[] = ["text", "Status", "Edit"];

  //Weekly Event
  displayedColumns1: string[] = [
    "Week",
    "Name",
    "Total_Change_Count",
    "Max_Select_Count",
    "Start_Day_Time",
    "End_Day_Time",
    "Winner_Name",
    "Status",
    "Action",
  ];
  dataSource1 = ELEMENT_DATA1;

  displayedColumns2: string[] = [
    "Name",
    "Max_Select_Count",
    "Total_Point",
    "Reduced_Point",
    "Action",
  ];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = [
    "Event_Name",
    "Winner_Name",
    "Winner_Date",
    "Total_Winner_Players_Count",
    "Action",
  ];
  dataSource3 = ELEMENT_DATA3;

  // ImageEvent: any[] = [
  //   {
  //     img: "./assets/images/Picture1.png",
  //     eventName: "Select Captian",
  //   },
  //   {
  //     img: "./assets/images/Picture1.png",
  //     eventName: "Select Captian",
  //   },
  //   {
  //     img: "./assets/images/Picture1.png",
  //     eventName: "Select Captian",
  //   },
  //   {
  //     img: "./assets/images/Picture1.png",
  //     eventName: "Select Captian",
  //   },
  //   {
  //     img: "./assets/images/Picture1.png",
  //     eventName: "Select Captian",
  //   },
  // ];

  open(event, dialog) {
    this.http
      .get("/api/v1/task/info?language=both&id=" + event)
      .subscribe((data) => {
        let data1 = data.json();
        // let dialog = data1.data.rules;
        this.boxViewData = data1.data.rules;
        console.log(data1.data);
        this.dialogbox.open(dialog, {
          context: {
            title: "rules",
          },
        });
      });
  }

  toggleResult() {
    this.icon = !this.icon;
  }
}
