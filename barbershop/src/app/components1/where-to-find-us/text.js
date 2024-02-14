import Icon from "./icon"

export default function Text({ styles }) {

  const barbershopInfo = {
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
        <p>{barbershopInfo.name}</p>
        <p>{barbershopInfo.streetName}</p>
        <p>{barbershopInfo.town}</p>
        <p>{barbershopInfo.postcode}</p>
      </div>
    </>
  )
}