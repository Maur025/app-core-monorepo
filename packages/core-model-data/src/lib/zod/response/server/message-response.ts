import z, { string } from "zod/v4";
import { BaseResponse } from "./base-response";

export const MessageResponse = BaseResponse.extend({
	detail: string().nonempty().optional(),
});

export type MessageResponse = z.infer<typeof MessageResponse>;
