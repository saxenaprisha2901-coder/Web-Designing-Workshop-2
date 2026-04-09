//var name= "Monika";
//var name= "singh";
//console.log(name);

//console.log(name);*/
//let a=10;
//console.log(a); 

let student= {
    name:"Deepti",
    age:25
};

let  jsonData=JSON.stringify(student);

console.log(jsonData);

let jsonString= {"name" : "deepti" , "age" :25};
let obj= JSON.parse(jsonString);

let student = {
    name: "rahi",
    age: "12" ,
    course: "CSE" ,
};
for (let key in student){
    console.log(key + " : " + student[key]);
}

let numbers = [10,20,30,40];
for(let value of numbers){
    console.log(value);
}

function add(a,b){
    return a+b;
}
let promise = new Promise (function(resolve,reject){
    let success=true;
    if(success)
        resolve("Task Completed");
    else
        reject("Task Failed");
};

promise.then(funtion(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});  

try{
    let x=y+10;
}catch(error){
    console.log("error occured");
}

function getData(){
    return new Promise(resolve=>{
        setTimeout()=>(
            resolve("Data Received");
            1,2000);
        });
    })

    async function showdata() {
        let result = await getData();
        console.log(result);
    }

    //local storage
    localStorage.setItem("username","roma");

    //retrieve
    let name= localStorage.getItem("username");
    console.log(name);

    //fetchapi
    fetch(<link>)
        </link>)