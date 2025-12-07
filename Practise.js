 /* Q1. Explain lifecycle of React?

 React lifecycle refers to a seres of phases through which  a component goes from creatig it to to its removal from the DOM.
 there are 3 major lifecycle phases i.e mounting , updating and unmounting . 
 
* Mounting means when a component is created and inserted into the DOM.
* Updating means when a component is updated or you may say it runs on a dependency in easy words when props or state changes.
* Unmounting is clearing of the component removal from DOM.


in functional component we can use hooks where as in class component we cant use it and we use constructor .

for ex 

 // MOUNTING STAGE
useEffect(()=>
    {
    console.log("Mounted");
    
    });

*  it is best for API calls
*  DOM is available
* only runs once

    // UNMOUNTING STAGE

    useEffect(()=>{
        
        console.log("Updating")

        },[count])

* it runs on the dependency
* best for conditional API calls
* 

useEffect(()=>{
    
    let id = setInterval(()=> 
    { 
        console.log("updating")
    
    },1000)
    
    
    
    return () => 
        
        clearInterval(id);

    },[])

* cleanup is neccessary for memory leaks.
* it runs only once before removal.




Question 2: How does lifecycle work in functional components?

Functional components use the useEffect hook to replace the lifecycle methods.

** A SINGLE USEFFECT CAN BEHAVE LIKE ALL 3 LIFECYCLE PHASES DEPENDING ON HOW THE DEPENDENCY ARRAY IS USED.


Q3. What’s the role of React Fiber in lifecycle?

In react16+, the lifecycle runs on the top of react fiber architecture.
fiber allows the react to pause , resume and discard rendering work . it also enables concurrent rendering.

These old methods were removed. 

componentWillMount

componentWillUpdate

componentWillReceiveProps

They were replaced by safer methods like getDerivedStateFromProps.



Question 3: Why does useEffect run twice in React 18?

due to StrictMode tags we see in which App.jsx is wrapped it means that react intentionally runs the side effects twice to fdetect the bugs after removing the tags we can see it will only run once ,


Question 4: What’s the difference between useEffect and useLayoutEffect?

Answer: useEffect → runs after paint (non-blocking)

useLayoutEffect → runs before paint (blocking)

Use layout effect only for:

*DOM measurements
*synchronizing scroll
*UI flicker fixes.

Q5. What should NOT be done inside lifecycle methods?


* updating state in componentDidUpdate without condition
* making API calls in render
* heavy computations inside lifecycle
* causing side effects in render phase (must stay pure)

⚠️ Deprecated / UNSAFE lifecycle methods (React 16+)

These are considered unsafe because they run during the render phase:

componentWillMount() → UNSAFE_componentWillMount
componentWillReceiveProps() → UNSAFE_componentWillReceiveProps
componentWillUpdate() → UNSAFE_componentWillUpdate
Interviewers LOVE asking why they are unsafe:

They can run multiple times under React’s async/concurrent rendering, causing bugs.


