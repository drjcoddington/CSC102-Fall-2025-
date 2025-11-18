function play()
{
    var num = Math.ceil(Math.random() *10);
    var guess = Math.ceil(Math.random() *10);
    // 2 variable with random # 1-10

    if (guess > num)
    {
        document.getElementById("results").innerHTML = "Your guess " + guess + " actual num " + num + "  YOU WIN";
    }
    else if (guess == num)
    {
        document.getElementById("results").innerHTML = "Your guess " + guess + " actual num " + num +  "no one wins";
    }
    else
    {
        document.getElementById("results").innerHTML = "Your guess " + guess + " actual num " + num + " YOU LOSE!";
    }

}