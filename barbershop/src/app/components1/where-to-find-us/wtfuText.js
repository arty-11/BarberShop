import WtfuIcon from "./wtfuIcon"

export default function WtfuText({ styles }) {

  const barbershopInfo = {
    name: "Hair Lounge Unisex Salon",
    streetName: "441 Porters Avenue,",
    town: "Dagenham",
    postcode: "RM9 4ND"
  }

  return (
    <>
      <div className={styles.iconContainer}>
        <WtfuIcon iconColour="black" />
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