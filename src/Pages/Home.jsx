import CodeSpace from "../Components/CodeSpace";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Image from "../Components/Image";
import Paragraph from "../Components/Paragraph";
import Tag from "../Components/Tag";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function Home(props) {
    const codeSnippet = `const [state, setState] = useState(initialState);`;
    return <div id="home">
        <Header />
        <div className="home-content">
            <Title title= "A Deep Dive into React Hooks: Unleashing the Power of Functional Components" />
            <Image src="hooks.webp" imgWidth="100%" imgHeight="100%"/>
            <Heading heading="Introduction:" />
            <Paragraph pragraph="React, the JavaScript library for building user interfaces, has undergone significant changes since the introduction of React Hooks. Released with React 16.8, Hooks revolutionized the way developers manage stateful logic and side effects in functional components. In this article, we will take a comprehensive look at React Hooks, exploring their different types, use cases, and advantages."/>
            <Heading heading="Understanding React Hooks:" />
            <Paragraph pragraph="React Hooks are functions that enable developers to use state and lifecycle features in functional components. Before Hooks, developers had to use class components to manage state and lifecycle methods. Hooks provide a more concise and readable way to handle these concerns within functional components, making the code cleaner and easier to understand."/>
            {/* <Heading heading="Commonly Used React Hooks:" />
            <Heading heading="1.useState:" />
            <CodeSpace language="javascript" code={codeSnippet} />
            <Paragraph pragraph="useState allows functional components to manage state without the need for class components. It returns an array with two elements: the current state value and a function to update it."/>
            <Paragraph pragraph="Let’s create a simple React functional component that uses the useState hook to manage a piece of state (a counter, in this case):"/>
             */}
            {/* <Tag link="www.google.com" title="this is tag"/> */}
            <Heading heading="Commonly Used React Hooks:" />
            <Paragraph pragraph=" 1.useState"/>
            <Paragraph pragraph=" 2.useEffect"/>
            <Paragraph pragraph=" 3.useContext"/>
            <Paragraph pragraph=" 4.useReducer"/>
            <Paragraph pragraph=" 5.useCallBack"/>
            <Paragraph pragraph=" 6.useMemo"/>
            <Heading heading="Advantages of React Hooks:" />
            <Paragraph pragraph=" 1.Simplified Logic:"/>
            <Paragraph pragraph="Hooks enable developers to write more readable and concise code, reducing the complexity traditionally associated with class components"/>
            <Paragraph pragraph=" 2.Reuse Logic:"/>
            <Paragraph pragraph="Hooks make it easy to extract and reuse stateful logic across components, promoting code modularity and maintainability."/>
            <Paragraph pragraph=" 3.Better Lifecycle Management:"/>
            <Paragraph pragraph="With useEffect, developers have a more granular control over the component's lifecycle, allowing for efficient handling of side effects."/>
            <Paragraph pragraph=" 4.Improved Testing:"/>
            <Paragraph pragraph="Hooks facilitate easier testing of individual units of logic within components, enhancing the overall testability of React applications."/>
            <Heading heading="Conclusion:" />
            <Paragraph pragraph="React Hooks have fundamentally changed the way developers approach state management and lifecycle methods in React functional components. By providing a more straightforward and modular approach, Hooks have become an essential tool for building scalable and maintainable React applications. As the React ecosystem continues to evolve, mastering Hooks will undoubtedly be a valuable skill for any React developer."/>
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