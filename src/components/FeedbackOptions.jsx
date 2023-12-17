import React from 'react';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} className={css.button} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
