var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "api-key=" + "083040deb76744ca8c92a2ec79536c0d"
var searchInput;
var limit;
var startYr;
var endYr;


$("#searchbtn").on("click", function() {
	event.preventDefault();
	
	searchInput = "q=" + $("#search").val().trim();
	limit = "limit=" + $("#records").val().trim();
	startYr = "begin_date=" + $("#start").val().trim() + "0101";
	endYr = "end_date=" + $("#end").val().trim() + "0101";

	// console.log(searchInput);
queryURL += "?" + searchInput + "&" + startYr + "&" + endYr + "&" + apiKey;
console.log(queryURL);
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


// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });