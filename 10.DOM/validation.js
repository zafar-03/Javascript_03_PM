// console.log(document.querySelectorAll("input"));



document.querySelector("button").onclick = function(event){
    event.preventDefault();
    if(document.querySelectorAll("input")[0].value==""){
        document.querySelector("b").style.color = "red";
        return;
    }

    const formdata = {
        fname : document.querySelectorAll("input")[0].value,
        email : document.querySelectorAll("input")[1].value,
        password : document.querySelectorAll("input")[2].value,
        biodata : document.querySelector("textarea").value,
        jobrole : document.querySelector("select").value
    };

    if(document.querySelectorAll("input")[3].checked)
        formdata.age = document.querySelectorAll("input")[3].value;
    else if(document.querySelectorAll("input")[4].checked)
        formdata.age = document.querySelectorAll("input")[4].value;

    var mydata = [];

    if(document.querySelectorAll("input")[5].checked)
        mydata.push(document.querySelectorAll("input")[5].value);
    if(document.querySelectorAll("input")[6].checked)
        mydata.push(document.querySelectorAll("input")[6].value);
    if(document.querySelectorAll("input")[7].checked)
        mydata.push(document.querySelectorAll("input")[7].value);

    formdata.intrestedcourse = mydata;

    console.log(formdata);
}