import CodeSpace from "../Components/CodeSpace";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Image from "../Components/Image";
import Paragraph from "../Components/Paragraph";
import Tag from "../Components/Tag";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function UseMemo(props) {
    const codeSnippet = `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`;
    const codeSnippet2 = `
    import React, { useState, useMemo } from 'react';

// Step 1: Create a simple factorial calculation function
const calculateFactorial = (n) => {
  console.log('Calculating factorial(${n})');
  if (n <= 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
};

// Step 2: Create the component that uses useMemo
const FactorialCalculator = ({ number }) => {
  // useMemo memoizes the result of the calculateFactorial function
  const factorialResult = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <p>Factorial of {number} is: {factorialResult}</p>
    </div>
  );
};

// Step 3: Use the FactorialCalculator component in your application
const App = () => {
  const [inputNumber, setInputNumber] = useState(5);

  console.log('App rendered');

  return (
    <div>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(parseInt(e.target.value, 10))}
      />
      <FactorialCalculator number={inputNumber} />
    </div>
  );
};

export default App;

    `;
    return <div id="home">
        <Header />
        <div className="home-content">
            <Heading heading="useMemo:" />
            <CodeSpace language="javascript" code={codeSnippet} />
            <Paragraph 
             pragraph="useMemo memoizes the result of a function, re-computing it only if the dependencies change. This is beneficial for optimizing expensive calculations."
            />
            <Paragraph 
             pragraph="The useMemo hook in React is used to memoize the result of a function, re-computing it only if the dependencies change. This is useful for optimizing expensive calculations. Let's create an example where useMemo is used to memoize the result of a factorial calculation:"
            />
            <CodeSpace language="javascript" code={codeSnippet2} />
            <Paragraph 
             pragraph="In this example:"
            />
            <Paragraph 
             pragraph=" 1.We create a calculateFactorial function that calculates the factorial of a given number. The function logs a message indicating when it is called."
            />
            <Paragraph 
             pragraph=" 2.The FactorialCalculator component uses the useMemo hook to memoize the result of the calculateFactorial function based on the number prop. The result is recalculated only if the number prop changes."
            />
            <Paragraph 
             pragraph=" 3.The App component renders an input for entering a number and the FactorialCalculator component with the current input number as a prop."
            />
            <Paragraph 
             pragraph=" 4.When you enter a new number in the input, the calculateFactorial function is called only if the input number changes, demonstrating the memoization effect of useMemo."
            />
            <Paragraph 
             pragraph="This example illustrates how useMemo can be used to optimize calculations by memoizing the result and preventing unnecessary recalculations when the dependencies remain unchanged."
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