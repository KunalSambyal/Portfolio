import Frame from "./components/layout/Frame";
import Hero from "./components/hero/Hero";
import Navbar from "./components/layout/Navbar";

function App() {
    return (
        <>
            <Frame>
                <Navbar />
                <Hero />
            </Frame>
        </>
    );
}

export default App;
