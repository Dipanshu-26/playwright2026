let dip={
    fname:"dipanshu",
    lname:"chawde",
    displayName:function(){
        console.log(`name = ${this.fname} ${this.lname}`)
    }
}
console.log(dip.fname)
dip.displayName()

//100

//class and objects 

class Person{
    fname=undefined
    lname=undefined
    displayName(){
        console.log(this.fname + " "+this.lname)
    }
}

let d1=new Person()
d1.fname="dipanshu"
d1.lname="chawde"

d1.displayName()


let a1=new Person()
a1.fname="aditya"
a1.lname="masalkar"

a1.displayName()
//---------------------------------------------------------------------------------------------

//constructor 

class StudentInfo{
    constructor(fn,ln){
        this.fname=fn
        this.lname=ln
    }
    displayName(){
        console.log(this.fname + " "+this.lname)
    }
}

let d2=new StudentInfo("dipanshu1","chawde1")
d2.displayName()

//---------------------------------------------------------------------------------------------------------------

//oops concepts 

// “Inheritance allows one class to reuse properties and methods of another class.”
// Parent class → Student
// Child class → Teacher

// class Student{
//     constructor(fn,ln,dob){
//         this.fname=fn
//         this.lname=ln
//         this.dob=dob
//     }
//     displayName(){
//         console.log(this.fname + " "+this.lname)
//     }
// }

// class Teacher{
    
//     constructor(fn,ln,dob,sal){
//         this.fname=fn
//         this.lname=ln
//         this.dob=dob
//         this.salary=sal
//     }
//     displayName(){
//         console.log(this.fname + " "+this.lname)
//     }
//     displaySalary(){
//         console.log(`salary= ${this.sal}`)
//     }
// }

console.log("------------------------------------------")
//------------------------------------------------------------------------------------------------

class Student{
    constructor(fn,ln,dob){
        this.fname=fn
        this.lname=ln
        this.dob=dob
    }
    displayName(){
        console.log(this.fname + " "+this.lname)
    }
}

class Teacher extends Student{
        constructor(fn,ln,dob,sal){
        super(fn,ln,dob)
        this.salary=sal
    }
    displaySalary(){
        console.log(`salary= ${this.salary}`)
    }
}

let st = new Student("neel","chawde","10-10-2010")

let th = new Teacher("dipanshu","chawde","10-10-1999",100000)

st.displayName()
th.displayName()

//st.displaySalary()
th.displaySalary()