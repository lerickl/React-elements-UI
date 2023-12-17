import React, { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';
interface props extends React.HtmlHTMLAttributes<ButtonHTMLAttributes> {}
export const Button = ({ children, ...Props }: props) => {
  return (
    <button className={styles.button} {...Props}>
      <i></i>
      <i></i>
      {children}
    </button>
  );
};
