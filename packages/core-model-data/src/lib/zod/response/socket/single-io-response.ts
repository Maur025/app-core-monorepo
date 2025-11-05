import z, { any } from "zod";
import { BaseIoResponse } from "./base-io-response";

export const SingleIoResponse = BaseIoResponse.extend({
	data: any().optional().nullable(),
});

export type SingleIoResponse<T> = Omit<z.infer<typeof SingleIoResponse>, "data"> & { data?: T };
