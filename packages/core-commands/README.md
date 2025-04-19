# Overview

Utility library to declare and extend Command Pattern, inspired by the java implementation.

## Installation

Use the following command to install:

### Using pnpm:

```bash
pnpm add @maur025/core-commands
```

### Using npm:

```bash
npm install @maur025/core-commands
```

### Using yarn:

```bash
yarn add @maur025/core-commands
```

## Usage

Using thi library is simple. Extend **AbstractCommand** class to create a command. Override the `run` method(required) and optionally `validate` for custom validations.

---

## Example

### Command (example.cmd.ts)

```ts
import { AbstractCommand } from "@maur025/core-commands";

export default class ExampleCmd extends AbstractCommand<Request, void> {
	protected validate(request: Request): void {
		console.log("VALIDATING...");
	}

	protected run(request: Request): void {
		console.log("EXECUTING EXAMPLE...");
	}
}

interface Request {
	paramOne: string;
	paramTwo: number;
	paramN: string;
}
```

Your can assign any value to the input and output. These can be declarated as interfaces, classes, or primitive types.

---

### Usage in your code (example.controller.ts)

```ts
import ExampleCmd from "src/command/example.cmd.ts";

const exampleCmd = new ExampleCmd();

export default class ExampleController {
	processData = (): void => {
		exampleCmd
			.withRequest({
				paramOne: "example",
				paramTwo: 2,
				paramN: "any value",
			})
			.execute();
	};
}
```

## Suggestions

To improve code maintainability and reduce verbosity, consider using a Dependency Injection (DI) container to handle command instantation.

For example:

- This avoids manually using `new ExampleCmd()` in your classes.
- Promote better separation and makes testing easier.
