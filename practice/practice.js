
// Recursion Function
// 1. Write a recursive function to generate Armstrong Number series up to n terms.

// // Arrow Function
// 1. Create a tax calculator with slab logic via functions.

// //Expression Function
// 1. Build a modular billing system using functions.
// 2. Check if a number is Perfect using function.


// //IIFE Function :
// 1. Write a function to validate a 6-digit OTP.


// ===========================
// 1.
//  - Create an array `numbers` with values `[1, 2, 3]`. Perform `push` to add `4` to the end of the array.
// - Use `pop` to remove the last element from the `numbers` array. Print the array after each operation.

// const arr = [1,2,3];
// console.log("Array is :");
// console.table(arr);

// arr.push(4);
// console.log("Array after using Push Method :");
// console.table(arr);

// arr.pop();
// console.log("Array after using Pop Method :");
// console.table(arr);

// ====================================
// 2. **Queue Simulation:**
//    - Create an empty array `queue`. Use `push` and `shift` to simulate a queue where you add elements `1`, `2`, and `3` in sequence, and then remove them one by one.
// FIFO :
// First IN FIRST OUT

// const arr = [];
// console.log(arr);

// arr.push("Raj");
// arr.push("Rajesh");
// arr.push("Rajveer");
// console.log(arr);

// var ans = arr.shift();
// console.log(ans,"Removed");
// console.log(arr);

// var ans = arr.shift();
// console.log(ans,"Removed");
// console.log(arr);

// var ans = arr.shift();
// console.log(ans,"Removed");
// console.log(arr);

// =========================================
// 3. **Stack Simulation:**
//    - Create an empty array `stack`. Use `push` and `pop` to simulate a stack where you push elements `1`, `2`, and `3` onto the stack, and then pop them off one by one.
// LAST IN FIRST OUT
// const arr = [];
// console.log(arr);

// arr.push("Raj");
// arr.push("Rajesh");
// arr.push("Rajveer");
// console.log(arr);

// var ans = arr.pop();
// console.log(ans,"Removed");
// console.log(arr);

// var ans = arr.pop();
// console.log(ans,"Removed");
// console.log(arr);

// var ans = arr.pop();
// console.log(ans,"Removed");
// console.log(arr);
// ==============================================
// 4. **Insertion and Deletion at the Beginning:**
//    - Create an array `letters` with values `['b', 'c']`. Use `unshift` to add `'a'` to the beginning of the array.
//    - Use `shift` to remove the first element from the `letters` array.
// const letters = ['b', 'c'];
// console.log("Array : ",letters);
// letters.unshift('a');
// console.log("Array after unshift Method : ",letters);
// letters.shift();
// console.log("Array after shift Method : ",letters);

// ===================================================
// 5. **Array Reversal:**
//    - Create an array `original` with values `[1, 2, 3, 4, 5]`. Use `pop` and `unshift` to reverse the elements in place (without creating a new array).

// const original = [1,2,3,4,5];
// console.log("original Array :",original);
// var value1 = original.pop();
// var value2 = original.pop();
// var value3 = original.pop();
// var value4 = original.pop();
// var value5 = original.pop();

// original.unshift(value5);
// original.unshift(value4);
// original.unshift(value3);
// original.unshift(value2);
// original.unshift(value1);

// console.log("Reverse Array :",original);
// console.log("Reverse Array :",original.reverse());

// ===================================================

// 6. **Updating an Array:**
//    - Start with an array `names` containing `[ 'John', 'Jane', 'Doe' ]`.
//    - Use `push` to add `'Smith'` to the end of the array.
//    - Use `pop` to remove the last element of the array.
//    - Use `unshift` to add `'Alice'` to the beginning of the array.
//    - Use `shift` to remove the first element of the array.

// const names = [ 'John', 'Jane', 'Doe' ];
// console.log(names);

// names.push("Smith");
// console.log(names);
// names.unshift("Alice");
// console.log(names);

// names.pop();
// console.log(names);
// names.shift();
// console.log(names);

// ===================================================

// 7. **Array Length Changes:**
//    - Create an array `fruits` with values `['apple', 'orange', 'banana']`.
//    - Use `push` to add `'grape'` to the end of the array.
//    - Use `pop` to remove `'grape'` from the array.
//    - Use `unshift` to add `'pear'` to the beginning of the array.
//    - Use `shift` to remove `'pear'` from the array.

// const fruits = ['apple', 'orange', 'banana'];
// console.log(fruits.length);
// fruits.push("grape");
// console.log(fruits.length);

// fruits.pop();
// console.log(fruits.length);

// fruits.unshift("pear");
// console.log(fruits.length);

// fruits.shift();
// console.log(fruits.length);



// ===================================================

// 8. **Remove First Element**: Remove the first element of an array using `splice`.

// const fruits = ['apple', 'orange', 'banana'];
// console.log(fruits);
// const array = fruits.splice(1);
// console.log(array);


/*

Below are **8 new real-life scenario-based JavaScript array examples** using `push()`, `pop()`, `shift()`, `unshift()`, and `splice()`.

### 1. Shopping Cart

* Create an array `cart` with products `['Laptop', 'Mouse', 'Keyboard']`.
* Use `push()` to add `'Monitor'` to the cart.
* Use `pop()` to remove the last product.
* Print the cart after each operation.

### 2. Hospital Patient Queue

* Create an empty array `patients`.
* Use `push()` to add patients `'Rahul'`, `'Priya'`, and `'Amit'`.
* Use `shift()` to remove patients one by one as they are treated.
* Print the queue after each operation.

### 3. Browser History

* Create an array `history` with `['Google', 'YouTube', 'GitHub']`.
* Use `push()` to add `'ChatGPT'` to the history.
* Use `pop()` to remove the most recently visited page.
* Print the history after each operation.

### 4. Restaurant Order System

* Create an array `orders` with `['Pizza', 'Burger']`.
* Use `unshift()` to add `'Pasta'` as a priority order at the beginning.
* Use `shift()` to remove the first order after it is prepared.
* Print the orders after each operation.

### 5. Music Playlist

* Create an array `playlist` with `['Song A', 'Song B', 'Song C']`.
* Use `push()` to add `'Song D'`.
* Use `unshift()` to add `'Favorite Song'` at the beginning.
* Use `pop()` to remove the last song.
* Print the playlist after each operation.

### 6. Employee Attendance

* Create an array `employees` with `['Raj', 'Amit', 'Neha', 'Priya']`.
* Use `push()` to add a new employee `'Karan'`.
* Use `splice()` to remove `'Neha'` from the array.
* Print the employee list after each operation.

### 7. Bus Passenger Management

* Create an array `passengers` with `['Rahul', 'Jay', 'Vivek']`.
* Use `push()` to add `'Aman'` when a passenger boards.
* Use `shift()` to remove the first passenger when they leave the bus.
* Use `unshift()` to add `'Riya'` at the front.
* Print the passengers after each operation.

### 8. Remove Product from Inventory

* Create an array `products` with `['Mobile', 'Laptop', 'Tablet', 'Headphone', 'Camera']`.
* Use `splice()` to remove `'Tablet'` from the inventory.
* Add `'Smart Watch'` using `push()`.
* Add `'Printer'` at the beginning using `unshift()`.
* Print the inventory after each operation.



*/