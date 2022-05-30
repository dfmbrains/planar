import React, {useState} from 'react';
import styles from './home.module.scss';
import './home.css';
import cardImg from '../../assets/images/cardimg.png';
import userBlack from '../../assets/images/userBlack.png';
import eth from '../../assets/images/eth.png';
import cardsIcon from '../../assets/images/cardsIcon.png';
import {Button} from "@mui/material";
import nft from '../../assets/images/nft1.png';
import nft2 from '../../assets/images/nft2.png';
//swiper
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import {EffectCoverflow} from "swiper";
import Cristal from "../../components/atoms/Cristals";
import Likes from "../../components/atoms/Likes";
import Zoom from "../../components/atoms/Zoom";
import Card from "../../components/atoms/Card";
import "@fancyapps/ui/dist/fancybox.css";
//fancybox


const Home = () => {
    const arr = [1, 2, 3];
    const [menuItem, setMenuItem] = useState(true);
    return (
        <>
            <section className={styles.home}>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    {
                        arr.map((item) => (
                            <SwiperSlide>
                                <div className={styles.box}>
                                    <div className={styles.img}>
                                        <div className={styles.imgBox}>
                                            <img src={cardImg} alt=""/>
                                            <div className={styles.likes}>
                                                <Likes/>
                                            </div>
                                            <div className={styles.zoom}>
                                                <Zoom/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <h2 className={styles.title}>Digitalization</h2>
                                        <div className={styles.row}>
                                            <div className={styles.card}>
                                                <p className={styles.cardsTitle}>Creator</p>
                                                <div className={styles.cardsRow}>
                                                    <img src={userBlack} alt=""/>
                                                    <p>nocellcoverage</p>
                                                </div>
                                            </div>
                                            <div className={styles.card}>
                                                <p className={styles.cardsTitle}>Owner</p>
                                                <div className={styles.cardsRow}>
                                                    <img src={userBlack} alt=""/>
                                                    <p>nocellcoverage</p>
                                                </div>
                                            </div>
                                            <div className={styles.card}>
                                                <p className={styles.cardsTitle}>Price</p>
                                                <div className={styles.cardsRow}>
                                                    <p>1.5</p>
                                                    <img src={eth} alt=""/>
                                                </div>
                                            </div>
                                            <div className={styles.card}>
                                                <p className={styles.cardsTitle}>Amount</p>
                                                <div className={styles.cardsRow}>
                                                    <p>758</p>
                                                    <img src={cardsIcon} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.btnBox}>
                                            <Button variant={"contained"}>Buy Artwork</Button>
                                        </div>
                                    </div>
                                    <Cristal/>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
            <section className={styles.cards}>
                <div className="container">
                    <div className={styles.menu}>
                        <p onClick={() => setMenuItem(true)}
                           style={{borderBottom: `${menuItem ? '3px solid #000000' : '3px solid transparent'}`}}
                           className={styles.item}>Trending</p>
                        <p onClick={() => setMenuItem(false)}
                           style={{borderBottom: `${!menuItem ? '3px solid #000000' : '3px solid transparent'}`}}
                           className={styles.item}>New</p>
                    </div>
                    <div className={styles.list}>
                        <div className={styles.cardBox}>
                            <Card nft={menuItem ? nft : nft2}/>
                        </div>
                        <div className={styles.cardBox}>
                            <Card nft={menuItem ? nft : nft2}/>
                        </div>
                        <div className={styles.cardBox}>
                            <Card nft={menuItem ? nft : nft2}/>
                        </div>
                        <div className={styles.cardBox}>
                            <Card nft={menuItem ? nft : nft2}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;