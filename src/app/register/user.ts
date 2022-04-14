export class User{
    
    name:string;
    email:string;
    mobile:string;
    gender:string;
    password:string;
    address:string;

    constructor( name,  email, mobile, gender, password, address){
       
        this.name=name;
        this.email=email;
        this.mobile=mobile;
        this.gender=gender;
        this.password=password;
        this.address=address;
    }

}