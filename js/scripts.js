$(document).ready(function(){

  $("#age-form").submit(function(event) {
    event.preventDefault();

    // hide form on submit
    $(".homePage").hide();

    // check if user greater than or equal to 18
    var age = parseInt($("#age").val());

    if (age >= 18) {
      // if user is older than 18, show #over-18
      $("#over-18").removeClass("hide");
      $("#over-18").show();
    } else {
      // if user is younger than 18, show #under-18
      $("#under-18").removeClass("hide");
      $("#under-18").show();
    };

  });

});
