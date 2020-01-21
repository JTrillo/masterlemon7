import * as React from 'react';
import { trackPromise } from "react-promise-tracker";
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from './hotel-collection.vm';
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper';

const useHotelCollection = () => {
	const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([]);

	React.useEffect(() => {
		trackPromise(
			getHotelCollection().then(result => {
				setHotelCollection(mapFromApiCollectionToVmCollection(result))	
			})
		);
	}, []);

	return { hotelCollection };
};

export const HotelCollectionContainer = () => {
	const { hotelCollection } = useHotelCollection();

	return (
		<HotelCollectionComponent hotelCollection={hotelCollection}/>
	);
};