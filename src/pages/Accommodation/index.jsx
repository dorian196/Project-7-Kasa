// Modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
// Data
import Data from "../../Data/Data.json"
// Functions
import Gallery from "../../components/Gallery"
import CollapseAccomodation from "../../components/CollapseAccomodation/index"

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
            < CollapseAccomodation />
        </div>
    )
}

export default Accommodation