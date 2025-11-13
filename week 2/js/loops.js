function whileLoopFunc()
{
    var i = 0;
    var end = 10;

    while (i < end)
    {
        alert("while loop i = " + i);
        i++; /* equals i+=1;  i = i+1; */
        
    }
}

function doLoopFunc()
{
    var i =10;
    var end = 0;
    do 
    {
        alert("do loop i = " + i);
        i--;   /*i = i-1; */
    } while (i >end);
}

function forLoopFunc()
{
    var i;
    for (i = 4; i<8;i++)
    {
        alert ("for loop i ="+ i)
    }
}