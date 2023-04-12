import { Outlet } from "react-router-dom";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <Outlet />
                </header>
            </div>
        </ChakraProvider>
    );
}

export default App;