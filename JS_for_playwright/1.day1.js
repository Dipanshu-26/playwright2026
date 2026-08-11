//arrays 

//           0           1       2       3       // length =4, last length-1 =3
let names=["dipanshu","nitin","tanish","neel"]
console.log(names)
console.log(names[0])
console.log(names[1])

names[0]="deep"
console.log(names)
console.log(names.length)
//loop

for(let i=0;i<names.length;i++){
    console.log(names[i])         //names[0],names[1]...names[3]
}

//while 

let x=0
while(x<names.length){
    console.log(names[x])
    x++
}


console.log(typeof(names))
console.log("----------------------")
// object ==> propeties 
// methods ==> action ,return

//person 
//properties==> name, weight, color .....
//walk(), talk()...

//walk()==> distance cover ==> weight reduce 


//array ==>object 
//properties ==>length
//methods ==>push(),pop()

let nums=[11,22,33,44,55,66]

//push()
console.log(nums)
let q1 =nums.push("aa")
console.log(nums)
console.log(q1)


//pop()
let q2 = nums.pop()
console.log(nums)
console.log(q2)

q2 = nums.pop()
console.log(nums)
console.log(q2)

//shift() , unshift()

let q4= nums.unshift("bb")
console.log(nums)
console.log(q4)


let q5= nums.shift()
console.log(nums)
console.log(q5)

//reverse()

nums.reverse()
console.log(nums)

//concat()
let a=[1,2,3,4]
let b=['x','y','z']

let c= a.concat(b)
console.log(c)
console.log(a)
console.log(b)

let d= b.concat(a)
console.log(d)

//join() : converts array in to string

let nm=["dipanshu","nitin","chawde"]

let q6=nm.join("_")
console.log(q6)

//flat()
//        0      1      2
//       0 1    0  1  0  1
let x1=[[1,2], [3,4],[5,6]]
console.log(x1[0])
console.log(x1[0][0])
console.log(x1[2][0])

let q7=x1.flat()
console.log(q7)

//index of 
let x2=[11,22,33,44,55,66] 

console.log(x2.indexOf(33))

console.log(x2.indexOf(88))

//at()
console.log(x2.at(5))

console.log(x2.at(8))