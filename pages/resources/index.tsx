import styles from './resources.module.css'
function Resources() {
    return (
        <section className={styles.resources}>
            <h1>List of curated articles</h1>
            <p>why take notes if I have reference?</p>
            <ul>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox </a></li>
                <li><a href="https://stackoverflow.com/questions/3197413/how-do-i-delete-unpushed-git-commits">How do I delete unpushed git commits?</a></li>
                <li><a href="https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/">Var, Let, and Const – What&#39;s the Difference?</a></li>
            </ul>
        </section>
    )
}

export default Resources