---
title: "Common Google Dorking Commands for OSINT and Security Research"
date: 2026-03-13
tags: [osint, cybersecurity, google-dorking, reconnaissance]
description: A quick reference guide to common Google dorking operators used in OSINT and cybersecurity reconnaissance.
---

# Common Google Dorking Commands

Google Dorking (also called **Google Hacking**) is the use of advanced search operators to locate specific information that might not be easily accessible through normal search queries.

Security researchers, OSINT investigators, and penetration testers often use these operators to discover exposed files, misconfigured services, and publicly accessible sensitive data.

⚠️ **Disclaimer:** Only use these techniques for **legal research, OSINT, and authorized security testing**.

---

# Core Google Dork Operators

## `site:`
Search within a specific website or domain.

### Example:
`site:example.com login`

This returns pages on **example.com** that contain the word **login**.

---

## `filetype:`
Find files of a specific type.

Common file types include:

- pdf
- doc
- xls
- csv
- txt
- config

### Example:
`filetype:pdf secrets confidential`

This searches for **PDF documents** containing the words **secrets** and **confidential**.

Example OSINT search: site:example.com filetype:xls password


