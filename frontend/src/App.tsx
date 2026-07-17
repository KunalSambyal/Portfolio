const App = () => {
    return (
        <div className="min-h-screen bg-primary-bg text-text-primary flex flex-col items-center justify-center font-display p-6">
            <div className="max-w-md w-full bg-secondary-bg border border-white/10 rounded-2xl p-8 text-center shadow-xl">
                <span className="text-cyber-yellow font-mono text-sm block mb-2">
                    &lt;Hello /&gt;
                </span>

                <h1 className="text-3xl font-extrabold mb-4">
                    Portfolio Initialized!
                </h1>

                <p className="text-text-secondary text-sm mb-6">
                    React, TypeScript, and Tailwind CSS v4 are succesfully
                    configured
                </p>

                <button className="bg-cyber-yellow text-primary-bg font-semibold px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer">
                    Let's Build
                </button>
            </div>
        </div>
    );
};

export default App;
