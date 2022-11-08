class Staff{
    private _name : string;
    private _email : string;
    private _age : number;

    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    getName(): string {
        return this._name;
    }

    getEmail(): string {
        return this._email;
    }

    getAge(): number {
        return this._age;
    }

    setName(value: string) {
        this._name = value;
    }

    setEmail(value: string) {
        this._email = value;
    }

    setAge(value: number) {
        this._age = value;
    }
}
let staff = new Staff('Staff 1', 'staff@gmail.com', 20)
let nameStaff = staff.getName()
console.log(nameStaff)
staff.setName("staff 2")
let currenNameStaff = staff.getName()
console.log(currenNameStaff)
let emailStaff = staff.getEmail()
console.log(emailStaff)
staff.setEmail("1lanyeue@gmail.com")
let currenEmailStaff = staff.getEmail()
console.log(currenEmailStaff)

let ageStaff = staff.getAge()
console.log(ageStaff)
staff.setAge(25)
let currenAgeStaff = staff.getAge()
console.log(currenAgeStaff)
