// Object with Array 
// const student = {
//     fname : "Raj",
//     lname : "shah",
//     age : 20,
//     marks : [30,50,89]
// };

// console.log(student);

// console.log(student.marks[1]);

// console.log(student["marks"][1]);



// Objects Looping :
// const student = {
//     fname : "Raj",
//     lname : "shah",
//     age : 20,
//     gender : "male",
//     contactno : 1234567890
// };

// console.log(student);

// for in 
// for (const key in student) {
//     console.log(key,student[key]);
// }

// Array with object access with looping
//  and conditions Make Quotes

const students = [
    {
        fname : "Raj",
        lname : "shah",
        age : 19
    },
    {
        fname : "Ramesh",
        lname : "sharma",
        age : 23
    },
    {
        fname : "Sahil",
        lname : "Patel",
        age : 15
    },
    {
        fname : "Krutarth",
        lname : "Patel",
        age : 30
    }
];

// console.log(students);
// console.table(students);


for (const element of students) {
    if(element.age > 20)
        console.log(element);
}