import React from 'react';
import './CreateToDoButton.css';
   
function CreateToDoButton () {
    const onClickButton = (msg)=> {
        alert(msg);
    };

    return (
        <button className='CreateToDoButton'
        onClick={() => onClickButton('Aqui se debe abrir el modal')}
        > 
        + 
        </button>
    );
}

export { CreateToDoButton };

