import { Component ,OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeDetailsService} from './employeeDetails.service'

@Component({
  selector: 'app-employeeDetails',
  templateUrl: './employeeDetails.component.html',
  styleUrls: ['./employeeDetails.component.css'],
  providers :[EmployeeDetailsService]
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeDetailsService : EmployeeDetailsService) { }
  employeesList :any = []
  ngOnInit() {
      this.employeeDetailsService.displayAllEmployees().then(data=>{this.employeesList  = data;
      console.log("data found",this.employeesList);});
  }
  }

