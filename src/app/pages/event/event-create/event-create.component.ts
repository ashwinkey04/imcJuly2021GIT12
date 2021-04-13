import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "ngx-event-create",
  templateUrl: "./event-create.component.html",
  styleUrls: ["./event-create.component.scss"],
})
export class EventCreateComponent implements OnInit {
  selectedItem = "";
  imgurl: any;
  uploadedFiles: any;

  files: File[] = [];

  constructor() {}

  ngOnInit(): void {}

  EventName: string;

  Create(form: NgForm) {}

  // file(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);

  //     reader.onload = (event) => {
  //       this.imgurl = event.target.result;
  //     };
  //   }

  //   this.file = event.target.files[0];
  // }

  // filesDropped(files: any) {
  //   this.uploadedFiles = files;
  // }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
