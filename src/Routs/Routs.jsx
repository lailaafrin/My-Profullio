
import {
    createBrowserRouter,
} from "react-router-dom";
import MyLayOuts from "../layouts/MyLayOuts";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/ContactMe";
import Experience from "../Pages/Experience";
import Home from "../Pages/Home";

export const myRouts = createBrowserRouter([
    {
        path: "/",
        element: <MyLayOuts></MyLayOuts>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/aboutMe",
                element: <AboutMe></AboutMe>
            },
              {
                path: "/contactMe",
                element: <ContactMe></ContactMe>
            },
            {
                path: "/experienceMe",
                element: <Experience></Experience>
            }
        ]
    },
]);