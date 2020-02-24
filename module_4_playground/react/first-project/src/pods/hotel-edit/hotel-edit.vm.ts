export interface HotelEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  rating: number;
  city: string;
}

export const createEmptyHotel = (): HotelEntityVm => ({
  id: "",
  picture: "",
  name: "",
  description: "",
  rating: 0,
  city: ""
});

export interface HotelFormErrors {
  name: string;
  picture: string;
  rating: string;
  city: string;
  description: string;
}

export const createEmptyHotelFormErrors = (): HotelFormErrors => ({
  name: undefined,
  picture: undefined,
  rating: undefined,
  city: undefined,
  description: undefined
});
