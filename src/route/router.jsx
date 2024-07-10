import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { About, Home } from "../Pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        ]
    }
])

export default router;