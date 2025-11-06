function firstA()
{
    alert("You have called your 1st function!")
}

function avg(num1, num2)
{
    let result = (num1+ num2)/2.0;
    var num3 = 5;
    var num4 = 7;
    var sum = num3 + num4;
    /*removed var mult = num3*num4;
    var divide = num3/num4;
    var increment = num3++;
    /* this is a comment
        all comments are green
        num3++ is the same as num3= num3 + 1
    */
    document.getElementById("func2").innerHTML = "the average is " + result;

}

function play()
{
    var die1 = Math.ceil(Math.random() *6);
    var die2 = Math.ceil(Math.random() *6);
    var sum = die1+die2;
    document.getElementById("die1").innerHTML = "Die 1: " + die1;
    document.getElementById("die2").innerHTML = "Die 2: " + die2;

   if (sum == 7  || sum == 11) /*if sum equals 7 or sum = 11*/
   {
        document.getElementById("result").innerHTML = "CRAPS you lose";
   }
   else if (die1 == die2 && die1 % 2 == 0)
   {
        document.getElementById("result").innerHTML = "You won WOW!";
   }
   else
   {
        document.getElementById("result").innerHTML = "Tie";
   }

}