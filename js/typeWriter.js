let output = document.getElementById('output')

let words = [
    'DEVELOPER',
    'DESIGNER'
]

let charTurn = 0
let wordTurn = 0

printWord ()

function printWord (){
    if(charTurn <= words[wordTurn].length){
        output.innerHTML = words[wordTurn].substr(0, charTurn)
        charTurn++
        setTimeout(printWord, 200)
    }else{
        setTimeout(deleteWord, 2000)
    }
}

function deleteWord (){
    if(charTurn >= 0){
        output.innerHTML = words[wordTurn].substr(0, charTurn)
        charTurn--
        setTimeout(deleteWord, 100)
    }else{
        if(wordTurn < words.length - 1){
            wordTurn++
        }else{
            wordTurn--
        }
        charTurn = 0 
        setTimeout(printWord, 300)
    }
}