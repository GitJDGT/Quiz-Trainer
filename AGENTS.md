# AGENTS.md

## Project Overview

Quiz Trainer - a lightweight web application for practicing multiple-choice questions.

**Status**: MVP Completed (Version 1.0)

**Next Phase**: Release 1.1 - Import/Export Question Banks

## Key Constraints

- **Language**: Code in English, UI in Spanish (PS-001)
- **Naming**: kebab-case for files/folders, descriptive names without abbreviations (PS-002, RS-004)
- **Dependencies**: Minimize external libraries; prefer browser-native APIs (PS-013, PS-014)
- **Architecture**: Strict separation of concerns - UI, Quiz Engine, Question Repository, Session Manager, Result Processor

## Repository Structure

```
/
├── assets/question-banks/<bank>/images/
├── data/<bank>.json
├── docs/
├── specs/
│   ├── releases/              # Release specifications
│   │   └── RELEASE-1.1.md     # Current release
│   ├── 013-product-backlog.md # Product backlog
│   └── ...                    # Original specifications
├── src/
│   ├── css/
│   ├── js/
│   └── components/
├── index.html
├── README.md
└── LICENSE
```

## Critical Rules

1. **Spec Compliance**: All implementations must comply with specs/ documents (DoD-001)
2. **No Debug Artifacts**: No console.log(), temporary code, or debug comments (DoD-009)
3. **Question Bank Independence**: Quiz engine must never depend on a specific question bank (RS-006)
4. **Single Responsibility**: Each module has one primary responsibility (PS-004)
5. **Simplicity First**: Prefer simplest solution that meets requirements (PS-011, PS-018)

## Development Approach

- **Specification-Driven**: Follow incremental roadmap in specs/011-development-roadmap.md (MVP completed)
- **Release-Based**: New features are planned in specs/releases/ folder
- **Product Backlog**: Features are defined in specs/013-product-backlog.md
- **Verification**: Manual verification required before completion (DoD-016)
- **No Premature Optimization**: Optimize only when demonstrated need (PS-012)
- **Future-Proof**: Design for extensibility without over-engineering (PS-020)

## Working with Specs

- All specs are in Spanish in specs/ directory
- Never contradict specification documents (DoD-014)
- If implementation requires spec change, update spec first (DoD-014)
- Each increment must be fully complete before starting next (development roadmap)
- New features are defined in specs/013-product-backlog.md
- Releases are planned in specs/releases/ folder
- Original roadmap (specs/011-development-roadmap.md) is preserved as historical reference

## Code Quality

- Readable, modular, reusable, consistent, maintainable (DoD-006)
- No dead code or unused files (DoD-008)
- Document public functions and main modules (PS-007)
- Handle errors gracefully without unexpected crashes (PS-008)

## Skills

- **prepare-next-increment**: Used for MVP development increments (completed)
- **prepare-next-release**: Used for planning product releases (active)
