

var calculate = document.getElementById('calculate');
calculate.addEventListener('click', function(){
  var nameBurger = document.getElementById('nome-panino').value;

  if(nameBurger.length < 1){
    alert('non hai inserito il nome');
  } else{
    var stockPrice = 10;
    var checkboxs = document.getElementsByClassName('checkbox');

    for (var i = 0; i < checkboxs.length ; i++) {
      var checkbox = checkboxs[i];
      var addCheckbox = checkbox.checked;
      var priceCheckbox = parseInt(checkbox.dataset.price);

      if(addCheckbox){
        stockPrice += priceCheckbox
      }
    }

    var coupons = [
      'pippo',
      'topolino',
      'pluto'
    ]

    var discount = document.getElementById('coupons').value;
    if(coupons.includes(discount)){

      stockPrice -= stockPrice / 10 * 2;
    }

    var totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = stockPrice.toFixed(2);
  }

});
