//Array
var clothes = [];

clothes.push('Jeans');
clothes.push('Shirt');
clothes.push('Trousers');
clothes.push('T-Shirt');
clothes.push('African wear');

clothes.pop();

clothes.push('Suit');

console.log(clothes[2]);

for(var i = 0; i < clothes.length; i++){
    console.log(clothes[i]);
}

//Object
var favCar = {};

favCar.color = 'black';
favCar.convertible = true;

console.log(favCar);

for(var i = 0; i < favCar.length; i++){
    console.log(favCar[i]);
}