import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    id: null,
    name: null,
    email: null,
    dept: null
  };

  constructor(private employeeService: EmployeeService, private empRouter: Router) {
      
  }

  ngOnInit() {
  }

  //newEmployee(): void {
    //this.submitted = false;
    //this.employee = new Employee();
  //}

  //save() {
    //this.employeeService.addEmployee(this.employee)
      //.subscribe(data => console.log(data), error => console.log(error));
    //this.employee = new Employee();
  //}
  saveEmployee(employee: Employee): void {
    this.employeeService.addEmployee(this.employee).subscribe((response) => {
      console.log('response from post data is ', response);
    },(error)=>{
      console.log('error: ', error)
    })
    this.empRouter.navigate(['employees']);
  }

  //onSubmit() {
    //this.submitted = true;
    //this.save();
  //}
} 