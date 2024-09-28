import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation {
  type: string;
  coordinates: number[];
  formattedAddress: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

export interface IReviews extends Document {
  user: mongoose.Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

export interface IImages extends Document {
  public_id: string;
  url: string;
}

export interface IRoom extends Document {
  name: string;
  description: string;
  pricePerNight: number;
  address: string;
  location: ILocation;
  guestCapacity: number;
  numOfBeds: number;
  isInternet: boolean;
  inBreakfast: boolean;
  isAirConditioned: boolean;
  isPetsAllowed: boolean;
  isRoomCleaning: boolean;
  isFreeParking: boolean;
  ratings: number;
  numOfReviews: number;
  images: IImages[];
  category: string;
  reviews: IReviews[];
  user: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const roomSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, '請輸入房間名稱'],
    trim: true, // 去除前後空白
    maxLength: [200, '房間名稱最多100字元'],
  },
  description: {
    type: String,
    required: [true, '請輸入房間描述'],
  },
  pricePerNight: {
    type: Number,
    required: [true, '請輸入每晚房間價格'],
    default: 0.0,
  },
  address: {
    type: String,
    required: [true, '請輸入房間地址'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'], // enum:表示這個位置的這個型別欄位只能是 Point ，不能是其他的，所以基本上當座標產生時，就只能是 Point 了
    },
    // 這裡的座標是經緯度，所以是 Number 類型，並且是一個陣列，第一個是經度，第二個是緯度
    coordinates: {
      type: [Number],
      index: '2dsphere', // 這個 index: '2dsphere' 是為了讓座標可以被搜尋到，這樣才能透過座標搜尋附近的房間，在mongoose想要使用地理空間索引，必須要設定 index: '2dsphere'
    },
    formattedAddress: String, // 這個是透過座標轉換成的地址
    city: String, // 這個是透過座標轉換成的城市
    state: String, // 這個是透過座標轉換成的州
    zipcode: String, // 這個是透過座標轉換成的郵遞區號
    country: String, // 這個是透過座標轉換成的國家
  },
  guestCapacity: {
    type: Number,
    required: [true, '請輸入房間最大人數'],
  },
  numOfBeds: {
    type: Number,
    required: [true, '請輸入床數量'],
  },
  // 這個是房間是否有網路
  isInternet: {
    type: Boolean,
    default: false,
  },
  // 這個是房間是否有早餐
  inBreakfast: {
    type: Boolean,
    default: false,
  },
  // 這個是房間是否有空調
  isAirConditioned: {
    type: Boolean,
    default: false,
  },
  // 這個是房間是否可以帶寵物
  isPetsAllowed: {
    type: Boolean,
    default: false,
  },
  // 這個房間是否有清潔服務
  isRoomCleaning: {
    type: Boolean,
    default: false,
  },
  // 這個是房間是否有停車位
  isFreeParking: {
    type: Boolean,
    default: false,
  },
  // 評分
  ratings: {
    type: Number,
    default: 0,
  },
  // 評分數量
  numOfReviews: {
    type: Number,
    default: 0,
  },
  // 房間圖片
  images: [
    {
      // 這個是圖片的 public_id 和 url ，這個是透過 cloudinary 上傳圖片後回傳的資料
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  // 房間類型
  category: {
    type: String,
    required: [true, '請選擇房間類型'],
    enum: {
      values: ['總統套房', '單人房', '雙人房'],
      message: '請選擇正確的房間類型',
    },
  },
  // 房間評價
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  // 房間擁有者
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // 如果要測試，可以先設定為 false
  },
  // 房間建立時間
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // 房間更新時間
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Room ||
  mongoose.model<IRoom>('Room', roomSchema);
