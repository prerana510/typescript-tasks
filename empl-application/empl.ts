interface empl {
    id: number;
    name: string;
    email: string;
    department: string;
    underTraining: boolean;
    designation: string | null;
    salary: number;
}

class EmplManagement {
    employees: empl[] = [];
    static idCounter = 0;

    addEmployee(name: string, email: string, department: string, underTraining: boolean, designation: string, salary: number): void {
        const newEmpl: empl = {
            id: EmplManagement.idCounter++,
            name,
            email,
            department,
            underTraining,
            designation,
            salary
        };
        this.employees.push(newEmpl);
        console.log(`Employee ${name} added in ${department}`);
    }
    getEmployeesByDepartment(department: string): empl[] {
        return this.employees.filter(emp => emp.department === department);
    }
    getTotalSalary(department: string): number {
        const emplInDept = this.getEmployeesByDepartment(department);
        return emplInDept.reduce((total, empl) => total + empl.salary,0);
    }
}

const emplManagement = new EmplManagement();
emplManagement.addEmployee("Riya","riya@gmail.com","IT",true,"Developer I",35000);
emplManagement.addEmployee("Geeta","geeta@gmail.com","Marketing",true,"Intern",15000);
emplManagement.addEmployee("Deepa","deepa@gmail.com","Sales",false,"Manager",65000);
emplManagement.addEmployee("Priya","priya@gmail.com","Marketing",false,"Team Lead",45000);
emplManagement.addEmployee("Arthi","arthi@gmail.com","IT",false,"Developer II",55000);

console.log("Employees in IT department", emplManagement.getEmployeesByDepartment("IT"));
console.log("Employees in Marketing department", emplManagement.getEmployeesByDepartment("Marketing"));
console.log("Employees in Sales department", emplManagement.getEmployeesByDepartment("Sales"));

console.log("Total salary for IT department", emplManagement.getTotalSalary("IT"));
console.log("Total salary for Marketing department", emplManagement.getTotalSalary("Marketing"));
console.log("Total salary for Sales department", emplManagement.getTotalSalary("Sales"));


