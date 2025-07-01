import { BaseResponse } from "./base-response";

export interface MessageResponse extends BaseResponse {
	detail?: string;
}
