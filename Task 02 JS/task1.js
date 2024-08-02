var count = 0
do {
    var userPrompt = prompt("Enter a number");
    var promptParsed = parseFloat(userPrompt);
    count = count+promptParsed
    console.log(count)
    if (isNaN(count)) 
        {
            count=0
        }
    if(count>100) {
        document.write(`<h1> Your Sum Is ${count} </h1>`)
        break;
    }
    if(userPrompt==0){
        document.write(`<h1> You entered 0 </h1>`)
        break;
    };
}
while(true)
    