import type { ICommand } from "../interface/command.interface";

export abstract class AbstractCommand<I, R> implements ICommand<I, R> {
	private i!: I;

	public withRequest(request: I): ICommand<I, R> {
		this.i = request;

		return this;
	}

	public execute(): R {
		if (this.i === undefined || this.i === null) {
			throw new Error(`Request must not be undefined or null`);
		}

		this.validate(this.i);

		return this.run(this.i);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected validate(request: I): void {
		// ADD CUSTOM VALIDATION
	}

	protected abstract run(request: I): R;
}
