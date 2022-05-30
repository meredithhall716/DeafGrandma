function deafGrandma() {
    let words = true
    let goodbyes = 0

    while (words) {
        
        let userInput = prompt("Hey Kid!")

        if(userInput === ""){
            alert("WHAT!?")
        } else if(userInput.toUpperCase() !== userInput){
            alert("SPEAK UP, KID!")
        } else if(userInput === "GOODBYE!"){
            goodbyes++
            if(goodbyes === 1){
                alert("LEAVING SO SOON?")
            } else if(goodbyes === 2){
                alert("LATER, SKATER!")
                words = false
            }
        } else if(userInput.toUpperCase() === userInput){
            alert("NO, NOT SINCE 1946!")
        }


    }
    document.writein("Program exited.")
}

deafGrandma();