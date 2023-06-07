import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../../Data/Data.json";
import Gallery from "../../components/Gallery";
import CollapseAccomodation from "../../components/CollapseAccomodation/index";


function Accommodation() {
  const [slide, setImageSlide] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const dataCurrentAccomodation = Data.find((data) => data.id === id);
    if (dataCurrentAccomodation) {
      setImageSlide(dataCurrentAccomodation.pictures);
    } else {
      // Si l'URL correspond à un logement invalide, rediriger vers la page d'erreur
      navigate("/Error");
    }
  }, [id, navigate]);

 
  return (
    <div>
      <Gallery slide={slide} />
      <CollapseAccomodation />
    </div>
  );
}

export default Accommodation;