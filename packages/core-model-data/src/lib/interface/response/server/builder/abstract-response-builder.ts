import { Response } from "express";
import { BaseResponse } from "../base-response";

export abstract class AbstractResponseBuilder<R extends BaseResponse> {
	protected response?: R;
	private _res?: Response;

	public res(res: Response): this {
		this._res = res;

		return this;
	}

	public withResponse(response: R): this {
		this.response = response;

		return this;
	}

	public send(): this {
		if (this._res === undefined || this._res === null) {
			throw new Error("Res of express must not be null or undefined, please assign value");
		}

		this.validateResponse();

		this._res.status(this.response!.code ?? 500).json({ ...this.response! });

		return this;
	}

	public build(): R {
		this.validateResponse();

		return { ...this.response! };
	}

	private readonly validateResponse = (): void => {
		if (this.response === undefined || this.response === null) {
			throw new Error("Response must not be null or undefined.");
		}
	};
}
