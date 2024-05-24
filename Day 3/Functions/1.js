function validateParameters(parameter1, parameter2) {
    if (arguments.length !== 2) {
        throw Error('2 parameters are required.');
    }
    console.log(parameter1, parameter2);
}
validateParameters(1,2)