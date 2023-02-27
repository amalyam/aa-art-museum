import React from "react";
import { Image } from "../data/GalleryInterface";

const ArtImageTile: React.FC<{
  art: Image[];
}> = ({ art }) => {
  let firstImageUrl = art[0].baseimageurl;

  return (
    <img
      src={firstImageUrl}
      alt={art[0].alttext ?? art[0].description ?? "image"}
    ></img>
  );
};

export default ArtImageTile;
