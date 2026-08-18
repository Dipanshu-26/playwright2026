let students = [
    {
        firstName: "jaya",
        lastName: "kumari",
        age: 25,
        city: "nashik",
        skills: ["java", "python"],
        marks: 50
    },
    {
        firstName: "Vishal",
        lastName: "Raut",
        age: 30,
        city: "Pune",
        skills: ["js", "salesforce", "cypress"],
        marks: 100
    },
    {
        firstName: "Sathish",
        lastName: "kumar",
        age: 45,
        city: "nashik",
        skills: ["katlon", "selenium", "react", "python"],
        marks: 35
    },
    {
        firstName: "teja",
        lastName: "kulkarni",
        age: 23,
        city: "Sangamner",
        skills: ["katlon"],
        marks: 45
    },
    {
        firstName: "rama",
        lastName: "kant",
        age: 30,
        city: "nagpur",
        skills: ["python", 'javascript'],
        marks: 23
    }

]


console.log(students[0].firstName)
console.log(students[4].firstName)
console.log(students[4].skills[0])

//get addition of marks of each students

console.log(students[4].marks)

//reduce

let total = students.reduce(function(acc,el,idx,arr){
    return  acc+el.marks
},0)

console.log(total)

//  el = {
//         firstName: "jaya",
//         lastName: "kumari",
//         age: 25,
//         city: "nashik",
//         skills: ["java", "python"],
//         marks: 50
//     }
// el.marks
// acc+el.marks    


//find pass and fail students 
//filer

let passS = students.filter(function(el){
    return el.marks>35
})
console.log(passS)

let failS = students.filter(function(el){
    return el.marks<=35
})
console.log(failS)


//want to give 10 marks grace to fail students

// students.filter(function(el){
//     return el.marks<=35
// }).forEach(function(el){
//     el.marks= el.marks+10
// })

// console.log(students)

//------------------------------------------------------------------------------

students.filter(function(el){
    return el.marks<=35
}).forEach(function(el){
    el.marks= el.marks+10
    if(el.marks<=35){
        console.log(el.firstName)
    }
})