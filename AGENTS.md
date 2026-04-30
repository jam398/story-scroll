# Agent Rules

Before editing:

1. Read `README.md`.
2. Read `docs/phases/STATUS.md`.
3. Read the active phase file.
4. Read every spec referenced by that phase.
5. Read the factual source if the task touches history content.
6. Do not edit files outside the active phase scope unless a fix requires dependent-file updates.
7. Do not add dependencies unless the active phase or a spec requires them.
8. Do not invent historical claims, dates, metrics, or quotes.
9. Do not use images with unclear usage rights.
10. Run the phase exit checks before marking any phase complete.

## Whole-File QA Rule

If any problem is found in a file:

1. Fix the problem.
2. Re-QA the entire file, not only the changed lines.
3. Compare the whole file back to the original intent in the spec, phase, or source document.
4. Update any dependent files whose assumptions, contracts, or behavior changed because of the fix.
5. Re-check the dependent files against their own original intent.
6. Re-run the narrowest relevant validation, then broader checks when the phase requires them.
7. Repeat until the file and its dependents are clean.

## Escalation Rule

If the same area breaks twice after attempted fixes, stop incremental patching. Update the plan, document what failed, and revise the approach before continuing.