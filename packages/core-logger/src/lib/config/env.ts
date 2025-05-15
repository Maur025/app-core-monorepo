import path from "node:path";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const { LOG_PATH = "logs", LOG_LEVEL = "info" } = process.env;

export const env = {
	LOG_PATH: path.resolve(process.cwd(), LOG_PATH),
	LOG_LEVEL,
};
