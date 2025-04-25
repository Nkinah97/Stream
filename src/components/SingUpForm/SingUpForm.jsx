import { useState } from 'react'
import styles from './SingUpForm.module.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import googleIcon from '../../img/google.svg'
import mailIcon from '../../img/mail.svg'

const SignUpForm = () => {
    const [activeForm, setActiveForm] = useState('main')
    const [showPassword, setShowPassword] = useState(false)
    const [showPopup, SetShowPopup] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        gender: '',
        name: '',
        birthDate: '',
        agreeToTerms: false
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newErrors = {}

        // Валідація email
        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format'
        }

        // Валідація password
        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        }

        // Валідація name
        if (formData.name && formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters'
        }

        // Валідація birthDate
        if (formData.birthDate) {
            const birthDate = new Date(formData.birthDate)
            const today = new Date()
            const age = today.getFullYear() - birthDate.getFullYear()
            if (age < 18) {
                newErrors.birthDate = 'You must be at least 18 years old'
            }
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData)
        }
    }

    const MainForm = () => (
        <>
            <button 
                type="button" 
                className={`${styles.Button} ${styles.googleButton} ${styles.ButtonPopUp}`}
                onClick={() => SetShowPopup(true)}
            >
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
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
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
                    />
                    <button 
                        type="button" 
                        className={styles.showPasswordButton}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </button>
                </div>
                {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            <button type="button" className={`${styles.Button} ${styles.mailButton}`}>
                <img className={styles.btnicon} src={mailIcon} alt="mail" />
                <span>Sign up with Email</span>
            </button>

            <p className={styles.terms}>
                You hereby confirm that you are fully able and competent to access Livebeam and comply with the Terms of Use & Service, and are at least eighteen (18) years of age or the age of majority under the law of the jurisdiction of your residence and the one you are accessing Livebeam from.
            </p>

            {showPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <button 
                            onClick={() => SetShowPopup(false)}
                            className={styles.popupCloseButton}
                        >
                            ✕
                        </button>
                        <h3>Google Sign Up</h3>
                        <p>Thank you for registering on our platform ❤️</p>
                    </div>
                </div>
            )}
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
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.inputGroup}>
                <label>I was born</label>
                <input
                    type="text"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    placeholder="MM/DD/YYYY"
                />
                {errors.birthDate && <span className={styles.errorText}>{errors.birthDate}</span>}
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