let arr=[1,2,3,4]

// let a1=arr[0]
// let a2=arr[1]


let [a1,a2,a3,a4]=arr
console.log(a1)

let info={
    fname:"dipanshu",
    surname : "chawde"
}

// let nm=info.name
// console.log(nm)

let {fname:fn,surname:ln}=info
console.log(fn)
console.log(ln)

//-----------------------------------------------------------------------------
//rest
let arr2=["aaa",11,22,33,44,55,66,77,88]

let [x1,x2,x3,...restArr]=arr2
console.log(x1)
console.log(restArr)

//-------------------------------------------------------------------------------
//spread
let b1=[1,2,3,4,5]
let b2=[11,22,33,44]

let c=[b1,b2]
console.log(c)

let c2=[...b1,...b2]
console.log(c2)

