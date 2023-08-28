import { useState, useEffect } from 'react';

import { ImageSlider } from './ChangeImg.styled';

const ChangeImg = ({ nftData = [], initial = 0, step = 1, period = 3000 }) => {
  const [activeImage, setActiveImage] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prevImage => (prevImage + step) % nftData.length);
    }, period);

    return () => {
      clearInterval(interval);
    };
  }, [nftData.length, period, step]);

  return (
    <ImageSlider className="image-slider">
      {nftData.map((item, index) => (
        <div className={`cut-container ${index === activeImage ? 'active' : ''}`} key={index}>
          <picture>
            <source srcSet={item.src2} media="(-webkit-min-device-pixel-ratio: 2)" />
            <img src={item.src} alt={item.name} className={`slider-image ${index === activeImage ? 'active' : ''}`} />
          </picture>
        </div>
      ))}
    </ImageSlider>
  );
};

export default ChangeImg;
