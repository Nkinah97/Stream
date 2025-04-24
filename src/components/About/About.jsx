import styles from './About.module.scss';

const About = () => {
    const handleClick = () => {
        const element = document.getElementById('signupForm')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.gradientCircle}></div>
            <div className={styles.about}>
                <h1>About</h1>

                <p className={styles.aboutTop}>It's a global <strong>streaming platform </strong>for communication and meeting incredibly beautiful people. We created an excellent place where you can enjoy your time and <strong>find appropriate matches</strong> at first.
                </p>

                <p className={styles.aboutbottom}>Approximately 80% of our users have already found their lovelies.<strong> Watch streams </strong>ithout hindrance and meet someone <strong>who interests you.</strong> 
                </p>

                <button className={styles.aboutBtn} onClick={handleClick}>
                    <span>
                        Join for free
                    </span>
                </button>
            </div>
        </div>
    )
}

export default About;
