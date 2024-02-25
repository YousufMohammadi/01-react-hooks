import CodeSpace from "../Components/CodeSpace";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import Tag from "../Components/Tag";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function Home(props) {
    const codeSnippet = `const [state, setState] = useState(initialState);`;
    return <div id="home">
        <Header />
        <div className="home-content">
            <Title title= "This is title" />
            <Heading heading="this iss" />
            <Paragraph pragraph="thiss is paragraph"/>
            <CodeSpace language="javascript" code={codeSnippet} />
            <Tag link="www.google.com" title="this is tag"/>
        </div>
        <Footer />
    </div>
}