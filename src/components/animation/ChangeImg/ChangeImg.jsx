import { useState, useEffect } from 'react';
import { ImageSlider } from './ChangeImg.styled';
import img from '../../../images/NFTs/2.webp';
import img2 from '../../../images/NFTs/3.webp';
import img3 from '../../../images/NFTs/4.webp';

const ChangeImg = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [`${img}`, `${img2}`, `${img3}`];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prevImage => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <ImageSlider>
      {images.map((image, index) => (
        <img key={index} src={image} alt="Image" className={`slider-image ${index === activeImage ? 'active' : ''}`} />
      ))}
    </ImageSlider>
  );
};

export default ChangeImg;
