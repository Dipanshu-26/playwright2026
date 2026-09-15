class mathUtility{
    username = "dipanshu"
    password = "dip"
    marks =[80,90,70]
    constructor(cty,ctr){
        this.city=cty
        this.country=ctr
        console.log(this.city,this.country)
    }

    add(a,b){
        console.log(a+b)
    }

    sub(a,b){
        console.log(a-b)
    }

    mul(a,b){
        console.log(a*b)
    }
}

export default mathUtility