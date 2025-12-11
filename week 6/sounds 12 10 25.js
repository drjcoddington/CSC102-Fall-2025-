function play()
{
    mySound = new sound("assets/eagleCall.mp3");
    mySound.play();
}
//helper function (internal)
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    { this.sound.play();}

}
function stop()
{
    window.location.reload();
}