//using var inside the if block

/*due to hoisting the variable declaration 'var browserVersion' 
moves to the top of the function and the value Firefox never assigns to the varaible
as the execution does not get into the if block, as the variable is still undefined*/

// the value of const is shadowing by var variable inside the function block due to the local scope

const browserVersion = 'chrome'

function getBrowserVersion()
{
    if(browserVersion=='chrome'){
        var browserVersion = 'Firefox' 
    }
    console.log(browserVersion) //logs undefined as output due to hoisting
}
getBrowserVersion() 

//using let inside the if block; no hoisting in let variable
const browserVersions= 'Firefox'

function getBrowserVersions()
{
    if(browserVersions=='Firefox'){
        let browserVersions= 'chrome' // the scope of the let variable is inside the if block, the value assigned to let here does not affect the global variable
        console.log(browserVersions) //prints value chrome
    }
    console.log(browserVersions) //logs Firefox as output  - from global variable
}
getBrowserVersions() 