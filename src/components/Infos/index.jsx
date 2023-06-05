// Data
import Data from "../../Data/Data.json"
// Modules
import { useParams } from "react-router-dom";


function Infos() {
    const idAccomodation = useParams('id').id
    const dataCurrentAccomodation = Data.filter(data => data.id === idAccomodation)

    return (
        <div className="accomodation-infos">
        <h1>{dataCurrentAccomodation[0].title}</h1>
        <p>{dataCurrentAccomodation[0].location}</p>
        <div>
            {dataCurrentAccomodation[0].tags.map((tag, index) => {
                return (
                    <button key={index}>{tag}</button>
                )
            })}
        </div>
    </div>
    )
}

export default Infos