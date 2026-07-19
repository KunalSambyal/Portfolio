import Frame from "./components/layout/Frame";
import Hero from "./components/hero/Hero";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import { TabBarProvider } from "./context/TabBarContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <TabBarProvider>
                <Frame>
                    {/* Skip Link for keyboard navigation accessibility */}
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyber-yellow focus:text-primary-bg focus:font-bold focus:rounded-lg focus-ring"
                    >
                        Skip to Content
                    </a>

                    <Navbar />

                    {/* Main Content Landmark */}
                    <main
                        id="main-content"
                        className="flex-1 flex flex-col w-full min-w-0"
                    >
                        <Hero />
                        <Projects />
                    </main>

                    <Footer />
                </Frame>
            </TabBarProvider>
        </ThemeProvider>
    );
}

export default App;
