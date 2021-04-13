import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthenticationGuard } from "./authentication.guard";

export const routes: Routes = [
  {
    path: "pages",
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  { path: "", redirectTo: "auth", pathMatch: "full" },
  { path: "**", redirectTo: "auth" },
];

const config: ExtraOptions = {
  useHash: true,
  // onSameUrlNavigation: "reload",
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
