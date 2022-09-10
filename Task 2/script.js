/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const btn__element = document.querySelector("btn__element");
const btn__state = document.querySelector('btn__state');

let state = 0;

btn__element.addEventListener("click", function(){
state +=1;
document.getElementById('btn__state') = state;
});
