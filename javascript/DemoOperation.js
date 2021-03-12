// function display(){
//     alert("Welcome to JavaScript");
// }

function onFormSubmit(){
    // alert("Event Generated")
    var data = readDataObject();
    inserNewRecord(data);
    resetData();
}

function readDataObject(){
    // var name = document.getElementById("name").value;
    // var age = document.getElementById("age").value;
    // alert(name+" Your age is "+age)
    var obj = {};
    obj.name = document.getElementById("name").value;
    obj.age = document.getElementById("age").value;
    console.log(obj);
    return obj;
}

function inserNewRecord(data){
    // alert(data.name+" Your age is "+data.age)
    var table = document.getElementById("employeeList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.age;

}

function resetData(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
}