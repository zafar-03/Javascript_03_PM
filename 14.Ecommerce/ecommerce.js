const products = JSON.parse(localStorage.getItem("products"));

for (const key in products) {
    let section = document.createElement("section");
    let aside = document.createElement("aside");
    let h2 = document.createElement("h2");
    h2.append(key);
    section.appendChild(h2);

    for (const element of products[key]) {
        let main = document.createElement("main");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let span = document.createElement("span");
        let img = document.createElement("img");

        img.src = element.imageurl;
        

        h3.append(element.model);
        h4.append(element.brand);
        p.append(element.desc);
        span.append(element.price);

        main.appendChild(img);
        main.appendChild(h3);
        main.appendChild(h4);
        main.appendChild(span);
        main.appendChild(p);



        aside.appendChild(main);
    }
    section.appendChild(aside);
    document.querySelector("#data").appendChild(section);
}

// innerHTML : 
// using a JS  : create a New Element and then append
                // : how to append text