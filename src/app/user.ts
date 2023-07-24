export class User {
    name: string;
    email: string
    phone: string
    city: string
    zipcode: string

    constructor(name: string, email: string, phone:string,city:string,zipcode:string) {
        this.name = name;
        this.email = email;
        this.phone=phone;
        this.city=city;
        this.zipcode=zipcode;
    }
}