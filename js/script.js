// GOAL: sulla base di quanto visto a lezione, cercare di riprodurre il calcolo del prezzo del panino che parte da 10E, a cui vanno aggiunti i costi per gli ingredienti supplementari e va applicato un eventuale sconto in base al coupon.

var calculate = document.getElementById('calculate');
var price = document.getElementById('total-price');
var ingredients = document.getElementsByClassName('ingredient');
var nameBurger = document.getElementById('nome-panino').value;
var stockPrice = 10;
var totalPrice = 0;

calculate.addEventListner('click', function(){

  if(nameBurger.lengthc  < 1){
    alert('non hai inserito il nome');
  } else{


  }


});
