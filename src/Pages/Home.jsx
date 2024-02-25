import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import Heading from "../Components/Heading";
import Title from "../Components/Title";
import "../Styles/Pages/Home.css"
export function Home(props) {
    return <div id="home">
        <Header />
        <div className="home-content">
            <Title title= "This is title" />
            <Heading heading="this iss" />
        </div>
        <Footer />
    </div>
}