import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Services} from "../services.model";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = 'http://localhost:8080/api/services';

  constructor(private http: HttpClient) {
  }

  getAllServices() {
    return this.http.get<Services[]>(this.baseUrl);
  }

}
