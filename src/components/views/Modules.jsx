import { useState, useEffect } from 'react';
import {useAuth} from '../auth/useAuth.jsx';
import API from '../api/API.js';
import Action from '../UI/Actions.jsx';
import ModuleForm from "../entity/module/ModuleForm.jsx"
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";
import './Modules.scss';

function Modules() {
    // Initialisation ----------------------------------------------------
    const {loggedInUser} =  useAuth();
    const myModulesEndPoint = loggedInUser.UserUsertypeID === 1 
      ? `/modules/leader/${loggedInUser.UserID}`
      : `/modules/users/${loggedInUser.UserID}`;

    // State -------------------------------------------------------------
    const [modules, setModules] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('Loading records ...');
    const [showForm, setShowForm] = useState(false);
   

    const loadRecords = async (endpoint) => {
      const response = await API.get(endpoint);
      response.isSuccess
       ? setModules(response.result)
       : setLoadingMessage(response.message);
    };

    useEffect(() => { loadRecords(myModulesEndPoint) }, [myModulesEndPoint]);

    // Handlers ----------------------------------------------------------
    const handleAdd = () => setShowForm(true);
    const handleCancel = () => setShowForm(false);
    const handleSuccess = async() => {
      handleCancel();
      await loadRecords(myModulesEndPoint);
   };

    // View --------------------------------------------------------------
    return (
        <>
            <h1>Modules</h1>

            <Action.Tray>
              {!showForm && <Action.Add showText buttonText="Add new module" onClick={handleAdd}/>}
            </Action.Tray>

            {showForm && <ModuleForm onCancel={handleCancel} onSuccess={handleSuccess}/>}

            {!modules ? (
              <p>{loadingMessage}</p>
            ) : modules.length === 0 ? (
              <p>No records found ...</p>
            ) : (
            <CardContainer>
                {modules.map((module) => <ModuleCard module={module} key={module.ModuleID}/>)}
            </CardContainer>
            )}
        </>
    );
}

export default Modules;