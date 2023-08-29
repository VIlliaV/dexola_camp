import { useState, useEffect } from 'react';
import { media } from '@/styles/media';

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
            <source srcSet={`${item.src.desk} 1x, ${item.src.desk2x} 2x`} media={media.desktop} />
            <source srcSet={`${item.src.tab} 1x, ${item.src.desk} 2x`} media={media.tablet} />
            <source srcSet={`${item.src.mob} 1x, ${item.src.tab} 2x`} media={media.mobile} />

            <img
              src={item.src.jpg}
              alt={item.name}
              className={`slider-image ${index === activeImage ? 'active' : ''}`}
            />
          </picture>
        </div>
      ))}
    </ImageSlider>
  );
};

export default ChangeImg;
