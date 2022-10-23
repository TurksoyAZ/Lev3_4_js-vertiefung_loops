const inputFeld = document.getElementById("inputFeld");
const selectFirst = document.getElementById("selectFirst");
const selectLast = document.getElementById("selectLast");
const output = document.getElementById("output");

function button() {
  if (inputFeld.value) {
    for (let a = 0; a <= inputFeld.value; a++) {
      let text = 0;
      if (a % selectFirst.value == 0 || a % selectLast.value == 0) {
        text = text + a;
        output.innerHTML = `${text}`;
       
      }
    }
  }
  if (inputFeld.value == "") {
    alert("Geben Sie bitte eine Zahl ein!");
  }
  if (selectFirst.value == selectLast.value) {
    alert("Dieselbe Zahlen erlaubt nicht!");
    output.innerHTML = "";
  }
  inputFeld.value = "";
  selectFirst.value = "2";
  selectLast.value = "2";
}
