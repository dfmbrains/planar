import React from 'react';
import styles from './header.module.scss';
import logo from '../../../assets/images/logo.png';
import user from '../../../assets/images/user.png';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={styles.tools}>
                        <ul className={styles.menu}>
                            <li>
                                <NavLink to={"/personal"}>Appraise</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>About</NavLink>
                            </li>
                        </ul>
                        <div className={styles.user}>
                            <img src={user} alt="user"/>
                            <ul className={styles.userMenu}>
                                <li>
                                    <NavLink to={"/"}>User profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/"}>Settings</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/"}>Sign out</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;