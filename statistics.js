var members = data["results"][0]["members"]; // ACCEDER AL ARRAY EN POSICION "MEMBERS"

//console.log(data["results"][0]["members"]); // CONSOLE VER POSICION CORRECTA










//function partyLength() {

var repList = [];
var demList = [];
var indList = []; /// ARRAY CON PORCENYAJES POR CADA MIEMBRO

var totDem = 0;
var totRep = 0; /// TOTALES DE MIEMBROS CAMARA
var totInd = 0;

for (var i = 0; i < members.length; i++) {

  if ("D" == members[i]["party"]) {
    demList.push(members[i]["votes_with_party_pct"]);
    members[i]["party"] = 1;
    totDem += members[i]["party"];
  }
  if ("R" == members[i]["party"]) {
    repList.push(members[i]["votes_with_party_pct"]);
    members[i]["party"] = 1;
    totRep += members[i]["party"];
  }
  if ("I" == members[i]["party"]) {
    indList.push(members[i]["votes_with_party_pct"]);
    members[i]["party"] = 1;
    totInd += members[i]["party"];
  }
}
console.log(repList);
console.log(demList);
console.log(indList);
console.log("----------------------------");
console.log(totDem);
console.log(totRep);
console.log(totInd);
console.log("----------------------------");


// -------ACA METO CADA % DE VOTO EN UNA VARIABLE --- LA INTEGRE ARRIBA ---------------
/*
var valor = [];

for (var i = 0; i < demList.length; i++) {
  
  if (demList[i]["votes_with_party_pct"] !== true){
      
      valor.push(demList[i]["votes_with_party_pct"])
      
      }
}

console.log(valor);
*/

// -----------------------------------

var valorRep = 0;
var valorDem = 0; // VALOR DE LOS PORCENTAJES POR PARTY
var valorInd = 0;

function getPorcent(array, porcent, tamany) {


  for (var i = 0; i < array.length; i++) {

    porcent += array[i] / array.length;

  }

  console.log(porcent);

}
getPorcent(repList, valorRep, totRep);
getPorcent(demList, valorDem, totDem);
getPorcent(indList, valorInd, totInd);

/*
//function tableGeneral() {

var nametd1 = "Republican";
var nametd2 = "Democrat";
var nametd3 = "Independent";



  var printTable = document.getElementById("tablaGeneral");


    var tr = docuement.createElement("tr");
    printTable.appendChild(tr);
    var td = document.createElement("td");
    printTable.appendChild(tr);
    tr.appendChild(td);

 



function creatTable(arrayMembers) {

  var tableGral = document.getElementById("senate-data");

  tableGral.innerHTML = " ";

  for (var i = 0; i < arrayMembers.length; i++) {

    var tr = document.createElement("tr");
    tableGral.appendChild(tr);
    var td = document.createElement("td");
    var a = document.createElement("a");
    tr.appendChild(td); // CREA UN TD PASO SIGUIENTE INSERTAR UN <A> EN EL TD
    td.appendChild(a);


    // INSERTAR LOS NAMES Y CAMBIARLE EL ATRIBUTO AS A LINK
    var nulo = "null";
    if (arrayMembers[i]["middle_name"] == nulo) {
      a.innerHTML = (members[i]["first_name"] + " " + arrayMembers[i]["middle_name"] + " " + arrayMembers[i]["last_name"]);
    } else {
      a.innerHTML = (arrayMembers[i]["first_name"] + " " + arrayMembers[i]["last_name"]);
    }
    // CAMBIO EL ATRIBUTO
    a.setAttribute("href", arrayMembers[i]["url"]);
    a.setAttribute("target", "_blank");


    /// CREAR DIFERENTES TD PARA CADA ENCABEZADO

    var td1 = document.createElement("td"); // td para party
    tr.appendChild(td1);
    td1.innerHTML = (arrayMembers[i]["party"]);

    var td2 = document.createElement("td"); // td para state
    tr.appendChild(td2);
    td2.innerHTML = (arrayMembers[i]["state"]);

    var td3 = document.createElement("td"); // td para years
    tr.appendChild(td3);
    td3.innerHTML = (arrayMembers[i]["seniority"]);

    var td4 = document.createElement("td"); // TD votes
    tr.appendChild(td4);
    td4.innerHTML = (arrayMembers[i]["votes_with_party_pct"]);


  }

}

*/
