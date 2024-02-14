export default function Text({ socialMediaInfo, styles }) {
  return (
    <div className={styles.textFlexContainer}>
        <div>
            <h2 id="social-media" className={styles.header}>We Are On Instagram And TikTok!</h2>
        </div>
        <div>
            <p>Instagram: {socialMediaInfo.instagram}</p>
            <p>TikTok: {socialMediaInfo.tikTok}</p>
        </div>
    </div>
  )
}
