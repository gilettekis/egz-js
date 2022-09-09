/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const BASE_ENDPOINT_URL = 'cars.json';
const myRequest = fetch(`${BASE_ENDPOINT_URL}`);

myRequest
.then((res) => res.json()) 
.then((data) => { 
 const ulElement = document.createElement('ul');

 data.forEach((carsInfo) => { 
  const liElement = document.createElement('li'); 
  liElement.setAttribute(
    'style',
    'background-color:#eee ; border-bottom: 8px solid; color color:black; width: 100; height: 150px;','text-align: center','word-break: break-all'
  ); 
  liElement.textContent = `B R A N D ___ ${carsInfo.brand } --------- M O D E L S ___ ${carsInfo.models}`;
  ulElement.appendChild(liElement);  });
 

    document.body.appendChild(ulElement);   });
    
   
    
   