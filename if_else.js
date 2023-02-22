var age = 10;

if(age >= 65) {
    console.log('You get your income from your pension');
} else if(age < 65 && age >= 18){
    console.log('Each month you get a salary');
} else if(age < 18){
    console.log('You get allowance');
}else {
    console.log('The value of the age you entered is not numerical');
}

var day = 'Sunday';

switch(day){
    case 'Monday':
        console.log('Do something');
        break;
    
    case 'Tuesday':
        console.log('Do something');
        break;
    
    case 'Wednesday':
        console.log('Do something');
        break;
    
    case 'Thursday':
        console.log('Do something');
        break;
    
    case 'Friday':
        console.log('Do something');
        break;
    
    case 'Saturday':
        console.log('Do something');
        break;
    
    case 'Sunday':
        console.log('Do something');
        break;
    
    default:
        console.log('There is no day');
}
var time = '6am'

switch(time){
    case '6am':
        console.log('Covenant prayer hour');
        break;
    case '9am':
        console.log('Share 10 flyers');
        break;
    case '12pm':
        console.log('Prayers');
        break;
    case '3pm':
        console.log('Prayers in the presence of God');
        break;
    case '5:30pm':
        console.log('Evening prayers');
        break;
    
    default:
        console.log('Evening raid');
}
