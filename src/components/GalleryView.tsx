import React from "react";
import { Route, useParams } from "react-router-dom";
import GalleryInterface from "../data/GalleryInterface";
import ArtImageTile from "./ArtImageTile";
import PageNotFound from "./PageNotFound";

function GalleryView({ galleries }: { galleries: GalleryInterface }) {
  const { galleryId } = useParams<{ galleryId: string }>();
  let galleryMatch = galleries.records.find(
    (gallery) => gallery.id === parseInt(galleryId, 10)
  );

  if (!galleryMatch) return <PageNotFound />;

  let art = galleryMatch.objects.flatMap((object) => object.images);

  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{`${galleryMatch.name}`}</h2>
      <h3>
        {art.map((image) => {
          return (
            <Route path={`/galleries/:${galleryMatch!.id}`}>
              <ArtImageTile art={image} galleryId={galleryMatch!.id} />
            </Route>
          );
        })}
      </h3>
    </div>
  );
}

export default GalleryView;
