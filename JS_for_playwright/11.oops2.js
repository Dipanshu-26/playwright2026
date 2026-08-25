class Student {
    constructor(fn, ln, dob) {
        this.fname = fn
        this.lname = ln
        this.dob = dob
    }
    displayName() {
        console.log(`${this.fname} ${this.lname}`)
    }
}

class Teacher extends Student {
    constructor(fn, ln, dob, sal) {
        super(fn, ln, dob)
        this.salary = sal
    }

    displaySalary() {
        console.log(`${this.salary}`)
    }
}
let st = new Student("neel", "chawde", "10-10-2010")

let th = new Teacher("dipanshu", "chawde", "10-10-1999", 100000)

st.displayName()
th.displayName()

//st.displaySalary()
th.displaySalary()
//-----------------------------------------------------------------------------------------------------------------------------

//Multilevel Inheritance : Multilevel inheritance means a class is derived from another derived class.
//GrandFather → Father → Daughter

// class GrandFather {
//     constructor(fn, ln) {
//         this.fname = fn
//         this.lname = ln
//     }
//     displayName() {
//         console.log('GrandFather Name = ' + this.fname + " " + this.lname)
//     }
// }
// class Father extends GrandFather{
//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.ffname = ffn
//     }
//     displayFName(){
//         console.log('Father Name = ' + this.ffname + " " + this.lname)
//     }
// }

// class Daughter extends Father{
//     constructor(fn,ln,ffn,dfn){
//         super(fn,ln,ffn)
//         this.dfname = dfn
//     }
//     displayDName(){
//         console.log('Daughter Name = ' + this.dfname + " " + this.lname + " " +this.ffname+" "+this.fname)
//     }
// } 


// let dt = new Daughter("gopalrao","masalkar","niranjan","dipanshu")

// dt.displayName()
// dt.displayFName()
// dt.displayDName()
//-----------------------------------------------------------------------------------------------------------------------------

//Hierarchical Inheritance : Hierarchical inheritance means multiple child classes inherit from the same parent.
//daoughter and son can access fathers properties and methods

class Father {
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln
    }
    displayName(){
        console.log('Father Name = ' + this.fname + " " + this.lname)
    }
}

class Son extends Father{
     constructor(fn,ln,sfn){
        super(fn,ln)
        this.sname = sfn
    }
    displaySName(){
        console.log('Son Name = ' + this.sname + " " + this.lname)
    }
}

class Daughter extends Father{
     constructor(fn,ln,dfn){
        super(fn,ln)
        this.dname = dfn
    }
    displayDName(){
        console.log('Daughter Name = ' + this.dname + " " +this.ffname+ " "+ this.lname)
    }
}

let dt2 = new Daughter("Niranjan","masalkar","dipanshu")
let sn = new Son("nitin" ,"chawde","tanish") 

dt2.displayDName()
dt2.displayName()

console.log("----------------------")
sn.displayName()
sn.displaySName()

console.log("----------------------")
console.log(dt2.fname)
console.log(dt2.lname)
console.log(dt2.dname)
//console.log(dt2.sname)

console.log(sn.fname)
console.log(sn.lname)
console.log(sn.sname)