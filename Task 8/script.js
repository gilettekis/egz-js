/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
const Calculator = (a,b) => {
this.a = a;
this.b = b;
}
const sum = (a,b) =>{
return a + b;
}
// console.log(sum(4,3));

const subtraction = (a,b) =>{
    return a-b;
}
// console.log(subtraction(5,3));

const multiplication = (a,b) =>{
    return a*b;
}
// console.log(multiplication(2,3));

const division = (a,b)=>{
    return a/b;
}

// console.log(division(10,2));
