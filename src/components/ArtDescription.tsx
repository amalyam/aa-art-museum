import React from "react";
import { Link, useParams } from "react-router-dom";
import { GalleryRecord } from "../data/GalleryInterface";
import ArtImageDisplay from "./ArtImageDisplay";
import PageNotFound from "./PageNotFound";

const ArtDescription: React.FC<{ gallery: GalleryRecord }> = ({ gallery }) => {
  const { artId } = useParams<{ artId: string }>();
  console.log(artId, gallery.objects);
  let art = gallery.objects.find((object) => object.id === parseInt(artId, 10));

  if (!art) return <PageNotFound title={"Art"} />;

  return (
    <div>
      <div>
        {art.images.map((image) => (
          <ArtImageDisplay key={image.imageid} image={image} />
        ))}
      </div>
      <div>
        <p>{art.description}</p>
        <p>{art.creditline}</p>
        <p>{art.technique}</p>
      </div>
      <div>
        <a href={art.url}>{art.title}</a>
      </div>
      <div>
        <Link to={`/galleries/${gallery.galleryid}`}>
          Back to {gallery.name} Gallery
        </Link>
      </div>
    </div>
  );
};
//{images.map((image) => {})}
export default ArtDescription;
