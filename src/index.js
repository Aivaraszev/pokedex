import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import PokemonList from "./PokemonList";
const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <PokemonList />,
            },
            {
                path: "/pokemon/:name",
                element: <PokemonCard />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
