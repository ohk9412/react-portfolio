import React from 'react';
import { useState } from "react";
import Navitem from './../navitem/navitem';
import styles from './navbar.module.css'

const Navbar = (props) => {
    const [menuToggle, setMenuToggle] = useState(false);
    const menu = [
        { name: "Home", address: "/" },
        { name: "python", address: "/python" },
        { name: "react", address: "/react" },
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
            />
          ))}
        </div>
      </div>
    </nav>
    )
};

export default Navbar;