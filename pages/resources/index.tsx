import styles from './resources.module.css'
function Resources() {
    return (
        <section className={styles.resources}>
            <h1>List of curated articles that I found helpful</h1>
            <p>just listing few links that I visit often for reference</p>
            <ul className={styles.list}>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox </a></li>
                <li><a href="https://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/">Git tip: How to "merge" specific files from another branch</a></li>
                <li><a href="https://stackoverflow.com/questions/3197413/how-do-i-delete-unpushed-git-commits">How do I delete unpushed git commits?</a></li>
                <li><a href="https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/">Var, Let, and Const – What&#39;s the Difference?</a></li>
                <li><a href="https://vercel.com/docs/concepts/functions/edge-functions">Vercel Edge Functions</a></li>
                <li><a href="https://vercel.com/docs/concepts/functions/serverless-functions">Vercel Serverless Functions</a></li>
            </ul>
        </section>
    )
}

export default Resources