function anagramChecker(firstString, secondString) {

  /* 
    Remove possible non-letter characters with RegEx
    and convert to lowerCase
  */
  
  firstString = firstString.replace(/[^\w]/g, "").toLowerCase();
  secondString = secondString.replace(/[^\w]/g, "").toLowerCase();

  return sortStrings(firstString) === sortStrings(secondString);
}

/* 
  First split the string by word
  Then sort the elements of the array and returns the array
  Finally joins all the elements on a string and returns it
*/

function sortStrings(string) {
  return string.split('').sort().join('');
}

const result = anagramChecker(`Let1's tr$y it out`, `Tuo t#i yrt s'1tel`);

if (result === true) {
  console.log('The strings are anagrams');
} else {
  console.log('The strings are not anagrams');
}