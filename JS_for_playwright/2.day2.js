
//         0        1        2         3        4        5         6  
let city=["pune","mumbai","nagpur","nashik","banglore","jaipur","kolkota"]
//           -7    -6        -5      -4      -3          -2            -1
//slice 
//          slice(startIndex , endIndex(not included))
let q1=city.slice(0,5)
console.log(q1)

q1=city.slice(1,5)
console.log(q1)


q1=city.slice(2)
console.log(q1)

q1=city.slice(2,4)
console.log(q1)

q1=city.slice(4,1)
console.log(q1)



// //         0        1        2         3        4        5         6  
// let city=["pune","mumbai","nagpur","nashik","banglore","jaipur","kolkota"]
// //           -7    -6        -5      -4      -3          -2            -1

q1=city.slice(-6,-1)
console.log(q1)

q1=city.slice(-3,-6)
console.log(q1)

q1=city.slice(-3,6)
console.log(q1)

q1=city.slice(5,-3)
console.log(q1)


// splice()
// syntax => splice(startIndex, deleteCount, item1, item2, ...)
// action => removes elements from the array starting at startIndex and optionally inserts new elements
// return => array of deleted elements (original array gets updated)

//               from where   how many              replace by 1,2,3....
//animals.splice(index,numberOfElmentstoBeDeleted,rep1,rep2)
//               0        1      2        3       4        5
let animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]

// let q2 = animals.splice(1,2)
// console.log(animals)
// console.log(q2)

// let q2 = animals.splice(1,2,111,222)
// console.log(animals)
// console.log(q2)

// let q2 = animals.splice(1,2,111,222,333)
// console.log(animals)
// console.log(q2)


let q2 = animals.splice(1,2,111)
console.log(animals)
console.log(q2)

// fill()
// syntax => fill(value, startIndex?, endIndex?)  // endIndex not included
// action => fills array elements with the given value from startIndex to before endIndex
// return => updates the existing array

//           0  1  2  3  4  5
let num2 = [11,22,33,44,55,66]

num2.fill('abc',2,5)
console.log(num2)

num2.fill(undefined,2,5)
console.log(num2)

//sort()

city=["pune","mumbai","nagpur","nashik","banglore","jaipur","kolkota","amravati","amdabad"]
console.log(city.sort())

// let nums=[55,77,90,23,78,100,1,2,-8]
// console.log(nums.sort())

