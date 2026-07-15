# Career Ops Documentation

Documentation and scripts for Career Operations at YSH.

## Purpose

This repository contains:

1. **Standard Operating Procedures (SOPs)** for common Career Ops tasks.
2. **Templates** for generating standardized documentation.
3. **Automation scripts** to assist with repetitive tasks (e.g., translations).

## Repository Structure

- `docs/`: Contains the SOPs and templates.
- `scripts/`: Contains automation scripts.

## Usage

### Translating Documents

The `scripts/` directory contains `translate_doc.py`, a script to automate the translation of Markdown documents using DeepLX.

**Prerequisites:**

- Python 3.x
- `requests` library (`pip install requests`)

**Basic Usage:**

```bash
python scripts/translate_doc.py -f path/to/input.md -o path/to/output.md
```

**Flags:**

- `-e <engine>`: Specify translation engine (default: `deepl`, options: `deepl`, `google`, `deeplx`).
- `--translate-content-only`: Only translate content blocks, skip code/yaml blocks.
- `--validate`: Run validation checks on the translated document.
