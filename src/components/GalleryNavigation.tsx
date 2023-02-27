import React from "react";
import { NavLink } from "react-router-dom";
import GalleryInterface from "./../data/GalleryInterface";
import styles from "./GalleryNavigation.module.css";

function GalleryNavigation({ galleries }: { galleries: GalleryInterface }) {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      {galleries.records.map((gallery) => {
        return (
          <NavLink
            key={gallery.id}
            to={`/galleries/${gallery.id}`}
            className={styles.navLink}
          >{`${gallery.name}`}</NavLink>
        );
      })}
    </nav>
  );
}

export default GalleryNavigation;
