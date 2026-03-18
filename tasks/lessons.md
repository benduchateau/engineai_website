## 2026-03-17 — Git repo layout
**What happened:** The workspace ended up with an accidental git repo at the wrapper folder and another empty git repo in `engineai_website/`, which made it unclear which directory should be pushed to GitHub.
**Better approach:** Keep `engine-ai-site/` as the single source-controlled project folder and avoid running `git init` from parent or placeholder directories.
