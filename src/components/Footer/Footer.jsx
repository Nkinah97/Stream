import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerColumn}>
                    <a href="mailto:support@gmail.com" className={styles.footerEmail}>support@gmail.com</a>
                    <a href="#" className={styles.footerLink}>Unsubscribe</a>
                </div>

                <div className={styles.footerColumn}>
                    <h3 className={styles.footerTitle}>Legal terms</h3>
                    <a href="#" className={styles.footerLink}>Terms of Use</a>
                    <a href="#" className={styles.footerLink}>Disclosures&Disclaimers</a>
                </div>

                <div className={styles.footerColumn}>
                    <h3 className={styles.footerTitle}>Privacy info</h3>
                    <a href="#" className={styles.footerLink}>Privacy Policy</a>
                    <a href="#" className={styles.footerLink}>Cookie Policy</a>
                </div>

                <div className={styles.footerColumn}>
                    <h3 className={styles.footerTitle}>About</h3>
                    <a href="#" className={styles.footerLink}>About Us</a>
                </div>
            </div>
        </footer>
    )
}