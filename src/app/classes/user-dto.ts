export class UserDto {
    public id:string;
    public fullname:string;
    public email:string;
    public phno:string;
    public address:string;
    constructor(id:string,fullname:string,email:string,phno:string,address:string){
        this.id=id;
        this.fullname=fullname;
        this.email=email;
        this.phno=phno;
        this.address=address;
    }
}
