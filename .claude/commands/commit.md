Analyze the current git changes and create a conventional commit.

## Steps

1. Run `git status` and `git diff HEAD` (or `git diff --cached` if files are already staged) to understand what changed.

2. Stage all changed and untracked files **except** `.env` and any file matching `.env.*`:
   ```
   git add -A
   git reset HEAD .env .env.* 2>$null
   ```

3. Based on the staged changes, determine the appropriate **conventional commit type**:
   - `feat`: a new feature or visible new capability
   - `fix`: a bug fix
   - `style`: CSS/visual changes with no logic change
   - `refactor`: code restructured without adding features or fixing bugs
   - `content`: copy, text, or static content updates
   - `chore`: build config, tooling, dependency, or housekeeping changes
   - `docs`: documentation only

4. Write a commit message following this format:
   ```
   <type>(<optional scope>): <short imperative summary under 72 chars>

   <optional body — only if the why is non-obvious>

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   ```
   - Summary line: present tense, lowercase after the colon, no trailing period
   - Scope (optional): the filename or area changed, e.g. `style`, `nav`, `index`
   - Body: skip it if the summary line is already self-explanatory

5. Show the proposed commit message to the user and ask for confirmation before committing.

6. Once confirmed, run `git commit -m "<message>"` using the exact message drafted.

7. Run `git status` after the commit to confirm it succeeded and show the user what is now untracked or unstaged (if anything).
