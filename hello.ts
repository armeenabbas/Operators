//synchronous
//code executes line by line
//aynchrous
//it works parallel

//settimeout add delay in code 
//call stack
//heap
//event loop
console.log("first")
setTimeout(()=>{
    console.log("second")
},3000)
console.log("Third");

//parameter ke andar jo function call kete hair usko callback kehte hai

// let placeOrder=()=>{
//     setTimeout(()=>{
//         console.log("order is placed")
//     },2000)
// }
// let order= placeOrder();
// console.log(order)



// let placeOrder=(preparePizzacb:any)=>{
//     setTimeout(()=>{
//         console.log("order is placed")
//         preparePizzacb()
//    preparePizzacb()
//         },2000)
//         }

//         let preparePizza=()=>{
//             setTimeout(()=>{
//                 console.log("pizza is prepared")
//               },5000 )
//         }

// type Fn=()=>void
// let placeOrder=(preparePizza:Fn)=>
//     {
//         setTimeout(()=>{
//             console.log("order is placed")
//             preparePizza()

//         },2000)
//     }

/*******************************************************************************/
    //promise
     let placeOrder=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("order is placed");
                resolve("")
            },3000)
        })
    }

     //resolve
     let placeOrder=()=>{

     }

        

//home work try catch
