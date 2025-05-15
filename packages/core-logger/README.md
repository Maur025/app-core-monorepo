# Overview

Utility library to logging in console.

## Installation

Use the following command to install:

### Using pnpm:

```bash
pnpm add @maur025/core-logger
```

### Using npm:

```bash
npm install @maur025/core-logger
```

### Using yarn:

```bash
yarn add @maur025/core-logger
```

## USAGE

Add the next variables in to .env:

```text
LOG_PATH='silly'
LOG_PATH=logs
```

Level can be any value of **_RFC5424_**

```typescript
const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	verbose: 4,
	debug: 5,
	silly: 6,
};
```
