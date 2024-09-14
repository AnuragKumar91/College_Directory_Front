import React, { useEffect, useState } from 'react';

const VivekBhaiya = () => {
    const CategoryItems = ["electronic", "cloths","soap"];

    const options = {
        electronic: ["Phone", "earphone"],
        cloths: ["shirt", "pant"],
        soap:["Lux"]
    };

    const [selectedCategory, setSelectedCategory] = useState([]);

    const handleCheckboxChange = (category) => {
        console.log(category)

        setSelectedCategory( (prevSelectedCategory) =>(
            prevSelectedCategory.includes(category)
            ? prevSelectedCategory.filter((item) => item !== category)
            : [...prevSelectedCategory, category]

        )     
        );

        
    };

    useEffect( ()=>{
        console.log(selectedCategory)
    },[selectedCategory])



    return (
        <div className="container">

            <div className="row">
                <div className='col-12'>
                    {CategoryItems.map((category, index) => (
                        <div key={index} className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={`checkbox_id_${category}`}
                                value={category}
                                onChange={() => handleCheckboxChange(category)}
                            />

                            <label className="form-check-label" htmlFor={`checkbox_id_${category}`}>
                                {category}
                            </label>
                        </div>
                    ))}

                    <div className="selected-items">
                        {selectedCategory.map((category) => (
                            <div key={category}>
                                <h5>{category}</h5>
                                <ul>
                                    {options[category].map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VivekBhaiya;
