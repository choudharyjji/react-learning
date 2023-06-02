import { Outlet } from "react-router-dom"

//components
import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeSlider from "../components/carousel/HomeSlider";

export default function MainLayout() {
    return (
        <>  
            <Header />
            <HomeSlider />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}