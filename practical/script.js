// // localStorage.setItem("toDoList",JSON.stringify([]));

// const lists = JSON.parse(localStorage.getItem("toDoList"));
// for (const element of lists) {
//     const li = document.createElement("li");
//     const div = document.createElement("div");
//     const span = document.createElement("span");
//     const btn1 = document.createElement("button");
//     const btn2 = document.createElement("button");

//     span.append(element);
//     btn1.append("Edit");
//     btn2.append("Delete");
//     div.appendChild(btn1);
//     div.appendChild(btn2);

//     li.appendChild(span);
//     li.appendChild(div);
//     document.querySelector("ul").appendChild(li);
// }
// document.querySelector(".add").onclick = function (){
//     lists.push(document.querySelector("input").value);
//     localStorage.setItem("toDoList",JSON.stringify(lists));
//     location.href = "index.html";
// }


// document.querySelector("ul").onclick = function(e){
//     if(e.target.tagName == "BUTTON"){
//         const task = e.target.parentElement.parentElement.children[0].innerText;
//         var temp;
//         if(e.target.innerText == "Edit"){
//             var newTask = prompt("Enter New Value");
//            temp=  lists.map((v)=>{
//                 return ( (v==task) ? newTask : v );
//             })
//         }
//         else if(e.target.innerText == "Delete"){
//             temp=  lists.filter((v)=>{
//                 return v!=task;
//             })  
//         }
//         // console.log(newTask,temp);
//         localStorage.setItem("toDoList",JSON.stringify(temp));
//     location.href = "index.html";

//     }
// }

var allTasks = JSON.parse(localStorage.getItem("toDoList"));


document.querySelector("form").onsubmit = function (e) {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("descreption").value;
    const dd = document.getElementById("due-date").value;
    const pr = document.getElementById("priority").value;
    if(document.getElementById("btn").value == "Add"){
        var newTask = {};
        newTask.title = title;
        newTask.descreption = desc;
        newTask["due-date"] = dd;
        newTask.priority = pr;
        allTasks.push(newTask);
    }else if(document.getElementById("btn").value == "Edit"){
        temp = allTasks.map((task)=>{
                return ( (task.title==title) ? { title : title,descreption : desc, "due-date" : dd,priority : pr } : task );
            });
        allTasks = temp;
        document.getElementById("btn").value = "Add";
        document.getElementById("title").readOnly = false;
    }
    localStorage.setItem("toDoList", JSON.stringify(allTasks));
}


function displayTasks() {
    for (const element of allTasks) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const btn1 = document.createElement("button");
        const btn2 = document.createElement("button");

        btn1.append("Edit");
        btn2.append("Delete");
        td1.appendChild(btn1);
        td1.appendChild(btn2);

        for (const key in element) {
            const td = document.createElement("td");
            td.append(element[key]);
            tr.appendChild(td);
        }
        tr.appendChild(td1);
        document.querySelector("table").appendChild(tr);
    }
}
displayTasks();


document.querySelector("table").onclick = function (e) {
    if (e.target.tagName == "BUTTON") {
        if (e.target.innerText == "Delete") {
            var temp;
            var taskname = e.target.parentElement.parentElement.children[0].innerText;
            temp = allTasks.filter((task)=>{
                return task.title!=taskname;
            });
            localStorage.setItem("toDoList", JSON.stringify(temp));
            location.href = "index.html";
        }else if(e.target.innerText == "Edit"){
            document.getElementById("title").value =  e.target.parentElement.parentElement.children[0].innerText;
            document.getElementById("descreption").value  = e.target.parentElement.parentElement.children[1].innerText;
            document.getElementById("due-date").value = e.target.parentElement.parentElement.children[2].innerText;
            document.getElementById("priority").value =e.target.parentElement.parentElement.children[3].innerText;
            document.getElementById("btn").value = "Edit";
            document.getElementById("title").readOnly = true;
        }
    }
}
