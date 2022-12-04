import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Details } from './components/Details';
import { IMAGE_CONFIGS, ROOT_PATH } from './constants';
import './App.css';

function Root() {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

const routes = [
  {
    path: "/",
    element : <Root/>,
    children : [
      { index: true, element: 
        <Navigate to={"/" + IMAGE_CONFIGS[0].name} /> 
      }, 
      ...IMAGE_CONFIGS.map(({
        name, main, foreground, middleground, background
      }) => ({
        path: "/" + name, 
        element: <Details main={main} foreground={foreground} middleground={middleground} background={background} />,
      })),
      {
        path: "*",
        element: <Navigate to={"/" + IMAGE_CONFIGS[0].name} />,
      }
    ],
  }
];

console.log(routes)
const router = createBrowserRouter(routes, {
  basename: ROOT_PATH,
});


function App() {
  return (<>
    <RouterProvider router={router} >
      <NavBar />
    </RouterProvider>
  </>
  );
}

export default App;
