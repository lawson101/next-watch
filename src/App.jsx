import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
