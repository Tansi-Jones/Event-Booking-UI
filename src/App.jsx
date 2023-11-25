import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import GalleryPhotos from "./pages/[id]";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryPhotos />} />
        </Route>
      </Routes>
    </Router>
  );
}

const Layout = () => {
  return (
    <div>
      <div className="max-w-[90%] md:max-w-[85%] mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
