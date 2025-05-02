import { BaseIoResponse } from "./base-io-response";

export interface SingleIoResponse<T> extends BaseIoResponse {
	data?: T;
}
