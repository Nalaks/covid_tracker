import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { CollectedData } from './interfaces/ApiTypes';
import { CircularProgress } from '@material-ui/core';

//components
import Cards from './components/cards/Cards';
import Charts from './components/charts/Charts';
import Countries from './components/countries/Countries';

// api
import { getData } from './Api';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const App = () => {
	const [mainData, setMainData] = useState<CollectedData | null>(null);

	useEffect(() => {
		getData().then((res: any) =>
			setMainData({
				confirmed: res.data.confirmed.value,
				recovered: res.data.recovered.value,
				deaths: res.data.deaths.value,
				lastUpdate: new Date(res.data.lastUpdate).toDateString(),
			})
		);
	}, []);

	return (
		<Container>
			{mainData !== null ? <Cards mainData={mainData} /> : <CircularProgress />}
			<Countries />
			<Charts />
		</Container>
	);
};

export default App;
