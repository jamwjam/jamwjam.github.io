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
      <br/>
      </div>
    </article>
  )
}

export default Resume
  