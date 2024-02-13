export default function MttName({containerNameHover, styles, barberName }) {
  return (
    <div className={ containerNameHover ? [styles.mttNameFlexContainer, styles.mttFullHeight].join(" ") : styles.mttNameFlexContainer }>
        <div>{barberName}</div>
    </div>
  )
}
