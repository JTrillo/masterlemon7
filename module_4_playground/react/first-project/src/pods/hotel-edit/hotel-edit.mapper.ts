import { basePicturesUrl } from 'core';
import * as apiModel from './hotel-edit.api';
import * as viewModel from './hotel-edit.vm';

export const mapFromApiToVm = (hotel: apiModel.HotelEntityApi): viewModel.HotelEntityVm => ({
  id: hotel.id,
  picture: `${basePicturesUrl}${hotel.thumbNailUrl}`,
  name: hotel.name,
  description: hotel.shortDescription,
  rating: hotel.hotelRating,
  city: hotel.city,
});