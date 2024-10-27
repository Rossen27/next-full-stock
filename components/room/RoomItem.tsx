'use client';

import { Card, CardHeader, CardFooter, Image, Button } from '@nextui-org/react';
import StarRatings from 'react-star-ratings';

export default function RoomItem() {
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
          <p className='text-black text-tiny'>TWD $ 1,200 x 1 晚</p>
          <div className='flex items-center space-x-2'>
            <StarRatings
              rating={4} // 評分
              starRatedColor='yellow' // 評分過的星星顏色
              starHoverColor='yellow' // 滑鼠移入時的星星顏色
              numberOfStars={5}
              name='rating'
              starDimension='18px' // 星星大小
              starSpacing='1px' // 星星間距
              changeRating={() => {}}
            /><p className='text-gray-800 text-tiny'>( 50 則評論 )</p>
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
