import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Recommended from "../Pages/Recommended/Recommended";
import Hot from "../Pages/Home/First Section/Hot/Hot";
import Novel from "../Pages/Home/Novel/Novel";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'recommend',
            element: <Recommended></Recommended>
        },
        {
            path: 'hot',
            element: <Hot></Hot>,
        },
        {
            path: 'novel',
            element: <Novel></Novel>
        }
      ]
    },
  ]);