import { Route, Switch } from "react-router-dom";
import harvardArt from "./data/harvardArt.ts";
import GalleryNavigation from "./components/GalleryNavigation.tsx";
import GalleryView from "./components/GalleryView.tsx";
import Home from "./components/Home.tsx";
import PageNotFound from "./components/PageNotFound.tsx";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={`/galleries/:galleryId`}>
          <GalleryView galleries={harvardArt} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
