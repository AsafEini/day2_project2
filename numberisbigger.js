var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['first_number', 'last_number'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  first number: ' + result.first_number);
    console.log('  last number: ' + result.last_number);

    if(isNaN(result.first_number) || isNaN(result.last_number) ){
        console.log("try again!")
    }
    else if(result.first_number < result.last_number){
        console.log(result.last_number+' is bigger!')
    }
    else if(result.first_number === result.last_number){
        console.log('they are even!')
    }
    else if(result.first_number > result.last_number){
        console.log(result.first_number+' is bigger!')
    }


});