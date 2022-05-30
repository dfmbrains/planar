import React from 'react';
import styles from "./cristal.module.scss";
import cristal from "../../../assets/images/cristal.png";

const Cristal = () => {
    return (
        <div className={styles.cristal}>
            <img src={cristal} alt=""/>
            <p>1.5 k</p>
        </div>
    );
};

export default Cristal;