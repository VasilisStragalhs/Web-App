export class Address {
    id?: number;
    address?: string;
  }
  
  export class User {
    id?: number;
    name?: string;
    surname?: string;
    gender?: string;
    birthdate?: Date;
    workAddress?: Address;
    homeAddress?: Address;
  }
