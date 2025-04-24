import styles from './Header.module.scss'
import SignUpForm from '../SingUpForm/SingUpForm'

export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLeft}>
                <h3 className={styles.headerLeftTitle}>
                    It's a hot place for your streaming fantasy.
                </h3>
                <p className={styles.headerLeftText}>
                    It's a free space for watching streams <br /> and chatting with alluring people. 
                </p>
            </div>
            <div className={styles.headerRight}>
                <SignUpForm />
            </div>
        </div>
    )
}