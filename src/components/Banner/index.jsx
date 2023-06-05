function Banner({ backgroundImage, text }) {
    return (
      <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p>{text}</p>
      </div>
    );
  }

export default Banner