import React from 'react'

const Controls = ({ onNext, onPrev}) => {
    return (
        <div className='controls'>
            <button onClick={onPrev}>Previous</button>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default Controls;