import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {RegisterComponent} from './Register/register.component';
import {EmployeeDetailsComponent} from './EmployeeDetails/employeeDetails.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  const routes:Routes =[
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent},
    { path: 'allEmployees', component: EmployeeDetailsComponent  }
  ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RegisterComponent,
        EmployeeDetailsComponent,
        HeaderComponent,
        FooterComponent
      ],
      imports:[
        RouterModule.forRoot(routes),HttpModule, FormsModule
      ],
      providers :[{
        provide : APP_BASE_HREF, useValue:'/'
      }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
