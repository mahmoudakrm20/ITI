function hamada (){
    var nSum = 0 ;
    for (var i = 0 ; i < arguments.length ; i++){
        if(typeof arguments[i] !== 'number' || isNaN(arguments[i]) ){
            throw Error ('parameteres must be numerical')
        }
        else {
            console.log('All parameteres are numerical')
            for (var i = 0 ; i < arguments.length ; i++){
                nSum+=arguments[i]
            }
        }
    }
    console.log(nSum)
}

hamada(1,2,8,9)
