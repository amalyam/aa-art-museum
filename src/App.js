import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation.tsx";

function App() {
  return <GalleryNavigation galleries={harvardArt.records} />;
}

export default App;
