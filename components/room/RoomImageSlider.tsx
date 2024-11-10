import { IImages } from '@/backend/models/room';
import Image from 'next/image';
import React from 'react';
import { Carousel } from '@material-tailwind/react';

interface Props {
  images: IImages[];
}

const RoomImageSlider = ({ images }: Props) => {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
      className='rounded-xl'
      navigation={({ setActiveIndex, activeIndex, length }: any) => (
        <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      placeholder=''
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      {images?.length > 0 ? (
        images.map((image) => (
          <div key={image?.public_id} className='relative w-full h-[460px]'>
            <Image
              src={image.url}
              alt={image.url}
              layout='fill'
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
        ))
      ) : (
        <div className='relative w-full h-[460px]'>
          <Image
            src='/images/default_room_image.jpg'
            alt='default room'
            layout='fill'
            objectFit='cover'
            className='rounded-xl'
          />
        </div>
      )}
    </Carousel> as unknown as JSX.Element // 使用斷言來忽略 TypeScript 錯誤
  );
};

export default RoomImageSlider;