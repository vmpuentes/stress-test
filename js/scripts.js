$(document).ready(function() {
  $("form#stress-survey").submit(function(event) {
    event.preventDefault();
    $("#unstress-suggestions").show();
    $("input:checkbox[name=stress-questions]:checked").each(function() {
      var stressAnswers = $(this).val();
      $('#unstress-suggestions').append(stressAnswers + "<br>");
    });
    $("#stress-survey").hide();
  });
});
