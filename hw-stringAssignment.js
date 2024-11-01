//Example 1 - find the length of last word

wordLength("I have a Lovely Family")

function wordLength(myExample){
    let words = myExample.split(' ')
    let totalwords = words.length
    let lastWord = words[totalwords-1]
    let lastWordLength = words[totalwords-1].length
    console.log("The last word in the string is "+lastWord+ " and the length is "+lastWordLength)
}


//Example 2 - Trim string and find length of last word

function trimLength(myExample2){
    let trimExample = myExample2.trim()
    wordLength(trimExample)
}
trimLength(" this is playwright practice   ")


//Example 3 - strings are anagrams

function isAnagram(stringa, stringb) {
   
    let stringc = stringa.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
    let stringd = stringb.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')

    if(stringc===stringd){
        console.log("The strings are anagram")
    }
    else{
        console.log("The strings are NOT anagram")
    }
}

isAnagram("LIsten", "silENT")
isAnagram("HEllO", "WORld")