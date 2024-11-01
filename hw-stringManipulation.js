//Function to reverse a string

function reverseString(myInput){
    let myCharArray = myInput.split("") //Split the string to charArray
    console.log(myCharArray) //print string to character array

    let charArrayLength = myCharArray.length //find the length of the char array
    console.log(charArrayLength)

    let revString ='' //initialize an empty string
    for(i=charArrayLength-1; i>=0; i--)
    {
        revString =  revString.concat(myCharArray[i])
    }
    console.log("The Reversed string is " +revString)

    if(myInput===revString){
        console.log("The given string " +myInput +" is a palindrome")
    }
    else{
        console.log("The given string " +myInput +" is NOT a palindrome")
    }
}
reverseString('Arunadevi')
reverseString('Level')


