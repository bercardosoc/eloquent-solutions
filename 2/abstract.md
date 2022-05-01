Write a loop that makes seven calls to console.log to output the following triangle:

```
#
##
###
####
#####
######
#######
```

```json

let sharpes = "#"
for (let i = 1; i <= 7; i++) {
    sharpes += "#"
    console.log(sharpes)
    }

```

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of thos

```json

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

```

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```

```json

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

```