import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RegisterComponent} from './Register/register.component';
import {EmployeeDetailsComponent} from './EmployeeDetails/employeeDetails.component'


export const routes: Routes=[
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'allEmployees', component: EmployeeDetailsComponent  }
  ]
