var marks = [89, 97, 89, 94,86,88,96]

for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    console.log(element);
}


console.log('parish');
console.log('gulisthan');

function add(number1, number2){
    var total = number1 + number2;
    return total;
}
var result1 = add(65, 89);
console.log(result1);
var adam ='Adam sandler';
console.log('not adding');
console.log('not eating right now');
var kodom = 'kodom sandler';
var result2 = add(144, 568);
console.log(result2);


function largestNumber(numbers){
    var larger = numbers[0];
    for(var i =0; i< numbers.length; i++){
    var element = numbers[i];
        if(element > larger){
        larger = element;
        }
    }
    return larger;
}
var numbers = [65, 45, 23, 11, 89, 54, 78,39];
var output = largestNumber(numbers);
console.log('output', output);


