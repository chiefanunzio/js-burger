// GOAL: sulla base di quanto visto a lezione, cercare di riprodurre il calcolo del prezzo del panino che parte da 10E, a cui vanno aggiunti i costi per gli ingredienti supplementari e va applicato un eventuale sconto in base al coupon.

var calculate = document.getElementById('calculate');
calculate.addEventListener('click', function(){
  var nameBurger = document.getElementById('nome-panino').value;

  if(nameBurger.length < 1){
    alert('non hai inserito il nome');
  } else{
    var stockPrice = 10;
    var checkboxs = document.getElementsByClassName('checkbox');

    for (var i = 0; i < checkboxs.length; i++) {
      var checkbox = checkboxs[i];
      var addCheckbox = checkbox.checked;
      var priceCheckbox = parseInt(checkbox.data.price);

      if(addCheckbox){
        stockPrice += priceCheckbox
      }
      console.log(stockPrice);
    }

  }

});
