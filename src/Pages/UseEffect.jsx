import CodeSpace from "../Components/CodeSpace";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Image from "../Components/Image";
import Paragraph from "../Components/Paragraph";
import Tag from "../Components/Tag";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function UseEffect(props) {
    const codeSnippet = `useEffect(() => {
        // Side effect logic here
        return () => {
          // Cleanup logic (optional)
        };
      }, [dependencies]);`;
    const codeSnippet2 = `
    import React, { useState, useEffect } from 'react';

    const DataFetchingExample = () => {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      // useEffect is used for side effects in functional components
      useEffect(() => {
        // Simulate fetching data from an API after component mounts
        const fetchData = async () => {
          try {
            // Set loading to true while data is being fetched
            setLoading(true);
    
            // Simulate an API call (replace with your actual API call)
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await response.json();
    
            // Update the state with the fetched data
            setData(result);
          } catch (error) {
            // If an error occurs, update the error state
            setError(error.message);
          } finally {
            // Set loading to false, whether the data fetching succeeds or fails
            setLoading(false);
          }
        };
    
        // Call the fetchData function
        fetchData();
      }, []); // Empty dependency array means the effect runs once after the initial render
    
      return (
        <div>
          <h2>Data Fetching Example</h2>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {data && (
            <div>
              <p>Data:</p>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>
      );
    };
    
    export default DataFetchingExample;

    `;
    return <div id="home">
        <Header />
        <div className="home-content">
            <Heading heading="useEffect:" />
            <CodeSpace language="javascript" code={codeSnippet} />
            <Paragraph 
             pragraph="useEffect is used to perform side effects in functional components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount."
            />
            <Paragraph 
             pragraph="Let’s create a simple example that uses the useEffect hook in a React functional component to simulate fetching data from an API and updating the component's state:"
            />
            <CodeSpace language="javascript" code={codeSnippet2} />
            <Paragraph 
             pragraph="In this example:"
            />
            <Paragraph 
             pragraph=" 1.We use the useState hook to manage the component's state: data for the fetched data, loading to indicate whether data is being loaded, and error to handle any potential errors."
            />
            <Paragraph 
             pragraph=" 2.The useEffect hook is used to initiate the data fetching. It simulates an asynchronous API call using the fetch function. The effect runs once after the initial render (empty dependency array), mimicking the behavior of componentDidMount in class components."
            />
            <Paragraph 
             pragraph=" 3.Inside the fetchData function, the component's state is updated based on the result of the API call. The loading state is set to true while data is being fetched and then set to false once the operation is complete."
            />
            <Paragraph 
             pragraph=" 4.The component renders loading, error, or the fetched data based on the current state."
            />
            <Paragraph 
             pragraph="This example demonstrates how to use useEffect for asynchronous operations like data fetching in functional components. Remember to replace the API endpoint and logic with your actual data fetching requirements."
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