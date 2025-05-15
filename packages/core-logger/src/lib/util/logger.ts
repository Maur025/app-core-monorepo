import LoggerWinston from "../logger/logger-winston";

const loggerWinston = new LoggerWinston();
const logger = loggerWinston.getLogger();

export const loggerInfo = (message: string): void => {
	logger.info(message);
};

export const loggerWarn = (message: string): void => {
	logger.warn(message);
};

export const loggerError = (message: string, error?: Error): void => {
	logger.error(message, error);
};

export const loggerDebug = (message: string): void => {
	logger.debug(message);
};

export const loggerHttp = (message: string): void => {
	logger.http(message);
};

export const loggerVerbose = (message: string): void => {
	logger.verbose(message);
};

export const loggerSilly = (message: string): void => {
	logger.silly(message);
};
