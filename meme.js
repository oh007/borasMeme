'use strict'
var memeSong = new Audio('audio.mp3');

if(randomMeme.addEventListener("click", randomPicGenerator)){

}
///när knappen randomMeme trycks på så startar funktionen randomPicGenerator

function randomPicGenerator(){

    function deleteChild() {
        var e = document.getElementById("container");
        e.innerHTML = "";
    }
    deleteChild();

    function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
        }

    var randomImage = imgRandom(imgArray); //Skapar bilden
    document.getElementById('container').appendChild(randomImage);//Lägger in den skapade bilden i dess förälder container.
    memeSong.play();
    
   

    
}



/* ---------------Array för bilder----------------------------- */
var imgArray = new Array();

    
        imgArray[0] = new Image();
        imgArray[0].src = 'meme1.jpg';

        imgArray[1] = new Image();
        imgArray[1].src = 'meme2.jpg';

        imgArray[2] = new Image();
        imgArray[2].src = 'meme3.jpg';

        imgArray[3] = new Image();
        imgArray[3].src = 'meme4.jpg';

        imgArray[4] = new Image();
        imgArray[4].src = 'meme5.jpg';

        imgArray[4] = new Image();
        imgArray[4].src = 'meme5.jpg';

        imgArray[5] = new Image();
        imgArray[5].src = 'meme5.jpg';

        imgArray[6] = new Image();
        imgArray[6].src = 'meme6.jpg';

        imgArray[7] = new Image();
        imgArray[7].src = 'meme7.jpg';

        imgArray[8] = new Image();
        imgArray[8].src = 'meme8.jpg';

        imgArray[9] = new Image();
        imgArray[9].src = 'meme9.jpg';

        imgArray[10] = new Image();
        imgArray[10].src = 'meme10.jpg';

      


       