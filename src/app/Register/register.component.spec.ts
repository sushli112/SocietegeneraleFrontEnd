import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {By} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let element : HTMLElement;
  const testForm = <NgForm>{
      value: {
          firstName: "Hello",
          lastName: "World",
          dateOfBirth : "05/07/1991",
          dept:"nitro",
          gender :"male"
      }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[HttpModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

it('should call the onSubmit method', async(() => {
     fixture.detectChanges();
     spyOn(component,'register');
     element = fixture.debugElement.query(By.css('button')).nativeElement;
     element.click();
    expect(component.register).toHaveBeenCalledTimes(1);
  }));
});
