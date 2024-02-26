import CodeSpace from "../Components/CodeSpace";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Image from "../Components/Image";
import Paragraph from "../Components/Paragraph";
import Tag from "../Components/Tag";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function UseState(props) {
    const codeSnippet = `const [state, setState] = useState(initialState);`;
    const codeSnippet2 = `
    import React, { useState } from 'react';

const CounterExample = () => {
  // useState returns an array with two elements: the current state value and a function to update it.
  const [count, setCount] = useState(0);

  // Event handler to increment the counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the counter
  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default CounterExample;

    `;
    return <div id="home">
        <Header />
        <div className="home-content">
            <Heading heading="useState:" />
            <CodeSpace language="javascript" code={codeSnippet} />
            <Paragraph 
             pragraph="useState allows functional components to manage state without the need for class components. It returns an array with two elements: the current state value and a function to update it."
            />
            <Paragraph 
             pragraph="Let’s create a simple React functional component that uses the useState hook to manage a piece of state (a counter, in this case):"
            />
            <CodeSpace language="javascript" code={codeSnippet2} />
            <Paragraph 
             pragraph="In this example:"
            />
            <Paragraph 
             pragraph=" 1.We import useState from React."
            />
            <Paragraph 
             pragraph=" 2.We use the useState hook to declare a state variable count with an initial value of 0."
            />
            <Paragraph 
             pragraph=" 3.We have two event handlers (incrementCounter and decrementCounter) that use the setCount function to update the count state based on the current value."
            />
            <Paragraph 
             pragraph=" 4.The component renders the current count and two buttons to increment and decrement the counter."
            />
            <Paragraph 
             pragraph="When the buttons are clicked, the component re-renders with the updated count value. The use of useState allows us to manage and update state in a functional component without needing to create a class component."
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