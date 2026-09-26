<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the static site generator in `tools/` and the generated `site/` pages; the TanStack routes serve its clean URLs, so regenerate pages after template changes.
- Derive the header image and favicon from the same logo asset; this keeps the visual identity consistent at both sizes.
