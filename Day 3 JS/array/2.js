var userNumbers = []
for (var i = 0 ; i < 5 ; i++){
    var input = parseFloat(prompt(`Enter 5 numbers , ${i+1}`))
    if (!isNaN(input)){
        userNumbers.push(input);
    }
    else {
        i--
    }
}
document.write(`
<h1>Sorting</h1>
<h2 style="color:red;border-top:1px solid black">you've entered the values of ${userNumbers}</h2>
<h2 style="color:red;">Your values after being sorted descendingly ${userNumbers.sort((a, b)=> (a - b))}</h2>
<h2 style="color:red;">Your values after being sorted ascendingly ${userNumbers.sort((a, b) => (b - a))}</h2>
`)
// sort 
//Lexicographic order 