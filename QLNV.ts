enum Gender {
    MALE,
    FEMALE,
    OTHER
}

class Employee {
    fullName: string = "";
    gender: Gender = Gender.OTHER;
    birthday?: Date;
    email: string = "";
    phoneNumber: string = "";

    constructor(fullName: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
    }
}
let employeeList: Employee[] = [];
employeeList.push(new Employee("Đàm Thanh Tùng", Gender.MALE, new Date("1990-09-19"), "tungdam@gmail.com", "0123456789"));
employeeList.push(new Employee("Lê Tràng Đại", Gender.FEMALE, new Date("1991-10-12"), "daile@gmail.com", "0123456790"));
employeeList.push(new Employee("Đoàn Ngọc Duy", Gender.OTHER, new Date("1990-09-19"), "duydoan@gmail.com", "0123456791"));
function showEmployee(employee: Employee) {
    console.log(employee);
}

employeeList.forEach(showEmployee);
employeeList.splice(1,1)
employeeList.forEach(showEmployee)