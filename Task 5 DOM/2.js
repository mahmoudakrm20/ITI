var userNames=[];
var userAges=[];
do {
    var userNumber = parseFloat(prompt('enter the number of persons'))
    if (isFinite(userNumber)){
        for (var i = 1 ; i < userNumber+1 ; i++){
            do {
                var nameInput = prompt(`Enter Person ${i} Name`)
                if (nameInput.length > 2 && nameInput.length < 10){
                    userNames.push(nameInput);
                    break
                }
            } while (true);
            do {
                var ageInput = parseFloat(prompt(`Enter Person ${i} Age`))
                if(!isNaN(ageInput) && ageInput > 10 && ageInput < 60){
                    userAges.push(ageInput);
                    break
                }
            } while (true);
        }
        break
    }
} while (true);


var myTable = document.getElementById('myTable')
myTable.innerHTML=`
<tr>
<th>Name</th>
<th>Age</th>
</tr>
<tr>`
for (let index = 0; index < userNames.length; index++) {
    var tableEdit=`
    <td>${userNames[index]}</td>
    <td>${userAges[index]}</td>
    </tr>`
    myTable.innerHTML+=tableEdit
}
myTable.style.display="table"