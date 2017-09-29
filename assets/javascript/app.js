var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "api-key=" + "083040deb76744ca8c92a2ec79536c0d"
var searchInput;
var limit;
var startYr;
var endYr;
$("#searchbtn").on("click", function() {
    event.preventDefault();
    
    searchInput = "q=" + $("#search").val().trim();
    limit = "limit=" + $("#records").val().trim();
    startYr = "begin_date=" + $("#start").val().trim();
    endYr = "end_date=" + $("#end").val().trim();
 
    queryURL += "?" + searchInput + "&" + startYr + "&" + endYr + "&" + apiKey;
    console.log(queryURL);
displaySearchInformation();
});
$("#clearbtn").on("click", function() {
    $("#display").empty();
});
// Build query URL here
// url += '?' + $.param({
//   'api-key': "083040deb76744ca8c92a2ec79536c0d",
//   'q': "trump",
//   'begin_date': "20170101"
// });


function displaySearchInformation () {

  $.ajax({
    url: queryURL,
    method: "GET",
  }).done(function(result) {

      console.log(result)

      for(var i = 0; i < result.response.docs.length; i++){

        var headline = result.response.docs[i].headline.main;
        var snippet = result.response.docs[i].snippet;
        var pub_date = result.response.docs[i].pub_date;
        var web_url = result.response.docs[i].web_url;

        var headlineDiv = $("<div>");
        headlineDiv.append(headline);

        var snippetDiv = $("<div>");
        snippetDiv.append(snippet);

        var pubDateDiv = $("<div>");
        pubDateDiv.append(pub_date);

        var urlDiv = $("<div>");
        urlDiv.append(web_url);

        $("#display").append(headlineDiv);
        $("#display").append(snippetDiv);
        $("#display").append(pubDateDiv);
        $("#display").append(urlDiv);
      }
});


}
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&begin_date=0101&end_date=0101&api-key=083040deb76744ca8c92a2ec79536c0d?q=trump&begin_date=20150101&end_date=20170101&api-key=083040deb76744ca8c92a2ec79536c0d