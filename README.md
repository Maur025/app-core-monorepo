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

## PUBLISH VERSIONS (Recomended)

To update version execute:

```bash
npx changeset publish
```

remember add new tag in git, with following command:

```bash
git tag -a v0.0.0 -m 'upgrade to version 0.0.0'
```

push tag with following command:

```bash
git push origin tag
```

or to push all use:

```bash
git push --tags
```

# MANUAL PUBLISH

Navigate to root lib or app to publish, should be logged.
verify `dist` folder existence.
execute following command:

```bash
pnpm build --tag latest
```
