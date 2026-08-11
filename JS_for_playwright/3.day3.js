//map, filter , reduce, forEach
//some , every, find , findIndex

let byear=[1990,2020,2025,1983,2000]
let age=[] 
for(let i=0;i<byear.length;i++){
    age.push(2026-byear[i])          //2026-by[0]
}
console.log(age)

//map
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

//el == element
//index ==> index of element

let age2 =byear.map(function(el,index,arr){
    return 2026-el
})
console.log(age2)


let nums=[11,22,33,44,55,66]
let narr=[]
for(let i=0;i<nums.length;i++){
    narr.push(nums[i]+100)
}
console.log(narr)

let nuarr2=nums.map(function(el){
    return 100+el
})
console.log(nuarr2)