# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [2.0.2] - 2025-02-24

### Fixed
- Fix carriage returns in group-imports

## [2.0.1] - 2025-02-24

### Fixed
- Build for v.2.

## [2.0.0] - 2025-02-23

### Added
- Added tests.
- Added the `indent` parameter to the `named-imports` rule.
- Added the `includes`, `emptyLinesBeforeGroup`, and `preserveNonImportCode` parameters to the `group-imports` rule.

### Changed
- Renamed `newlineBetweenGroups` to `emptyLinesBetweenGroups` in the `group-imports` rule.

### Fixed
- Fixed various bugs.

### Documentation
- Expanded documentation.

## [1.1.1] - 2025-02-18

### Added
- Added `"type": "module"` to `package.json` to explicitly define the package as an ECMAScript module.

## [1.1.0] - 2025-02-18

### Added
- Added support for both ESM and CommonJS module formats.

## [1.0.1] - 2025-02-16

### Fixed
- Fixed import paths in rule definitions and utility functions.

## [1.0.0] - 2025-02-16

### Added

- Initial release of `eslint-plugin-import-group`.
- Added `group-imports` rule to enforce import grouping based on user-defined patterns.
- Added `named-imports` rule to sort named imports alphabetically and format them correctly.
