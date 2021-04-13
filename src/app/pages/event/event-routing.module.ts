import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateFavContestantsComponent } from "./create-fav-contestants/create-fav-contestants.component";
import { EventCreateComponent } from "./event-create/event-create.component";
import { EventImageUpdateComponent } from "./event-image-update/event-image-update.component";
import { EventListComponent } from "./event-list/event-list.component";
import { EventComponent } from "./event.component";
import { WeeklyEventEntryComponent } from "./weekly-event-entry/weekly-event-entry.component";
import { CreateWinnerContestantsComponent } from "./create-winner-contestants/create-winner-contestants.component"

const routes: Routes = [
  {
    path: "",
    component: EventComponent,
    children: [
      {
        path: "event-create",
        component: EventCreateComponent,
      },
      {
        path: "event-list",
        component: EventListComponent,
      },
      {
        path: "event-image-update",
        component: EventImageUpdateComponent,
      },
      {
        path: "weekly-event-entry",
        component: WeeklyEventEntryComponent,
      },
      {
        path: "create-fav-contestants",
        component: CreateFavContestantsComponent,
      },
      {
        path: "create-winner-contestants",
        component: CreateWinnerContestantsComponent ,
      },
      {
        path: "",
        redirectTo: "event-list",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "event-list",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
