import React, { useState } from 'react';
import arrow from '../../assets/arrow.png';

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  const scrollContent = () => {
    setOpen(!open);
  };

  return (
    <div className='collapse'>
      <button onClick={scrollContent}>
        <div className="title">{title}</div>
        <img
          className={open ? 'arrow arrow_up' : 'arrow arrow_down'}
          src={arrow}
          alt='Affiche le contenu correspondant'
        />
      </button>
      {open && (
        <div className={open ? 'visible-content open' : 'visible-content'}>
          {Array.isArray(content) ? (
            content.map((item, index) => <div className="content" key={index}>{item}</div>)
          ) : (
            <div className="contents">{content}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;