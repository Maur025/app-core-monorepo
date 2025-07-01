import { BaseData } from "../../data/base-data";

export interface ApiResponse<T extends BaseData> {
	code?: number;
	success?: string;
	message?: string;
	data?: T | T[];
	content?: T | T[];
}
