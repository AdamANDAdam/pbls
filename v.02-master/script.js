/* wyswietl */ 
document.getElementById("clear").addEventListener("mousehover", function() {
  document.getElementById("display").value = "";
});
/* odbior zmiennej */
function get(value) {
  document.getElementById("display").value += value; 
} 

/* obliczenia */
function calculates() {
  var result = 0;
  result = document.getElementById("display").value;
  document.getElementById("display").value = "";
  document.getElementById("display").value = eval(result);
};

function zmiana1() {

document.getElementById("glowny-tekst").innerHTML = "Bio";
document.getElementById("tekst-powitalny").innerHTML = "DUPAPAPAPAPA";

}

function zmiana2() {

document.getElementById("content").className = "zmiana-color";
}

