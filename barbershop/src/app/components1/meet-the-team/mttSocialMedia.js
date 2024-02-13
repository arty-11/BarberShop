import MttFbIcon from "./mttFbIcon"
import MttIgIcon from "./mttIgIcon"
import MttTwitterIcon from "./mttTwitterIcon"

export default function MttSocialMedia({ containerNameHover, styles }) {
    return (
        <div className={containerNameHover ? [styles.mttSocialMediaFlexContainer, styles.mttFullWidth].join(" ") : styles.mttSocialMediaFlexContainer}>
            <MttFbIcon iconColour="white" />
            <MttIgIcon iconColour="white" />
            <MttTwitterIcon iconColour="white" />
        </div>
  )
}