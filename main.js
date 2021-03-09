let apiKey= '3ldCW376VG9M94s2sPXZ9ppTmbr56777'
let giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=1&limit=12&offset=0&rating=g&lang=en`;

function setup(){

    fetch(giphyAPI)
    .then(response => {
        return response.json();
    })
    .then(json => {
      console.log(json)
      json.data.map(data => {
          console.log(data.images)
      })
    })

    .catch(err => console.log(err));
}
setup();