import  { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const checkValidURL = async (url) => {
      try {
        const response = await fetch(url);
        return response.ok;
      } catch (error) {
        return false;
      }
    };

    const isValidURL = checkValidURL(`/Accommodation/${id}`);
    if (!isValidURL) {
      navigate("*", { replace: true });
    }

    // Reste du code...
  }, [id, navigate]);

  // Reste du contenu du composant Accommodation...
};

export default URL;