// Module
import { Link } from 'react-router-dom'
// Data
import Data from '../../Data/Data.json'


function Card() {
  return (
    <div className='card_container'>
      {Data.map((data) => {
        return (
          <Link className='card_container_link' to={`/Accommodation/${data.id}`} key={data.id}>
            <div className='card_container_image'><img src={data.cover} alt={data.title} /></div>
            <p>{data.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Card;