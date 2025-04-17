import ICommand from "../interface/command.interface";

export default abstract class AbstractCommand<I, R> implements ICommand<I, R> {
	private i?: I;

	withRequest(request: I): ICommand<I, R> {
		this.i = request;

		return this;
	}

	execute(): R {
		this.validate(this.i);

		return this.run(this.i);
	}

	protected validate(request?: I): void {
		// ADD CUSTOM VALIDATION
	}

	protected abstract run(request?: I): R;
}
