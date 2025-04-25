import styles from './LoginBtn.module.scss'
import { useState } from 'react'
import SignUpForm from '../SingUpForm/SingUpForm'

export default function LoginBtn() {
    const [showForm, setShowForm] = useState(false)

    return (
    <>
        <button className={styles.loginBtn}
        onClick={()=> setShowForm(true)}>
            <span>Login</span>
        </button>

        {showForm && (
            <div className={styles.formPopup}>
                <div className={styles.formOverlay} onClick={() => setShowForm(false)}>
                    <div className={styles.formWrapper} onClick={e => e.stopPropagation()}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setShowForm(false)}
                        >
                            ✕
                        </button>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        )}
    </> 
    )
}