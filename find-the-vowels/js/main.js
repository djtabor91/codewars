/*We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!) */

function vowelIndices(word){
    //your code here
    let vowAry = [];
    word = word.split('');
    
    for(let i = 0; i < word.length; i++){
        if(word[i] == 'E' || word[i] == 'O' || word[i] == 'A' || word[i] == 'I' || word[i] == 'U' || word[i] == 'Y' || word[i] == 'o' || word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'u' || word[i] == 'y'){
            vowAry.push(i + 1)
        }
    }
    return vowAry
}

console.log(vowelIndices('orange'));

//loop through string
//check to see if each index is equal to vowel
//push vowel to new array