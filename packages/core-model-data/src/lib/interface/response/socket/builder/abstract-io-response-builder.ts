import { BaseIoResponse } from "../base-io-response";
import { ResponseIoSchema } from "../response-io-schema";

export abstract class AbstractIoResponseBuilder<R extends BaseIoResponse> {
	protected response?: R;

	public withResponse(response: R): this {
		this.response = response;

		return this;
	}

	public build(): R {
		if (this.response === undefined || this.response === null) {
			throw new Error("Response must not be null or undefined.");
		}

		ResponseIoSchema.parse(this.response);

		return { ...this.response };
	}
}
