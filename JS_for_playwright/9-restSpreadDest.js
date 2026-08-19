//destructuring  (unpacking values from arrays or objects into variables)
// Destructuring is a JavaScript feature that allows you to extract values from 
// arrays or objects and store them into variables in a clean and readable way.
// Instead of accessing values one by one, destructuring lets you do it in a single line.

//program 1
let names = ['dipanshu','nitin','neel','tanish']

let a=names[0]
let b=names[1]
let c=names[2]
let d=names[3]

console.log(a)

let [a1,a2,a3,a4,a5]=names
console.log(a1)
console.log(a5)

//---------------------------------------------------------------------------

let info = {
    firstName : "sajal",
    lastName : "chawde"
}

// let {firstName,lastName} = info
// console.log(firstName)

// let {firstName : nm,lastName : sn}=info
// console.log(nm)
// console.log(sn)

//-------------------------------------------------------------------------------
let info2 = {
    firstName : "akay",
    lastName : "masalkar",
    age : 2,
    parents : {
        mother : "shivani",
        father : "aditya"
    }
}

let {firstName:name,lastName:surname , parents:{mother:mom,father:dad}}=info2
console.log(mom)
console.log(dad)

//--------------------------------------------------------------------------------------

//rest and spread operator

//rest, spread operator

//spread operator (VERY IMPORTANT)
//“Spread operator is used to spread the elements of an array or object into individual elements.”

let x = [10,20,30,40]
let y=[11,22,33,44]

c=[...x,...y]
console.log(c)

c=[x,y]
console.log(c)
//------------------------------------------------------------------------------------------------

let info1 = {
    name :"dipanshu",
    surname : "chawde"
}

info2 = {
    location : "pune",
    marks : 90,
    name :"neel",
}

let allinfo={...info1,...info2}
console.log(allinfo)

//--------------------------------------------------------------------------------------------------
// Rest Operator (VERY IMPORTANT)
// “Rest operator is used to collect the remaining elements into an array.” 

let nums=[12345,11,22,33,44,55,66]
// x=1234
// y=[11,22,33,44,55,66]

let [x1,...y1]=nums
console.log(x1)
console.log(y1)
//-------------------------------------------------------------------------------------------------------
names = ['xyz','abc','dipanshu','nitin','neel','tanish']

// let [d1,...d2]=names
// console.log(d1)
// console.log(d2)

let [d1,d2,...d3]=names
console.log(d1)
console.log(d2)
console.log(d3)

//----------------------------------------------------------------------------------------------------------

let info3 = {
    location : "pune",
    marks : 90,
    name :"dipanshu",
    surname : "chawde"
}

let {location,marks,...restInfo}=info3
console.log(restInfo)
console.log(location)