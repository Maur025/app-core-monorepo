import { BaseIoResponse } from "./base-io-response";

export interface MultiIoResponse<T> extends BaseIoResponse {
	data?: T[];
}
