import { IRoom } from "@/backend/models/room";
import React from "react";
import { FaCheck, FaTimes, FaUsers, FaBed } from "react-icons/fa";

interface Props {
  room: IRoom;
}

const RoomFeatures = ({ room }: Props) => {
  return (
    <div className="features mt-5">
      <h3 className="mb-4 text-xl font-semibold">房間特色：</h3>
      <div className="room-feature flex items-center mb-2">
        <FaUsers className="text-gray-500 mr-2" aria-hidden="true" />
        <p className="text-gray-700">{room?.guestCapacity} 位房客</p>
      </div>
      <div className="room-feature flex items-center mb-2">
        <FaBed className="text-gray-500 mr-2" aria-hidden="true" />
        <p className="text-gray-700">{room?.numOfBeds} 張床</p>
      </div>
      <div className="room-feature flex items-center mb-2">
        {room?.inBreakfast ? (
          <FaCheck className="text-green-500 mr-2" aria-hidden="true" />
        ) : (
          <FaTimes className="text-red-500 mr-2" aria-hidden="true" />
        )}
        <p className="text-gray-700">早餐</p>
      </div>
      <div className="room-feature flex items-center mb-2">
        {room?.isInternet ? (
          <FaCheck className="text-green-500 mr-2" aria-hidden="true" />
        ) : (
          <FaTimes className="text-red-500 mr-2" aria-hidden="true" />
        )}
        <p className="text-gray-700">網路</p>
      </div>
      <div className="room-feature flex items-center mb-2">
        {room?.isAirConditioned ? (
          <FaCheck className="text-green-500 mr-2" aria-hidden="true" />
        ) : (
          <FaTimes className="text-red-500 mr-2" aria-hidden="true" />
        )}
        <p className="text-gray-700">空調</p>
      </div>
      <div className="room-feature flex items-center mb-2">
        {room?.isPetsAllowed ? (
          <FaCheck className="text-green-500 mr-2" aria-hidden="true" />
        ) : (
          <FaTimes className="text-red-500 mr-2" aria-hidden="true" />
        )}
        <p className="text-gray-700">允許攜帶寵物</p>
      </div>
      <div className="room-feature flex items-center mb-2">
        {room?.isRoomCleaning ? (
          <FaCheck className="text-green-500 mr-2" aria-hidden="true" />
        ) : (
          <FaTimes className="text-red-500 mr-2" aria-hidden="true" />
        )}
        <p className="text-gray-700">房間清潔</p>
      </div>
    </div>
  );
};

export default RoomFeatures;