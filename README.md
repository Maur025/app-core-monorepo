# PACKAGE MANAGER

This project currently uses **pnpm** as its package manager.

Use the following command to install dependencies:

```bash
pnpm install
```

# BUILDING

To build the project, execute the following command:

```bash
pnpm build
```

# RUN LINTER

To run linter, execute the following command:

```bash
pnpm lint
```

# RUN VERSION MANAGER

## CREATE CHANGE LOG

To run new changelog execute:

```bash
npx changeset
```

## UPDATE VERSIONS

To update version execute:

```bash
npx changeset version
```

# MANUAL PUBLISH

Navigate to root lib or app to publish, should be logged.
verify `dist` folder existence.
execute following command:

```bash
pnpm build --tag latest
```
