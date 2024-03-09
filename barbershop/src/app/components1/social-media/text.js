export default function Text({ socialMediaInfo, styles }) {
  return (
    <div className={styles.textFlexContainer}>
        <div>
            <h2 id="social-media" className={styles.header}>We Are On Instagram And TikTok!</h2>
        </div>
        <div>
            <p>Instagram:&nbsp;
              <a className={styles.link} href={socialMediaInfo.instagram.link} target="_blank">
                {socialMediaInfo.instagram.accountName}
              </a>
            </p>
            <p>TikTok:&nbsp;
              <a className={styles.link} href={socialMediaInfo.tikTok.link} target="_blank">
                {socialMediaInfo.tikTok.accountName}
              </a>
            </p>
        </div>
    </div>
  )
}