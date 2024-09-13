class mclas{

    fname:string;
    lname:string;
  readonly  hokagename:string='robins'
    
    
    protected emailId:string;
    protected accountnumber:number;
    
    private _cardnumber:number;
    private _cvvnumber:number;
    
    constructor(fname:string,lname:string,emailId:string,accountnumber:number,_cardnumber:number,_cvvnumber:number)
    {
        this.fname=fname;
        this.lname= lname;
        this.emailId=emailId; 
        this.accountnumber= accountnumber;
        this._cardnumber=_cardnumber;
        this._cvvnumber = _cvvnumber;
    }
    
// set hokagename(hokage:string)
// {
// this.hokagename =hokage
// }  cannot set hokagename cause it is readonly
    
    set fnames(fname:string)
    {
        this.fname=fname;
    }
    set lnames(lname:string)
    {
        this.lname=lname
    }
    get fnames(){
        return this.fname
    }
    
    setallnames(emailId:string,accountnumber:number,_cardnumber:number,_cvvnumber:number){
        this.emailId=emailId;
        this.accountnumber=accountnumber;
        this._cardnumber=_cardnumber;
        this._cvvnumber=_cvvnumber;
    }
    
    getallnames()
    {
        return[this.fname,this.lname,this.emailId,this.accountnumber,this._cardnumber,this._cvvnumber]
    }
     }
    
    
    
    class secondClass extends mclas{
    
    protected dob:string;
    
    constructor(dob:string,fname:string,lname:string,emailId:string,accountnumber:number,_cardnumber:number,_cvvnumber:number)
    {
        super(fname,lname,emailId,accountnumber,_cardnumber,_cvvnumber);
        this.dob=dob;
    }
    
    //setting protected members of base class
    
    settingbaseclass(firstname:string,lastname:string,EmailID:string,account:number,dob:string)
    {
        // this._cardnumber this will give error as it is protected member
        this.emailId=EmailID //this can be set as it is protected member
        this.fname=firstname;// this is public member so it can be set
        this.lname=lastname;// this is public member so it can be set
        this.dob=dob; //this is the member of the same class
        this.accountnumber=account//this is also a protected memeber
    }
    
    
    getallvalues= ()=>{
        return [this.emailId,this.accountnumber,this.dob,this.lname,this.fname]
    }
    
    }
    
    
    
    let naruto = new mclas('naruto','uzumaki','narutouzumaki@gmail.com',999,999,999);
    
     naruto.fname='sakura';
     naruto.lname='hinata'
    
    naruto.setallnames('sasukeuchiha@999@gmail.com',777,777,777);
    console.log(naruto.getallnames())
    
    let sasuke = new secondClass('04/05/2000','Tanjiro','kamado','tanjiro@gmail.com',678,789,78);
    
    sasuke.setallnames('banjiro@gmail.com',789,789,789);
    console.log(sasuke.getallvalues())
    

// naruto._cvvnumber=78; cannot access this as this is private member of the first class
//    naruto.emailId; cannot access this as this is protected member of the first class    

interface MyInterface {
    readonly readOnlyValue: number;
    mutableValue: string;
    anotherMutableValue: boolean;
}

// Create an object of the interface
let myObject: MyInterface = {
    readOnlyValue: 10,
    mutableValue: "Hello",
    anotherMutableValue: true
};

console.log(myObject); // Output: { readOnlyValue: 10, mutableValue: "Hello", anotherMutableValue: true }

// Attempting to change the readonly property will result in a compilation error
// myObject.readOnlyValue = 20; // Error: Cannot assign to 'readOnlyValue' because it is a read-only property.

 


function printname(names:string)
{
    return names;
}