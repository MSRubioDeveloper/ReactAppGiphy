import { useState } from "react"

//Componente para categorias
export const AddCategory = ( { onNewCategory }) => {

    //cada componente puede tener sus propios HOOKS
    const [inputValue, setInputValue] = useState("");
    
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }
    const onSubmit = ( event )=>{
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // onAddCategory( cat => [ ...cat, inputValue]);

        //Emision
        onNewCategory(inputValue.trim());
        setInputValue("")

    }

    return (
            <form onSubmit={ onSubmit }>
                <input type="text"
                    placeholder="Buscar gifs"
                    value={ inputValue }
                    // onChange={ (event )=> onInputChange(event)}
                    onChange={ onInputChange }
                >                
                </input>

                <p>{inputValue} </p>

            </form>                   
    )
}
