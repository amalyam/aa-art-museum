import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import GalleryInterface from "../data/GalleryInterface";
import ArtDescription from "./ArtDescription";
import ArtImageTile from "./ArtImageTile";
import PageNotFound from "./PageNotFound";

function GalleryView({ galleries }: { galleries: GalleryInterface }) {
  const { galleryId } = useParams<{ galleryId: string }>();
  let galleryMatch = galleries.records.find(
    (gallery) => gallery.id === parseInt(galleryId, 10)
  );

  if (!galleryMatch) return <PageNotFound />;

  let art = galleryMatch.objects.flatMap((object) =>
    object.images.map((image) => ({ object, image }))
  );

  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{`${galleryMatch.name}`}</h2>
      <h3>
        <Switch>
          <Route exact path={`/galleries/${galleryMatch!.id}`}>
            {art.map(({ object, image }) => {
              return (
                <ArtImageTile
                  art={object}
                  image={image}
                  galleryId={galleryMatch!.id}
                />
              );
            })}
          </Route>
          <Route path={`/galleries/${galleryMatch!.id}/art/:artId`}>
            <ArtDescription gallery={galleryMatch!} />
          </Route>
        </Switch>
      </h3>
    </div>
  );
}

export default GalleryView;
