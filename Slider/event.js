const arr = ["https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1746950862687-3017c5818710?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1657828513890-8617428e2214?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGQlMjBkZXNrdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"];

let index = 0;

document.getElementById("bg").style.backgroundImage = `url(${arr[index]})`;

// How to Access HTML Element in a JS :
// 1. Onclick event : 
document.getElementById("btn1").onclick = function (){
    index--;
    if(index<0){
        index = arr.length-1;
    }
    document.getElementById("bg").style.backgroundImage = `url(${arr[index]})`;
}

document.getElementById("btn2").onclick = ()=>{
    index++;
    if(index>=arr.length){
        index = 0;
    }
    document.getElementById("bg").style.backgroundImage = `url(${arr[index]})`;
}