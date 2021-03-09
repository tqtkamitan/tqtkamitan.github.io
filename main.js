let apiKey= '3ldCW376VG9M94s2sPXZ9ppTmbr56777'
let giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=1&limit=12&offset=0&rating=g&lang=en`;

function setup(){

    console.log($(".row"))
    fetch(giphyAPI)
    .then(response => {
        return response.json();
    })
    .then(json => {
      json.data.map(data => {
          console.log(data.images.downsized.url)
          appendText(data.images.downsized.url)
      })
    })

    .catch(err => console.log(err));
}
setup();

function appendText(url) {
    var txt1 = `<div class='col-3'><img class="giphy-img" src="${url}"></div>`; 
    console.log(txt1)
    console.log($(".row"))
    $(".row").append(txt1);
}