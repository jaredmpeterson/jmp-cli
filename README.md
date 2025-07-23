# jmp-cli

⚠️ **LEGACY VERSION ARCHIVED** ⚠️

This repository contains the legacy v0.2.3 codebase which is now **archived and no longer maintained**.

## Current Status

- **Legacy Version**: `v0.2.3` (archived 2024)
- **New Version**: Complete TypeScript rewrite in progress → `v1.0.0`
- **Git Tag**: Legacy code preserved at `v0.2.3-legacy`
- **Branch**: Legacy code available on `legacy/v0.2.3` branch

## Migration Notice

🚀 **v1.0.0+ Complete Rewrite**

- Modern TypeScript implementation
- Enhanced security and performance
- Rich interactive CLI experience
- Plugin architecture
- Better error handling and validation

## Legacy Installation (v0.2.3)

If you need the legacy version:

```sh
# Install specific legacy version
npm install -g jmp-cli@0.2.3

# Or use without installing
npx jmp-cli@0.2.3 resume
```

## Legacy Usage (v0.2.3)

```sh
$ jmp resume           # output json resume to terminal
$ jmp resume -c        # colored output via rainbowify
$ jmp slack "message"  # send message via Slack
```

## Development History

This package was originally created as a personal resume CLI tool by Jared M. Peterson. The legacy implementation (2017-2024) served as a proof-of-concept and learning project.

### Legacy Features

- JSON resume display with rainbow colors
- Slack messaging integration
- Simple CLI interface using Commander.js
- Personal branding tool

### Known Legacy Issues

- Outdated dependencies (6+ major versions behind)
- Hardcoded security credentials
- No error handling or input validation
- Limited functionality and extensibility

## License

MIT - See LICENSE file

---

**For the new v1.0.0+ implementation, see the main branch after the rewrite is complete.**
