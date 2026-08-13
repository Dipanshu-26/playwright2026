//map, filter,reduce,forEach

//some , every,find , findIndex

// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false

let arr=[30,49,67,89,99,45,34,67,111]
let q1 = arr.some(function(el,inx,arr){
    return el>40
})
console.log(q1)

q1 = arr.some(function(el,inx,arr){
    return el>100
})
console.log(q1)

//every()
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false
arr=[30,49,67,89,99,45,34,67,111]

let q2 = arr.every(function(el,idx,arr){
    return el>40
})
console.log(q2)

q2 = arr.every(function(el,idx,arr){
    return el>100
})
console.log(q2)

// find()
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)

arr=[30,49,67,89,99,45,34,67,111]

let q3 = arr.find(function(el,id,a){
    return el>50
})
console.log(q3)

q3 = arr.find(function(el,id,a){
    return el>99
})
console.log(q3)

// findIndex()
// findIndex(function(el, index, arr)
// action => finds the index of the first element that satisfies the condition
// return => index (if not found, returns -1)

arr=[30,49,67,89,99,45,34,67,111,67]

let q4 = arr.findIndex(function(el,idx,arr){
    return el>40
})
console.log(q4)

q4 = arr.findIndex(function(el,idx,arr){
    return el==67
})
console.log(q4)
//-------------------------------------------------------------------------------------------

let byear=[2021,2023,2000,1999,1991,1994]
//age 

let age = byear.map(function(el){
    return 2026-el
})
console.log(age)

//-------------------------------------------------------------------------------------------

let marks = [99,78,45,12,33,56,34,32,34]

let passM=marks.filter(function(el){
    return el>=35
})
console.log(passM)

let failM=marks.filter(function(el){
    return el<35
})
console.log(failM)
//---------------------------------------------------------------------------------------

let nums=[23,45,67,89,100,23,78,56]

// let total = 0
// for(let i=0;i<nums.length;i++){
//     total=total+nums[i]           //0+23 ,23+45 ...
// }


let sum=nums.reduce(function(acc,el,idx,arr){
        return acc+el
},0)

console.log(sum)

//-------------------------------------------------------------------------------------

let names=["dipanshu","neel","tanish","rajasi"]

names.forEach(function(el){
    console.log(`Hi ${el}, How are you?`)
})

