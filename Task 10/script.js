/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

    let a = composition(one, four);
    let b = division(four, two);
    let c = substraction(three, two);
    let d = multiplication(five, two);

    const Calculator = (a,b,c,d) => {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        }
        const composition = (a,b) =>{
        return a + b;
        }
        console.log(composition(1,4));
        
        const substraction = (a,b) =>{
            return a-b;
        }
        console.log(substraction(5,2));
        
        const multiplication = (a,b) =>{
            return a*b;
        }
        console.log(multiplication(5,2));
        
        const division = (a,b)=>{
            return a/b;
        }
        
        console.log(division(4,2));
        
console.log(a);
console.log(b);
console.log(c);
console.log(d);
