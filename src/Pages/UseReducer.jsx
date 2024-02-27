import CodeSpace from "../Components/CodeSpace";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Image from "../Components/Image";
import Paragraph from "../Components/Paragraph";
import Tag from "../Components/Tag";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function UseReducer(props) {
    const codeSnippet = `const [state, dispatch] = useReducer(reducer, initialState);`;
    const codeSnippet2 = `
    import React, { useReducer } from 'react';

// Step 1: Define the reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Step 2: Create the component that uses useReducer
const CounterWithReducer = () => {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

// Step 3: Use the CounterWithReducer component in your application
const App = () => {
  return (
    <div>
      <h1>useReducer Example</h1>
      <CounterWithReducer />
    </div>
  );
};

export default App;

    `;
    return <div id="home">
        <Header />
        <div className="home-content">
            <Heading heading="useReducer:" />
            <CodeSpace language="javascript" code={codeSnippet} />
            <Paragraph 
             pragraph="useReducer is an alternative to useState for managing more complex state logic. It is particularly useful when the next state depends on the previous state."
            />
            <Paragraph 
             pragraph="The useReducer hook in React is used for managing more complex state logic in functional components. Let's create an example where useReducer is used to manage a simple counter:"
            />
            <CodeSpace language="javascript" code={codeSnippet2} />
            <Paragraph 
             pragraph="In this example:"
            />
            <Paragraph 
             pragraph=" 1.We define a counterReducer function that takes the current state and an action as parameters and returns the new state based on the action type."
            />
            <Paragraph 
             pragraph=" 2.We use the useReducer hook, providing the counterReducer function and the initial state ({ count: 0 }). It returns the current state and a dispatch function that can be used to dispatch actions to the reducer."
            />
            <Paragraph 
             pragraph=" 3.The CounterWithReducer component uses the state returned by useReducer to display the current count. It also provides buttons to increment, decrement, and reset the count by dispatching corresponding actions."
            />
            <Paragraph 
             pragraph=" 4.Finally, the App component renders the CounterWithReducer component."
            />
            <Paragraph 
             pragraph="This example demonstrates how useReducer can be used to manage more complex state logic in a React component by centralizing state transitions in a reducer function."
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