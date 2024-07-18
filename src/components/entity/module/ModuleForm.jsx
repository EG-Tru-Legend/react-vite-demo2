import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../../UI/Form.jsx';

const initialModule = {
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: 0,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg",
};

function ModuleForm({ onSubmit, onCancel, dropdowns }) {
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

    const validation = {
    isValid: {
        ModuleName: (name) => name.length > 8,
        ModuleCode: (code) => /^\D{2}\d{4}$/.test(code),
        ModuleLevel: (level) => level > 2 && level < 8,
        ModuleYearID: (id) => id > 0,
        ModuleLeaderID: (id) => id == null || id > 0,
        //ModuleImageURL: (url) => //.test(url) ,
    },
    errorMessage: {
        ModuleName: 'Module name is too short',
        ModuleCode: 'Module Code is not in a valid format',
        ModuleLevel: 'Invalid module level',
        ModuleYearID: 'No delivery year has been selected',
        ModuleLeaderID: 'Invalid module leader selected',
        ModuleImageURL: 'The URL entered is not a valid URL string',
    },
};

    // State -----------------------------------------------------
    const [module, setModule] = useState(initialModule);
    const [errors, setErrors] = useState(
       Object.keys(validation.isValid).reduce( (accum,key) => ({...accum, [key]: null}),{})
    );

    const isValidRecord = (record) => {
        let isRecordValid = true;
        Object.keys(validation.isValid).forEach((key) => {
            if(validation.isValid[key](module[key])){
                errors[key] = null;
            }
            else {
                errors[key] = validation.errorMessage[key];
                isRecordValid = false;
            }
        } );
        return isRecordValid
    };

    // Handler ---------------------------------------------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        setModule({...module, [name]: conformance.html2js[name](value)});
    };

    const handleSubmit = () => {
        isValidRecord(module) && onSubmit(module);
        setErrors(...errors);
    };

    // View ------------------------------------------------------
    const years = dropdowns.years;
    const staff = dropdowns.staff;
    return (
        <Form onSubmit={handleSubmit} onCancel={onCancel}>
                <Form.Item label= "Module Name" error={errors.ModuleName}> 
                    <input 
                    type="text" 
                    id="ModuleName" 
                    name="ModuleName" 
                    value={conformance.js2html["ModuleName"](module.ModuleName)} 
                    onChange={handleChange}
                    />
                </Form.Item>

                <Form.Item label= "Module Code" error={errors.ModuleCode}> 
                    <input 
                    type="text" 
                    name="ModuleCode" 
                    value={conformance.js2html["ModuleCode"](module.ModuleCode)} 
                    onChange={handleChange}
                    />
                </Form.Item>



                <Form.Item label= "Module Level" error={errors.ModuleLevel}> 
                    <select name="ModuleLevel" value={conformance.js2html["ModuleLevel"](module.ModuleLevel)} onChange={handleChange}>
                    <option value="0" disabled>
                        None slected
                    </option>
                    {[3,4,5,6,7].map((level) => (
                        <option key={level}>{level}</option>
                    ))}
                    </select>
                </Form.Item>


                <Form.Item label= "Module Year" error={errors.ModuleYearID}> 
                    {!years.list ? (
                    <p>{years.loadingMessage}</p> ) :
                    <select name="ModuleYearID" value={conformance.js2html["ModuleYearID"](module.ModuleYearID)} onChange={handleChange}>
                    <option value="0">
                        None slected
                    </option>
                    {years.list.map((year) => (
                        <option key={year.YearID} value={year.YearID}>{year.YearName}</option>
                    ))}
                    </select>
                    }
                </Form.Item>


                <Form.Item label= "Module leader" error={errors.ModuleLeaderID}> 
                    {!staff.list ? (
                    <p>{staff.loadingMessage}</p> 
                ) : (
                    <select 
                    name="ModuleLeaderID" 
                    value={conformance.js2html["ModuleLeaderID"](module.ModuleLeaderID)} 
                    onChange={handleChange}
                    >
                    <option value="0">
                        None slected
                    </option>
                    {staff.list.map((member) => (
                        <option key={member.UserID} value={member.UserID}> 
                        {`${member.UserFirstname} ${member.UserLastname}`}
                    </option>
                    ))}
                    </select>
                    )}
                </Form.Item>


                <Form.Item label= "Module Image" error={errors.ModuleImageURL}> 
                    <input 
                    type="text" 
                    id="ModuleImageURL" 
                    name="ModuleImageURL" 
                    value={conformance.js2html["ModuleImageURL"](module.ModuleImageURL)} 
                    onChange={handleChange}
                    />
                </Form.Item>

        </Form>
    );
}

ModuleForm.propTypes = {
    onCancel: PropTypes.func,
    onSuccess: PropTypes.func,
};

export default ModuleForm;