import Axios, { AxiosResponse } from 'axios';
import { baseApiUrl } from "core";
import { HotelEntityVm } from "./hotel-edit.vm";

export interface HotelEntityApi {
    id: string;
    type: string;
    name: string;
    created: Date;
    modified: Date;
    address1: string,
    airportCode: string;
    amenityMask: number;
    city: string;
    confidenceRating: number;
    countryCode: string;
    deepLink: string;
    highRate: number;
    hotelId: number;
    hotelInDestination: boolean;
    hotelRating: number;
    location: {
      latitude: number;
      longitude: number;
    },
    locationDescription: string;
    lowRate: number;
    metadata: {
      path: string;
    },
    postalCode: number;
    propertyCategory: number;
    proximityDistance: number;
    proximityUnit: string;
    rateCurrencyCode: string;
    shortDescription: string;
    stateProvinceCode: string;
    thumbNailUrl: string;
    tripAdvisorRating: number;
    tripAdvisorRatingUrl: string;  
}

const getHotelUrlBase = `${baseApiUrl}/api/hotels`;

export const getHotel = (hotelId: string): Promise<HotelEntityApi> =>
  Axios.get<HotelEntityApi>(`${getHotelUrlBase}/${hotelId}`).then(({ data }) => data);

export const putHotel = (hotel: HotelEntityVm): Promise<AxiosResponse> =>
  getHotel(hotel.id)
  .then(hotelApi => {
    hotelApi.name = hotel.name;
    //hotelApi.picture = hotel.picture;
    hotelApi.hotelRating = hotel.rating;
    hotelApi.city = hotel.city;
    hotelApi.shortDescription = hotel.description;
    return Axios.put(`${getHotelUrlBase}/${hotel.id}`, hotelApi);
  });