// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var choice = $("#search-term").val();
    var request_url = "https://api.giphy.com/v1/gifs/search?q=" +
     choice + 
   "&rating=pg&api_key=dc6zaTOxFJmzC";

  fetch(request_url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    debugger;
      var pic_url = data.data[0].images.preview_gif.url;

       $('#results').append('<img src=' + pic_url + '>');
    })
  
  
});

