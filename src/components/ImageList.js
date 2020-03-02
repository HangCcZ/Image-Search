import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = props => {
  console.log(props.images);
  const listItem = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{listItem}</div>;
};

export default ImageList;
