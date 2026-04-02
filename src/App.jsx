import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './services/navServices/ScrollToTop.jsx';
import MainLayout from "./layout/MainLayout.jsx";
import Home from './pages/Home.jsx'
import Test from './pages/Test.jsx'
import Gallery from './pages/Gallery.jsx'
import RoomDetails from './pages/roomDetails.jsx'
import About from './pages/About.jsx'
import Stays from './pages/Stays.jsx'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:category" element={<Gallery />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/stays/:id" element={<RoomDetails />} />
          <Route path="/about" element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;