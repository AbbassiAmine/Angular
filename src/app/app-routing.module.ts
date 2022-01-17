import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from "./services/services.component";
import {EmployeComponent} from "./employe/employe.component";
import {CongesComponent} from "./conges/conges.component";
import {UserComponent} from "./user/user.component";




const routes: Routes = [
  {
    path: 'Services',
    component: ServicesComponent
  },
  {
    path: 'Employe',
    component: EmployeComponent
  },
  {
    path: 'Conges',
    component: CongesComponent
  },
  {
    path: 'User',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
