import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
// import { cx } from 'emotion';
import './Home.css';
import { IMAGE_CONFIGS } from '../../constants.js';

export const Home = () => {
  return (
    <>
      {IMAGE_CONFIGS.map(({path, title}) => <Link className="Home-button" to={path}>{title}</Link>)}
    </>
  );
}
