import styles from './JoinUs.module.scss'
import { joinUsData } from './joinUsData'

export default function JoinUs() {
    return (
        <div className={styles.joinUsContainer}>
            <h2 className={styles.mainTitle}>Why join us?</h2>
            
            <div className={styles.cardsGrid}>
                {joinUsData.map((item, index) => (
                    <div key={index} className={styles.joinWrapper}>
                        <span className={styles.titleWrap}>
                            <img src={item.icon} alt={item.title} />
                            <p className={styles.joinTitle}>
                                {item.title}
                            </p>
                        </span>
                        <p className={styles.joinDesc}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}