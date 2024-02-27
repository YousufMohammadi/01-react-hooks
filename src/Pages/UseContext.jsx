import CodeSpace from "../Components/CodeSpace";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Image from "../Components/Image";
import Paragraph from "../Components/Paragraph";
import Tag from "../Components/Tag";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function UseContext(props) {
    const codeSnippet = `const contextValue = useContext(MyContext);`;
    const codeSnippet2 = `
    import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Create a provider component to wrap your application
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Create a component that uses the context
const ThemedComponent = () => {
  // Use the useContext hook to access the ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '20px', backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <h2>Themed Component</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Step 4: Wrap your application with the ThemeProvider
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API Example</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;


    `;
    return <div id="home">
        <Header />
        <div className="home-content">
            <Heading heading="useContext:" />
            <CodeSpace language="javascript" code={codeSnippet} />
            <Paragraph 
             pragraph="useContext allows functional components to consume values from a React context. It simplifies accessing global data without the need for prop drilling."
            />
            <Paragraph 
             pragraph="The useContext hook in React is used for consuming values from a React context. Let's create an example to demonstrate how to use useContext to access a theme context:"
            />
            <CodeSpace language="javascript" code={codeSnippet2} />
            <Paragraph 
             pragraph="In this example:"
            />
            <Paragraph 
             pragraph=" 1.We create a ThemeContext using createContext()."
            />
            <Paragraph 
             pragraph=" 2.We create a ThemeProvider component that provides the theme state and a function to toggle the theme using useState. This component wraps the entire application and uses ThemeContext.Provider to expose the theme state and toggle function to its children."
            />
            <Paragraph 
             pragraph=" 3.We create a ThemedComponent that uses the useContext hook to access the theme context. It renders a div with a background color and text color based on the current theme, along with a button to toggle the theme."
            />
            <Paragraph 
             pragraph=" 4.Finally, the App component wraps the entire application with the ThemeProvider."
            />
            <Paragraph 
             pragraph="This example demonstrates how useContext simplifies the process of accessing values from a context, making it easier to share state or functionality across different parts of your React application."
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