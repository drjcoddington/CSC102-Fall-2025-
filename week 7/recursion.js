function checkInput() 
{
    var cleanStr = document.getElementById("word").value;
  // Optional: Clean the string (remove non-alphanumeric chars, convert to lower case)
  // for a more robust check (e.g., "A man, a plan, a canal, Panama")
     cleanStr = cleanStr.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Helper recursive function with start and end indices
  function check(left, right) {
    // Base case 1: If the pointers meet or cross, the string is a palindrome.
    if (left >= right) {
        document.getElementById("results").innerHTML = "PAL";
      return true;
    }

    // Base case 2: If characters at the current pointers don't match, it's not a palindrome.
    if (cleanStr[left] !== cleanStr[right]) {
          document.getElementById("results").innerHTML = "NOT";
      return false;
    }

    // Recursive step: Move pointers inward and recurse on the smaller middle portion.
    return check(left + 1, right - 1);
  }

  // Initial call to the helper function with start index 0 and end index of the last character
  return check(0, cleanStr.length - 1);
}
