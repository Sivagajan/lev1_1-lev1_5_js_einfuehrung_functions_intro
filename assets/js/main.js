console.log('it works')

let a = 1+3

console.log('Hello World')

function intro(){
    console.log('1 + 3 = '+a)
}
intro()

//---------------------------Lev1_2---------------------------

function intro2(paraName)
{
    let varName = 'SuperCoder'
    console.log('Hi ' + varName + '. Mein Name ist ' + paraName + '. ')
}

let name = 'Siva'

intro2(name)


//---------------------------Lev1_3-------------------------

function intro3(name, city, age){
    console.log('Hallo ich heiße ' + name + ', ich komme aus ' + city + ' und bin ' + age + ' Jahre alt')
}

let myName = 'Sivagajan Karunanathan'
let myCity = 'Mönchengladbach'
let myAge = 33

intro3(myName, myCity, myAge)


//---------------------------Lev1_5-------------------------

let numberA = 10
let numberB = 2

function math(a,b){
    console.log(a + ' * '+ b + '= '+ a*b)
    console.log(a + ' / '+ b + '= '+ a/b)
}


numberA = 30
numberB = 20
math(numberA, numberB)


numberA = 100
numberB = 100
math(numberA, numberB)

numberA = 5
numberB = 0
math(numberA, numberB)

numberA = 45
numberB = 173
math(numberA, numberB)

numberA = 1
numberB = 1000
math(numberA, numberB)
