/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById('lbsInput').addEventListener('input',function(e){
    let lbs= e.target.value;
    let input = document.getElementById('lbsInput');
    let data = input.value;
    document.getElementById('gramsOutput').innerHTML= lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML= lbs/2.2046;
    document.getElementById('ozOutput').innerHTML= lbs*16;
    document.getElementById('output').style.visibility='visible';

    if (data =='') {
        document.getElementById('output').style.visibility='hidden';
    }
});
function weightConverter(valNum) {
    document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
  };

  const form = document.querySelector("form");
const timeInput = document.getElementById("minutes-input"); 
const output = document.getElementById("output");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    // console.log('Submitted');

    // const minutes =Number(timeInput.value); 
    // console.log(minutes);

    // const convertedTime = converter (fromValue, toValue); // +minutes parasymas paverstu stringa i number 

    // const seconds = convertMinutesToSeconds(minutes);
    
    const fromValue = fromSelect.value;
    const toValue = toSelect.value; 

    const convertedTime = converter(fromValue, toValue);

    // console.log(fromSelect.value);
    // console.log(toSelect.value);
   
    output.textContent = convertedTime;

    // console.log(seconds);

});
const converter = (from,to) => {
    const time = Number(timeInput.value);
    if (from === to) {
        return time; 
    } else if (from === 'hours' && to ==='minutes') {
        return time *60;
    } else if (from === 'hours' && to === 'seconds') {
        return time *3600;
    } else if (from ==='minutes' && to === 'hours'){
        return time /60;
    } else if (from === 'minutes' && to === 'seconds'){
        return time *60;
    } else if (from ==='seconds' && to === 'minutes'){
        return time /60;
    } else if (from === 'seconds' && to === 'hours') {
        return time /3600;
    }

}

// const convertMinutesToSeconds = (minutes) => { //suskurta funcija convertMinutesToSeconds, argumentas - minutes, grazins sekundes
// return minutes*60;
// }


