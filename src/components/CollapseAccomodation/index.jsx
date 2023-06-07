// Modules
import { useParams } from "react-router-dom";
// Function
import Collapse from '../../components/Collapse';
import Host from "../../components/Host/index"
import Infos from "../../components/Infos/index"
// Data
import Data from "../../Data/Data.json"


function CollapseAccomodation() {
    const idAccomodation = useParams('id').id
    const dataCurrentAccomodation = Data.filter(data => data.id === idAccomodation)

    if (!dataCurrentAccomodation[0]) {
        return null; // ou un rendu alternatif si nécessaire
    }

    const description = dataCurrentAccomodation[0].description;
    const equipments = dataCurrentAccomodation[0].equipments;

    return (
        <main className="accomodation">
            <div className="accomodation_content">
                <Infos />
                <Host />
            </div>
            <div className="accomodation_collapse">
                <div className="accomodation_collapse_item">
                    <Collapse title={'Description'} content={description} />
                </div>
                <ul className="accomodation_collapse_item_ul">
                    <li className='accomodation_collapse_item_ul_li'>
                        <Collapse title={'Équipments'} content={equipments} />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default CollapseAccomodation;