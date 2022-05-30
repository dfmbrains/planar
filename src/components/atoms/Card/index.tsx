import React from 'react';
import styles from './card.module.scss';
import eth from '../../../assets/images/eth.png';
import userBlack from '../../../assets/images/userBlack.png';
import cardsIcon from '../../../assets/images/cardsIcon.png';

interface CardsProps {
    nft: string
}

const Card: React.FC<CardsProps> = ({nft}) => {
    return (
        <div className={styles.box}>
            <div className={styles.img}>
                <img src={nft} alt=""/>
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <h3 className={styles.title}>PORTAL #026</h3>
                    <div className={styles.row}>
                        <p className={styles.price}>1.52</p>
                        <img className={styles.eth} src={eth} alt="eth"/>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.row}>
                        <img className={styles.userImg} src={userBlack} alt=""/>
                        <p className={styles.user}>lorem</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.count}>758</p>
                        <img className={styles.countImg} src={cardsIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;