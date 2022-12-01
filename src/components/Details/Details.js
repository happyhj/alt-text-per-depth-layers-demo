import React from "react";
import {
  Link
} from "react-router-dom";
import './Details.css';

export const Details = ({main, foreground, middleground, background}) => {
  return (
    <>
      <Link className={"Details-back-button"} to="/">Back to Menu</Link>
      <Img className={"Details-main-img"} {...main} />
      <div className={"Details-dimensions--container"}>
        {foreground && <Img className={"Details-dimensions-img"} {...foreground} /> }
        {middleground &&  <Img className={"Details-dimensions-img"} {...middleground} /> }
        {background &&  <Img className={"Details-dimensions-img"} {...background} /> }
      </div>
    </>
  );
}

function Img({className, image, altText}) {
  return <img className={className} src={image} alt={altText} />;
}
