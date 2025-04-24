import styles from './Find.module.scss'
import {findData} from './FindData.js'
export default function Find() {
    return (
        <div className={styles.findWrap}>
            <h2 className={styles.findTitle}>Here you can find</h2>

        {findData.map((el, index) => (
            <div key={index} className={styles.findContent}>
                <img src={el.icon}></img>
                <p> {el.title} </p>
            </div>

        ))}

        </div>
    )
}