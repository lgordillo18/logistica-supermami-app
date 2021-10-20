export class NewUser {
    firstName: string;
    lastName: string;
    user: string;
    dni: number;
    cellphone: number;
    email: string;
    password: string;
    constructor(firstName: string, lastName: string, user: string, dni: number, cellphone: number, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.user = user;
        this.dni = dni;
        this.cellphone = cellphone;
        this.email = email;
        this.password = password;
    }
}
