import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { ChartProps } from '../../interfaces/ApiTypes';
import styled from 'styled-components';

const ChartContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 80%;
	@media (max-device-width: 770px) {
		width: 100%;
	}
`;

const Charts: React.FC<ChartProps> = ({ dailyData, mainData: { confirmed, recovered, deaths }, country }) => {
	return (
		<ChartContainer>
			{country === 'Global' ? (
				<Line
					data={{
						labels: dailyData.map((data) => data.reportDate),
						datasets: [
							{
								data: dailyData.map((data) => data.confirmed.total),
								label: 'Infected',
								borderColor: '#3333ff',
								fill: true,
							},
							{
								data: dailyData.map((data) => data.deaths.total),
								label: 'Deaths',
								borderColor: 'rgba(255, 0, 0, 0.5)',
								fill: true,
							},
						],
					}}
				/>
			) : (
				<Bar
					data={{
						labels: ['Infected', 'Recovered', 'Deaths'],
						datasets: [
							{
								label: 'People',
								backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
								data: [confirmed, recovered, deaths],
							},
						],
					}}
					options={{
						legend: { display: false },
						title: { display: true, text: `Current situation in ${country}` },
					}}
				/>
			)}
		</ChartContainer>
	);
};

export default Charts;
