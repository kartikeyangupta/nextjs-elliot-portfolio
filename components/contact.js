import styles from './contact.module.css'

export default function Contact() {
    return(
        <div className={styles.container}>
            <form className={styles.secondarycontainer}>
                <input type="text" className={styles.feedbackinput} placeholder="Name"/>
                <input type="text" className={styles.feedbackinput} placeholder="Email"/>
                <textarea type="text" className={styles.feedbackinput} placeholder="comment"></textarea>
                <input type="submit" className={styles.submit} value="Ping Me"/>
            </form>
            <div className={styles.row}>
                {/* Linkedin */}
                <a href="https://www.linkedin.com/">
                    <img 
                        src="/images/contacts/linkedin.svg"
                        className={styles.logo}
                    />
                </a>
                {/* Gmail */}
                <a href="mailto:qwerty@gmail.com">
                    <img 
                        src="/images/contacts/gmail.svg"
                        className={styles.logo}
                    />
                </a>
                {/* Github */}
                <a href="https://www.github.com/">
                    <img 
                        src="/images/contacts/github.svg"
                        className={styles.logo}
                    />
                </a>
                {/* Stackoverflow */}
                <a href="https://www.stackoverflow.com/">
                    <img 
                        src="/images/contacts/stf.svg"
                        alt="stackoverflow"
                        className={styles.logo}
                    />
                </a>
            </div>
        </div>
    )
}