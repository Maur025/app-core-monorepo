import z, { any, record, string } from "zod";
import { BaseResponse } from "./base-response";
import { BaseData } from "../../data/base-data";

export const SingleResponse = BaseResponse.extend({
	data: record(string(), any()).optional(),
});

export type SingleResponse<T extends BaseData> = Omit<z.infer<typeof SingleResponse>, "data"> & {
	data?: T;
};
