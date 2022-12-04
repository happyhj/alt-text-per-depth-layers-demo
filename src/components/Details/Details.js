import React from "react";
import {
  Link
} from "react-router-dom";
import './Details.css';
import { ROOT_PATH } from '../../constants';

export const Details = ({main, foreground, middleground, background}) => {
  return (
    <div className="Details-container">
      <Img className={"Details-main-img"} {...main} />
      <div className={"Details-dimensions--container"}>
        {foreground && <Img className={"Details-dimensions-img"} {...foreground} /> }
        {middleground &&  <Img className={"Details-dimensions-img"} {...middleground} /> }
        {background &&  <Img className={"Details-dimensions-img"} {...background} /> }
      </div>
    </div>
  );
}

function Img({className, image, altText}) {
  return <img className={className} src={image} alt={altText} />;
}
