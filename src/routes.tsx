import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Contato } from "./pages/contato";
import { Produto } from "./pages/Produto";
import { NotFound } from "./pages/not-found";

const router = createBrowserRouter([
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
])

export {router}