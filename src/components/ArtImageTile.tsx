import React from "react";
import { Image } from "../data/GalleryInterface";
import { Link } from "react-router-dom";

const ArtImageTile: React.FC<{
  art: Image;
  galleryId: number;
}> = ({ art, galleryId }) => {
  return (
    <Link to={`/galleries/:${galleryId}/art/:${art.imageid}`}>
      <img
        src={art.baseimageurl}
        alt={art.alttext ?? art.description ?? "image"}
      ></img>
    </Link>
  );
};

export default ArtImageTile;
