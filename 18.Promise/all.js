// var a = 12;

// const mypromise = new Promise((resolve,reject)=>{
//     if(a>18){
//         resolve("This is My First Promise code using Js.");
//     }else{
//         reject("Your promise rejected!!");
//     }
// });

// mypromise.then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error);
// })



var a;

async function main() {
    const mypromise = new Promise((resolve, reject) => {
        resolve();
    });

    await mypromise.then(() => {
        a = 13;
    })

    console.log("Value of A:",a);
}

main();

console.log("Hello Everyone");
console.log("Welcome to JS");


// React and Node : 
// function + array + object + promise + API +module
