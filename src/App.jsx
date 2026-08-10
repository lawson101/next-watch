import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Tv from "./pages/Tv.jsx";
import MediaDetails from "./components/MediaDetails.jsx";
import Trending from "./pages/Trending.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/tv" element={<Tv />} />
                <Route path="/:mediaType/:id" element={<MediaDetails />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
