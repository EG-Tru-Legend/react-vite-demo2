import { useState } from 'react';
import PropTypes from 'prop-types';
import { useModal } from '../../UI/Modal.jsx';
import { Confirm, Error } from '../../UI/Notififcations.jsx';
import useLoad from '../../api/useLoad.js';
import API from '../../api/API.js';
import Action from '../../UI/Actions.jsx';
import './ModuleForm.scss';

const initialModule = {
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: 0,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg",
};

function ModuleForm({ onCancel, onSuccess }) {
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

    const yearsEndPoint = `/years`;
    const staffEndPoint = `/users/staff`;
    const postModuleEndPoint = `modules`;

    // State -----------------------------------------------------
    const [module, setModule] = useState(initialModule);
    const [years, loadingYearsMessage] = useLoad(yearsEndPoint);
    const [staff, loadingStaffMessage] = useLoad(staffEndPoint);
    const [showConfirm, confirmContent, openConfirm, closeConfirm] = useModal(false);
    const [showError, errorContent, openError, closeError] = useModal(false);

    // Handler ---------------------------------------------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        setModule({...module, [name]: conformance.html2js[name](value)});
    };

    const handleConfirm = () => openConfirm('Are you sure you want to create this module?');

    const handleSubmit = async () => {
        //console.log(`Module=[${JSON.stringify(module)}]`)
        const result = await API.post(postModuleEndPoint, module);
        if (result.isSuccess) onSuccess();
        else openError(result.message);
    };

    // View ------------------------------------------------------
    return (
        <>
        <Confirm 
            show={showConfirm} 
            message = {confirmContent} 
            onConfirm={handleSubmit} 
            onDismiss={closeConfirm} 
        />

        <Error show={showError} message = {errorContent} onDismiss={closeError} />

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
                    value={conformance.js2html["ModuleCode"](module.ModuleCode)} 
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Module Level
                    <select name="ModuleLevel" value={conformance.js2html["ModuleLevel"](module.ModuleLevel)} onChange={handleChange}>
                    <option value="0" disabled>
                        None slected
                    </option>
                    {[3,4,5,6,7].map((level) => (
                        <option key={level}>{level}</option>
                    ))}
                    </select>
                </label>

                <label>
                    Module Year
                    {!years ? (
                    <p>{loadingYearsMessage}</p> ) :
                    <select name="ModuleYearID" value={conformance.js2html["ModuleYearID"](module.ModuleYearID)} onChange={handleChange}>
                    <option value="0">
                        None slected
                    </option>
                    {years.map((year) => (
                        <option key={year.YearID} value={year.YearID}>{year.YearName}</option>
                    ))}
                    </select>
                    }
                </label>

                <label>
                    Module leader
                    {!staff ? (
                    <p>{loadingStaffMessage}</p> 
                ) : (
                    <select 
                    name="ModuleLeaderID" 
                    value={conformance.js2html["ModuleLeaderID"](module.ModuleLeaderID)} 
                    onChange={handleChange}
                    >
                    <option value="0">
                        None slected
                    </option>
                    {staff.map((member) => (
                        <option key={member.UserID} value={member.UserID}> 
                        {`${member.UserFirstname} ${member.UserLastname}`}
                    </option>
                    ))}
                    </select>
                    )}
                </label>

                <label>
                    Module Image
                    <input 
                    type="text" 
                    id="ModuleImageURL" 
                    name="ModuleImageURL" 
                    value={conformance.js2html["ModuleImageURL"](module.ModuleImageURL)} 
                    onChange={handleChange}
                    />
                </label>
            </div>

            <Action.Tray>
              <Action.Submit showText onClick={handleConfirm}/>
              <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel}/>
            </Action.Tray>

        </div>
        </>
    );
}

ModuleForm.propTypes = {
    onCancel: PropTypes.func,
    onSuccess: PropTypes.func,
};

export default ModuleForm;