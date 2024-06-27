// var phone = function () {
//     console.log("Samsung")
// }

// phone()

// var anotherphone = () => {
//     console.log("Samsung one")
// }

// anotherphone()

// function add(a,b){
//     console.log(a+b)
// }

// add(10, 20)

// var add1 = function(a,b){
//     console.log(a+b)
// }

// add1(10, 20)

// var add2 = (a,b)=>{
//     console.log(a+b)
// }

// add2(10, 20)

// var username = "Aswin"
// console.log(`My name is ${username}`)

// // var num = [10,20,30]
// // var [a,b,c] = num

// var [a,b,c] = [11,22,33]

// console.log(a)
// console.log(b)
// console.log(c)

// var person = {
//     username: "Aswin",
//     age: 30
// }

// var {username} = person
// var {age} = person

// console.log(username)
// console.log(age)

// function add(a,b,...c){
//     console.log(a+b)

//     console.log(c)
// }

// add(10,20,30,40,50,60)

// var num1 = [10,20,30]
// var num2 = [...num1,40,50]

// console.log(num2)

// function add(a,b=20){
//     console.log(a+b)
// }

// add(10)
// add(10,40)

// function chocolate(){
//     console.log("This is function chocolate")
// }

// function shop(chocolate){
//     console.log("This is function shop")
//     chocolate()
// }

// shop(chocolate)

// console.log("one")

// setTimeout(() => {
//     console.log("two")    
// }, 1000);

// console.log("three")

// var amazon = new Promise(
//     function(resolve,reject){
//         var delivered = false
//         if(delivered){
//             resolve("Order delivered, pay the amount")
//         }else{
//             reject("Order not delivered, raise a complaint")
//         }
//     }

// )

// amazon.then((message)=>{console.log(message)}).catch((message)=>{console.log(message)})

// var amazon = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         var v=true
//         if (v) {
//             resolve("Delivered")
//         } else {
//             reject("Not delivered")
//         }
//     }, 1000);
// })

// async function wait(){
//     var a = amazon
//     console.log(a)
// }

// wait()

var amazon = new Promise((resolve, reject)=>{
    setTimeout(function () {
        if (true) {
            resolve("Delivered")
        } else {
            reject("Not Delivered")
        }
    }, 1000);
})

async function wait() {
    var a = await amazon
    console.log(a)
}

wait()
