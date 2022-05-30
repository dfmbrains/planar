import React from 'react';
import styles from './likes.module.scss';

const Likes = () => {
    return (
        <div className={styles.box}>
            <div className={styles.row}>
                <i className="ri-heart-line"/>
                <p>1.5 k</p>
            </div>
        </div>
    );
};

export default Likes;