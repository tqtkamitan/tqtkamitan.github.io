let apiKey= '3ldCW376VG9M94s2sPXZ9ppTmbr56777'
let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=5`;

function setup(){

    fetch(giphyAPI)
    .then(response => {
        return response.json();
    })
    .then(json => {
      console.log(json)
        console.log(json.data[0].images.original.url);
    })

    .catch(err => console.log(err));
}
setup();