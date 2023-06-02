import { Routes, Route } from "react-router-dom";

//layout
import MainLayout from './layout/MainLayout';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/services"} element={<Services />} />
                <Route path={"/portfolio"} element={<Portfolio />} />
                <Route path={"/team"} element={<Team />} />
                <Route path={"/blog"} element={<Blog />} />
                <Route path={"/contact"} element={<Contact />} />
            </Route>
        </Routes>
    )
}