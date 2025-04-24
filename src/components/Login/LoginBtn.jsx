import styles from './LoginBtn.module.scss'

export default function LoginBtn() {
    return (
        <button className={styles.loginBtn}>
            <span>Login</span>
        </button>
    )
}