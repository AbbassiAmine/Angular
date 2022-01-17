import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Services} from "../../services.model";

@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.component.html',
  styleUrls: ['./addservices.component.css']
})
export class AddservicesComponent implements OnInit {

  private service: Services = new Services();

  constructor() { }

  ngOnInit(): void {
    // addServices(this.service: Services): Observable<>{
    //   return this.http.post<User>(this.baseUrl, Services);
    // }
  }

}
