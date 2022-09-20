var startBtn = document.querySelector(".start-button")
var wordBlanksEl = document.querySelector(".word-blanks")

var validChars = "abcdefjhijklmopqrstuvwxyz"
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval" ]
var word 
var guessedCharacters = []
var score = 0

function checkWord()

function handleKeydown(event){
    console.log(event.key)
    if (validChars.includes(event.key))
    // 
    guessedCharacters.push(event.key)
    renderCharacters()
}

function renderCharacters() {
    var str = ""
    for (var i = 0; i < word.length; i++){
        var letter = word[i]
        if(guessedCharacters.includes(letter)) {
            str += letter = ""
        }else {
            str += "_ "
    }
}wordBlanksEl.textContent = str.trim()
}




function startRound(){
    var randomIndex = Math.floor(Math.random() * words.length)
    word = words[randomIndex]
    renderCharacters()
}

startBtn.addEventListener("click", startRound)

document.addEventListener("keydown", handleKeydown)
