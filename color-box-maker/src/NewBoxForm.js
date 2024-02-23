import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({createBox}) =>{
    const initialState = {
        width:"",
        height:"",
        backgroundColor: ""
    }

   const [formData, setFormData] = useState(initialState);

   const handleChange = e =>{
    const {name, value} = e.target; 
    setFormData(formData => ({
        ...formData,
        [name]: value
    }));
   };

   const handleSubmit = (e) =>{
    e.preventDefault();
    createBox({...formData, id:uuid()});
    setFormData({width:"", height:"", backgroundColor:""});  
   };

   return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor ="width">Width</label>
                <input
                    type="text"
                    placeholder="width"
                    name="width"
                    id="width"
                    value={formData.width}
                    onChange={handleChange} 
                /> 
            </div>
            <div>
                <label htmlFor ="height">Height</label>
                <input
                    type="text"
                    placeholder="height"
                    name="height"
                    id="height"
                    value={formData.height}
                    onChange={handleChange} 
                /> 
            </div>
            <div>
                <label htmlFor ="backgroundColor">Background Color</label>
                <input
                    type="text"
                    placeholder="background color"
                    name="backgroundColor"
                    id="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange} 
                /> 
            </div>
            <button>Create new box! </button>

        </form>
    </div>
   ) 
} 

export default NewBoxForm;