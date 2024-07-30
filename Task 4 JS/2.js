var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var x = prompt("Enter a date in format yyyy-mm-dd");

function dayName (){
     if(x.length !==10 && x[4] !== '-' || x[7] !== '-' ){
        alert('Wrong Date Format');
        throw Error('Wrong date format');
        }
    else{
    var D = new Date(x).getDay();
    document.write(daysOfWeek[D]);
    return daysOfWeek[D];
        }
}
dayName()