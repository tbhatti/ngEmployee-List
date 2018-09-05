import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs'

var EmployeesList = require('./employees.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employees-list';
  employees = EmployeesList;
  employeeData = {};
  constructor(private modal: NgbModal) { }

  toggleEmployee(employee) {
    this.employees = this.employees.map((emp) => {
      if (employee.id === emp.id) {
        employee.opened = !employee.opened
        return employee
      } else {
        emp.opened = false;
        return emp;
      }
    })

  }

  showEmployeeDetails(modalContent, employee) {
    console.log('EMPLOYEE', employee)
    this.employeeData = {
      employee
    };
    this
      .modal
      .open(modalContent, { size: 'lg' })
  }
}
