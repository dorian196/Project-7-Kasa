// Data
import Data from "../../Data/Data.json"
// Modules
import { useParams } from "react-router-dom";
// Assets
import redStar from "../../assets/redStar.png"
import greyStar from "../../assets/greyStar.png"

function Star() {

    const idAccomodation = useParams('id').id
    const dataCurrentAccomodation = Data.filter(data => data.id === idAccomodation)

    const rating = dataCurrentAccomodation[0].rating;
    return (
        <div className="accomodation-star">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1
                                return (
                                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="Etoile" />
                                )
                            })}
                        </div>
    )
}

export default Star