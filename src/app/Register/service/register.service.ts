import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Employee} from '../../employee';
import 'rxjs/add/operator/map'


@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  registerEmployee(employee : Employee){
    console.log("inside registerEmployee service");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Acces':'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:8080/rest/employee/register/",employee,options).map(res=> res.json());
  }
}
