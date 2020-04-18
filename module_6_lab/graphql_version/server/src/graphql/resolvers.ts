import { getCarList, getCar, addCar, editCar } from "../data";

export const resolvers = {
  Query: {
    cars: async () => {
      const cars = await getCarList();
      return cars;
    },
    car: async(parent, args) => {
      const car = await getCar(args.id);
      return car;
    }
  },
  Mutation: {
    addCar: async(parent, args) => {
      await addCar(args.carCreate);
      return true;
    },
    editCar: async(parent, args) => {
      await editCar(args.editCar);
      return true;
    }
  }
}