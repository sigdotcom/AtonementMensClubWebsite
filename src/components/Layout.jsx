import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/*The active page is rendered here*/}
      <Footer />
    </>
  );
}
export default Layout;
