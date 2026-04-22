import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './services/navServices/ScrollToTop.jsx';
import MainLayout from "./layout/MainLayout.jsx";
import { useParams } from 'react-router-dom';


import HomeSkeleton from './components/skeletons/HomeSkeleton.jsx';
import DetailsSkeleton from './components/skeletons/DetailsSkeleton.jsx';
import GridSkeleton from './components/skeletons/GridSkeleton.jsx';
import ContentSkeleton from './components/skeletons/ContentSkeleton.jsx';
import NotFound from './components/NotFound.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Test = lazy(() => import('./pages/Test.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const RoomDetails = lazy(() => import('./pages/roomDetails.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Stays = lazy(() => import('./pages/Stays.jsx'));
const PackagesAndOffers = lazy(() => import('./pages/PackagesAndOffers.jsx'));
const PackageDetails = lazy(() => import('./pages/PackageDetails.jsx'));
const Adventures = lazy(() => import('./pages/Adventures.jsx'));
const Events = lazy(() => import('./pages/Events.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Booking = lazy(() => import('./pages/Booking.jsx'));
const Boomiputhra = lazy(() => import('./pages/Boomiputhra.jsx'));
const EventDetails =lazy(()=>import('./pages/EventDetails.jsx'))

const RoomDetailsWithKey = () => {
  const { id } = useParams();
  return <RoomDetails key={id} />;
};

function App() {

  return (

    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={
              <Suspense fallback={<HomeSkeleton />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/stays"
            element={
              <Suspense fallback={<GridSkeleton />}>
                <Stays />
              </Suspense>
            }
          />

          <Route
            path="/stays/:id"
            element={
              <Suspense fallback={<DetailsSkeleton />}>
                <RoomDetailsWithKey />
              </Suspense>
            }
          />

          <Route
            path="/packages-and-offers"
            element={
              <Suspense fallback={<GridSkeleton />}>
                <PackagesAndOffers />
              </Suspense>
            }
          />

          <Route
            path="/packages-and-offers/:id"
            element={
              <Suspense fallback={<ContentSkeleton />}>
                <PackageDetails />
              </Suspense>
            }
          />

          <Route
            path="/adventures"
            element={
              <Suspense fallback={<GridSkeleton />}>
                <Adventures />
              </Suspense>
            }
          />

          <Route
            path="/events"
            element={
              <Suspense fallback={<GridSkeleton />}>
                <Events />
              </Suspense>
            }
          />

          <Route
            path="/gallery"
            element={
              <Suspense fallback={<GridSkeleton />}>
                <Gallery />
              </Suspense>
            }
          />

          <Route
            path="/gallery/:category"
            element={
              <Suspense fallback={<GridSkeleton />}>
                <Gallery />
              </Suspense>
            }
          />

          <Route
            path="/about"
            element={
              <Suspense fallback={<ContentSkeleton />}>
                <About />
              </Suspense>
            }
          />

          <Route
            path="/contact"
            element={
              <Suspense fallback={<ContentSkeleton />}>
                <Contact />
              </Suspense>
            }
          />

          <Route
            path="/booking"
            element={
              <Suspense fallback={<ContentSkeleton />}>
                <Booking />
              </Suspense>
            }
          />

          <Route
            path="/boomiputhra"
            element={
              <Suspense fallback={<ContentSkeleton />}>
                <Boomiputhra />
              </Suspense>
            }
          />

          <Route
            path="/events/:id"
            element={
              <Suspense fallback={<ContentSkeleton />}>
                <EventDetails />
              </Suspense>
            }
          />

          <Route
            path="/test"
            element={
              <Suspense fallback={<ContentSkeleton />}>
                <Test />
              </Suspense>
            }
          />
          <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;