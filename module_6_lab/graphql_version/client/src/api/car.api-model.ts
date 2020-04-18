export interface CarEntityApi {
  car_id: number;
  name: string;
  brand: string;
  year_release: string;
}

export const createEmptyCar = (car_id: number) => ({
  car_id,
  name: "",
  brand: "",
  year_release: "",
});

export interface CarCreateApi {
  name: string;
  brand: string;
  year_release: string;
}