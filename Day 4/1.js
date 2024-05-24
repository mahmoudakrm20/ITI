
// function userDate (userInput){
//     userInput = prompt("Please enter the date in the following format DD – MM – YYYY) ex. 04 - 08 - 1997")

//     if(userInput.length !==10 && userInput[2] !== '-' || userInput[5] !== '-' ){
//         alert('enter vaild')       
//         }
//         else{
//             var dateParts = userInput.split('-');
//             var anyThingNow = new Date (`${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`);
//             console.log(anyThingNow)
//             return anyThingNow
//         }}
//         userDate()
//         // prompt out of the function 
//         //throw error 
//         // 

var userInput = prompt("Please enter the date in the following format DD – MM – YYYY) ex. 04 - 08 - 1997")
if(userInput.length !==10 && userInput[2] !== '-' || userInput[5] !== '-' ){
    alert('Wrong Date Format')
    throw Error('Wrong date format')
    }
    
function userDate (){
    var dateParts = userInput.split('-');
    var anyThingNow = new Date (`${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`);
    console.log(anyThingNow)
    return anyThingNow
}
userDate()
        