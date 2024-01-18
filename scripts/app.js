function sayHello (name, lastName) {
  console.log('Hello ' + name + ' ' + lastName)
}

function add (a, b) {
  return a + b
}
const numbers = [12, 4, 123, 4567, 234, 56, 12, 87, 124, 865, 233, 788, 43, 91, 544, 782, 653, 845]
function printNumbers () {
  for (let i = 0; i <= 20; i++) {
    if (i !== 7 || i !== 13) {
      console.log(i)
    }
  }
}

function printNumbers1 () {
  numbers.forEach((number) => console.log(number))
}

function printNumbers2 () {
  const sum = numbers.reduce((a, b) => a + b, 0)
  console.log(sum)
}

function printNumbers3 () {
  const number = numbers.filter((number) => number > 500)
  console.log(number)
}

function init () {
  console.log('init')
  const name = 'cesar'
  sayHello(name, 'cordova')
  sayHello('cesar', 'cordova')
  const result = add(1, 2)
  console.log(result)
  printNumbers()
  printNumbers1()
  printNumbers2()
  printNumbers3()
}
window.onload = init
