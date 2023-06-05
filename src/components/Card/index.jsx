import { Link } from 'react-router-dom'

import Data from '../../Data/Data.json'


function Card({ id, title, cover }) {
  return (
    <div className='card-container'>
      {Data.map((data) => {
        return (
          <Link className='link-card' to={`/Accommodation/${data.id}`} key={data.id}>
            <div className='image-container'><img src={data.cover} alt={data.title} /></div>
            <p>{data.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Card;