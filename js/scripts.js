//business logic
function Place(cityState, country, year, landmark) {
  this.cityState = cityState;
  this.country = country;
  this.year = year;
  this.landmark = landmark;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCityState = $("input#new-city-state").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedLandmark = $("input#new-landmark").val();

    var newPlace = new Place(inputtedCityState, inputtedCountry, inputtedYear, inputtedLandmark);

    $("ul#places").append("<li><span class='places'>" + newPlace.cityState + "</span></li>");

    $(".places").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.cityState);
      $(".city-state").text(newPlace.cityState);
      $(".country").text(newPlace.country);
      $(".year").text(newPlace.year);
      $(".landmark").text(newPlace.landmark);
    });

    $("input#new-city-state").val("");
    $("input#new-country").val("");
    $("input#new-year").val("");
    $("input#new-landmark").val("");
  });
});
