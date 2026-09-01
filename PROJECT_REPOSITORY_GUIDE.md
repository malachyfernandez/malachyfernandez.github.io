# How `malachyf-com` and `GerrymanderTheGame` are linked

## Repository relationship

These are two independent Git repositories. Neither is a submodule of the other, and the game source is not copied into `malachyf-com`.

- This folder, `malachyf-com`, has the GitHub remote `https://github.com/malachyfernandez/malachyfernandez.github.io.git`.
- The game has the separate GitHub remote `https://github.com/malachyfernandez/GerrymanderTheGame.git`.
- `config/projects.js` in this repository contains a project card with links to the game repository and its live GitHub Pages site. Those links are the only direct connection in this codebase.

Both repositories use GitHub Pages from the root of the `main` branch:

- `malachyfernandez.github.io` publishes to `https://malachyfernandez.github.io/`.
- `GerrymanderTheGame` publishes to `https://malachyfernandez.github.io/GerrymanderTheGame/`.

Because `GerrymanderTheGame/index.html` is served by the game repository's own Pages configuration, game changes must be made and pushed in the game repository. Editing the project card here does not change the game.

## Recommended local layout

Keep the repositories beside each other so each retains its own `.git` directory:

```text
1-programing/
├── malachyf-com/
└── GerrymanderTheGame/
```

When starting inside `malachyf-com`, check for the sibling and clone it only if it is missing:

```sh
ls -d ../GerrymanderTheGame
git clone https://github.com/malachyfernandez/GerrymanderTheGame.git ../GerrymanderTheGame
```

Run the `git clone` line only if the `ls` line reports that the sibling is missing. Do not nest one repository inside the other or copy the game into this repository unless the deployment architecture is intentionally being changed.

## Which repository should be edited?

| Requested change | Repository | Main file |
| --- | --- | --- |
| Portfolio project card, cover image, or links | `malachyf-com` | `config/projects.js` |
| Game layout, styling, rules, interaction, or generation | `GerrymanderTheGame` | `index.html` |
| Game description or player instructions | `GerrymanderTheGame` | `README.md` |
| This cross-repository workflow | `malachyf-com` | `PROJECT_REPOSITORY_GUIDE.md` |

## Instructions for an LLM working from this folder

1. Read this file and inspect `config/projects.js` to confirm which external project is being requested.
2. Check both Git roots and remotes before editing. From `malachyf-com`, use `git status --short --branch`, `git remote -v`, `git -C ../GerrymanderTheGame status --short --branch`, and `git -C ../GerrymanderTheGame remote -v`.
3. Use the table above to edit the owning repository. Do not modify the portfolio link when the requested behavior belongs to the game.
4. For game behavior, layout, or styling, work in the sibling `GerrymanderTheGame/` repository. Its application currently lives in the single self-contained `index.html` file.
5. Verify game changes by opening `../GerrymanderTheGame/index.html` or, from `malachyf-com`, running `python3 -m http.server 8000 --directory ../GerrymanderTheGame` and visiting `http://localhost:8000/`. At minimum, check JavaScript syntax, the changed interaction, and `git -C ../GerrymanderTheGame diff --check`.
6. Run `git diff`, `git status`, and verification separately in each repository. Changes in one repository will not appear in the other repository's Git status.
7. Commit each repository separately and only include files belonging to that repository. Follow the existing commit-message style.
8. Push only when the user requests it. A push to `GerrymanderTheGame`'s `main` branch updates `/GerrymanderTheGame/`; a push to `malachyfernandez.github.io`'s `main` branch updates the portfolio site.
9. After pushing, verify the remote branch SHA and GitHub Pages status rather than assuming deployment succeeded. Pages may take a short time to publish after the push.
10. Never merge, force-push, rewrite history, or alter GitHub Pages settings unless the user explicitly requests that specific action.

## Current game implementation notes

`GerrymanderTheGame` is a dependency-free static browser game. HTML, CSS, board generation, drag handling, district validation, and animations are all currently embedded in `GerrymanderTheGame/index.html`. There is no build step or package manager configuration.