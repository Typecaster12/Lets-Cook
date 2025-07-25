import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from "./Components/Layout/AppLayout";
import FeaturesPage from './Components/Pages/FeaturesPage';
import ErrorPage from './Components/Pages/ErrorPage';
import Home from './Components/Pages/Home';
import Region from './Components/Ui/Region';
import Name from './Components/Ui/Name';
import Ingredion from './Components/Ui/Ingredion';
import MealDetails from './Components/Layout/MealDetails';
import IngDetails from './Components/Layout/IngDetails';

//router
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'features',
        element: <FeaturesPage />,
        children: [
          {
            path: 'region',
            element: <Region />,
          },
          //the dynamic route;
          {
            path: 'region/:id',
            element: <MealDetails />,
          },

          {
            path: 'name',
            element: <Name />,
          },
          {
            path: 'ing',
            element: <Ingredion />,
          },
          //the dynamic route;
          {
            path: 'ing/:id',
            element: <IngDetails />,
          },
        ],
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;