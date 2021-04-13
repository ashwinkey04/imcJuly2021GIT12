import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-show",
  template: `<router-outlet></router-outlet>`,
})
export class ShowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
