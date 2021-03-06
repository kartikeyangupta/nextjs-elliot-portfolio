import styles from './expAchievement.module.css'

function getExperience(joining, ending) {
    if (ending === null)
        ending = new Date()
    let diff = Math.floor(ending.getTime() - joining.getTime())
    let totalDays = 1000 * 60 * 60 * 24;
    let months = Math.floor((diff/totalDays/31))
    let years = Math.floor(months/12)
    if (years>=1) {
        months = months - (years*12)
    }
    return years + ' Years ' + months + ' Months'
}

export default function Skills({ allSkillImages }){
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <img className={styles.logo} src='/images/experiences/allsafe.png' alt='AllSafe'/>
                <div className={styles.secondarycontainer}>
                    <h3>{getExperience(new Date("2014-01-10"), new Date("2017-03-23"))}</h3>
                    <p> Secured major company on-prem Servers, for various active attacks including rootkits and DDos.</p>
                    <p>Headed the security operational work for E-Corp servers.</p>
                    <p>Was head CSE at AllSafe, NY , US</p>
                </div>
            </div>
            <div className={styles.row}>
                <img className={styles.logo} src='/images/experiences/ECorp.png' alt='E-Corp'/>
                <div className={styles.secondarycontainer}>
                    <h3>{getExperience(new Date("2017-04-23"), null)}</h3>
                    <p>Handled all pentration testing for any on-prem/cloud application in E-Corp.</p>
                    <p>Lead Penitration testor, leaded the project Kub-Root - a kubernetes pod security application .</p>
                    <p>Is VP InfoSec at E-Corp, SF-CA , US</p>
                </div>
            </div>
            <div className={styles.row}>
                <img className={styles.logo} src='/images/experiences/defcon.png' alt='E-Corp'/>
                <div className={styles.secondarycontainer}>
                    <h3> June 2019 </h3>
                    <p>Gave a seminar on how to write efficient root-kits and malwares using Go routine (GoLang).</p>
                    <p>Gave a seminar on open-source and malicious codes in open source projects</p>
                    <p>Defcon, SF-CA , US</p>
                </div>
            </div>
        </div>
        )
}