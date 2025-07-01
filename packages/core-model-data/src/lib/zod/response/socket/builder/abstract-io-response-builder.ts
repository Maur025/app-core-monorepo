import { BaseIoResponse } from "../base-io-response";

export abstract class AbstractIoResponseBuilder<R extends BaseIoResponse> {
	protected response?: R;

	public withResponse(response: R): this {
		response = response;

		return this;
	}

	public build(): R {
		if (this.response === undefined || this.response === null) {
			throw new Error("Response must not be null or undefined.");
		}

		BaseIoResponse.parse(this.response);

		return { ...this.response };
	}
}
