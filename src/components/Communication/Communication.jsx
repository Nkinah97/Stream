import styles from './Communication.module.scss'
import SwipeImg from '../SwipeImg/SwipeImg'

export default function Communication() {
    const handleClick = () => {
        const element = document.getElementById('signupForm');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.communicationWrap}>
            <h2 className={styles.communicationTitle}>It's a universe of communication and <br />streaming without borders!</h2>
            <p className={styles.communicationDescr}>Let yourself to be free – share your thoughts, delight, and fears with beautiful strangers!</p>
            <SwipeImg />
            <button className={styles.communicationBtn} onClick={handleClick}>
                <span>
                    Join for free
                </span>
            </button>
        </div>
    )
}