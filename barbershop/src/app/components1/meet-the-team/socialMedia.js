import FBIcon from "./fbIcon"
import IgIcon from "./igIcon"
import TwitterIcon from "./twitterIcon"

export default function SocialMedia({ containerNameHover, styles }) {
    return (
        <div className={containerNameHover ? [styles.socialMediaFlexContainer, styles.fullWidth].join(" ") : styles.socialMediaFlexContainer}>
            <FBIcon iconColour="white" />
            <IgIcon iconColour="white" />
            <TwitterIcon iconColour="white" />
        </div>
  )
}