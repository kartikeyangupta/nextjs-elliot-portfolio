import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Skills from '../components/skills'
import Contact from '../components/contact.js'
import Projects from '../components/projects'
import ExpAchievemt from '../components/expAchievement'
import { getSkillsData } from '../lib/loadimages'

export async function getStaticProps() {
  const allSkillImages = getSkillsData()
  return {
    props: {
      allSkillImages
    }
  }
}


function aboutMe() {
  let component = []
  let about = [
                'I am a cybersecurity engineer at day and a vigilanty hacker at night.',
                'Have 5 years of experience in cybersecurity, pentration testing, dev-sec-ops.',
                'Currently working as head cybersecurity engineer at AllSafe.'
  ]
  for (let i=0;i<about.length; i++){
    component.push(<p>{about[i]}</p>)
  }
  return component
}

// https://<yourdomainname>/
export default function Home( {allSkillImages} ) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
          <h2 className={utilStyles.headingLg}> About </h2>
          <div className={utilStyles.about}> 
            {aboutMe()}
          </div>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
          <h2 className={utilStyles.headingLg}> Skills </h2>
            <Skills allSkillImages={allSkillImages} />
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
          <h2 className={utilStyles.headingLg}> Projects </h2>
            <Projects />
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
          <h2 className={utilStyles.headingLg}> Experiences and Achievements </h2>
            <ExpAchievemt />
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.newsection}`}>
          <h2 className={utilStyles.headingLg}> Contact ME </h2>
            <Contact />
        </section>
        <h4 className={utilStyles.graymatter}> &#x24B8; {' '} Elliot Alderson </h4>
      </Layout>
  )
}
