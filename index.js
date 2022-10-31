
// Text Area Counter //

let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("text-count");
const maxNumOfChars = 50;

const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = maxNumOfChars - numOfEnteredChars;
    characterCounter.textContent = counter + "/50";

  
};

textArea.addEventListener("input", countCharacters);
