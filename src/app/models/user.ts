export class NewUser {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  dni: string;
  rol: {};
  office: {};
  area?: {};
  phone_number?: string;
  email: string;
  address?: string;
    
  constructor( user ) {
    this.first_name = user.firstName;
    this.last_name = user.lastName;
    this.username = user.userName;
    this.password = `${user.firstName.charAt(0).toUpperCase()}${user.lastName}`;
    this.dni = user.dni;
    this.rol = { id: user.roles.split('-')[0], name: user.roles.split('-')[1] };
    this.office = { id: user.offices };
    this.area = user.area ? { id: user.areas } : null;
    this.phone_number = user.cellphone;
    this.email = user.email;
    this.address = user.address;
  }
}
