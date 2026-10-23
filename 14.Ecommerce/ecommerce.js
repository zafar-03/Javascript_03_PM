const products = JSON.parse(localStorage.getItem("products"));

// document.querySelector(".search input").onchange = function(e){
//     for (const key in products) {
//         // for (const element of products[key]) {
//         //     if(element.model.includes(e.target.value))
//         //         console.log(element.model);
//         // }
//         var temp= products[key].filter((element)=>{
//             return element.model.includes(e.target.value);
//         });
//         products[key] = temp;
//     }
//     localStorage.setItem("filterData",JSON.stringify(products));
//     location.href = "/";
// }


document.querySelector("select").onchange = function (e) {
    console.log(e.target.value);
    if (e.target.value == "htl") {
        for (const key in products) {
            var temp = products[key].sort((element1,element2) => {
                return element2.price-element1.price
            });
            products[key] = temp;   
        }
        localStorage.setItem("filterData", JSON.stringify(products));
    }
    else if (e.target.value == "lth") {
        for (const key in products) {
            var temp = products[key].sort((element1,element2) => {
                return element1.price-element2.price
            });
            products[key] = temp;   
        }
        localStorage.setItem("filterData", JSON.stringify(products));
    }
    location.href = "/";
}

const filterData = JSON.parse(localStorage.getItem("filterData"));

for (const key in filterData) {
    let section = document.createElement("section");
    let aside = document.createElement("aside");
    let h2 = document.createElement("h2");
    h2.append(key);
    section.appendChild(h2);

    for (const element of filterData[key]) {
        let main = document.createElement("main");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let span = document.createElement("span");
        let img = document.createElement("img");
        let btn = document.createElement('button');

        img.src = element.imageurl;


        h3.append(element.model);
        h4.append(element.brand);
        p.append(element.desc);
        span.append(element.price);
        btn.append("Add Cart");

        main.appendChild(img);
        main.appendChild(h3);
        main.appendChild(h4);
        main.appendChild(span);
        main.appendChild(p);
        main.appendChild(btn);



        aside.appendChild(main);
    }
    section.appendChild(aside);
    document.querySelector("#data").appendChild(section);
}


document.body.onclick = function(e){
    const addCart  = JSON.parse(localStorage.getItem("addCart"));;
    if(e.target.tagName == "BUTTON"){
        addCart.push(e.target.parentElement.children[1].innerText)
        console.log(addCart);
        localStorage.setItem("addCart",JSON.stringify(addCart));
    }
}
document.querySelector(".cart").onclick = function(){
    location.href = "cart.html";
}

// innerHTML :
// using a JS  : create a New Element and then append
// : how to append text