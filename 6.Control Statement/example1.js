var flag = true;
alert("Welcome to My Calculator");

while (flag) {
    var num1 = Number(prompt("Enter Value1 :"));
    var num2 = Number(prompt("Enter Value2 :"));



    var choice = prompt("1. for Addition\n2. for Subtraction\n\nEnter Your Choice :");


    switch (choice) {
        case "1": alert(`Addition of ${num1} and ${num2} : ${num1 + num2}`);
            break;
        case "2": alert(`Subtraction is : ${num1 - num2}`);
            break;
        default: alert("Please Enter Valid Operation !!");
            break;
    }

    flag = confirm("Do you want to work again ?");
}