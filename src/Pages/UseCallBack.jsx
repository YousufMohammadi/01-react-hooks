import CodeSpace from "../Components/CodeSpace";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Image from "../Components/Image";
import Paragraph from "../Components/Paragraph";
import Tag from "../Components/Tag";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function UseCallBack(props) {
    const codeSnippet = `const memoizedCallback = useCallback(() => {
        // Callback logic
      }, [dependencies]);`;
    const codeSnippet2 = `
    import React, { useState, useCallback } from 'react';

// Step 1: Create a simple child component
const ChildComponent = ({ handleClick }) => {
  console.log('ChildComponent rendered');

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

// Step 2: Create the parent component that uses useCallback
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // useCallback memoizes the callback function
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    // Do something with the count, for example, increment it
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means the callback does not depend on any props or state

  console.log('ParentComponent rendered');

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

// Step 3: Use the ParentComponent in your application
const App = () => {
  console.log('App rendered');

  return (
    <div>
      <h1>useCallback Example</h1>
      <ParentComponent />
    </div>
  );
};

export default App;

    `;
    return <div id="home">
        <Header />
        <div className="home-content">
            <Heading heading="useCallBack:" />
            <CodeSpace language="javascript" code={codeSnippet} />
            <Paragraph 
             pragraph="useCallback memoizes a callback function, preventing it from being recreated on each render. This is useful for optimizing performance in child components."
            />
            <Paragraph 
             pragraph="The useCallback hook in React is used to memoize functions, preventing them from being recreated on each render. This is particularly useful for optimizing performance in scenarios where a function is passed down to child components. Let's create an example where useCallback is used to memoize a callback function:"
            />
            <CodeSpace language="javascript" code={codeSnippet2} />
            <Paragraph 
             pragraph="In this example:"
            />
            <Paragraph 
             pragraph=" 1.We create a ChildComponent that receives a handleClick function as a prop. This component has a button that triggers the provided callback when clicked."
            />
            <Paragraph 
             pragraph=" 2.The ParentComponent uses the useState hook to manage a count state. It defines a memoized callback function handleClick using the useCallback hook. This function increments the count when called."
            />
            <Paragraph 
             pragraph=" 3.The ParentComponent renders the ChildComponent and passes down the memoized handleClick function as a prop."
            />
            <Paragraph 
             pragraph=" 4.The App component renders the ParentComponent."
            />
            <Paragraph 
             pragraph="By using useCallback, we ensure that the handleClick function is memoized and remains the same across renders as long as its dependencies (specified in the dependency array) don't change. This can be helpful in optimizing performance, especially in scenarios where the callback is passed to child components and you want to prevent unnecessary re-renders of those components."
            />
            <div style={{marginTop:10}}>
            <Tag link="www.google.com" title="React"/>
            <Tag link="www.google.com" title="Hooks"/>
            <Tag link="www.google.com" title="JavaScript"/>
            <Tag link="www.google.com" title="Usestate"/>
            <Tag link="www.google.com" title="UseEffect"/>
            </div>

        </div>
        <Footer />
    </div>
}