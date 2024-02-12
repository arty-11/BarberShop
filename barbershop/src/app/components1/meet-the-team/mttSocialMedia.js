import MttIgIcon from "./mttIgIcon.js";
import MttFbIcon from "./mttFbIcon.js";
import MttTwitterIcon from "./mttTwitterIcon.js";

export default function MttSocialMedia({ styles }) {
  return (
    <div className={styles.mttSocialMediaFlexContainer}>
      <MttFbIcon iconColour="white" />
      <MttIgIcon iconColour="white" />
      <MttTwitterIcon iconColour="white" />
    </div>
  )
}
