function isPalindrome(input) {
  const lowerCase = input.toLowerCase();
  let output = "";
  for (let i = lowerCase.length - 1; i >= 0; i--) {
    const el = lowerCase[i];
    output += el;
  }
  if (output === lowerCase) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Radar"));
console.log(isPalindrome("Malam"));
console.log(isPalindrome("Kasur ini rusak"));
console.log(isPalindrome("Ibu Ratna antar ubi"));
console.log(isPalindrome("Malas"));
console.log(isPalindrome("Makan nasi goreng"));
console.log(isPalindrome("Balonku ada lima"));

/**
 * Radar                 # --> palindrome
Malam                 # --> palindrome
Kasur ini rusak       # --> palindrome
Ibu Ratna antar ubi   # --> palindrome

Malas                 # --> not palindrome
Makan nasi goreng     # --> not palindrome
Balonku ada lima      # --> not palindrome

 */
