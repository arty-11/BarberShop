export default function MttName({containerNameHover, styles, barberName }) {
  return (
    <div className={ containerNameHover ? [styles.nameFlexContainer, styles.fullHeight].join(" ") : styles.nameFlexContainer }>
        <div>{barberName}</div>
    </div>
  )
}