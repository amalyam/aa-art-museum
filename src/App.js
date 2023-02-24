import { Route } from "react-router-dom";
import harvardArt from "./data/harvardArt.ts";
import GalleryNavigation from "./components/GalleryNavigation/index.tsx";
import GalleryView from "./components/GalleryView/index.tsx";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt} />
      <Route path={`/galleries/:galleryId`}>
        <GalleryView galleries={harvardArt} />
      </Route>
    </div>
  );
}

export default App;
