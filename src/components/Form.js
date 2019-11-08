import React, { useState } from 'react';
import { ENETDOWN } from 'constants';

const Form = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    });

    const onInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="form-container">
            <h1>Form</h1>
            <form onSubmit={event => {
                event.preventDefault();
                props.newSubmission(formData);
                event.target.reset();
            }
            }>
                <label>
                    Name:
                    <input name='name' onChange ={onInputChange} type="text"/>
                </label>
                <label>
                    E-mail:
                    <input name='email' onChange ={onInputChange} type="text"/>
                </label>
                <label>
                    Role:
                    <select name='role' onChange ={onInputChange}>
                        <option></option>
                        <option>Backend Engineer</option>
                        <option>Frontend Engineer</option>
                        <option>UX Designer</option>
                        <option>Technician</option>
                        <option>Lion Tamer</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;