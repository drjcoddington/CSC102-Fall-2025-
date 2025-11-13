var changeC = 0;
function changeColor()
{
    if (changeC==0)
    {
       document.getElementById("cycle").style.backgroundColor = "#ff0000";
       changeC = 1;
    }
    else if (changeC == 1)
    {
        document.getElementById("cycle").style.backgroundColor = "#0000ff";
        changeC = 2;
    }
    else
    {
        document.getElementById("cycle").style.backgroundColor = "#000022";
        changeC = 0;
    }
}