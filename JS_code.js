const buttonDonwloaod = document.getElementById("donwload-button");
const upperCaseButton = document.getElementById("upper-case"); 
const lowerCaseButton = document.getElementById("lower-case");

function getPrompt() {
  let promtText = document.getElementById("textarea").value;
  promtText.trim();
  if (promtText === "") {
    alert("You don't write text");
    return false;
  }
  return promtText;
}

function changeArray(text, splitChar){
  let array = text.split(splitChar);
  for(let i = 0; i < array.length; i++){
    array[i] = array[i].toLowerCase();
    let string = array[i];
    let firstChar = string[0];
    firstChar = firstChar.toUpperCase();
    string = string.replace(string[0],firstChar);
    array[i] = string;
  }
  let newText = array.join(splitChar);
  return newText;
}

//The upper case is the case when each letter is in the upper case.
upperCaseButton.addEventListener("click", function() {
  let inputText = getPrompt();
  document.getElementById("textarea").value = inputText.toUpperCase(); 
});

//The lower case is the case when each letter is in the lower case.
lowerCaseButton.addEventListener("click", function() {
  let inputText = getPrompt();
  document.getElementById("textarea").value = inputText.toLowerCase();   
});

//The proper case is the case when each word starts with the upper case, and the rest of the word is in the lower. 
function toProperCase() {
  let inputText = getPrompt()
  let outputText = changeArray(inputText, " ");
  document.getElementById("textarea").value = outputText;
}

//The sentence case is the case when each sentence starts with an upper case letter, and the rest of the sentence is in the lower case.
function toSentenceCase() {
  let inputText = getPrompt();
  let outputText = changeArray(inputText, ". ");
  document.getElementById("textarea").value = outputText;
}

buttonDonwloaod.addEventListener("click", function (){
  let inputText = getPrompt();
  if (inputText) {
    downloadFile("Text.txt", inputText);
  }
});

function downloadFile(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}