/*Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.*/

function calculateTip(amount, rating) {
    
    
    if(rating === 'Terrible'){
        return amount * 0
    }else if(rating === 'poor'.toLocaleLowerCase()){
        return Math.ceil(amount * .5)
    }else if(rating === 'Good'.toLowerCase()){
        return Math.ceil(amount * .1)
    }else if(rating === 'Great'.toLowerCase()){
        return Math.ceil(amount * .15)
    }else if(rating === 'Excellent'.toLowerCase()){
        return Math.ceil(amount * .2)
    }else {
        return 'Rating not recognised'
    }
    
}


console.log(calculateTip(105.677,'excellent'));
