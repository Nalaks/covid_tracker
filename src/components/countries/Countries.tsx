import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import styled from 'styled-components';
import { CountryProps } from '../../interfaces/ApiTypes';

const ControlStyle = styled(FormControl)`
	margin-bottom: 50px !important;
	width: 25%;
	@media (max-device-width: 770px) {
		width: 50%;
	}
`;

const Countries: React.FC<CountryProps> = ({ countryData, changeCountry }) => {
	return (
		<ControlStyle>
			<NativeSelect defaultValue='' onChange={changeCountry}>
				<option value='Global'>Global</option>
				{countryData.map((country) => (
					<option key={country.name} value={country.name}>
						{country.name}
					</option>
				))}
			</NativeSelect>
		</ControlStyle>
	);
};

export default Countries;
