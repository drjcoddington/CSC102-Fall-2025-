function ShowDS()
{
    // create an array
    var arrayOfNames = ["Jill", "Steve", "Mike", "karen"];

    var i;
    var str;

    for (i = 0; i<=arrayOfNames.length;i++)
    {
        str = arrayOfNames[i];
    //    alert(str);
        
    }

    var shoppingList = ["Bacon", "bread", "milk", "bacon!", "bacon"];

    for (i = 0;i < shoppingList.length; i++)

        {
            str = shoppingList[i];
           // alert(str);
        }
    shoppingList.push("marshmallows"); // appended to the end of the list
    
    for (i = 0;i < shoppingList.length; i++)

        {
            str = shoppingList[i];
        //    alert(str);
        }
    shoppingList.reverse();
    for (i = 0;i < shoppingList.length; i++)

        {
            str = shoppingList[i];
        //    alert(str);
        }

        alert(shoppingList);
        alert(shoppingList[3]);
        

}