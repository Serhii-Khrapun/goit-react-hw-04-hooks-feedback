import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2 className={styles.text}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
