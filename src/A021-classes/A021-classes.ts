export class Enterprise {
  private name: string;
  private employees: Employee[] = [];

  constructor(name: string, employees: Employee[]) {
    this.name = name;
    this.employees = employees;
  }

  getName(): string {
    return this.name;
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}

export class Employee {

  // atalhos
  constructor(private name: string, private age: number, private salary: number) {
  }

  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee("John Doe", 30, 50000);
const employee2 = new Employee("Jane Smith", 25, 60000);
const listOfEmployees = [employee1, employee2];
const Facebook = new Enterprise("Facebook", listOfEmployees);
console.log(Facebook.getName());
console.log(Facebook.getEmployees());
