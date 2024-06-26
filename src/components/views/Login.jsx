import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import Action from '../UI/Actions.jsx';

function Login() {
    //Initialisation -----------------------------------------
    const {login} = useAuth();
    const navigate = useNavigate();

    const student = {
        UserID: 276,
        UserFirstname: "Hashim",
        UserLastname: "ABDALLAH",
        UserEmail: "K1083353@kingston.ac.uk",
        UserRegistered: 0,
        UserLevel: 4,
        UserYearID: 1,
        UserUsertypeID: 2,
        UserImageURL:
        "https://images.generated.photos/m8Sph5rhjkIsOiVIp4zbvIuf143F6BWIwhkkY86z2Ms/rs:fit:256:2",
        UserUsertypeName: "Student",
        UserYearName: "2022-23",
      }

    const staff = {
        UserID: 820,
        UserFirstname: "Eesa",
        UserLastname: "Gurling",
        UserEmail: "K2204650@kingston.ac.uk",
        UserRegistered: 1,
        UserLevel: 0,
        UserYearID: null,
        UserUsertypeID: 1,
        UserImageURL:
        "https://images.generated.photos/m8Sph5rhjkIsOiVIp4zbvIuf143F6BWIwhkkY86z2Ms/rs:fit:256:2",
        UserUsertypeName: "Staff",
        UserYearName: null,
    };

    // State ----------------------------------------------------
    // Handlers -------------------------------------------------
    const handleStudent = () => {
        login(student);
        navigate("/");
    };

    const handleStaff = () => {
        login(staff);
        navigate("/");
    };


    // View -----------------------------------------------------
    return (
        <Action.Tray>
            <Action.Add showText buttonText="Login as student" onClick={handleStudent} />
            <Action.Add showText buttonText="Login as staff" onClick={handleStaff} />
        </Action.Tray>
    )
}

export default Login;