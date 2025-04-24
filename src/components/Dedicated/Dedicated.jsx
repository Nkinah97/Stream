import { useState, useEffect } from 'react'
import styles from './Dedicated.module.scss'
import imgIphon from '../../img/dd/Holding.png'
import imgtext from '../../img/dd/sms.png'

export default function Dedicated() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        const element = document.getElementById('signupForm');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderButton = () => (
        <button className={styles.dedicatedBtn} onClick={handleClick}>
            <span>{isMobile ? 'Sign up now' : 'Write to her'}</span>
        </button>
    );

    return (
        <>
            <div className={styles.dedicatedWrap}>
                <div className={styles.dedicatedLeft}>
                    <h2 className={styles.dedicatedLeftTitle}>It's a dedicated space for <br /> your bold fantasies!</h2>
                    <p className={styles.dedicatedLeftDesc}>Hundreds of attractive admirers are already waiting for you here. Don't delay – dive into the world of streaming, flirting, and hot communication right now!</p>
                    {!isMobile && renderButton()}
                </div>

                <div className={styles.dedicatedRight}>
                    <img src={imgIphon} alt="Phone"></img>
                    <span className={styles.dedicatedRightContent}>
                        <img src={imgtext} className={styles.dedicatedRightText} alt="Messages"></img>
                    </span>
                </div>
                {isMobile && renderButton()}
            </div>
        </>
    )
}