import React from 'react';
import css from './Feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
