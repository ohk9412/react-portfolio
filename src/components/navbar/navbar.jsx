import React from 'react';
import { useState } from "react";
import Navitem from './../navitem/navitem';
import styles from './navbar.module.css'

const Navbar = (props) => {
  // 출저 : https://jeewonscript.tistory.com/6
    const [menuToggle, setMenuToggle] = useState(false);
    const menu = [
        { id:1, name: "Home", address: "/" },
        { id:2, name: "Python", address: "/python" },
        { id:3, name: "React", address: "/react" },
    ];
    return(
        <nav className={styles.navigation__wrapper}>
      <div
        className={!menuToggle ? styles.burger__menu : styles.x__menu}
        onClick={() =>
          menuToggle ? setMenuToggle(false) : setMenuToggle(true)
        }
      >
        <div className={styles.burger_line1}></div>
        <div className={styles.burger_line2}></div>
        <div className={styles.burger_line3}></div>
      </div>

      <div
        className={[
          styles.menu__box,
          !menuToggle ? styles.menu__box__hidden : styles.menu__box__visible,
        ].join(" ")}
      >
        <div className={styles.menu__list}>
          {menu.map((data) => (
            <Navitem
              name={data.name}
              address={data.address}
              offNav={() => setMenuToggle(false)}
              key={data.id}
            />
          ))}
        </div>
      </div>
    </nav>
    )
};

export default Navbar;