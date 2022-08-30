/* vi laver en søger via urlSearchParams og urlparamams*/
const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
console.log({ id });

const url "https://persongalleri-5d3e.restdb.io/rest/persongalleri/"+id;
const key = "600fe9211346a1524ff12e31";

 /* vi henter/ fetcher igen */
      const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri ";
      const mereinfo = {
        headers: {
          "x-apikey": "600fe9211346a1524ff12e31",
        },
      };

async function hentData() {
const respons = await fetch(endpoint, mereinfo);
 personer = await respons.json();
 method: `GET`, 
 mereinfo; {`Content-Type`;`application/json`}

console.log(personer);
vis(personer);
}

function VisPerson (id){
    console.log(id);
    const enPerson =document.querySelector("person_id");
    enPerson.querySelector("h2").textContent = personData.fornavn + " " + personData.efternavn
    enPerson.querySelector("img").src = "../billeder/" + personData.billede;
    enPerson.querySelector("img").alt = personData.billede;
}
VisPerson();
hentData();