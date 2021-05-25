import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: { icon: "dashboard6", pack: "flaticon" },
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Rank View",
    icon: { icon: "success", pack: "flaticon" },
    link: "/pages/rank-view/list",
  },
  {
    title: "Players",
    icon: { icon: "user", pack: "flaticon" },
    link: "/pages/players/players-list",
  },
  {
    title: "Contestants",
    icon: { icon: "user-1", pack: "flaticon" },
    link: "/pages/contestants/list",
  },
  {
    title: "Tasks",
    icon: { icon: "tasks", pack: "fa" },
    // icon: { icon: "party1", pack: "flaticon" },
    // icon: { icon: "fa-tasks", pack: "fa" },
    // <i class="fa fa-tasks" aria-hidden="true"></i>
    link: "/pages/event/event-list",
  },
  {
    title: "Events",
    icon: { icon: "party1", pack: "flaticon" },
    link: "/pages/show/show-list",
  },
  {
    title: "Advertisment",
    icon: { icon: "newspaper", pack: "flaticon" },
    link: "/pages/advertisment/list",
  },
  {
    title: "Reports",
    icon: { icon: "newspaper", pack: "flaticon" },
    link: "/pages/report/report-list",
  },
];
