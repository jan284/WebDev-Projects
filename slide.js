//variables created for image and buttons
var prevButton = document.getElementById("prev")
var nextButton = document.getElementById("next")
var fryPic = document.getElementById("image")

//array of images created + number variable for index
var images = ["fries1.jpg", "fries2.jpg", "fries3.jpg", "fries4.jpg"]
var index = 0

/*event handler for previous button
  changes image to picture that comes before in array*/
prevButton.addEventListener("click", function() {
    if (index == 0) {
        index = images.length -1;
    }
    else {
        index--;
    }
    fryPic.setAttribute("src", images[index]);
})

/*event handler for next button
  changes image to picture that comes after in array*/
nextButton.addEventListener("click", function(){
    if (index == images.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    fryPic.setAttribute("src", images[index]);
})