import Frame from "./components/layout/Frame";
import Hero from "./components/hero/Hero";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/layout/Footer";
import { TabBarProvider } from "./context/TabBarContext";

function App() {
    return (
        <TabBarProvider>
            <Frame>
                <Navbar />
                <Hero />
                <Projects />
                <Footer />
            </Frame>
        </TabBarProvider>
    );
}

export default App;
