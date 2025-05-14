"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Enterprise = void 0;
var Enterprise = /** @class */ (function () {
    function Enterprise(name, employees) {
        this.employees = [];
        this.name = name;
        this.employees = employees;
    }
    Enterprise.prototype.getName = function () {
        return this.name;
    };
    Enterprise.prototype.getEmployees = function () {
        return this.employees;
    };
    return Enterprise;
}());
exports.Enterprise = Enterprise;
var Employee = /** @class */ (function () {
    // atalhos
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
exports.Employee = Employee;
var employee1 = new Employee("John Doe", 30, 50000);
var employee2 = new Employee("Jane Smith", 25, 60000);
var listOfEmployees = [employee1, employee2];
var Facebook = new Enterprise("Facebook", listOfEmployees);
console.log(Facebook.getName());
console.log(Facebook.getEmployees());
