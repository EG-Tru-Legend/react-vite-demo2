import { useState } from 'react';
import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './ModuleForm.scss';

const initialModule = {
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: 0,
    ModuleYearID: null,
    ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-component"
}

function ModuleForm({ onCancel }) {
    // Initialisation --------------------------------------------
    // State -----------------------------------------------------
    const [module, setModule] = useState(initialModule);
    // Handler ---------------------------------------------------
    // View ------------------------------------------------------
    return (
        <div className="moduleForm">
            <div className='FormTray'>
                <label htmlFor="">Module Name</label>
                <input type="text" name="ModuleName" value={module.ModuleName} />

                <label htmlFor="">Module Code</label>
                <input type="text" name="ModuleCode" value={module.ModuleCode} />

                <label htmlFor="">Module Level</label>
                <select name="ModuleLevel" value={module.ModuleLevel}>
                    {[3,4,5,6,7].map((level) => (
                        <option key={level}>{level}</option>
                    ))}
                </select>
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