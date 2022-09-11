/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title
        this.director = director
        this.budget = budget
        
    }
}
    
let myMovie = new Movie("Harry Potter", "Chris Columbus", 200000000);
let myMovie2 = new Movie("Anabelle", 'Klaus', 10000000);

function myBudget(myMovie2, budget) {
    return myMovie2.map(function(i) {
      return i[budget];
    });
  }
function wasExpensive(i){
    if(i > 100000000){
        return "true";
    } else {
        return "false"
    }
}
    console.log(wasExpensive(100000000));