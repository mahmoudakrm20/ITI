var userNumbers = []
for (var i = 0 ; i < 3 ; i++){
    var input = parseFloat(prompt(`Enter 3 numbers , ${i+1}`))
    if (!isNaN(input)){
        userNumbers.push(input);
    }
    else {
        i--
    }
}
document.write(`
<h1>Adding -- Multiplying -- and dividing 3 values</h1>
<h2 style="color:red;border-top:1px solid black">sum of the 3 values ${userNumbers[0]+userNumbers[1]+userNumbers[2]}</h2>
<h2 style="color:red;">multiplication of the three values ${userNumbers[0]*userNumbers[1]*userNumbers[2]}</h2>
<h2 style="color:red;">division of the 3 values ${userNumbers[0]/userNumbers[1]/userNumbers[2]}</h2>
`)