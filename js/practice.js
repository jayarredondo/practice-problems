"use strict";

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock, determine how many pairs of socks
// with matching colors there are.
//
//     For example, there are  socks with colors . There is one pair of color  and one of color .
//     There are three odd socks left, one of each color. The number of pairs is .
//
//       Function Description
//
// Complete the sockMerchant function in the editor below. It must return an integer representing the
// number of matching pairs of socks that are available.
//
//     sockMerchant has the following parameter(s):
//
//       n: the number of socks in the pile
//       ar: the colors of each sock
function sockMerchant(n, ar) {
    ar.sort()
    var pairs = 0;
    for(var i = 0; i < n; i++){
        if(ar[i] === ar[i + 1]) {
            pairs++;
            i++;
        }
    }
    return pairs;
}
console.log("Sock Merchant")
console.log(sockMerchant(6, [1, 3, 1, 2, 3, 5]), "Correct Answer: 2");
console.log(sockMerchant(10, [1, 3, 1, 2, 3, 5, 4, 1, 3, 5]), "Correct Answer: 3");

// -----------------------------------------------------------
// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details
// like topography. During his last hike he took exactly 'n' steps. For every step he took, he noted if
// it was an uphill, 'U' , or a downhill, 'D' step. Gary's hikes start and end at sea level and each step up
// or down represents a 1 unit change in altitude. We define the following terms:
//
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and
// ending with a step down to sea level. A valley is a sequence of consecutive steps below sea level, starting
// with a step down from sea level and ending with a step up to sea level. Given Gary's sequence of up and down
// steps during his last hike, find and print the number of valleys he walked through.
//
// For example, if Gary's path is s=[DDUUUUDD], he first enters a valley 2 units deep. Then he climbs out an up
// onto a mountain 2 units high. Finally, he returns to sea level and ends his hike.
//
// Function Description
//
// Complete the countingValleys function in the editor below. It must return an integer that denotes the
// number of valleys Gary traversed.
//
//     countingValleys has the following parameter(s):
//
//           n: the number of steps Gary takes
//           s: a string describing his path

function countingValleys(n, s) {
    var height = 0;
    var numberOfValleys = 0;
    for(var i = 0; i < n; i++){
        if(s[i] === 'U') {
            height++;
            if(height === 0) {
                numberOfValleys++
            }
        } else {
            height--;
        }
    }
    return numberOfValleys;
}
console.log("Counting Valleys")
console.log(countingValleys(8, ['D','D','U','U','D','U','D','D']), "Correct Answer: 2")
console.log(countingValleys(20, ['D','D','U','U','U','D','D','D','U','U','U','D','U','D','D','D','D','U','U','U']), "Correct Answer: 3")
//---------------------------------------------------
// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads
// and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current
// cloud plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump
// from her starting postion to the last cloud. It is always possible to win the game.
//
//     For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
//     For example, c = [0,1,0,0,0,1,0] indexed from 0...6. The number on each cloud is its index in the list so she must avoid the clouds at
//     indexes  and . She could follow the following two paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first path
//     takes 3 jumps while the second takes 4.
//
//     Function Description
//
// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as
// an integer.
//
//     jumpingOnClouds has the following parameter(s):
//
//          c: an array of binary integers

function jumpingOnClouds(c) {

    var jumps = -1;
    for (var i = 0; i < c.length; i++, jumps++) {
        if (i < c.length - 2 && c[i + 2] == 0) {
            i++;
        }
    }
    return jumps;
}
console.log("Jumping Clouds")
console.log(jumpingOnClouds([0,0,1,0,0,0,1,0,0,1,0,1,0]), "Correct Answer: 7")
console.log(jumpingOnClouds([0,0,1,0,0,0]), "Correct Answer: 3")
console.log(jumpingOnClouds([0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0]), "Correct Answer: 10")
//-----------------------------------------------------------------------------
// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first  letters of Lilah's infinite string.
//
//     For example, if the string s='abcac' and n=10, the substring we consider is abcacabcac, the first 10 characters
//     of her infinite string. There are 4 occurrences of 'a' in the substring.
//
//     Function Description
//
// Complete the repeatedString function in the editor below. It should return an integer representing the number of
// occurrences of a in the prefix of length  in the infinitely repeating string.
//
//     repeatedString has the following parameter(s):
//
//          s: a string to repeat
//          n: the number of characters to consider

function repeatedString(s, n) {
    var count = 0;
    var arem = 0;
    var rem = n % s.length;
    for (var i = s.length; i-- > 0;) {
        if (s.charAt(i) == 'a') {
            ++count;
            // The remaining must be counted only if it is not greater than the index.
            if (i < rem) {
                ++arem;
            }
        }
    }
    // n = total letters, minus the remainder. / length of initial repeated string multiplied by how many 'a's are
    // in the original string. adding the remainder a's to the return.
    return ((n - rem) / s.length * count) + arem
}

console.log("Repeated String");
console.log(repeatedString('abc', 10), "Correct Answer: 4")
console.log(repeatedString('acabaa', 15), "Correct Answer: 11")