let apiKey= '3ldCW376VG9M94s2sPXZ9ppTmbr56777';
let imgLimit = 12;
let offset = 0;
let giphyAPI = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=12&offset=${offset}`;
let displayImgData = [];
let imgData = [];
let thisYear = new Date().getFullYear();

$(document).ready(() => {
    setup();
    loadFooter();
})

function setup(){
    console.log(giphyAPI)
    fetch(giphyAPI)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json)
        imgData = json.data;
        displayImgData = imgData
        // displayImgData = imgData.slice(0, imgLimit);
        appendImg();
        // loadFooter();
    })

    .catch(err => console.log(err));
}

function appendImg() {
    displayImgData.map(data => {
        console.log(data.title)
        var txt1 = `
        <div class='img-container col-lg-3 col-md-4 col-sm-6 col-6'>
            <img class="giphy-img" onclick="showImg('${data.images.original.url}')" src="${data.images.downsized.url}">
            <p class="img-title">${data.title}</p>
        </div>`; 

        $(".display-img").append(txt1);
    })
}

function clearImg() {
    $(".display-img").html('')
}

function loadMoreImg() {
    offset = offset + imgLimit;
    giphyAPI = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=12&offset=${offset}`;
    setup();
    // displayImgData = imgData.slice(imgLimit, imgLimit + 12);
    // imgLimit = imgLimit + 12;
    // appendImg()
}

function showImg(img) {
    var txt1 = `<img src="${img}">`; 

    $(".show-img").html(txt1);
    $('#imagemodal').modal('show');
}

function loadFooter() {
    $(".text-footer").append(`Copyright ©${thisYear} Truong Quang Tan| Made with 💚`);
}