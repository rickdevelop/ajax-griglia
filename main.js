/*
Creare una griglia 6x6,
ad ogni click su un riquadro parte una richiesta AJAX che prende un numero random da 1 a 9
(utilizzare l'API https://www.boolean.careers/api/random/int).
Se è <= 5 il quadrato diventa giallo,
se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato.
*/


$(document).ready(function () {
  for (var i = 0; i < 36; i++) {
    var clone = $('.square.template').clone();
    clone.removeClass('template');
    $('.squares').append(clone);
  }

  $('.square').click(function () {

    var clickquadrati = $(this);

    if (!clickquadrati.hasClass('clicked')) {
      $.ajax({
        url: 'https://www.boolean.careers/api/random/int',
        method: 'GET',
        success: function (responseData) {
          var bgColor = (responseData.response <= 5) ? 'yellow' : 'green';
          clickquadrati.text(responseData.response).addClass(bgColor).addClass('clicked');
        },
        error: function (error) {
          alert(error);
        },
      });
    }

  });

});
