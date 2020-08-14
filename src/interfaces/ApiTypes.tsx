type DataCell = { value: number; detail: string };

type DataCellDaily = { total: number; china: number; outsideChina: number };

export interface ResponseData {
	confirmed: DataCell;
	recovered: DataCell;
	deaths: DataCell;
	lastUpdate: string;
}

export interface DailyData {
	confirmed: DataCellDaily;
	deaths: DataCellDaily;
	reportDate: string;
}

export interface CountryData {
	name: string;
}

export interface Response {
	data: ResponseData;
}

export interface ResponseDaily {
	data: DailyData[];
}

export interface ResponseCountries {
	data: Countries;
}

export interface ResponseCountry {
	data: ResponseData;
}

type Countries = { countries: CountryData[] };

export interface CollectedData {
	confirmed: number;
	recovered: number;
	deaths: number;
	lastUpdate: string;
}

export interface CardProps {
	mainData: CollectedData;
}

export interface ChartProps {
	dailyData: DailyData[];
	mainData: CollectedData;
	country: string;
}

export interface CountryProps {
	countryData: CountryData[];
	changeCountry: (e: React.FormEvent<HTMLSelectElement>) => void;
}
