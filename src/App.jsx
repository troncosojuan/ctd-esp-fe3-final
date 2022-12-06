
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";


function App() {

    return (
        <div className="App">
            <Navbar />
            <Footer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/favs" element={<Favs />} />
                {/* <Route path="*" element={<h1>404 Not Found</h1>}/> */}
            </Routes>
        </div>
    );
}

export default App;
