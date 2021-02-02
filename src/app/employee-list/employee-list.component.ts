import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';
import { EmployeeService } from './../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  errorMessage: string;

  constructor(private empService: EmployeeService) {}
  
  ngOnInit(): void {
    this.empService.getEmployeesList()
      .subscribe(employees => {
        this.employees = employees;
        console.log(this.employees);
      },
      error => this.errorMessage = <any>error);
  }
}