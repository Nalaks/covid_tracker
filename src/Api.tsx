import axios from 'axios';
import { Response, ResponseDaily, ResponseCountries } from './interfaces/ApiTypes';

const ApiUrl = 'https://covid19.mathdro.id/api';

export const getData = async (country: string) => {
	try {
		if (country === 'Global') {
			const res: Response = await axios.get(ApiUrl);
			return res;
		} else {
			const res: Response = await axios.get(`${ApiUrl}/countries/${country}`);
			return res;
		}
	} catch (error) {
		console.log(error);
	}
};

export const getDailyData = async (country: string) => {
	try {
		const res: ResponseDaily = await axios.get(`${ApiUrl}/daily`);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getCountries = async () => {
	try {
		const res: ResponseCountries = await axios.get(`${ApiUrl}/countries`);
		return res;
	} catch (error) {
		console.log(error);
	}
};
