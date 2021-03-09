let apiKey= '3ldCW376VG9M94s2sPXZ9ppTmbr56777';
let imgLimit = 12;
let giphyAPI = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
let displayImgData = [];
let imgData = [];

function setup(){

    fetch(giphyAPI)
    .then(response => {
        return response.json();
    })
    .then(json => {
        imgData = json.data;
        displayImgData = imgData.slice(0, imgLimit);
        appendImg()
    })

    .catch(err => console.log(err));
}
setup();

function appendImg() {
    displayImgData.map(data => {
        console.log(data.images)
        var txt1 = `<div class='col-lg-3 col-md-4 col-sm-6 col-6'><img class="giphy-img" onclick="showImg('${data.images.original.url}')" src="${data.images.downsized.url}"></div>`; 

        $(".display-img").append(txt1);
    })
}

function clearImg() {
    $(".display-img").html('')
}

function loadMoreImg() {
    displayImgData = imgData.slice(imgLimit, imgLimit + 12);
    imgLimit = imgLimit + 12;
    appendImg()
}

function showImg(img) {
    $("#show-img").removeClass("d-none");
    $("#all-img").addClass("d-none");
    var txt1 = `<img src="${img}">`; 

    $(".show-img").html(txt1);
}

function back() {
    $("#show-img").addClass("d-none");
    $("#all-img").removeClass("d-none");
}