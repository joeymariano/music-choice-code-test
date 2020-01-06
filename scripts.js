// create Show class
// contains title imgUrl artist and rating
// API call to data.json on window load
// parse data and organize with Show class
// populate template information with info from first show
// iterate over shows
// copy previous divs and repopulate

class Show {
  	constructor(title, imgUrl, artist, rating){
  		this.title = title
  		this.imgUrl = imgUrl
  		this.artist = artist
  		this.rating = rating
  	}
}

window.onload = function(){
	// api call to data.json
	fetch('/data.json') 
	  .then((response) => {
	    return response.json()
	  })
	  .then((showJson) => {
	    let sortedShows = showJson.Items.map(
	    	obj => new Show(obj.Ttla.Line2, obj.ImageUrls[0].ImageUrl,obj.Ttla.Line1, obj.TvRating) )

	    populateHtml(sortedShows)
	  })
}

function populateHtml(sortedShows){
	// populate first template


	sortedShows.forEach(
		(obj, index) => {
			if (index === 0){
				document.getElementsByTagName('img')[0].src = sortedShows[0].imgUrl
		    document.getElementsByClassName('show-title')[0].textContent = `"` + sortedShows[0].title + `"`
		    document.getElementsByClassName('show-artist')[0].textContent = sortedShows[0].artist
		    document.getElementsByClassName('show-rating')[0].textContent = sortedShows[0].rating
			} else {
				let cardTemplate = document.getElementsByClassName('card')[0].cloneNode(true)
				let cards = document.getElementsByClassName('cards')

				cards[cards.length - 1].appendChild(cardTemplate)
			}
		}
	)

}