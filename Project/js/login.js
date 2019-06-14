$(document).ready(function(){
    $('#login').click(function() {
        if ($('#name').val()=='admin' && $('#pass').val()=='123456') {
            window.location.href='Quantrihethong.html';
        }else{
          $( ".notification" ).show();
      }
});
});