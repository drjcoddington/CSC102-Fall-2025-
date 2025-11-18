function checkInput()
{
    var eventName = document.getElementById("eventName").value;
    var numPeeps = document.getElementById("numPeople").value;
    var PW = document.getElementById("PW").value;
    var email = document.getElementById("email").value;
    var when = document.getElementById("date").value;

    /*rule for input:  eventname >2 in length and <20
                    numPeeps >2
                    pw =4

*/
if (!/^[a-zA-Z0-9]+$/.test(eventName))
{
    document.getElementById("results").innerHTML = "cannot have anything but chars + nums";
}

if (numPeeps >2)
{
    document.getElementById("results").innerHTML = "Valid number of people";
}


}

function checkPatterns()
{
    var user = document.getElementById("username").value;
    document.getElementById("results").innerHTML = "Welcome " + user;
}