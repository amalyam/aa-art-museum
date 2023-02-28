import React from "react";
import { GalleryObject, Image } from "../data/GalleryInterface";
import { Link } from "react-router-dom";
import ArtImageDisplay from "./ArtImageDisplay";

const ArtImageTile: React.FC<{
  art: GalleryObject;
  image: Image;
  galleryId: number;
}> = ({ art, image, galleryId }) => {
  return (
    <Link key={`${image.imageid}`} to={`/galleries/${galleryId}/art/${art.id}`}>
      <ArtImageDisplay image={image} />
    </Link>
  );
};

export default ArtImageTile;
