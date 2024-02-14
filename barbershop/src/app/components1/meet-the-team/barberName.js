export default function BarberName({containerNameHover, styles, barberName }) {
  return (
    <div className={ containerNameHover ? [styles.nameFlexContainer, styles.fullHeight].join(" ") : styles.nameFlexContainer }>
        <div>{barberName}</div>
    </div>
  )
}