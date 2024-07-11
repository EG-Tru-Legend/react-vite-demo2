import {useAuth} from '../auth/useAuth.jsx';
import ModuleCrudler from '../entity/module/ModuleCrudler.jsx';

import './Modules.scss';

function Modules() {
    // Initialisation ----------------------------------------------------
    const {loggedInUser} =  useAuth();
    const myModulesEndPoint = loggedInUser.UserUsertypeID === 1 
      ? `/modules/leader/${loggedInUser.UserID}`
      : `/modules/users/${loggedInUser.UserID}`;

    // View --------------------------------------------------------------
    return (
        <>
            <h1>Modules</h1>
            <ModuleCrudler endpoint ={myModulesEndPoint}/>
        </>
    );
}

export default Modules;