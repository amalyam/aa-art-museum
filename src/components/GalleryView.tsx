import React from "react";
import { useParams } from "react-router-dom";
import GalleryInterface from "../data/GalleryInterface";
import ArtImageTile from "./ArtImageTile";

function GalleryView({ galleries }: { galleries: GalleryInterface }) {
  const { galleryId } = useParams<{ galleryId: string }>();
  let galleryMatch = galleries.records.find(
    (gallery) => gallery.id === parseInt(galleryId, 10)
  );

  let art = galleryMatch?.objects.flatMap((object) => object.images) ?? [];

  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{`${galleryMatch?.name}`}</h2>
      <h3>
        <ArtImageTile art={art} />
      </h3>
    </div>
  );
}

export default GalleryView;
