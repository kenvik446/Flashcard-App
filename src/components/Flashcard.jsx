import React from 'react';
import "../App.css";

const Flashcard = ({card, onClick, isFlipped}) => {
    return (
        <div className='flashcard-container'>
            <div className= {`flashcard ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
                <div className='card-content'>{isFlipped ? card.answer : card.question}</div>
            </div>
        </div>
    );
};

export default Flashcard;