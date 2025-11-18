function play()
{

    var player1 = Math.ceil(Math.random() *3);
     var player2 = Math.ceil(Math.random() *3);

     var rockImage = "images/rock_image.png";
     var paperImage = "images/paper_image.png";
     var scissorImage = "images/scissor_image.png";
     if (player1 == 1)
     {
        document.getElementById("player1Img").src = rockImage;
     }
     else if (player1 == 2)
         {
        document.getElementById("player1Img").src = paperImage;
     }
     else
      {
        document.getElementById("player1Img").src = scissorImage;
     }
}