var trueOrFalse = false;

function boolOff()
{
   
    trueOrFalse = false;

    document.getElementById("showBool").innerHTML = "You chose false - bool = "+ trueOrFalse;
}

function boolOn()
{
     trueOrFalse = true;

    document.getElementById("showBool").innerHTML = "You chose true - bool = "+ trueOrFalse;
}

function checkStatus()
{
     document.getElementById("showBool").innerHTML = "Check value of bool "+ trueOrFalse;
}

function deltawidth()
{
    var buttonBig = document.getElementById("delta");
    buttonBig.style.width = 500 + "px";
    buttonBig.style.color = "purple";
    buttonBig.style.backgroundColor = "teal";


}