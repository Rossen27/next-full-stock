'use client';
import StarRatings from 'react-star-ratings';
import { IRoom } from '@/backend/models/room';
import React, { useEffect, useState } from 'react';
import RoomImageSlider from './RoomImageSlider';
import RoomFeatures from './RoomFeatures';
import BookingDatePicker from './BookingDatePicker';
import NewReview from '../review/NewReview';
import ListReviews from '../review/ListReviews';

interface Props {
  data: {
    room: IRoom;
  };
}

export default function RoomDetails({ data }: Props) {
  const room = data.room;
  const [uniqueId, setUniqueId] = useState('');

  useEffect(() => {
    if (room._id) {
      setUniqueId(`starGrad-${room._id}`);
    }
  }, [room._id]);

  return (
    <div className='mx-20 p-5'>
      <h2 className='mt-10 text-2xl font-bold'>{room.name}</h2>
      <p className='text-gray-700'>{room.address}</p>

      <div className='mt-4 flex items-center'>
        <StarRatings
          id={uniqueId}
          rating={room?.ratings}
          starRatedColor='yellow'
          starHoverColor='yellow'
          numberOfStars={5}
          name='rating'
          starDimension='18px'
          starSpacing='1px'
        />
        <span className='ml-2 text-gray-600'>
          ({room?.numOfReviews} 則評論)
        </span>
      </div>

      <div className='mt-6'>
        <RoomImageSlider images={room?.images} />
      </div>

      <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          <h3 className='text-xl font-semibold'>住宿介紹</h3>
          <p className='mt-2 text-gray-700'>{room?.description}</p>

          <div className='mt-4'>
            <RoomFeatures room={room} />
          </div>
        </div>

        <div>
          <BookingDatePicker room={room} />
          {/* TODO: Add Room Map */}
        </div>
      </div>

      <div className='mt-10'>
        <NewReview />
      </div>

      <div className='mt-6'>
        <ListReviews />
      </div>
    </div>
  );
}
