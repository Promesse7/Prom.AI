var i= 0;
var speed= 50;
var answer ='';
var answerLength;


   queryInput.addEventListener("keypress", function(event) {
    // Check for Enter key press
    if (event.key === "Enter"){   
        document.getElementById('answer').style.display = 'block';
    let question = document.getElementById('queryInput').value;
    answer = 'I cannot understand your question.';
    if (question.length) {
        answer = "VS Code uses TypeScript type declaration (typings) files (for example node.d.ts) to provide metadata to VS Code about the JavaScript based frameworks you are consuming in your application. Type declaration files are written in TypeScript so they can express the data types of parameters and functions, allowing VS Code to provide a rich IntelliSense experience. Thanks to a feature called Automatic Type Acquisition, you do not have to worry about downloading these type declaration files, VS Code will install them automatically for you"
    }
    answerLength = answer.length;
//calling typing function
    typing();
    }
    });
  


document.addEventListener('click',function(e){
    if (e.target.id =='btn') {
        document.getElementById('answer').style.display = 'block';
        let question = document.getElementById('queryInput').value;

        answer = 'I cannot understand your question.';
        if (question.length) {
            answer = "VS Code uses TypeScript type declaration (typings) files (for example node.d.ts) to provide metadata to VS Code about the JavaScript based frameworks you are consuming in your application. Type declaration files are written in TypeScript so they can express the data types of parameters and functions, allowing VS Code to provide a rich IntelliSense experience. Thanks to a feature called Automatic Type Acquisition, you do not have to worry about downloading these type declaration files, VS Code will install them automatically for you"
        }
        answerLength = answer.length;
//calling typing function
        typing();
    }
});
function typing(){
if(i < answerLength){
    answerEl= document.getElementById('answer');
    answerEl.innerHTML += answer[i] + '|';
    i++;
    setTimeout(() => {

        answerEl.innerHTML = answerEl.innerHTML.substring(0,answerEl.innerHTML.length-1);
    }, 50);

    setTimeout(typing, speed);
    }
}