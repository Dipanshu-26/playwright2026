function addA(){
    console.log("hello addA")
}
function addB(){
    console.log("hello addB")
}

// addA()
// addB()

//---------------------------------------------------------
//setTimeout()

function addC(){
    setTimeout(function(){
        console.log("hello addC")
    },6000)
}

function addD(){
    setTimeout(function(){
        console.log("hello addD")
    },3000)
}

// addC()
// addD()

//---------------------------------------------------------

function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },5000)

    setTimeout(function(){
        console.log("ID created")
    },3000)

    setTimeout(function(){
        console.log("get Info")
    },1000)
}

//getInfo()

//------------------------------------------------------------------------------
//promise 
//pending resolve reject

let pro = new Promise(function(resolve,reject){
    let a=20
    let b=20
    if(a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

//pro.then(fn(resolve),fn(reeject))

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


//-----------------------------------------------------------------------

function createUser(){
    let pro=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },6000)
    })
    return pro

}

function createID(){
    let pro=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("ID created")
        },3000)
    })
    return pro
}

function getUserInfo(){
    let pro=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get user info")
        },1000)
    })
    return pro
}

createUser().then(function(str){
    console.log(str)
    return createID()
}).then(function(str){
    console.log(str)
    return getUserInfo()
}).then(function(str){
    console.log(str)
})