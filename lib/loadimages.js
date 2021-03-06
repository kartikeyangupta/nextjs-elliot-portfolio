import fs from 'fs'
import path from 'path'

const parentDirectory = 'public'
const skillsDirectoryRelative = '/images/skills'

// C://User/<username>/desktop/temp/elliot_alderson/elliot/public/images/skills/
const skillsDirectory = path.join(process.cwd(), parentDirectory+skillsDirectoryRelative)

//
export function getSkillsData() {
    // read all the files that are there in the directory
    const imageNames = fs.readdirSync(skillsDirectory)
    const allSkillData = imageNames.map(fileName => {
        // linux.svg : id : linux
        const id = fileName.replace(/\.svg$/, '')
        // /images/skills/linux.svg
        const fullPath = skillsDirectoryRelative + '/' + fileName
    return {
        id,
        fullPath
        }
    })
    return allSkillData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        }
        else {
            return -1
        }
    })
}