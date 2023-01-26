console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket = [];
console.log( `basket is ${basket}` );

function addItem( item ) {
    console.log( isFull() );
    if ( isFull() === true ){
        isFull( basket );
        basket.push( item );
        return true;
    }
}

addItem( 'chips' );
addItem( 'bread' );
addItem( 'milk' );
addItem( 'cookies' );
addItem( 'cheese' );
addItem( 'popcorn' );
console.log ( `basket is now ${basket}` );

function listItems() {
    for ( let grocery of basket ) {
        console.log( grocery );
    }
}

listItems();


// function empty() {
//    basket = [];
// }

// empty( basket );
// console.log( basket );

// STRETCH PROBLEMS

function isFull() {
    if ( basket.length < maxItems ) {
        return true;
    } else {
        return false;
    }
}

console.log( basket );

function removeItem( item ) {
    let index = basket.indexOf( item );
    if ( index !== -1 ) {
        basket.splice( index, 1 );
        return `${item} was removed`
    } else {
        return `null`
    }
}
console.log( removeItem( 'potatos' ) );
console.log( removeItem( 'chips' ) );
console.log( basket );

