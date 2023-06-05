// Function
import Collapse from '../../components/Collapse';
// Data
import Data from "../../Data/Data.json"
// Modules
import { useParams } from "react-router-dom";

function CollapseAccomodation() {
    

    const idAccomodation = useParams('id').id
    const dataCurrentAccomodation = Data.filter(data => data.id === idAccomodation)


    const description = dataCurrentAccomodation[0].description;
    const equipments = dataCurrentAccomodation[0].equipments;
    return (
        <div className="accomodation-collapse">
                    <div className="accomodation-collapse-item">
                        <Collapse title={'Description'} content={description} />
                    </div>
                    <ul className="accomodation-collapse-item1">
                        <li className='accomodation-li'>
                            <Collapse title={'Équipments'} content={equipments} />
                        </li>
                    </ul>
                </div>
    )
}

export default CollapseAccomodation