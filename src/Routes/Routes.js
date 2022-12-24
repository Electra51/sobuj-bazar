import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
          },
          {
            path: '/about',
            element:<About></About>
          },
          {
            path: '/contact',
            element:<Contact></Contact>
      }
      ]
    },
]);
  
export default router;