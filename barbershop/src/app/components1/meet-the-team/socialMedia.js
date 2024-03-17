import FBIcon from "./fbIcon"
import IgIcon from "./igIcon"
import TwitterIcon from "./twitterIcon"

export default function SocialMedia({ imgNumHover, styles }) {
    return (
        <div className={imgNumHover ? [styles.socialMediaFlexContainer, styles.fullWidth].join(" ") : styles.socialMediaFlexContainer}>
            <FBIcon iconColour="white" styles={styles} />
            <IgIcon iconColour="white" styles={styles} imgNumHover={imgNumHover} />
            <TwitterIcon iconColour="white" styles={styles} />
        </div>
  )
}