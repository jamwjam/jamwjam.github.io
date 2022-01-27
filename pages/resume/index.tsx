import resume from './resume.json'
import styles from './resume.module.css'
import classNames from 'classnames';

function Resume() {
  return (
    <article className={styles.paper}>
      <header>
        <div className={styles['header-content']}>
          <div className={styles['header-text']}>
            <p>{resume.basics.name}</p>
            <p className={styles.subtitles}>{resume.basics.label} | US Citizen</p>
          </div>
        </div>
      </header>
      <div className={styles['content-wrapper']}>
        <section className={styles.content}>
          <div className={styles.row}>
            <div className={styles['content-cat']}>
              Contact
            </div>
            <div className={styles['content-text']}>
              <ul>
                <li>Website</li>
                <li><a href={resume.basics.website}>{resume.basics.website}</a></li>
              </ul>
              <ul>
                <li>Email</li>
                <li><a href={`mailto:${resume.basics.email}`} className="__cf_email__">{resume.basics.email}</a></li>
              </ul>
              <ul>
                <li>Phone</li>
                <li>{resume.basics.phone}</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <div className={styles.row}>
            <div className={classNames(styles['content-cat'], styles['big-text'])}>
              Education
              <p>2011 till 2015</p>
            </div>
            <div className={classNames(styles['content-text'], styles['work-listing'], styles['education-listing'])}>
              <p className={styles.heading}>University of Maryland</p>
              <p className={styles.highlight}>
                Bachelor of Science:
                <i>Computer Science </i>
              </p>
            </div>
          </div>
        </section>
        <br />
        {resume.works.map((work, index) => {
          return (
            <section className={styles.content} key={index}>
              <div className={styles.row}>
                <div className={classNames(styles['content-cat'], styles['big-text'])}>
                  {index === 0 && <>Work Experience</>}
                  {work.startDate && work.endDate ?
                    <p>{work.startDate}&nbsp;-&nbsp;{work.endDate}</p> :
                    <p>{work.startDate}&nbsp;-&nbsp;Today</p>}
                </div>
                <div className={classNames(styles['content-text'], styles['work-listing'], styles['education-listing'])}>
                  <p><b>{work.position}</b>&nbsp;at&nbsp;<b><a href={work.website}>{work.company}</a></b></p>
                  <p>{work.summary}</p>
                  {work.highlights.map((highlight, index) => {
                    if (typeof highlight === 'string') {
                      return (
                        <p className={styles.highlight} key={index}>
                          {highlight}
                        </p>
                      )
                    }
                    if (typeof highlight === 'object') {
                      return (
                        <p key={index}>
                          <strong>
                            {highlight.header}&nbsp;|&nbsp;<a href={highlight.link}>{highlight.link}</a>
                          </strong>
                        </p>
                      )
                    }
                  })}
                </div>
              </div>
            </section>
          )
        })}
        <br />
        <section className={styles.content}>
          <div className={styles.row}>
            <div className={styles['content-cat']}>
              Skills
            </div>
            <div className={classNames(styles['content-text'], styles['skills-listing'])}>
              {resume.skills.map((skill, index) => {
                return (
                  <p key={index}>
                    <span className={styles.name}>
                      <strong>{skill.name}:&nbsp;</strong>
                    </span>
                    {skill.keywords.join(', ')}
                  </p>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

export default Resume