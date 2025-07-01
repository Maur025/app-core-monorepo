import z, { any, array } from "zod/v4";
import { BaseIoResponse } from "./base-io-response";

export const MultiIoResponse = BaseIoResponse.extend({
	data: array(any()).optional().nullable(),
});

export type MultiIoResponse<T> = Omit<z.infer<typeof MultiIoResponse>, "data"> & {
	data?: T[];
};
