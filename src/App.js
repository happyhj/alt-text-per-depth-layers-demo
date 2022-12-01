import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';
import { Details } from './components/Details';
import { IMAGE_CONFIGS } from './constants';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  ...IMAGE_CONFIGS.map(({
    path, main, foreground, middleground, background
  }) => ({
    path, 
    element: <Details main={main} foreground={foreground} middleground={middleground} background={background} />,
  })),
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
