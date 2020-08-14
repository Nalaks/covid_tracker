// dependencies
import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

// types
import { CollectedData, DailyData, CountryData } from './interfaces/ApiTypes';

// components
import Cards from './components/cards/Cards';
import Charts from './components/charts/Charts';
import Countries from './components/countries/Countries';
import HeaderImage from './components/header-image/HeaderImage';

// api
import { getData, getDailyData, getCountries } from './Api';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const App = () => {
	const [mainData, setMainData] = useState<CollectedData | null>(null);
	const [dailyData, setDailyData] = useState<DailyData[] | null>(null);
	const [countryData, setCountryData] = useState<CountryData[] | null>(null);
	const [singleCountry, setSingleCountry] = useState<string>('Global');

	const changeCountry = (e: React.FormEvent<HTMLSelectElement>) => {
		getData(e.currentTarget.value).then((res: any) =>
			setMainData({
				confirmed: res.data.confirmed.value,
				recovered: res.data.recovered.value,
				deaths: res.data.deaths.value,
				lastUpdate: new Date(res.data.lastUpdate).toDateString(),
			})
		);
		setSingleCountry(e.currentTarget.value);
	};

	useEffect(() => {
		getData('Global').then((res: any) =>
			setMainData({
				confirmed: res.data.confirmed.value,
				recovered: res.data.recovered.value,
				deaths: res.data.deaths.value,
				lastUpdate: new Date(res.data.lastUpdate).toDateString(),
			})
		);
		getDailyData('Global').then((res: any) => setDailyData(res.data));
		getCountries().then((res: any) => setCountryData(res.data.countries));
	}, []);

	return (
		<Container>
			{mainData !== null && countryData !== null && dailyData !== null ? (
				<Fragment>
					<HeaderImage />
					<Cards mainData={mainData} />
					<Countries countryData={countryData} changeCountry={changeCountry} />
					<Charts dailyData={dailyData} mainData={mainData} country={singleCountry} />
				</Fragment>
			) : (
				<CircularProgress size={100} />
			)}
		</Container>
	);
};

export default App;
