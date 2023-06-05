// Data
import Data from "../../Data/Data.json"
// Modules
import { useParams } from "react-router-dom";

function Host() {
    const idAccomodation = useParams('id').id
    const dataCurrentAccomodation = Data.filter(data => data.id === idAccomodation)

    const name = dataCurrentAccomodation[0].host.name.split(' ');
    return (
        <div className="accomodation-host">
            <div>
                <div className="accomodation-name">
                    <span>{name[0]}</span>
                    <span>{name[1]}</span>
                </div>
                <img src={dataCurrentAccomodation[0].host.picture} alt="Hote de l'hébergement" />
            </div>    
        </div>
    )
}

export default Host