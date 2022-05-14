const min = (x,y) => x < y ? x : y

const countBs = (word) => {
    let upperB = "B"
    let bs = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === upperB) bs++
    }
    return bs
}

const countChar = (letter, word) => {
    let reps = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) reps++
    }
    return reps
}