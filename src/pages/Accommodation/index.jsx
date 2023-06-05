// Modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
// Data
import Data from "../../Data/Data.json"
// Function
import Gallery from "../../components/Gallery"
import CollapseAccomodation from "../../components/CollapseAccomodation/index"
import Star from "../../components/Star/inedex"
import Host from "../../components/Host/index"
import Infos from "../../components/Infos/index"



function Accommodation() {
   
    const [slide, setImageSlide] = useState([])
    
    const idAccomodation = useParams('id').id

    useEffect(() =>{
        const dataCurrentAccomodation = Data.filter(data => data.id === idAccomodation)
        setImageSlide(dataCurrentAccomodation[0].pictures)
    }, [idAccomodation])

 


    return (
        <div>
            <Gallery slide={slide}/>
            <main className="accomodation">
                <div className="accomodation-content">
                    < Infos />
                    <div className="accomodation-host">
                        < Host />
                        < Star />
                    </div> 
                </div>
                < CollapseAccomodation />
            </main>
        </div>
    )

}

export default Accommodation