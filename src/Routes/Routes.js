import { createBrowserRouter } from "react-router-dom";
import AllFoods from "../Components/AllFoods/AllFoods";
import Main from "../LayOuts/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
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
          },
          {
            path: '/allFoods/:category',
            element: <AllFoods></AllFoods>,
            loader:({params})=>fetch(`http://localhost:5000/foods/${params.category}`)
          },
          {
            path: '/food-details/:id',
            element: <FoodDetails></FoodDetails>,
            loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
          },
      ]
    },
]);
  
export default router;