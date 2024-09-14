import React, { useState } from 'react'

const FormCreateFromDatabase = () => {

    const [formData, setFormData] = useState([
        {
            email: ["text", "", "required"]
        },
        {
            photo: ["file", "", "required"]
        }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            const newFormData = [...prevFormData];
            newFormData[index][name][1] = value; // Update the value at the second index of the array
            return newFormData;
        });
    }

    function submitForm(e){
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <form>
                {formData.map((data, index) => {
                    const key = Object.keys(data)[0];
                    const [type, value, required] = data[key];

                    return (
                        <div key={index}>
                            <label>{key}</label>
                            <input 
                                type={type} 
                                name={key} 
                                defaultValue={value} 
                                required={required === "required"} 
                                onChange={(e)=>handleChange(e,index)}

                            />
                        </div>
                    );
                })}
                <button type="submit" onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

export default FormCreateFromDatabase;
