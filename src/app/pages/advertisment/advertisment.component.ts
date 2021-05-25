import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'ngx-advertisment',
//   templateUrl: './advertisment.component.html',
//   styleUrls: ['./advertisment.component.scss']
// })
@Component({
  selector: 'ngx-advertisment',
  template: `<router-outlet></router-outlet>`,
})
export class AdvertismentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
