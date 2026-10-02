// const student ={
//     fname : "Raj",
//     lname : "shah"
// };

// console.log(student.fname);

// console.log(document);

// How to Access All Attributes : 
console.log(document.querySelector('img').attributes);

// How to Access Specific Attribute : 

// console.log(document.querySelector('img').attributes.src);

// console.log(document.querySelector('img').attributes["src"]);
// console.log(document.querySelector('img').attributes[0]);

// How to Access Specific Attribute value : 
// console.log(document.querySelector('img').attributes.src.value);


// How to Modify Specific Attribute value : 
document.querySelector('img').attributes.src.value = "https://images.unsplash.com/photo-1542856391-010fb87dcfed?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVycyUyMGhkfGVufDB8fDB8fHww";