function enterDetails(){
    var name = "";
    var idNumber = "";
    var age = 0;

    name = prompt("Enter a name: ");
    idNumber = prompt("Enter an ID: ");
    age = parseInt(prompt("Enter an age: "));

    document.write("<br>Your name: ",name);
    document.write("<br>Your ID number: ",idNumber);
    document.write("<br>Your age: ",age);
}
enterDetails();