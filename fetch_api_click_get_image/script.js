//When all the DOM elements are loaded, trigger the callback function
window.addEventListener("DOMContentLoaded", function () {
    //remember the button element we create in HTML? We need to ask the JavaScript file to listem to it
    const getMe = document.getElementById("getPic");
    //When the button is clicked, trigger getDogPics function
    getMe.onclick = getDogPics;
});

function getDogPics() {
    const dogImg = document.getElementById("dog-img");
    const url = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((dogJSON) => {
            console.log(dogJSON);
            dogImg.src = dogJSON.message;
        })
        .catch((err) => {
            // handle errors
        });
}
