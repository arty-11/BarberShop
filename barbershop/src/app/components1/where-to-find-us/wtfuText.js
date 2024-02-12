import WtfuIcon from "./wtfuIcon.js";

export default function WtfuText({ styles }) {

  const barbershopInfo = {
    name: "Hair Lounge Unisex Salon",
    streetName: "441 Porters Avenue,",
    town: "Dagenham",
    postcode: "RM9 4ND"
  }

  return (
    <>
      <div className={styles.wtfuIconContainer}>
        <WtfuIcon iconColour="black" />
      </div>
      <div className={styles.wtfuTextContainer}>
        <p>{barbershopInfo.name}</p>
        <p>{barbershopInfo.streetName}</p>
        <p>{barbershopInfo.town}</p>
        <p>{barbershopInfo.postcode}</p>
      </div>
    </>
  )
}
