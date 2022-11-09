enum role {
    admin = 1,
    user ,
}
export class User {
    protected _name: string;
    protected _email: string;
    public _role: role;

    constructor(name: string, email: string, role: role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    getInfo() {
        return this._role;
    }
    isAdmin(role : role){
        this._role = role
        if (role === 1){
            console.log("là admin")
        }else if (role === 2){
            console.log("là user")
        }
    }
    setName(value: string) {
        this._name = value;
    }
    setEmail(value: string) {
        this._email = value;
    }
    setRole(value: number) {
        this._role = value;
    }
}
let dai = new User("dai", "abcg@gmail.com", 1)
let tung = new User("tùng", "dkndg@gmail.com",2)
console.log(dai)
dai.isAdmin(1)
console.log(tung)
tung.isAdmin(2)

