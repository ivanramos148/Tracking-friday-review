$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    $('#csharp').hide();
    $('#Java').hide();
    $('#Python').hide();

    var exprience = $("select#exprience").val();
    var passion = $("select#passion").val();
    var years = $("select#years").val();
    var prefrence = $("select#prefrence").val();
    var career = $("select#career").val();


    if (exprience === 'yes' && passion === 'yes') {
      $('#csharp').show();
      } else if (exprience === 'no' && passion === 'no') {
        $('#Python').show();
      } else {
        $('#Java').show();

    }
  });
});
