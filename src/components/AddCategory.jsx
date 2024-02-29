import { useState } from "react"
import PropTypes from 'prop-types'
export const AddCategory
    =({onNewCategory})=>{
        const [inputValue, setinputValue] = useState('buscador')
        const onInputChange=(event)=>{
            setinputValue(event.target.value);
        }
        const onSubmitEvent=(event)=>{
            event.preventDefault();
            if(inputValue.trim().length<=1)return;
            onNewCategory(inputValue.trim());
            setinputValue('');
        }
        return(
        <form onSubmit={(event)=>onSubmitEvent(event)} aria-label="form">

            <input 
            type="text" 
            placeholder="buscar gifs"
            value={inputValue}
            onChange={onInputChange}
            />

        <button onClick={onSubmitEvent}>agregar</button>
        </form>
        )

}
AddCategory.propTypes={
    onNewCategory:PropTypes.func.isRequired,
}