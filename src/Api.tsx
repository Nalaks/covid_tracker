import axios from 'axios';
import { Response } from './interfaces/ApiTypes';

const ApiUrl = 'https://covid19.mathdro.id/api/';

export const getData = async () => {
	try {
		const res: Response = await axios.get(ApiUrl);
		return res;
	} catch (error) {
		console.log(error);
	}
};
