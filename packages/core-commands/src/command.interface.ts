export default interface ICommand<I, R> {
	withRequest(request: I): ICommand<I, R>;

	execute(): R;
}
