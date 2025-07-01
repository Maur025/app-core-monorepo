import { BaseData } from "../../data/base-data";
import { BaseResponse } from "./base-response";
import { PaginateResponse } from "./paginate-response";

export interface MultiResponse<T extends BaseData> extends BaseResponse {
	data?: T[];
	paginate?: PaginateResponse;
}
