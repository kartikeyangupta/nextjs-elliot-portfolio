import styles from './skills.module.css'

export default function Projects(){
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <a href='https://github.com/vercel/next.js'>
                <img 
                    src='/images/projects/project1.png'
                    className={styles.logo}
                />
                </a>
            </div>
        </div>
        )
}