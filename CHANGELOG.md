# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-11-27

### Added
- **Project Planning Form**: `FORMULARIO_PROYECTO.md` added to all setups. Defines business problem, solution, target user, data flow, and KPIs before coding.
- **Context Engineering Integration**: Integrated core "Context Engineering" components (PRP templates, Codebase Analyst agent, `/primer` command) into the base setup.
- **Agentic Protocols**: Added "Traffic Light" protocol to `CLAUDE.md` for conditional agentic loop activation.
- **Next.js 16 Support**: Updated `auth-nextjs-template` to support Next.js 16 (Turbopack, Cache Components).

### Changed
- **Documentation Refactor**: Simplified `CLAUDE.md` across all setups (`nextjs`, `python`, `setup`) to remove meta-noise and focus on critical architecture/quality rules.
- **Template Renaming**: Renamed `plantilla-autenticacion` to `auth-nextjs-template` for consistency.
- **PRP Template**: Upgraded to a more robust version with 4 validation levels and "Known Gotchas".

### Fixed
- **Version Hallucination**: Corrected `auth-nextjs-template` package.json to match documentation (Next.js 16).

## [1.0.0] - 2025-10-01

### Added
- Initial release of SaaS Factory.
- Base templates for Next.js and Python.
- Basic agentic loop configuration.
