# Sherry Anne Crowe — Take Up Space on Purpose

Next.js (App Router) + Tailwind CSS v4 + TypeScript.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY and BOOKING_NOTIFY_EMAIL
npm run dev
```

## Booking form emails

`/api/book-event` sends each submission via [Resend](https://resend.com).

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | API key from https://resend.com/api-keys |
| `BOOKING_NOTIFY_EMAIL` | yes | Recipient(s), comma-separated. Production value: `crowe.sherrya@gmail.com,balddanny@gmail.com,takeupspace01@gmail.com` (non-account addresses require a verified domain in Resend) |
| `BOOKING_FROM_EMAIL` | no | Sender; must be on a Resend-verified domain. Defaults to `onboarding@resend.dev` |

## Deploy to Vercel with a GoDaddy domain

1. Push this repo to GitHub and import it at https://vercel.com/new → **Deploy**.
2. In the Vercel project: **Settings → Environment Variables** — add the variables above, then **Deployments → Redeploy**.
3. **Settings → Domains** — add `yourdomain.com` and `www.yourdomain.com`.
4. In GoDaddy: **My Products → Domain → DNS** — add/replace:
   - `A` record: Name `@`, Value `76.76.21.21`
   - `CNAME` record: Name `www`, Value `cname.vercel-dns.com`
   (Remove any existing `A`/`CNAME` on `@` / `www` that point elsewhere, e.g. GoDaddy parking.)
5. Wait for Vercel's domain check to turn green (usually minutes, up to 48h).

## Static demo build

`NEXT_PUBLIC_STATIC_DEMO=true npm run build` produces a static export in `out/`
(delete `src/app/api` first — route handlers aren't supported in export mode). The
booking form only simulates submission in this mode.
