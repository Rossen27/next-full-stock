'use client';


import { useState, useEffect } from 'react';
import { Card, CardHeader, CardFooter, Image, Button } from '@nextui-org/react';
import StarRatings from 'react-star-ratings';
import { v4 as uuidv4 } from 'uuid';

interface RoomItemProps {
  id: string;
}

export default function RoomItem({ id }: RoomItemProps) {
  const [gradientId, setGradientId] = useState<string>('');

  useEffect(() => {
    setGradientId(`starRating-${uuidv4()}`);
  }, []);
  
  return (
    <Card isFooterBlurred className='w-full h-[300px] shadow-lg'>
      <CardHeader className='absolute z-10 top-1 flex-col items-start'>
        <p className='text-tiny text-white/60 uppercase font-bold'>New</p>
        <h3 className='text-black font-medium text-2xl hover:text-purple-600'>
          Room Name
        </h3>
      </CardHeader>
      <Image
        removeWrapper
        alt='Card example background'
        className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
        src='https://nextui.org/images/card-example-6.jpeg'
      />
      <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
        <div>
          <p className='text-black text-tiny md:text-tiny whitespace-nowrap'>TWD $ 1,200 x 1 晚</p>
          <div className='flex flex-row items-center space-x-2'>
            {gradientId && ( // 確保 ID 已經在客戶端生成後再渲染
              <StarRatings
                id={gradientId}
                rating={4}
                starRatedColor='yellow'
                starHoverColor='yellow'
                numberOfStars={5}
                name='rating'
                starDimension='18px'
                starSpacing='1px'
                changeRating={() => {}}
              />
            )}
            <p className='text-gray-800 text-tiny'>( 50 則評論 )</p>
          </div>
        </div>
        <Button
          className='text-tiny text-black bg-black/20'
          color='default'
          radius='full'
          size='sm'
        >
          立即預訂
        </Button>
      </CardFooter>
    </Card>
  );
}
