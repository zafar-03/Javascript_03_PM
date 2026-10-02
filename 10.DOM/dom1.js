// How to Access HTML Element in a JS :
// 1. using ID : 
// console.log(document.getElementById("id1"));

// 2. using ClassName : 
// console.log(document.getElementsByClassName("class1"));
// console.log(document.getElementsByClassName("class1")[0]);
// console.log(document.getElementsByClassName("class1")[1]);

// 3. using TagName :
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1]);

// 4. using querySelector : 
// console.log(document.querySelector("h1"));
// console.log(document.querySelector("p.class2"));
// console.log(document.querySelector("#id1"));
// console.log(document.querySelector("div p.class1"));

// 5. using querySelectorAll : 
// console.log(document.querySelectorAll(".class1")[1]);


// How to Modify HTML Element in a JS :
// 1. innerHTML : 
// document.getElementById("id1").innerHTML = "New Heading";
// document.getElementsByClassName("class1")[1].innerHTML = "Second Data";
// document.getElementsByTagName("p")[0].innerHTML = "Third Content";

// document.querySelector("div p.class1").innerHTML = "ADDED";
// document.querySelectorAll(".class1")[2].innerHTML = "Python";

// 2. innerText : 
document.getElementById("id1").innerText = "New Heading";

// 3. textContent : 
document.querySelectorAll(".class1")[2].textContent = "Python";