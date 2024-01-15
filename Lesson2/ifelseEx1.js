var studentID = "no ID";
var firstName = "no name";
var englishScore = 0.0;
var mathsScore = 0.0;
var scienceScore = 0.0;
var total = 0.0

studentID = "40041234";
firstName = "Student 1";
englishScore = 10;
mathsScore = 10;
scienceScore = 10;

total = englishScore + mathsScore + scienceScore

if(total >= 30){
    document.write("Excellent");
}
else if(total >= 20 && total < 30){
    document.write("Good");
}
else{
    document.write("Try harder")
}
