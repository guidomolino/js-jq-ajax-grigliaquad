// GOAL:
// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato

function clickQuadrato() {
  var quadrato = $(".quadrato");
  quadrato.click(insNum());
}

function insNum() {

  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "Get",
    success: function(data, state){
      var success = data["success"];
      var value = data["response"];

      if (success) {
        console.log(value);
        $(".quadrato p").text(value);

        if (value<=5) {
          $(".quadrato").addClass("minore");
        }else {
          $(".quadrato").addClass("maggiore");
        }
      }
    },
    error: function(request, state, error) {
      console.log(state);
      console.log(request);
      console.log(error);
    }
  });
}


function init() {
  clickQuadrato();
}

$(document).ready(init);
