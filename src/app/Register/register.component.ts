import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RegisterService} from '../Register/service/register.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers :[RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(private registerService : RegisterService) { }
  isFormSubmitted = false;
	employee = new Employee();
  

  ngOnInit() {
  }

  register(employeeForm : NgForm){
	   
     this.employee.firstName = employeeForm.controls['firstName'].value;
	   this.employee.lastName = employeeForm.controls['lastName'].value;
	   this.employee.gender = employeeForm.controls['gender'].value;
     this.employee.dateOfBirth = employeeForm.controls['dateOfBirth'].value;
     this.employee.dept = employeeForm.controls['dept'].value;
     this.registerService.registerEmployee(this.employee).subscribe(data=>{return true});
     this.isFormSubmitted = true;
     employeeForm.reset();
  }

}
