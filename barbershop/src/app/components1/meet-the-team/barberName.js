export default function BarberName({imgNumHover, styles, barberName }) {
  return (
    <div className={ imgNumHover ? [styles.nameFlexContainer, styles.fullHeight].join(" ") : styles.nameFlexContainer }>
        <div>{barberName}</div>
    </div>
  )
}