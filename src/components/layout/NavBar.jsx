import { NavLink } from "react-router-dom";
import { useAuth } from '../auth/useAuth';
import './NavBar.scss';

function NavBar() {
    //Initialisation -----------------------------------------
    const { loggedInUser, logout } = useAuth();

    // State ----------------------------------------------------
    // Handlers -------------------------------------------------
    // View -----------------------------------------------------
    return (
        <nav>
            <div className="navItem">
                <NavLink to="/">Home</NavLink>
            </div>
            {
                loggedInUser && (
                    <>
                        <div className="navItem">
                            <NavLink to="/modules">Modules</NavLink>
                        </div>

                        <div className="navItem">
                            <NavLink to="/students">Students</NavLink>
                        </div>
                    </>
                )
            }
            {
                !loggedInUser ? (
                    <div className="navItem">
                        <NavLink to="/login">Login</NavLink>
                    </div>
                )
                : (
                    <div className="navItem">
                        <NavLink to="/"onClick={logout}>Logout</NavLink>
                    </div>
                )
            }
      </nav>
    );
}

export default NavBar;