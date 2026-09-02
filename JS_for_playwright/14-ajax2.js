//user create 
//id create
//info get

function createUser(){
    let pro = new Promise(function(resolve,reeject){
        setTimeout(function(){
            resolve("user created")
        },6000)
    })
    return pro
}

function createID(){
    let pro = new Promise(function(resolve,reeject){
        setTimeout(function(){
            resolve("ID created")
        },4000)
    })
    return pro
}

function getInfo(){
    let pro = new Promise(function(resolve,reeject){
        setTimeout(function(){
            resolve("get info")
        },2000)
    })
    return pro
}


// createUser().then(function(str){
//     console.log(str)
//     return createID()
// }).then(function(str){
//     console.log(str)
//     return getInfo()
// }).then(function(str){
//     console.log(str)
// }).catch(function(){
//     console.log("error occoured")
// }).finally(function(){
//     console.log("i will always execute")
// })

//-------------------------------------------------------------------------------------------

async function getUserInformation() {
    let one = await createUser()
    console.log(one)

    let two = await createID()
    console.log(two)

    let three= await getInfo()
    console.log(three)
}

getUserInformation()