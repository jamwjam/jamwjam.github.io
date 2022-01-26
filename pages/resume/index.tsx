import resume from './resume.json'
import styles from './resume.module.css'

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
          <div className="row">
            <div className="content-cat">
              Contact
            </div>
            <div className="content-text">
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
          <div className="row">
            <div className="content-cat big-text">
              Education
              <p>2011 till 2015</p>
            </div>
            <div className="content-text work-listing education-listing">
              <p className="heading">University of Maryland</p>
              <p className="highlight">
                Bachelor of Science:
                <i>Computer Science </i>
              </p>
            </div>
          </div>
        </section>
        <br />
        {resume.works.map((work, index) => {
          return (
            <section className="content" key={index}>
              <div className="row">
                <div className="content-cat big-text">
                  {index === 0 && <>Work Experience</>}
                  {work.startDate && work.endDate ?
                    <p>{work.startDate}&nbsp;-&nbsp;{work.endDate}</p> :
                    <p>{work.startDate}&nbsp;-&nbsp;Today</p>}
                </div>
              </div>
              <div className="content-text work-listing education-listing">
                <p><span>{work.position}</span>&nbsp;at&nbsp;<b><a href={work.website}>{work.company}</a></b></p>
                <p>{work.summary}</p>
                {work.highlights.map((highlight, index) => {
                  if (typeof highlight === 'string') {
                    return (
                      <p className="highlight" key={index}>
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
            </section>
          )
        })}
        <br />
        <section className="content">
          <div className="row">
            <div className="content-cat">
              Skills
              <p>* Ordered by proficiency</p>
            </div>
            <div className="content-text skills-listing">
              {resume.skills.map((skill, index) => {
                return (
                  <p key={index}>
                    <span className="name">
                      <strong>{skill.name}:&nbsp;</strong>
                    </span>
                    {skill.keywords.map((keyword, index) => {
                      return (index + 1 < skill.keywords.length) ?
                        <span>{keyword},&nbsp;</span> :
                        <span>{keyword}</span>
                    })}
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
