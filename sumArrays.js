function sum(numbers){
    var s = 0;

    for (let c = 0; c < numbers.length; c++) {
        s += numbers[c];
    }
    return s;
}

sum([1, 2, 3]);

/*first completed version
function sum (numbers) {
    "use strict";
    if(numbers.length == 0){
        return 0;
    }

    var sum = 0;
    
    for (var counter = 0; counter <= numbers.length-1; counter++) {
      sum = sum + numbers[counter];
    }

    return sum;
    
}

//test
sum([1, 5.2, 4, 0, -1])
Changes explained:
I didn't need to test if the array is empty
I set the output var to the output they want if the array is empty.
It will pass thru the loop unchanged if the array si empty.

Shortened all the var names to a single char.  

'<= aVarialbe - 1' is the same as '< aVariable'
*/