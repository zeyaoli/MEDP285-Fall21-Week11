//When all the DOM elements are loaded, trigger the callback function
window.addEventListener("DOMContentLoaded", function () {
    //remember the button element we create in HTML? We need to ask the JavaScript file to listem to it
    const getMe = document.getElementById("getPic");
    //When the button is clicked, trigger getDogPics function
    getMe.onclick = getDogPics;
});

const getDogPics = function () {
    // this is where you put your api url
    const url = "https://dog.ceo/api/breed/shihtzu/images";
    // console.log(fetch(url))

    // here we use fetch to get the json file from the api
    fetch(url)
        .then((response) => {
            //once you fetch the url, you will get the response first which contains body, status... but we need the json file so let's get the json
            return response.json();
        })
        .then((dogJSON) => {
            //check out the json file in the console, and find out what we need is in message so let's get the message here
            let dogImageLinks = dogJSON.message;
            // console.log(dogImageLinks);
            let nineImages = selectRandomImages(dogImageLinks);
            // console.log(nineImages);
            document.getElementById("container").innerHTML = Images(nineImages);
        })
        .catch((err) => {
            // handle errors
            console.log(err);
        });
};

// a helper function
function selectRandomImages(dataSet) {
    let imgLinkArr = [];
    let numOfImages = 9;

    for (let i = 0; i < numOfImages; i++) {
        let ranNum = Math.floor(Math.random() * dataSet.length);
        // console.log(ranNum);
        imgLinkArr.push(dataSet[ranNum]);
    }
    console.log(imgLinkArr);
    return imgLinkArr;
}

function Image(data) {
    return `<div class="singleImage"> 
      <img src="${data}" style='height: 100%; width: 100%; object-fit: contain'/>
    </div>`;
}

function Images(randomImages) {
    return `<div class="images"> 
      ${randomImages
          .map((randomImage) => {
              return Image(randomImage);
          })
          .join("")}
    </div>`;
}

/** async await */
/**
  const fetchDogJSON = async function() {
    const response = await fetch("https://dog.ceo/api/breed/shihtzu/images");
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    const dogPicsData = await response.json();
    
    const dogImageLinks = await dogJSON.message;
    // console.log(dogImageLinks);
    
    let nineImages = selectRandomImages(dogImageLinks);
    // console.log(nineImages);
    document.getElementById("container").innerHTML = Images(nineImages);
  }
  */
