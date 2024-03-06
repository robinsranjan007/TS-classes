interface details{
    fname:string,
    lname:string,
    email:string,
    getfullname():(string|number)[]
}

interface card extends details{
    carddetails:number; 
    readonly accountnumber:number,
    readonly cardnumber:number,
}

class mycard implements details{

constructor(public tiger:string,public fname:string, public lname:string,public email:string, private accountnumber:number,private cardnumber:number,private carddetails:number){

}


set tigername(names:string)
{
    this.tigername=names;
}

getfullname(){
    return [this.fname,this.lname,this.email,this.accountnumber,this.cardnumber,this.carddetails]
}

}


class animals extends mycard{

constructor(public lion:string,tiger:string,fname:string,lname:string,email:string,accountnumber:number, cardnumber:number,carddetails:number)
{
super(tiger,fname,lname,email,accountnumber,cardnumber,carddetails);
this.lion=lion
}

set tigervalue(val:string){
this.tiger =val;
}
set lionvalue(val:string){
    this.lion = val
}
setfname(val:string)
{
    this.fname=val
}
setlname(val:string)
{
    this.lname=val
}
setemail(val:string)
{
    this.email=val
}

// setaccountnumber(val:number)
// {
//     this.accountnumber= val
// } this is private so cannot set here

}


let newcardholder = new mycard('luna','Robins','Ranjan','robinsranjan@gmial.com',6789,6789,6789)

console.log(newcardholder.getfullname())

let hathi = new animals('simba','leo','naruto','uzumaki','naruto@gmail.com',67890,6789,6789)

hathi.fname='lle'
