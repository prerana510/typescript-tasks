var EmplManagement = /** @class */ (function () {
    function EmplManagement() {
        this.employees = [];
    }
    EmplManagement.prototype.addEmployee = function (name, email, department, underTraining, designation, salary) {
        var newEmpl = {
            id: EmplManagement.idCounter++,
            name: name,
            email: email,
            department: department,
            underTraining: underTraining,
            designation: designation,
            salary: salary
        };
        this.employees.push(newEmpl);
        console.log("Employee ".concat(name, " added in ").concat(department));
    };
    EmplManagement.prototype.getEmployeesByDepartment = function (department) {
        return this.employees.filter(function (emp) { return emp.department === department; });
    };
    EmplManagement.prototype.getTotalSalary = function (department) {
        var emplInDept = this.getEmployeesByDepartment(department);
        return emplInDept.reduce(function (total, empl) { return total + empl.salary; }, 0);
    };
    EmplManagement.idCounter = 0;
    return EmplManagement;
}());
var emplManagement = new EmplManagement();
emplManagement.addEmployee("Riya", "riya@gmail.com", "IT", true, "Developer I", 35000);
emplManagement.addEmployee("Geeta", "geeta@gmail.com", "Marketing", true, "Intern", 15000);
emplManagement.addEmployee("Deepa", "deepa@gmail.com", "Sales", false, "Manager", 65000);
emplManagement.addEmployee("Priya", "priya@gmail.com", "Marketing", false, "Team Lead", 45000);
emplManagement.addEmployee("Arthi", "arthi@gmail.com", "IT", false, "Developer II", 55000);
console.log("Employees in IT department", emplManagement.getEmployeesByDepartment("IT"));
console.log("Employees in Marketing department", emplManagement.getEmployeesByDepartment("Marketing"));
console.log("Employees in Sales department", emplManagement.getEmployeesByDepartment("Sales"));
console.log("Total salary for IT department", emplManagement.getTotalSalary("IT"));
console.log("Total salary for Marketing department", emplManagement.getTotalSalary("Marketing"));
console.log("Total salary for Sales department", emplManagement.getTotalSalary("Sales"));
