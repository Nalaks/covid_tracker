type DataCell = { value: number; detail: string };

export interface ResponseData {
	confirmed: DataCell;
	recovered: DataCell;
	deaths: DataCell;
	lastUpdate: string;
}

export interface Response {
	data: ResponseData;
}

export interface CollectedData {
	confirmed: number;
	recovered: number;
	deaths: number;
	lastUpdate: string;
}

export interface CardProps {
	mainData: CollectedData;
}
