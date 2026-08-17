
//arrays 
//strings 

//objects == key value pair 

let infoa = ["neel","nitin",10,23,true,[67,89,90]]
console.log(infoa)
console.log(infoa[0])
infoa.push(111)
infoa.pop()
console.log(infoa)
infoa[0]="tanish"
console.log(infoa)


let info = {
    firstName : "neel",
    lastName : "chawde",
    rollNo : 23,
    age : 10,
    isPass : true,
    marks : [67,89,90]
}

console.log(info)
console.log(info.firstName)
console.log(info.marks)
console.log(info.marks[1])

console.log(info["marks"])
console.log(info["marks"][0])
console.log(info["lastName"])

//update
info.firstName="dipanshu"
console.log(info)
info.middleName = "nitin"
console.log(info)

//last name 

info["rollNo"]=99
console.log(info)
info["language"] = "marathi"
console.log(info)

//for 
for(let k in info){
    // console.log(k)
    // //console.log(info.k)
    // console.log(info[k])
    console.log(`${k} = ${info[k]}`)
}