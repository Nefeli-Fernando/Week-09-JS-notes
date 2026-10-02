//DOM manipulation is the process of using computer code—most commonly JavaScript—to dynamically alter, add, delete, or modify the structure, content, and styling of a webpage.

//const { forwardRef } = require("react");

/*
let x = 10;
let y = 20;
console.log(x + y);

function myFunction(){
    console.log("This is not a drill");
}

myFunction();

//constructor is simply a "lifecycle" method that is automatically called when an object of a class is created

class Customer{
    name;
    age;
    address;

    constructor(name,age,address){  //there are 2 types of constructors,       default and argument constructor. Default constructor is a constructor that does not take any parameters, while an argument constructor is a constructor that takes parameters.
        this.name = name;  //inject parameters
        this.age = age;
        this.address= address;
    }
}
let customer1 = new Customer("Ichigo Kurosaki", 15, "124 Main street");
console.log(customer1);

   // alert("Welcome to Soul Socity BITCH");

let customer2 = new Customer("Kuchiki Rukia", 145, "Moratuwa");
console.log(customer2);

console.log(typeof customer1);
console.log(typeof customer2);

//ARRAY LISTT/////
let Student = [
    {
        name: "Ichigo",
        age:19,
        address:"123 main street"
    },
    {
        name: "Rukia",
        age: 20,
        address: "456 main street",
        marks:[
            {
                subject:"maths",
                mark:90,
                subMark:[
                {
                substudent:"Siyath"
                }
            ]
        }
        ]
    },
    {
        name: "Renji",
        age: 21,
        address: "789 main street"
    },
    {
        name:"Yourichi",
        age:89,
        address:"34 HillStreet"
    } 
]
console.log(Student);
console.log(Student[1].marks[0].mark);
console.log(Student[1].name);
console.log(Student[2].address);

console.log(document); //a detailed description of the parameters/behaviours used in ur html doc
//document.write("<p><b>HII ICET<b></p>");
//document.write("<p>HIIIIIIIIIIIIIIIIIIIII</p>")

///////////////DOM MANIPULATION/////DOcument Object MANIPULATION/////

//let title = document.getElementById("title")
//console.log(title)
//title.innerText = "EUREKA"


let number = 0;
function btnAddOnAction(){
    number++;
    counter.innerText = "Number Counter - " + number;
}

function btnMinusOnAction(){
    number--;
    validateMinimum();
    counter.innerText = "Number Counter - " + number;
}

function validateMinimum(){
    if(number <0){
        number = 0;
        counter.innerText = "Number Counter - 0" + number;
    }
}


//---INPUT FORMS----//

function submitFormOnAction(){
let txtName = document.getElementById("txtName").value;
    console.log(txtName);
    title.innerText ="My name is - " + txtName;
}

function addNumbers(){
    let txtNum01 = document.getElementById("txtNum01").value;
    let txtNum02 = document.getElementById("txtNum02").value;

    let result = parseInt(txtNum01) + parseInt(txtNum02);
    let resultTot = document.getElementById("result");
    resultTot.innerText = "Result : "+result;
}

function subtractNumbers(){
    let txtNum01 = document.getElementById("txtNum01").value;
    let txtNum02 = document.getElementById("txtNum02").value;

    let result = txtNum01 - txtNum02;
    let resultTot = document.getElementById("result");
    resultTot.innerText = "Result : "+result;
}


class Customers{
    name;
    address;
    age;
    email;
    salary;

    constructor(name,address,age,email,salary){
        this.name = name;
        this.address= address;
        this.age = age;
        this.email = email;
        this.salary = salary;
    }
}
let customerList = [];
function addCustomerOnAction(){
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    let Customers = {
            name:txtName,
            address:txtAddress,
            age: txtAge,
            email: txtEmail,
            salary:txtSalary
        }
        customerList.push(Customers);
        console.log(customerList);
    }

    function loadTableOnAction(){
    let tblCustomer = document.getElementById("tblCustomer");

    tblCustomer.innerHTML += `<tr>
            <td>Nefei</td>
            <td>Tokyo</td>
            <td>19</td>
            <td>kamal@gmail.com</td>
            <td>50000</td>
        </tr>`;
    
    console.log(tblCustomer);let body = "";

    for(let i=0; i<customerList.length; i++){
        body += `<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`
    }
    tblCustomer.innerHTML = body;
    //interpolation
}
*/

////////////////////////WEEK 09 STARTS FROM HERE///////////
///DOM -> The DOM is basically the browser's representation of your HTML page that JavaScript can interact with.

console.log("Hellooo")
//document.write("<p><b>HII ICett<b></p>")
let title = document.getElementById("title")
console.log(title)

title.innerText = "Nefeli Fernando"
title.innerHTML = "<i><u>Nefeli Fernando</u></i>"
//title.innerHTML = "<s>Nefeli</s>"
//changes can be added once only not at several times, otheriwse the latest one will overwfrite the before one

const userDetails = []
function submitOnAction(){
    let txtEmail = document.getElementById("txtEmail").value
    let txtPassword = document.getElementById("txtPassword").value

    //console.log(txtEmail.value)  //if u dont 
    //console.log(txtPassword.value)

    //213/214 lines wud work if we use the below code instead of the above 2 lines
    let User = {
        email: txtEmail,
        password: txtPassword
    }
    userDetails.push(User)
    console.log(userDetails)
}




///////////////////////MAKING A TABLE////
const userInfo = []
function addCustomerOnAction(){
    let txtName = document.getElementById("txtName").value
    let txtAddress = document.getElementById("txtAddress").value
    let txtAge = document.getElementById("txtAge").value
    let txtEmail = document.getElementById("txtEmail").value
    let txtSalary = document.getElementById("txtSalary").value

    let Person = {
        name : txtName,
        address : txtAddress,
        age : txtAge,
        email : txtEmail,
        salary : txtSalary
    }
    userInfo.push(Person)
    console.log(userInfo)
}

function loadTableOnAction(){
    let tblCustomer = document.getElementById("tblCustomer")
    let body = "";
    for(let i = 0; i < userInfo.length; i++){
    body += `
        <tr>
            <td>${userInfo[i].name}</td>
            <td>${userInfo[i].address}</td>
            <td>${userInfo[i].age}</td>
            <td>${userInfo[i].email}</td>
            <td>${userInfo[i].salary}</td>
        </tr>
    `
    }
    tblCustomer.innerHTML = body
}

