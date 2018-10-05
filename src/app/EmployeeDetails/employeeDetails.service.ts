import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class EmployeeDetailsService {

  constructor(private http: Http) { }

  
  displayAllEmployees(){
    console.log("inside displayAllEmployees service");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Acces':'application/json' });
    let options = new RequestOptions({ headers: headers });
//    return this.http.get("http://localhost:8080/rest/employee/getAllEmployees/").map((res=>
//    {
//        var result = res.json;
//        console.log(result);
//        return result;
//     }));
 return this.http.get("http://localhost:8080/rest/employee/getAllEmployees/").toPromise()
 .then(response => response.json())
 .catch(this.handleError);
  }
private handleError(error: any): Promise<Array<any>> {
 console.error('An error occurred', error);
 return Promise.reject(error.message || error);
 }
}
