let byear = [2021, 2023, 2000, 1998, 1991, 1983]
let age = []

//map
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

// for (let i = 0; i < byear.length; i++) {
//     age.push(2026 - byear[i])
// }

// console.log(age)

let age2= byear.map(function(el,index,arr){
    return 2026-el
})
console.log(age2)

//-----------------------------------------------------
// //filter
// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

let marks = [89, 88, 56, 34, 12, 33, 99, 67,35]
// let pmarks = []
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] >= 35) {
//         pmarks.push(marks[i])
//     }
// }
// console.log(pmarks)

let pmks = marks.filter(function(el,inx,ar){
    return el>=35
})
console.log(pmks)

let fm = marks.filter(function(el){
    return el<35
})
console.log(fm)

//------------------------------------------------------
//reduce
// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)

let nums = [89, 88, 56, 34, 12, 33, 99, 67,35]
// let total =0
// for(let i=0;i<nums.length;i++){
//     total=total+nums[i]            //0+89 , 89+88 , 177 +56,
// }
// console.log(total)

let sum = nums.reduce(function(acc, el, inx, arr){
    return acc+el
},0)
console.log(sum)

// //-------------------------------------------------
// //forEach
// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)

let names=["dipanshu","neel","tanish"]

// for(let i=0;i<names.length;i++){
//     console.log(`Hi ${names[i]}, How are you?`)
// }

names.forEach(function(el, id,a){
    console.log(`Hi ${el}, How are you?`)
})