import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
    const [page, setPage] = useState(0);
    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <Outlet context={[page, setPage]} />
                </header>
            </div>
        </ChakraProvider>
    );
}

export default App;
