

# Fix: 404 on Direct URL Access to `/en/` and `/pt/`

## Diagnosis

The **React Router configuration in `App.tsx` is correct** — the `/:lang` route with nested children properly handles `/en`, `/pt`, and their sub-paths. The `LanguageLayout` component validates the language parameter and syncs i18next. No issues there.

The **root cause is a hosting/SPA configuration issue**. Lovable deploys as a single-page application. When a user navigates directly to `snapkaza.com/pt/` (or any sub-path), the hosting server looks for a physical `/pt/index.html` file, which doesn't exist. It needs to serve `/index.html` for all routes so React Router can handle them client-side.

The `vite.config.ts` and `index.html` base paths are fine — no conflicts.

## Fix

Create a `public/_redirects` file. Lovable's hosting infrastructure respects this file (same as Netlify/Cloudflare Pages convention). It tells the server to serve `index.html` for all paths, letting React Router take over.

### New file: `public/_redirects`

```
/*    /index.html   200
```

That single line is the entire fix. No code changes needed to `App.tsx`, `vite.config.ts`, or any component.

## Why This Works

- The `200` status (not `301` or `302`) means the server serves `index.html` **without changing the URL**, so the browser keeps `/pt/` in the address bar.
- React Router then reads the path, matches `/:lang`, and renders the correct language layout.
- This is a deployment-level configuration, not a code logic issue.

## Files

| File | Change |
|------|--------|
| `public/_redirects` | **New** — single SPA redirect rule |

