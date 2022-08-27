// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223


 const num = 124323;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));



// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.

function palindrome(str) {
    var flag = true;
    var j = str.length - 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[j]) {
            j--;
        }
        else {
            flag = false;
        }
    }
    if (!flag) {
        document.write(str + " is not a palindrome");
    }
    else {
        document.write(str + " is a palindrome");
    }
}
palindrome("madam");




// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function combinator (s) {
    list_of_strings = new Array();
    for(i=0;i<s.length;i++) {
        for(j=i+1;j<s.length+1;j++) {
            list_of_strings.push(s.slice(i, j));
        }
    }
    return list_of_strings;
 }
 
 document.write(combinator("dog"));




// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alpha(str) {
    var arr = str.split(""); // splits the string
    res = arr.sort().join(""); // sort the array and joins to form a string
    return res; // returns the result
  }
  console.log("taking geeksforgeeks as a string");
  console.log(alpha("geeksforgeeks"));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function upperCase(string) {
    var arr = string.split(' ');
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length);
        str = str.concat(arr[i] + " ");
    }
    document.write(str);
}
upperCase("the quick brown fox");



// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longest(string) {
    var arr = string.split(' ');
    var longest;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].length > arr[i].length) {
                longest = arr[j];
            }
        }
    }
    document.write(longest);
}
longest("Web Development Tutorial");






// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Example string : 'The quick brown fox'
// Expected Output : 5

function occurence(string) {
    var count = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (string[i].toLowerCase() === vowels[j].toLowerCase()) {
                count++;
            }
        }
    }
    document.write(count);
}
occurence("The quick brown fox");





// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function prime(num) {
    if (num > 1) {
        var isPrime = true;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            document.write(num + " is a prime number");
        }
        else {
            document.write(num + " is not a prime number");
        }
    }
}




// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function parameter(argumentType) {
    return typeof (argumentType);
}
var a = parameter(new Date());
var a = parameter(1);
var a = parameter("1");
var a = parameter(true);
var a = parameter();
document.write(a);


// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

var arr=[23,45,78,23];
function secondval(arr){
arr= arr.sort();
Console.log("second smaller = " + arr[1] + "& second greater = "+ arr[arr.length-2] );
}


