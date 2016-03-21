//business logic
function Place(cityState, country) {
  this.cityState = cityState;
  this.country = country;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCityState = $("input#new-city-state").val();
    var inputtedCountry = $("input#new-country").val();

    var newPlace = new Place(inputtedCityState, inputtedCountry);

    $("ul#places").append("<li><span class='place'>" + newPlace.cityState + "</span></li>");

    $(".places").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.cityState);
      $(".cityState").text(newPlace.cityState);
      $(".country").text(newPlace.country);
    });

    $("input#new-city-state").val("");
    $("input#new-country").val("");
  });
});
