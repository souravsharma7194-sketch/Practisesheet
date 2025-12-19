// {/*ALL ABOUT PROMISES*/ }

// console.log("namaste");



// setTimeout(function (){
// console.log("Javascript");
// },5000)

// console.log("Season 2");




// const cart = ["shoes","pants","kurta"];


// {first we create orderId and then proceed to payment}

// api.createOrder(cart, function(){


// api.proceedToPayment(function(){

// api.showOrderSummary(function(){
// api.UpdateWallet
// }
// )
// })

// })

// this api callback hell or callback structure is also known as PYRAMID OF DOOM.



// INVERSON OF CONTROL


// it means u loose control of your code while managing alot of callbacks.


// IMP OF CALLBACKS

//  * callbacks are superpowerful ways to handle asyncoronous operations in js infact ascynchronous programming in js exists because callbacks exists

// ISSUE WITH CALLBACKS

//     * CALLBACK HELL (FUNCTION INSIDE ANOTHER FUNCTION)
// * INVERSION OF CONTROL (WE GAVE CONTROL OF ONE FUNCTION TO ANOTHER FUNCTION WE DONT KNOW IF THAT FUNC WILL EXECUTE THE NEXT CALLBACK OR NOT SO WE LOOSE CONTROL i.e  INVERSION OF CONTROL)


PROMISES 
                                     

promises comes into picture as it will definately call our callback function so we dont have to worry on other function .



earlier createOrder(cart, function (orderId) {
    
    proceedToPayment(orderId);

});


we gave control of our api to another api which we are not aware of how much time that takes will it call our callback if it does what if it executes our callback twice so, we make promise.PROMISES

const promise = createOrder(cart);
this will give us data an empty object INITIALLTY IT WILL BE UNDEFINED.


const promise = createOrder(cart);

promise.then(function (orderId) {
    
    proceedToPayment(orderId);

});

here we are attaching a callback func to a promise, EARLIER WE WERE PASSING CALLBACK FUNC TO ANOTHER Function.apply

as soon as this promise is filled with its data it will automatically call the callback.and it will call it once only once.its a gaurantee that javascript provides us.ANOTHER



{ FETCH }

const GIT_HUB_API = "";

const user = fetch(GIT_HUB_API)

console.log(user);

user.then(funtion(data){

    console.log(data);


})


this log will give us < pending > in console because it is an inconsistency of browser. 


3 states of a promise 

    * pending : promise
    *    promiseState: "fullfilled"
    * rejected: Response;
    * 
    * 
    * 


    PROMMISE OBJECTS ARE IMMUTABLE THAT WHENEVER IT IS FULLFILLED AND WHENEVER WE HAVE DATA INSIDE OUR PROMISE WE CAN USE DATA ANYWHERE AND OUR DATA CAN NOT BE MUTATABLE BY ANYONE
WE CANNOT EDIT THIS USER NOW IF ANYONE DOES SO IT IS HANDLED BY US AND RESOLVED ONLY ONCE AND PASS TO ANYWHERE.AND



A PROMISE IS AN OBJECT REPRESENTING EVENTUAL COMPLETION OR FAILURE OF AN ASCNCHRONOUS OPERATIONS.




                      {PROMISE CHAINING}





.then() creates promise chaining with callbacks.



    Q.How can you directly manipulate the DOM directly in react js ?
        
Short answer: You can, but you shouldn't in most cases.

Why you shouldn't: React manages the DOM through its Virtual DOM. If you manipulate the DOM directly, you bypass React's system, which can cause:

React's state and the actual DOM to get out of sync
Unpredictable behavior
Your changes being overwritten by React
Bugs that are hard to track down
The React way instead:

1. Use state to control elements:

javascript
function Example() {
    const [color, setColor] = useState('red');
    
    return (
        <div style={{color: color}}>
            <button onClick={() => setColor('blue')}>Change Color</button>
        </div>
    );
}
2. Use refs when you really need direct access:

javascript
function Example() {
    const inputRef = useRef(null);
    
    const focusInput = () => {
        inputRef.current.focus();  // This is acceptable
    };
    
    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
When direct DOM manipulation is acceptable with refs:

Managing focus
Triggering animations
Integrating with non-React libraries (like D3.js)
Measuring element dimensions     