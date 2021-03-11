// GOAL: sulla base di quanto visto a lezione, cercare di riprodurre il calcolo del prezzo del panino che parte da 10E, a cui vanno aggiunti i costi per gli ingredienti supplementari e va applicato un eventuale sconto in base al coupon.

var calculate = document.getElementById('calculate');
var totalprice = document.getElementById('total-price');
// var ingredients = document.getElementsByClassName('ingredient');
var checkboxs = document.getElementsByClassName('checkbox');
var stockPrice = 10;


calculate.addEventListener('click', function(){
  var nameBurger = document.getElementById('nome-panino').value;

  if(nameBurger.length < 1){
    alert('non hai inserito il nome');
  } else{


  }

});
