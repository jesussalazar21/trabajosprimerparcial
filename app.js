const suma= require("./suma.js")     // ./ es para poner en que carpeta esta

//console.log(suma);
console.log(suma.sumar(2,2))

// crear funciones archivo suma.js funcion restar, multiplicar, dividir llamar desde app.js

//resta
const restar= require("./suma.js")    
console.log(restar.restar(7,2))

//dividir 
const dividir= require("./suma.js")    
console.log(dividir.dividir(8,2))

//multiplicar
const multiplicar= require("./suma.js")    
console.log(multiplicar.multiplicar(6,2))



