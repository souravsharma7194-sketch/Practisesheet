// // {/*ALL ABOUT PROMISES*/ }

// // console.log("namaste");



// // setTimeout(function (){
// // console.log("Javascript");
// // },5000)

// // console.log("Season 2");




// // const cart = ["shoes","pants","kurta"];


// // {first we create orderId and then proceed to payment}

// // api.createOrder(cart, function(){


// // api.proceedToPayment(function(){

// // api.showOrderSummary(function(){
// // api.UpdateWallet
// // }
// // )
// // })

// // })

// // this api callback hell or callback structure is also known as PYRAMID OF DOOM.



// // INVERSON OF CONTROL


// // it means u loose control of your code while managing alot of callbacks.


// // IMP OF CALLBACKS

// //  * callbacks are superpowerful ways to handle asyncoronous operations in js infact ascynchronous programming in js exists because callbacks exists

// // ISSUE WITH CALLBACKS

// //     * CALLBACK HELL (FUNCTION INSIDE ANOTHER FUNCTION)
// // * INVERSION OF CONTROL (WE GAVE CONTROL OF ONE FUNCTION TO ANOTHER FUNCTION WE DONT KNOW IF THAT FUNC WILL EXECUTE THE NEXT CALLBACK OR NOT SO WE LOOSE CONTROL i.e  INVERSION OF CONTROL)


// PROMISES
                                     

// promises comes into picture as it will definately call our callback function so we dont have to worry on other function .



// earlier createOrder(cart, function (orderId) {
    
//     proceedToPayment(orderId);

// });


// we gave control of our api to another api which we are not aware of how much time that takes will it call our callback if it does what if it executes our callback twice so, we make promise.PROMISES

// const promise = createOrder(cart);
// this will give us data an empty object INITIALLTY IT WILL BE UNDEFINED.


// const promise = createOrder(cart);

// promise.then(function (orderId) {
    
//     proceedToPayment(orderId);

// });

// here we are attaching a callback func to a promise, EARLIER WE WERE PASSING CALLBACK FUNC TO ANOTHER Function.apply

// as soon as this promise is filled with its data it will automatically call the callback.and it will call it once only once.its a gaurantee that javascript provides us.ANOTHER



// { FETCH }

// const GIT_HUB_API = "";

// const user = fetch(GIT_HUB_API)

// console.log(user);

// user.then(funtion(data){

//     console.log(data);


// })


// this log will give us < pending > in console because it is an inconsistency of browser.


// 3 states of a promise

//     * pending : promise
//     *    promiseState: "fullfilled"
//     * rejected: Response;
//     *
//     *
//     *


//     PROMMISE OBJECTS ARE IMMUTABLE THAT WHENEVER IT IS FULLFILLED AND WHENEVER WE HAVE DATA INSIDE OUR PROMISE WE CAN USE DATA ANYWHERE AND OUR DATA CAN NOT BE MUTATABLE BY ANYONE
// WE CANNOT EDIT THIS USER NOW IF ANYONE DOES SO IT IS HANDLED BY US AND RESOLVED ONLY ONCE AND PASS TO ANYWHERE.AND



// A PROMISE IS AN OBJECT REPRESENTING EVENTUAL COMPLETION OR FAILURE OF AN ASCNCHRONOUS OPERATIONS.




//                       {PROMISE CHAINING}





// .then() creates promise chaining with callbacks.



//     Q.How can you directly manipulate the DOM directly in react js ?
        
// Short answer: You can, but you shouldn't in most cases.

// Why you shouldn't: React manages the DOM through its Virtual DOM. If you manipulate the DOM directly, you bypass React's system, which can cause:

// React's state and the actual DOM to get out of sync
// Unpredictable behavior
// Your changes being overwritten by React
// Bugs that are hard to track down
// The React way instead:

// 1. Use state to control elements:

// javascript
// function Example() {
//     const [color, setColor] = useState('red');
    
//     return (
//         <div style={{color: color}}>
//             <button onClick={() => setColor('blue')}>Change Color</button>
//         </div>
//     );
// }
// 2. Use refs when you really need direct access:

// javascript
// function Example() {
//     const inputRef = useRef(null);
    
//     const focusInput = () => {
//         inputRef.current.focus();  // This is acceptable
//     };
    
//     return (
//         <>
//             <input ref={inputRef} />
//             <button onClick={focusInput}>Focus Input</button>
//         </>
//     );
// }
// When direct DOM manipulation is acceptable with refs:

// Managing focus
// Triggering animations
// Integrating with non-React libraries (like D3.js)
// Measuring element dimensions



// Q.What does context API does ?


// The Context API lets you share data across your component tree without passing props manually through every level (avoiding "prop drilling").
// The Problem it solves:
// javascript// ❌ Prop drilling - passing props through components that don't need them
// <App user={user}>
//   <Header user={user}>
//     <Navbar user={user}>
//       <UserProfile user={user} />  // Only this component needs it!
//     </Navbar>
//   </Header>
// </App>
// The Solution with Context:
// 1. Create Context:
// javascriptimport { createContext } from 'react';
// const UserContext = createContext();
// 2. Provide the value at the top:
// javascriptfunction App() {
//     const user = { name: "John", age: 25 };
    
//     return (
//         <UserContext.Provider value={user}>
//             <Header />
//         </UserContext.Provider>
//     );
// }
// 3. Consume it anywhere below:
// javascriptimport { useContext } from 'react';

// function UserProfile() {
//     const user = useContext(UserContext);
    
//     return <div>Hello {user.name}</div>;
// }
// Common use cases:

// Theme (dark/light mode)
// User authentication data
// Language/localization
// Global app settings

// When NOT to use it:

// For frequently changing data (can cause performance issues)
// When you only need to pass props 1-2 levels down
// For complex state management (use Redux, Zustand, etc. instead)

// // Context is great for global data that doesn't change often/


// Q.WHAT ARE ERROR BOUNDRIES IN REACT JS ?
    
//     Error Boundaries catch JavaScript errors in React components and display a fallback UI instead of crashing the whole app.
// What they catch:

// Errors during rendering
// Errors in lifecycle methods
// Errors in constructors

// What they DON'T catch:

// Event handlers (use try-catch instead)
// Asynchronous code (setTimeout, promises)
// Server-side rendering errors
// Errors in the error boundary itself

// How to create one:
// javascriptimport React from 'react';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }
    
//     static getDerivedStateFromError(error) {
//         // Update state so next render shows fallback UI
//         return { hasError: true };
//     }
    
//     componentDidCatch(error, errorInfo) {
//         // Log error to an error reporting service
//         console.log('Error:', error);
//         console.log('Error Info:', errorInfo);
//     }
    
//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong.</h1>;
//         }
        
//         return this.props.children;
//     }
// }
// How to use it:
// javascriptfunction App() {
//     return (
//         <ErrorBoundary>
//             <MyComponent />
//             <AnotherComponent />
//         </ErrorBoundary>
//     );
// }
// For event handlers (not caught by error boundaries):
// javascriptfunction MyComponent() {
//     const handleClick = () => {
//         try {
//             // code that might throw
//             throw new Error('Oops!');
//         } catch (error) {
//             console.error('Caught error:', error);
//         }
//     };
    
//     return <button onClick={handleClick}>Click me</button>;
// }
// Note: Error boundaries must be class components. There's no hooks-based equivalent yet, though libraries like react-error-boundary provide a simpler API.

