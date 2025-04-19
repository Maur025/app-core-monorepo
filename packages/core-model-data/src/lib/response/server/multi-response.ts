import { BaseData } from "../../data/base-data";
import { BaseResponse } from "./base-response";

export interface MultiResponse<T extends BaseData> extends BaseResponse {
	data?: T[];
}
