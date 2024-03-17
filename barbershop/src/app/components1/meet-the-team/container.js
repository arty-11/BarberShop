import BarberName from "./barberName"
import Img from "./img"
import SocialMedia from "./socialMedia"

export default function Container({ styles, setImgNumHover, imgNumHover, barberName }) {
  return (
    <div className={styles.container} >
      <div className={imgNumHover ? [styles.imgContainerColour, styles.imgContainer].join(" ") : styles.imgContainer} onMouseOver={() => setImgNumHover(true)} onMouseOut={() => setImgNumHover(false)}>
          <Img styles={styles} />
          <BarberName imgNumHover={imgNumHover} styles={styles} barberName={barberName} />
          <SocialMedia imgNumHover={imgNumHover} styles={styles} />
      </div>
    </div>
  )
}