import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './ModuleForm.scss';

function ModuleForm({ onCancel }) {
    // Initialisation --------------------------------------------
    // State -----------------------------------------------------
    // Handler ---------------------------------------------------
    // View ------------------------------------------------------
    return (
        <div className="moduleForm">
            <div className='FormTray'>
                <label htmlFor="">Module Name</label>
                <label type="text" name="ModuleName" value=""/>
            </div>

            <Action.Tray>
              <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel}/>
            </Action.Tray>

        </div>
    );
}

ModuleForm.propTypes = {
    onCancel: PropTypes.func,
};

export default ModuleForm;