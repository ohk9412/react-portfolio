import React from 'react';
import { Link } from "react-router-dom";
import styles from './navitem.module.css'

const Navitem = ({name,address,offNav}) => {
 // 출저 : https://jeewonscript.tistory.com/6
    return (
        <Link to={`${address}`} className={styles.menu__item} onClick={() => offNav()}>
          {name}
        </Link>
      )   
    };

export default Navitem;
