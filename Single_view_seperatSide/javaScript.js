/* vi laver en søger via urlSearchParams og urlparamams som finder vores id*/
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log({ id });

const url "https://persongalleri-5d3e.restdb.io/rest/persongalleri/"+id;
let enPerson
const myHeaders = {
  "api-key": "600fe9211346a1524ff12e31"
}

console.log("ID", id);
document.addEventListener("DOMContentLoaded", hentData);

async function hentData(){
  const mereInfo = await fetch(`https://persongalleri-5d3e.restdb.io/rest/persongalleri/${id}`, {
    headers: myHeaders
  });
enPerson = await mereInfo.json();

console.log("personer", enPerson)
VisPerson(enPerson);
}

function VisPerson (){
   enPerson.querySelector("h2").textContent = enPerson.fornavn + " " + enPerson.efternavn
    enPerson.querySelector(".person_id").src = "../billeder/" + enPerson.billede;
    enPerson.querySelector(".person_id").alt = enPerson.billede;
    document.querySelector("button").addEventListener("click", tilbageKnap);
}


function tilbageKnap (){
  history.back();
   }

/* hentData();
 */