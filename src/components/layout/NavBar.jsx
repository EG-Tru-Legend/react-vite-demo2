import { NavLink } from "react-router-dom";
import './NavBar.scss';

function NavBar() {
    return (
        <nav>
            <div className="navItem">
                <NavLink to="/">Home</NavLink>
            </div>

            <div className="navItem">
                <NavLink to="/modules">Modules</NavLink>
            </div>

            <div className="navItem">
                <NavLink to="/students">Students</NavLink>
            </div>
      </nav>
    );
}

export default NavBar;