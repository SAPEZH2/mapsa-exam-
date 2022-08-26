// soal 1 anagram

function areAnagram(str1,str2)
{
    let n1 = str1.length;
    let n2 = str2.length;

if (n1 !== n2)
    return false;
    str1.sort();
    str2.sort()

    for (let i = 0; i <= n1 ; i++)
    if (str1[i] != str2[i])
    return false;
    return true;
}

let str1 =[`t`, `e`, ` s`, `t`]
let str2 =[`t`, `t`, `e`, `w`]

if (areAnagram(str1, str2))
console.log("the string are Anagram");
else 
console.log("the string are not Anagram");


//////////////////////////////////////////////////////////
// Soal 2 divisible by 1 to 20

function smallestDivisible(limit) {
    var i, n = 1;

    function largestPower(n, limit) {
        var p, e = 2, largest = n;
        while ((p = Math.pow(n, e)) <= limit) {
            largest = p;
            e += 1;
        }
        return largest;
    }

    function isPrime(n) {
        var i, limit = Math.ceil(Math.sqrt(n));
        for (i = 3; i <= limit; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (i = 3; i <= limit; i += 2) {
        if (isPrime(i)) {
            n *= largestPower(i, limit);
        }
    }

    return n * largestPower(2, limit);
}

console.log(smallestDivisible(20) + " this is the smallest numeber that is divisble to 20 numbers");

///////////////////////////////
// soal 3 pruduct_sum

var array = [1, 2 ,3 ,4 ,5 ,6],
s = 0,
p = 1,
i;
for (i = 0; i < array.length; i += 1) {
    s += array[i];
    p *= array[i];
}
console.log(`sum :`+s +` product : ` +p );

//////////////////////////////////////
// soal 4 quera


