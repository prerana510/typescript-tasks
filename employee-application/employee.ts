type Employee = {
    id: number,
    name: string,
    email: string,
    department: string,
    underTraining: boolean,
    designation: string | null
}

const empl1 : Employee = {
    id: 101,
    name: "Prerana",
    email: "prer@gmail.com",
    department: "IT",
    underTraining: true,
    designation: null
};

console.log(empl1);
