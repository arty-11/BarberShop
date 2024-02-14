import Icon from "./icon"

export default function Text({ styles }) {

  const addressInfo = {
    name: "Hair Lounge Unisex Salon",
    streetName: "441 Porters Avenue,",
    town: "Dagenham",
    postcode: "RM9 4ND"
  }

  return (
    <>
      <div className={styles.iconContainer}>
        <Icon iconColour="black" />
      </div>
      <div className={styles.textContainer}>
        <p>{addressInfo.name}</p>
        <p>{addressInfo.streetName}</p>
        <p>{addressInfo.town}</p>
        <p>{addressInfo.postcode}</p>
      </div>
    </>
  )
}