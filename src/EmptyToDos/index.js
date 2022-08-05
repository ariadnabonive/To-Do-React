import React from 'react';
import './EmptyToDos.css';

function EmptyToDos () {
    return (
        <div>
            <p className='EmptyToDos-text'>No se encontró ningún TO DO.</p>
            
            <img className='EmptyToDos-img' src="https://media.istockphoto.com/vectors/discussion-vector-id1185520362?k=20&m=1185520362&s=612x612&w=0&h=T-qpxN-SdshRHPXTOQn35t1t62c5RZi-mcwk4qo8kGY=" alt=''></img>
        
        </div>
        

    );
};

export { EmptyToDos };