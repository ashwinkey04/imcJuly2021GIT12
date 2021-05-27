import { Injectable, PACKAGE_ROOT_URL } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: "root",
})
export class DataserviceService {
  token: any;
  header = new Headers();
  eventId: any;

  ip() {
    let ipaddrs = "http://192.168.86.49:3250";
    let ipaddrs1 = "http://103.99.149.26:3250";
    let ipaddrs2 = "http://173.224.67.115:3250";

    let ipaddrs3 = "https://demo.emeetify.com:82";
    let ipaddrs4 = "http://localhost:3250";
    return ipaddrs3;
  }
  imageip() {

    let ipaddrs2 = "http://173.224.67.115:3250";
    let ipaddrs4 = "https://demo.emeetify.com:82/images";

    return ipaddrs4;
  }

  constructor(private _http: Http) {}

  get(url) {
    let header = new Headers();
    // let xaccessToken = localStorage.getItem("loginToken");
    // this.token = xaccessToken;
    // console.log(this.token);
    this.eventId = localStorage.getItem("Event_Id");
    let xaccessToken = JSON.parse(localStorage.getItem("loginToken"));
    console.log(xaccessToken.token);
    header.append("x-access-token", xaccessToken.token);
    header.append("app", "admin");
    header.append("show",  this.eventId);
    // header.append("Access-Control-Allow-Origin", "*");
    return this._http.get(this.ip() + url, {
      headers: header,
    });
  }

  post(url, data) {
    let header = new Headers();
    let xaccessToken = JSON.parse(localStorage.getItem("loginToken"));
    this.eventId = localStorage.getItem("Event_Id");
    // this.token = xaccessToken;
    // console.log(this.token);
    header.append("x-access-token", xaccessToken.token);
    header.append("app", "admin");
    // header.append("content-type", "multipart/form-data");
    header.append("Accept", "multipart/form-data");
    // header.append("show", "6014d51a6b5346296ce3067b");
    header.append("show", this.eventId);
    return this._http.post(this.ip() + url, data, {
      headers: header,
    });
  }

  put(url, data) {
    let header = new Headers();
    let xaccessToken = JSON.parse(localStorage.getItem("loginToken"));
    this.eventId = localStorage.getItem("Event_Id");
    // this.token = xaccessToken.token;
    header.append("x-access-token", xaccessToken.token);
    header.append("app", "admin");
    header.append("Accept", "multipart/form-data");
    // header.append("content-type", "application/json");
    header.append("show", this.eventId);
    return this._http.put(this.ip() + url, data, {
      headers: header,
    });
  }

  delete(url) {
    return this._http.delete(this.ip() + url);
  }
}
