$.get('https://www.whenisthenextmcufilm.com/api', function(data) {
	$("#title").html(data.title)
	$("#poster").attr('src', data.poster_url)
	$("#release-date").html(data.release_date)
	$("#overview").html(data.overview)
	$("#type").html(data.type)
	$("#following-production").html('Next production: '+ data.following_production.title)
}, 'json')

// function addRow(tableRef, displayName, data) {
// 	let newRow = tableRef.insertRow(-1);
// 	let newCell = newRow.insertCell(-1);
// 	newCell.appendChild(document.createTextNode(displayName));

// 	newCell = newRow.insertCell(-1);
// 	newCell.appendChild(document.createTextNode(data));
// }

$("#hero-button").click(function() {
	var searchquery = $("#hero-input").val()

	$.get('https://gateway.marvel.com/v1/public/characters?apikey=933ced7eb6f9c8aa29d8ec9545d590e2&name=' + searchquery, function(response) {
		var data = response.data
		if (data.results.length === 0){
			$('#error-msg').removeClass('hidden')
			$('#error-msg').html('No heroes found.')
			return
		}

		$('#error-msg').addClass('hidden')
		$("#hero-name").html(data.results[0].name)
		$("#hero-image").attr('src', data.results[0].thumbnail.path + '.' + data.results[0].thumbnail.extension)
		$("#hero-description").html(data.results[0].description)

		// var bio = document.getElementById("biography")
		
		// var row = bio.insertRow(-1)
		// addRow(bio, "full name", data.results[0].biography['full-name'])
		// addRow(bio, "place of birth", data.results[0].biography['place-of-birth'])
		// addRow(bio, "first appearance", data.results[0].biography['first-appearance'])

	}, 'json')
})
