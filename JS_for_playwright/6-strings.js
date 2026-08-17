let nm = "dipanshu chawde"

console.log(nm)
console.log(nm.length)

let fn="dipanshu"
let ln="chawde"

console.log(`Hello my name is ${fn} and my surname is ${ln}.`)
console.log("Hello my name is "+fn+" and my surname is "+ln+".")

let city = "    pune    "
console.log(city.trimEnd())
console.log(city.trimStart())
console.log(city.trim())

city = "NagPUr"

console.log(city.toUpperCase())
console.log(city.toLowerCase())

nm = "dipanshu nitin chawde"
console.log(nm.includes("dip"))
console.log(nm.includes("nit"))
console.log(nm.includes("di p"))
console.log(nm.includes("hu ni"))

console.log(nm.indexOf("i"))

console.log(nm.startsWith("din"))
console.log(nm.endsWith("e"))

nm = "dipanshu nitin chawde"

console.log(nm.charAt(0))
console.log(nm.charCodeAt(0))

// padEnd()
    //(method) String.padEnd(maxLength: number, fillString?: string | undefined): string

//padStart()    
//(method) String.padStart(maxLength: number, fillString?: string | undefined): string

let a= "pune"
console.log(a.padStart(10,"-"))
console.log(a.padStart(10,0))

console.log(a.padEnd(10,"-"))

//join
let b=[11,22,33]
console.log(b.join("=="))

//split

nm = "dipanshu@nitin@chawde"
console.log(nm.split("@"))

let str = "20/-rs"      //["20","-rs"]
console.log(str.split("/")[0])

//replace 
let str2 = "i am learning java and java is easy to go language"

console.log(str2.replace("java","python"))

console.log(str2.replaceAll("java","python"))

let str3 = "dipanshu"
console.log(str3.split("").reverse().join(""))

