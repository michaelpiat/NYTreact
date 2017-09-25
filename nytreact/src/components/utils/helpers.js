var axios = require("axios");




var helper = {


	runSearch: function(query, startDate, endDate) {

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
	  		'api-key': "b888b47d6cd24f93b7baf8ca65c811b2",
	  		'q': query,
	  		'begin_date': startDate,
	  		'end_date': endDate
	  	});
	  	return axios.get(url)
	  	.then(function(res){
	  		return res.response.docs[0].snippet;
	  	});

	}
}

module.exports = helper;