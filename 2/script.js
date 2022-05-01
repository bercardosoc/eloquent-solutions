let sharpes = "#"
for (let i = 1; i <= 7; i++) {
    sharpes += "#"
    console.log(sharpes)
}

//

for(let i = 1; i <= 100; i++){
  if (i%3 == 0) {
      console.log("Fizz")
  }
  if (i%5 == 0) {
      console.log("Buzz")
  }
  if (i%3 && i%5) {
    console.log("FizzBuzz")
  }
  console.log(i)
}

  // 

let chess = ""
for (let i = 1; i < 8; i++) {
  if (i % 2 === 0) {
    chess += "# # # # \n"
  }
  else { 
    chess += " # # # #\n"
  }
}
console.log(chess)