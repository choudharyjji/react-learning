import { Routes, Route } from "react-router-dom";

//layout
import MainLayout from './layout/MainLayout';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
            </Route>
        </Routes>
    )
}