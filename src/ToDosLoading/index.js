import React from 'react';
import './ToDosLoading.css';

function ToDosLoading () {
    return (
        <div className='LoadingTodo-Container'>
            {/* <span className='LoadingTodo-completeIcon'></span> */}
            <p className='LoadingTodo-text'>Cargando lista de To DOs...</p>
            {/* <span className='LoadingTodo-deleteIcon'></span> */}
        </div>
    );
}

export { ToDosLoading };