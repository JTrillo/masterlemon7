import * as React from 'react';
import { AppLayout } from 'layouts';
import { useParams } from "react-router-dom";
import { HotelEditContainer } from "pods/hotel-edit";

export const HotelEditScene = () => {
	const { id } = useParams();

	return (
	<AppLayout>
		<HotelEditContainer hotelId={id} />
	</AppLayout>
	);
};