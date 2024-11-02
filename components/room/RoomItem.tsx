'use client';

import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Chip,
} from '@nextui-org/react';
import StarRatings from 'react-star-ratings';
import { IRoom } from '@/backend/models/room';
import Link from 'next/link';

interface Props {
  room: IRoom;
}

export default function RoomItem({ room }: Props) {
  return (
    <Card isFooterBlurred className='w-full h-full shadow-lg'>
      <CardHeader className='absolute z-10 top-1 flex-col items-start'>
        <Chip radius='full' size='sm' variant='shadow' color='danger' className='animate-bounce'>
          熱門
        </Chip>
        <h3 className='mt-2 font-medium text-lg hover:text-purple-600 text-black bg-white/60 px-3 rounded-full'>
          <Link href={`/rooms/${room?._id}`}>{room?.name}</Link>
        </h3>
      </CardHeader>
      <Image
        removeWrapper
        alt={room?.name}
        className='z-0 w-full h-full scale-125 -translate-y-6 object-cover  transition-transform duration-300 hover:scale-105 hover:-translate-y-4'
        src={
          room?.images?.length > 0
            ? room.images[0].url
            : '/images/default_room_image.jpg'
        }
      />
      <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
        <div>
          <p className='text-black text-tiny md:text-tiny whitespace-nowrap'>
            ${room?.pricePerNight} x 1 晚
          </p>
          <div className='flex flex-row items-center space-x-2'>
            <StarRatings
              id={room?._id}
              rating={room?.ratings}
              starRatedColor='yellow'
              starHoverColor='yellow'
              numberOfStars={5}
              name='rating'
              starDimension='18px'
              starSpacing='1px'
            />
            <p className='text-gray-800 text-tiny'>
              ( {room?.numOfReviews} 則評論 )
            </p>
          </div>
        </div>
        <Link href={`/rooms/${room?._id}`}>
          <Button
            className='text-tiny text-black bg-black/20'
            color='default'
            radius='full'
            size='sm'
          >
            立即預訂
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
