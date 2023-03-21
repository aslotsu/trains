import AuthPopup from "@/Components/AuthPopup";
import {useSelector} from "react-redux";
import Portal from "@/Components/Portal";

const index = ({countries}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const openModal = useSelector(state => state.modal.open)

    return <main>
      <h1 style={{textAlign: "center"}}>Countries received from rest api</h1>
      {
        countries.map(country => {
         return   <div key={country.id}
               style={{backgroundColor: "cornflowerblue", margin: "3vh 10vw", border: "2px solid transparent", borderRadius: "12px", display: "flex", justifyContent: "space-around", alignItems: "center", padding: "40px"}}>
             <span>{country.name}</span>
             <span>{country["population"]}</span>
             {country["continent"] === "Africa"? <span>Wonderful</span>: "Gaga" }
         </div>})
      }
        {openModal && <Portal>
            <AuthPopup />
        </Portal>}
    </main>
}

export default index
export const getStaticProps = async () => {
  const countries = await fetch("https://ujokjjuy.up.railway.app/all")
      .catch(e => console.log(e))
  const data = await countries.json()
  return {
    props : {
      countries: data
    }
  }

}