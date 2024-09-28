import { FC, useState } from 'react';
import {
  MdOutlineArrowBackIos as ArrowBack,
  MdOutlineArrowForwardIos as ArrowForward,
} from 'react-icons/md';

interface Props {
  images: string[];
  title: string;
}

const ImageSlider: FC<Props> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex items-center justify-center relative'>
        <img
          src={images[currentImageIndex]}
          alt={title}
          className='w-full h-[480px] object-contain bg-light bg-opacity-75'
        />
        <button
          onClick={prevImage}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-dark opacity-50 hover:opacity-100'
        >
          <ArrowBack />
        </button>
        <button
          onClick={nextImage}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-dark opacity-50 hover:opacity-100'
        >
          <ArrowForward />
        </button>
      </div>
      <div className='flex gap-2 justify-start'>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-24 h-24 object-contain cursor-pointer ${
              idx === currentImageIndex ? 'bg-light' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
