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
        this.wasExpensive = function(){
            if(wasExpensive >= 10000000) {
                return 'true'
            }
            return'false'
        }
    }
}
    
let myMovie = new Movie("Harry Potter", "Chris Columbus", 200000000);
let myMovie2 = new Movie("Anabelle", 'Klaus', 10000000);



