import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import MovieSite from "./MovieSite";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/movies/:userID", element: <MovieSite /> },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
