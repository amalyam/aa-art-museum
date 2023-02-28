import React from "react";
import { Image } from "../data/GalleryInterface";

const ArtImageDisplay: React.FC<{ image: Image }> = ({ image }) => {
  return (
    <img
      src={image.baseimageurl}
      alt={image.alttext ?? image.description ?? "image"}
      style={{ maxWidth: "200px" }}
    ></img>
  );
};

export default ArtImageDisplay;
