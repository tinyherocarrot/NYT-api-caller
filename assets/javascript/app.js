var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchInput;
var limit;
var startYr;
var endYr;


$("#searchbtn").on("click", function() {
	event.preventDefault();
	
	searchInput = $("#search").val().trim();
	limit = $("#records").val().trim();
	startYr = $("#start").val().trim()
	endYr = $("#end").val().trim();

	console.log(searchInput);
});

$("#clearbtn").on("click", function() {
	$("#display").empty();
});

// Build query URL here
queryURL +
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