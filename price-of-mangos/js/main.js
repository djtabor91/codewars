
/*There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free */

function mango(quantity, price){
    let offer = quantity/3;
    let final = Math.floor(offer);
    return (quantity * price) - (final * price);
}


console.log(mango(3,3));
//return total
//if you buy two get one free
//use conditional statement
//