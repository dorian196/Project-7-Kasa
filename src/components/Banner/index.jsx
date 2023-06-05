function Banner({ backgroundImage, text }) {
    return (
      <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p className='text-banner'>{text}</p>
      </div>
    );
  }

export default Banner