// console.log(x)
// let x=10;
// console.log(x);

// console.log(x)
// var x=10;
// console.log(x);
//let have scope in block 

//naming function😊
//  function fun(a,b){
//     return a+b;
//  }
//  console.log(fun(10,20))

//anonymous function 🤞
// const fun=function(a,b){ //this line called functional expression
//     return a+b;
// }
// console.log(fun(10,20))

//fat arrow function😁

// const fun= (a,b)=>{
//     return a+b;
// }
// console.log(fun(10,20))

//map function😁😁⌚
// const a=[10,20,565,6,7,8]

// b=a.map((item)=>{
// return item+10
// })

// console.log(a)
// console.log(b)

//callback function🤞🤞🤞🤞🤞🤞

// function calculator(a, b, callback) {
//     return callback(a, b)
// }

// function sub(a, b) {
//     return a-b;
// }
// function add(a, b) {
//     return a + b
// }

// const res=calculator(10,20,sub)
// console.log(res)

//set timeout😁🤞

// function name(){
//     console.log("jay")
// }
// setTimeout(name,1000) //we use name because it call function expression instead of name() fucntion call

// callback hell💀💀

//question❓❓❓❓
// const placeOrder = (callback) => {
//     setTimeout(() => {
//         console.log("orderPlaced")
//         callback();
//     },2000);   

// }

// const startProduction = (callback) => {
//     setTimeout(() => {
//         console.log("Production Start")
//         callback();
//     }, 5000);
// }

// const printId = (callback) => {
//     setTimeout(() => {
//         console.log("ID printed")
//         callback();
//     }, 5000);
// }

// const productName = (callback) => {
//     setTimeout(() => {
//         console.log("product name printed")
//         callback();
//     }, 2000);
// }

// const productDesc = (callback) => {
//     setTimeout(() => {
//         console.log("product description printed")
//         callback()
//     }, 1000);
// }

// console.log("ordering prodcution");
// placeOrder(() => {
//     console.log("In production");
//     startProduction(() => {
//         console.log("printig item start")
//         printId(() => {
//             productName(() => {
//                 productDesc(() => {
//                     console.log("Day Ended")
//                 })
//             })
//         })
//     })
// })


//21 august promise

const placeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("orderPlaced.......")
            resolve();
        }, 2000);
    })
}

const startProduction = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("production started.....")
            resolve();
        }, 3000);
    })
}
const printId = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("printing started.....")
            resolve();
        }, 1000);
    })
}
const productName= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("name started......")
            resolve();
        }, 1000);
    })
}
const productDesc= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("desc started......")
            resolve();
        }, 2000);
    })
}

console.log("order is going to placed")
placeOrder()
    .then(() => {
        console.log("product is in production")
        return startProduction();
    })
    .then(() => {
        console.log("product is in printing")
        return printId()
    })
    .then(() => {
        console.log("product name")
        return productName()
    })
    .then(() => {
        console.log("giving desc")
        return productDesc()
    })
    .catch((error)=>{
        console.log("Error is" ,error)
    })