/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// document.getElementById("search").elements["search"]

// function Function1() {
  
//   document.getElementById("search");
  
//     document.getElementById("Pounds").innerHTML =
//       value * 2.2046;
//     document.getElementById("Ounces").innerHTML =
//       value * 35.274;
//     document.getElementById("Grams").innerHTML =
//       value * 1000;
// }
//resultField.innerText =



let form = document.getElementById("converterForm");

form.addEventListener("submit", function(event) {
    let numberToConvert = document.getElementById("search").value;
    if (!numberToConvert) {
        alert("Please enter values in the fields");
    } else {
      document.getElementById("Pounds").innerHTML =
      numberToConvert * 2.2046;
      document.getElementById("Ounces").innerHTML =
      numberToConvert * 35.274;
      document.getElementById("Grams").innerHTML =
      numberToConvert * 1000;
        event.preventDefault();
    }

});