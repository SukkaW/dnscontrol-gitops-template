# DNS

Using StackOverflow's [dnscontrol](https://github.com/StackExchange/dnscontrol) to manage DNS records as code.

## Installation

**Install DNSControl via Homebrew**

```bash
brew install dnscontrol
dnscontrol [command]
```

**Use DNSControl through Docker**

```bash
docker run --rm -it -v "$(pwd):/dns" ghcr.io/stackexchange/dnscontrol [command]
```

**Install TypeScript and ESLint**

```bash
pnpm install
pnpm run lint
```

## Update TypeScript types

This needs to be done manually everytime the `dnscontrol` is updated.

```bash
dnscontrol write-types
```

## Workflow

- Create a new git branch for your proposed changes.
- Make changes to `dnsconfig.js`.
- Run `dnscontrol check` locally to validate/lint your changes.
- Now you can push your branch and create a pull request.
- Once your pull request is created, the GitHub Actions will run `dnscontrol preview` to check the diffs and post the results in the pull request comments.
- After the pull request is reviewed, approved, and merged to the main branch, the GitHub Actions will run `dnscontrol push` to apply the changes to the DNS provider. If changes are applied successfully, the GitHub Actions will post a comment in the GitHub commit with the results.
