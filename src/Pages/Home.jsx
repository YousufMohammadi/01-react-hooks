import { About } from "../Components/About";
import { Abstract } from "../Components/Abstract";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Projects } from "../Components/Projects";
import { Skills } from "../Components/Skills";

export function Home() {
    return <div id="home">
        <Header />
        <Abstract />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
}