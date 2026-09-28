// What is an Object ?
// It's a Collection of Property and Methods.

// Property : Key + Value pair 
// Method : It's a Function 

// How to Create a Empty Object : 
// var obj = {};
// console.log(obj);
// console.log(typeof(obj));

// Create a Object With Properties : 
// var student = {
//     // key    value      = property
//     fname : "Raj",
//     lname : "shah",
//     age : 24
// };
// console.log(student);


// Create a Object with Methods : 
// var calculator = {
//     addition(n1,n2){
//         console.log("Addition :",n1+n2);
//     }
// };

// calculator.addition(1,2);

// console.log(calculator);

// ====================================================
var student = {
    fname : "Raj",
    lname : "Shah",
    age : 12,
    bioData(){
        console.log("Your name is",this.fname,this.lname)
    }
}

//1. How to Access Object 
console.log(student);

//2. How to Access Property Value.
// a. using dot notation :
// console.log(student.fname);
// b. using bracket notation :
// console.log(student["fname"]);

//3. How to Modify Property Value.
// a. using dot notation :
// student.fname = "Sahil";
// b. using bracket notation :
// student['age'] = 30;

//4. How to Add New Property(key+value).
// a. using dot notation :
// student.gender = "Male";
// b. using bracket notation :
// student["contactno"] = 1234567890;

//5. How to Delete Property.
// a. using dot notation :
// delete student.age;
// b. using bracket notation :
// delete student["lname"];

// console.log(student);

// can we delete Object  using delete Keyword ? :No
// delete student;  // Wrong



// Create 
// Update 
// Add 
// Delete 
// Print 