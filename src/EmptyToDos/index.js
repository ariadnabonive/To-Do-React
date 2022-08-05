import React from 'react';
import './EmptyToDos.css';

function EmptyToDos () {
    return (
        <div>
            <p className='EmptyToDos-text'>No se encontró ningún TO DO.</p>
            
            <img className='EmptyToDos-img' src="https://ledigitalizeur.fr/wp-content/uploads/2020/10/to-do-list-applications.png" alt=''></img>
        
        </div>
        

    );
};

export { EmptyToDos };