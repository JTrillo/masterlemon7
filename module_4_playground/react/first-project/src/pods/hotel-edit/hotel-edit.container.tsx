import * as React from 'react';
import { trackPromise } from "react-promise-tracker";
import { HotelEditComponent } from "./hotel-edit.component";
import { HotelEntityVm, createEmptyHotel, HotelFormErrors, createEmptyHotelFormErrors } from './hotel-edit.vm';
import { getHotel, putHotel } from './hotel-edit.api';
import { mapFromApiToVm } from './hotel-edit.mapper';
import { formValidation } from "./hotel-edit.validation";
import { useHistory } from 'react-router-dom';
import { linkRoutes } from "core";

interface Props {
	hotelId: string;
}

const useHotel = (hotelId:string) => {
	const [hotel, setHotel] = React.useState<HotelEntityVm>(createEmptyHotel());

	React.useEffect(()=> {
		trackPromise(
			getHotel(hotelId).then(result => {
				setHotel(mapFromApiToVm(result));
			})
		);
	}, []);

	return { hotel, setHotel };
};

const useErrors = () => {
	const [errors, setErrors] = React.useState<HotelFormErrors>(createEmptyHotelFormErrors());

	return { errors, setErrors };
}

export const HotelEditContainer = (props:Props) => {
	const { hotelId } = props;
	const { hotel, setHotel } = useHotel(hotelId);
  const { errors, setErrors } = useErrors();
  const history = useHistory();

	const handleEdit = (hotelInfo: HotelEntityVm) => {
		formValidation
			.validateForm(hotelInfo)
			.then(response => {
        if(response === null){
          return putHotel(hotel);
        }
      })
      .then(response => {
        if(response.status === 200) history.push(linkRoutes.hotelCollection);
      });
	}

	const handleChange = (value: any, field: string) => {
		setHotel({
			...hotel,
			[field]: value
		});

		formValidation
			.validateField(field, value)
			.then(error => {
				if(error !== null){
					setErrors({
						...errors,
						[field]: error
					})
				}else{
					setErrors({
						...errors,
						[field]: undefined
					})
				}
			});
	}

	return(
		<HotelEditComponent onEdit={handleEdit} onChange={handleChange} hotel={hotel} errors={errors} />
	);
};