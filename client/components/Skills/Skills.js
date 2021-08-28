import cx from 'classnames'
import styles from '@client/components/Skills/Skills.module.css'

const skills = [
  'Web Security',
  'Web Performance',
  'Networking',
  'JS (ES.Next+)',
  'React',
  'Redux',
  'SWR',
  'Docker',
  'Kubernetes',
  'ESXi',
  'Jest',
  'Enzyme',
]

const Skills = () =>
  <section className={cx(styles.skills, 'section')} id="skills">
    <h2 className="section__title">Skills</h2>
    <ul>
      {skills.map((skill, i) => (
        <li key={i} className="btn btn--plain">
          {skill}
        </li>
      ))}
    </ul>
  </section>

export default Skills
