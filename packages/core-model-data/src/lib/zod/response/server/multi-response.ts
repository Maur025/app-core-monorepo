import z, { any, array, record, string } from "zod/v4";
import { BaseResponse } from "./base-response";
import { PaginateResponse } from "./paginate-response";
import { BaseData } from "../../data/base-data";

export const MultiResponse = BaseResponse.extend({
	data: array(record(string(), any())).optional(),
	paginate: PaginateResponse.optional(),
});

export type MultiResponse<T extends BaseData> = Omit<z.infer<typeof MultiResponse>, "data"> & {
	data?: T[];
};
