import React from 'react';
import { CardProps } from '../../interfaces/ApiTypes';
import styled from 'styled-components';
import { Card, Grid, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';

const CardContainer = styled.div`
	margin: 50px 0;
`;

const Cards: React.FC<CardProps> = ({ mainData: { confirmed, deaths, recovered, lastUpdate } }) => {
	return (
		<CardContainer>
			<Grid container spacing={3} justify='center'>
				<Grid
					item
					component={Card}
					xs={9}
					md={3}
					style={{ margin: '5% 2%', borderBottom: '10px solid rgba(0, 0, 255, 0.5)' }}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Infected
						</Typography>
						<Typography variant='h5'>
							<CountUp start={0} end={confirmed} duration={2.5} separator=',' />
						</Typography>
						<Typography color='textSecondary'>{lastUpdate}</Typography>
						<Typography variant='body2'>Confirmed Covid-19 Cases</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={9}
					md={3}
					style={{ margin: '5% 2%', borderBottom: '10px solid rgba(0, 255, 0, 0.5)' }}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Recovered
						</Typography>
						<Typography variant='h5'>
							<CountUp start={0} end={recovered} duration={2.5} separator=',' />
						</Typography>
						<Typography color='textSecondary'>{lastUpdate}</Typography>
						<Typography variant='body2'>Total Recovered From Covid-19</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={9}
					md={3}
					style={{ margin: '5% 2%', borderBottom: '10px solid rgba(255, 0, 0, 0.5)' }}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Deaths
						</Typography>
						<Typography variant='h5'>
							<CountUp start={0} end={deaths} duration={2.5} separator=',' />
						</Typography>
						<Typography color='textSecondary'>{lastUpdate}</Typography>
						<Typography variant='body2'>Total Deaths From Covid-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</CardContainer>
	);
};

export default Cards;
