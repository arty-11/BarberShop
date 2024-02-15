import BarberName from "./barberName"
import Img from "./img"
import SocialMedia from "./socialMedia"

export default function Container({ styles, setContainerNameHover, containerNameHover, barberName }) {
  return (
    <div className={styles.container} onMouseOver={() => setContainerNameHover(true)} onMouseOut={() => setContainerNameHover(false)}>
      <div className={styles.imgContainer}>
          <Img styles={styles} />
          <BarberName containerNameHover={containerNameHover} styles={styles} barberName={barberName} />
          <SocialMedia containerNameHover={containerNameHover} styles={styles} />
      </div>
    </div>
  )
}