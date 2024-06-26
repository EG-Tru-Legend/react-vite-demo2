import PropTypes from "prop-types";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import './Layout.scss';

function Layout(props) {
  // Initialisation ------------------------------------------               
 // State ----------------------------------------------------
 // Handlers -------------------------------------------------
 // View -----------------------------------------------------
    return (
        <div className="layout">
            <Header />
            <NavBar />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.element,
};

export default Layout;