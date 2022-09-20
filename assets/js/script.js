var startBtn = document.querySelector(".start-button")
var wordBlanksEl = document.querySelector(".word-blanks")

var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval" ]
var word 


function renderCharacters(){
    var str = ""
    for (var i = 0; i < word.length; i++){
    str += "_ "
    }
}
wordBlanksEl.textContent = str.trim()



function startRound(){
    var randomIndex = Math.floor(Math.random() * words.length)
    word = words[randomIndex]
    renderCharacters()
}

startBtn.addEventListener("click", startRound)





//add eventListener to start button "click"
//get random words from the word array
// reset the word-blanks, an _ for each letter of the new word
