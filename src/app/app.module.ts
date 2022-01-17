import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { EmployeComponent } from './employe/employe.component';
import { CongesComponent } from './conges/conges.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { AddservicesComponent } from './services/addservices/addservices.component';
import { UpdateservicesComponent } from './services/updateservices/updateservices.component';
import { DeleteservicesComponent } from './services/deleteservices/deleteservices.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    EmployeComponent,
    CongesComponent,
    UserComponent,
    AddservicesComponent,
    UpdateservicesComponent,
    DeleteservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
