import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Layout() {
    return (
        <div className="app-layout">
            <Navbar />
            <main>
                <Outlet /> {/*The active page is rendered here*/}
            </main>
            <Footer />
        </div>
    );
}
export default Layout;