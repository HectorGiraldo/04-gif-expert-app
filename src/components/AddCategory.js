import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setiIputValue] = useState('');

    const handleInputChange = (e) => {
        setiIputValue( e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cat => [ inputValue, ...cat ]);
            setiIputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            value= {inputValue}
            onChange= { handleInputChange} 
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


