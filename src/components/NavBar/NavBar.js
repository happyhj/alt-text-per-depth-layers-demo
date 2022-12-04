import React, { useState } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import './NavBar.css';
import { IMAGE_CONFIGS } from '../../constants.js';

export const NavBar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem ] = useState();
  React.useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  return (
    <div className={"NavBar"}>
      {IMAGE_CONFIGS.map(({name}) => 
        <Link
          className={"NavBar-button "+(selectedItem?.includes(name)? 'selected' : '')}
          to={name}
        >
          {name}
        </Link>
      )}
    </div>
  );
}
