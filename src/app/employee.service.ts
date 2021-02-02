import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) {}

//baseUrl = 'http://localhost:4000/employees/add';

/*   private emp: Employee[] = [
      {
        "name": "Sakshee",
        "email": "sakshee@gmail.com",
        "gender": "Female",
        "salary": 25000
      },
      {
        "name": "Amit",
        "email": "amit@gmail.com",
        "gender": "Male",
        "salary": 30000
      },
      {
        "name": "Rohan",
        "email": "rohit@gmail.com",
        "gender": "Male",
        "salary": 20000
      },
      {
        "name": "Swara",
        "email": "swara@gmail.com",
        "gender": "Female",
        "salary": 40000
      },
      {
        "name": "Priyanka",
        "email": "priyanka@gmail.com",
        "gender": "Female",
        "salary": 35000
      }
    
    ];
   */

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:4000/employees')
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

private handleError(err: HttpErrorResponse) {
  let errorMessage = '';
  if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
  } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return Observable.throw(errorMessage);
}

  addEmployee(data): Observable<Object> {
    return this.http.post(`http://localhost:4000/employees/add`, data);
    /* .map((res: Response) => {
      return res;
    }); */
  }

  /* save(employee: Employee) {
    this.emp.push(employee);

  } */

}

