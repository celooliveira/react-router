import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Contato } from "./pages/contato";
import { Produto } from "./pages/Produto";
import { NotFound } from "./pages/not-found";

import { Layout } from "./components/layout";
import { Children } from "react";

const router = createBrowserRouter([
 {
    element: <Layout/>,
    children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/sobre",
            element: <Sobre/>
        },
        {
            path: "/contato",
            element: <Contato/>
        },
        {
            path: "/produto/:id",
            element: <Produto/>
        },
        {
            path: "/produto",
            element: <Produto/>
        },
        {
            path: "*",
            element: <NotFound/>
        }
    ]
 }
])

export {router}