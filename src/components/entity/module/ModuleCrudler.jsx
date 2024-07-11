import useLoad from '../../api/useLoad.js'; 
import { useModal, Modal } from '../../UI/Modal.jsx';
import { Alert } from '../../UI/Notififcations.jsx';
import Action from '../../UI/Actions.jsx';
import ModuleForm from './ModuleForm.jsx'
import { CardContainer } from '../../UI/Card.jsx';
import ModuleCard from './ModuleCard.jsx';

function ModuleCrudler({ endpoint }) {
    // Initialisation ----------------------------------------------------
    // State -------------------------------------------------------------
    const [modules, , loadingMessage, loadModules] = useLoad(endpoint);
    const [showForm, formTitle, openForm, closeForm] = useModal(false);
    const [showAlert, alertContent, openAlert, closeAlert] = useModal(false);

    // Handlers ----------------------------------------------------------
    const handleSuccess = async() => {
        closeForm();
        openAlert('Module successfully added')
      await loadModules(endpoint);
   };

    // View --------------------------------------------------------------
    const addNewModule = "Add new module";
    return (
        <>
        <Modal show={showForm} title ={formTitle}>
            <ModuleForm onCancel={closeForm} onSuccess={handleSuccess}/>
        </Modal>

        <Alert show={showAlert} message = {alertContent} onDismiss={closeAlert} />

        <Action.Tray>
            <Action.Add showText buttonText={addNewModule} onClick={() => openForm(addNewModule)}/>
        </Action.Tray>

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
    )
}

export default ModuleCrudler;