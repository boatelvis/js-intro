for(i = 1; i <= 10; i++){
    if(i == 1){
        console.log('Gold medal');
    }
    else if(i == 2){
        console.log('Silver medal');
    }
    else if(i == 3){
        console.log('Bronze medal');
    } else {
        console.log(i);
    }
}

for(var i = 1; i < 11; i++)
switch(i){
    case 1:
        console.log('Gold medal');
        break;
        
    case 2:
        console.log('Silver medal');
        break;
    case 3:
        console.log('Bronze medal');
        break;
    
    default:
        console.log(i);
}

for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}

console.log(10 == '10');
var a = 'apple'
var b = 'Banana'
console.log(b.toLowerCase() < a.toLowerCase());