import { useState } from 'react'
import styles from './SingUpForm.module.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import googleIcon from '../../img/google.svg'
import mailIcon from '../../img/mail.svg'

const SignUpForm = () => {
    const [activeForm, setActiveForm] = useState('main')
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        gender: '',
        name: '',
        birthDate: '',
        agreeToTerms: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const MainForm = () => (
        <>
            <button type="button" className={`${styles.Button} ${styles.googleButton}`}>
                <img className={styles.btnicon} src={googleIcon} alt="Google" />
                <span>Sign up with Google</span>
            </button>

            <div className={styles.divider}>
                <span>or</span>
            </div>

            <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. Alex@email.com"
                    required
                />
            </div>

            <div className={styles.inputGroup}>
                <label>Password</label>
                <div className={styles.passwordInput}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="8+ characters"
                        required
                    />
                    <button 
                        type="button" 
                        className={styles.showPasswordButton}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </button>
                </div>
            </div>

            <button type="button" className={`${styles.Button} ${styles.mailButton}`}>
                <img className={styles.btnicon} src={mailIcon} alt="mail" />
                <span>Sign up with Email</span>
            </button>
            <p className={styles.terms}>
                You hereby confirm that you are fully able and competent to access Livebeam and comply with the Terms of Use & Service, and are at least eighteen (18) years of age or the age of majority under the law of the jurisdiction of your residence and the one you are accessing Livebeam from.
            </p>
        </>
    )

    const ExtendedForm = () => (
        <>
            <div className={styles.genderGroup}>
                <p>I am</p>
                <div className={styles.genderButtons}>
                    <button
                        type="button"
                        className={`${styles.genderButton} ${formData.gender === 'male' ? styles.active : ''}`}
                        onClick={() => handleChange({ target: { name: 'gender', value: 'male' } })}
                    >
                        Male
                    </button>
                    <button
                        type="button"
                        className={`${styles.genderButton} ${formData.gender === 'female' ? styles.active : ''}`}
                        onClick={() => handleChange({ target: { name: 'gender', value: 'female' } })}
                    >
                        Female
                    </button>
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label>My name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex"
                    required
                />
            </div>

            <div className={styles.inputGroup}>
                <label>I was born</label>
                <input
                    type="text"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    placeholder="MM/DD/YYYY"
                    required
                />
            </div>

            <div className={styles.termsCheckbox}>
                <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    id="terms"
                />
                <label htmlFor="terms">
                    I have read understand and agree to Terms of Use, Privacy Policy, Disclosures&Disclaimers.
                </label>
            </div>

            <button type="submit" className={`${styles.Button} ${styles.mailButton}`}>
                <img className={styles.btnicon} src={mailIcon} alt="mail" />
                <span>Sign up now</span>
            </button>


        </>
    )

    return (
        <form onSubmit={handleSubmit} className={styles.form} id="signupForm">
            <div className={styles.formWrapper}>
                {activeForm === 'main' ? <MainForm /> : <ExtendedForm />}

                <div className={styles.switch}>
                    <div 
                        className={`${styles.switchLeft} ${activeForm === 'main' ? styles.active : ''}`}
                        onClick={() => setActiveForm('main')}
                    ></div>
                    <div 
                        className={`${styles.switchRight} ${activeForm === 'email' ? styles.active : ''}`}
                        onClick={() => setActiveForm('email')}
                    ></div>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm