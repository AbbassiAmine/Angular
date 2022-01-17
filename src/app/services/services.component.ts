import { Component, OnInit } from '@angular/core';
import {ServicesService} from "./services.service";
import {Observable} from "rxjs";
import {Services} from "../services.model";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Services[] | undefined;

  constructor(private servicesService : ServicesService) { }

  ngOnInit(): void {
    console.log('All services ');
    this.servicesService.getAllServices().subscribe(data =>{
      console.log(data);
      this.services = data;
    })
  }


}
