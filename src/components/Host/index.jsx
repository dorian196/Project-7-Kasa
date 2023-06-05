// Data
import Data from "../../Data/Data.json"
// Module
import { useParams } from "react-router-dom";
// Function
import Star from "../Star/inedex"

function Host() {
    const idAccomodation = useParams('id').id
    const dataCurrentAccomodation = Data.filter(data => data.id === idAccomodation)

    const name = dataCurrentAccomodation[0].host.name.split(' ');
    return (
        <div className="accomodation_host">
            <div>
                <div className="accomodation_host_name">
                    <span>{name[0]}</span>
                    <span>{name[1]}</span>
                </div>
                <img src={dataCurrentAccomodation[0].host.picture} alt="Hote de l'hébergement" />
            </div> 
            < Star />   
        </div>
        
    )
}

export default Host