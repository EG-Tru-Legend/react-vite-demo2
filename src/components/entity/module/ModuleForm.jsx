import { useState } from 'react';
import PropTypes from 'prop-types';
import Action from '../../UI/Actions.jsx';
import './ModuleForm.scss';

const initialModule = {
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: 0,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-component",
};

function ModuleForm({ onCancel }) {
    // Initialisation --------------------------------------------
    const conformance = {
        html2js: {
            ModuleName: (value) => value === '' ? null : value,
            ModuleCode: (value) => value === '' ? null : value,
            ModuleLevel: (value) => parseInt(value),
            ModuleYearID: (value) => value === 0 ? null : parseInt(value),
            ModuleLeaderID: (value) => value === 0 ? null : parseInt(value),
            ModuleImageURL: (value) => value === '' ? null : value,
        },
        js2html: {
            ModuleName: (value) => value === null ? '' : value,
            ModuleCode: (value) => value === null ? '' : value,
            ModuleLevel: (value) => value,
            ModuleYearID: (value) => value === null ? 0 : value,
            ModuleLeaderID: (value) => value === null ? 0 : value,
            ModuleImageURL: (value) => value === null ? '' : value,
        },
    };

    // State -----------------------------------------------------
    const [module, setModule] = useState(initialModule);
    // Handler ---------------------------------------------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        setModule({...module, [name]: conformance.html2js[name](value)});
    };

    const handleSubmit = () => {
        console.log(`Module=[${JSON.stringify(module)}]`)
    };

    // View ------------------------------------------------------
    return (
        <div className="moduleForm">
            <div className='FormTray'>
                <label>
                    Module Name
                    <input 
                    type="text" 
                    id="ModuleName" 
                    name="ModuleName" 
                    value={conformance.js2html["ModuleName"](module.ModuleName)} 
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Module Code
                    <input 
                    type="text" 
                    name="ModuleCode" 
                    value={conformance.js2html["ModuleName"](module.ModuleCode)} 
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Module Level
                    <select name="ModuleLevel" value={conformance.js2html["ModuleName"](module.ModuleLevel)} onChange={handleChange}>
                    <option value="0" disabled>
                        None slected
                    </option>
                    {[3,4,5,6,7].map((level) => (
                        <option key={level}>{level}</option>
                    ))}
                    </select>
                </label>
            </div>

            <Action.Tray>
              <Action.Submit showText onClick={handleSubmit}/>
              <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel}/>
            </Action.Tray>

        </div>
    );
}

ModuleForm.propTypes = {
    onCancel: PropTypes.func,
};

export default ModuleForm;