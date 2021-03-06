import styles from './skills.module.css'

function generate_component(allSkillImages) {
    const totalSkills = allSkillImages.length
    let images = []
    let i = 0
    while(i < totalSkills) {
        let children = []
        let ini  = i
        for (let j=0; j<3; j++) {
            if (i < totalSkills) {
                children.push(
                    <img 
                        key={allSkillImages[i].id}
                        src={allSkillImages[i].fullPath}
                        alt={allSkillImages[i].id}
                        className={styles.logo}
                    />)
            }
            else {
                break;
            }    
            i++;       
        }
        images.push(<div className={styles.row}>{children}</div>)
    }
    return images
}

export default function Skills({ allSkillImages }){
    console.log(allSkillImages)
    return (
        <div className={styles.container}>
            {generate_component(allSkillImages)}
        </div>
        )
}