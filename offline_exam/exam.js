const prompt = require("prompt-sync")();
const fs = require('fs');
let user = prompt("Enter Username(Enter 'master' If You're The Developer):");
function createNewQuiz() {
    let quizName = prompt("Enter Quiz Name:")
    let numberOfQuestions = prompt("Enter Number Of Questions:")
    let answers = []
    for (let i =0; i<numberOfQuestions;i++)
        answers[i]=Number(prompt(i+1+":"))+3186324558632525
    answers[numberOfQuestions]=quizName
    fs.writeFile('quiz.txt', answers, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
if (user==="master"){
    let pass = prompt("Enter Password:")
    while(pass!=="Aa@12345"){
        let pass = prompt("Wrong Password:")
    }
    let n = prompt("Choose Action 1.New quiz:")
    if(n==1)
        createNewQuiz()
}else{
    const data = fs.readFileSync('quiz.txt', 'utf8');
    let arr = data.split(',')
    for (let i = 0;i<arr.length-1;i++){
        arr[i]=Number(arr[i])-3186324558632525;
    }
    prompt("Press Enter Whenever You're Ready For Exam!")
    input = []
    console.log("enter your choices\nexample: 1.2")
    while(true){
        let inp = prompt()
        if (inp==="$"){
            break;
        }
        let temp = inp.split(".")
        if(temp.length!=2){
            console.log("invalid input!!!")
            continue
        }
        input[Number(temp[0])-1]=temp[1]
    }
    let corrects = 0;
    let wrongs =0;
    for(let i =0;i<arr.length-1;i++){
        if(arr[i]==input[i])
            corrects++;
        else if(input[i]<5 && input[i]>0)
            wrongs++
    }
    fs.writeFile(arr[arr.length-1]+'.txt', user+"\npercentage:"+(((3*corrects-wrongs)/(3*(arr.length-1)))*100), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}