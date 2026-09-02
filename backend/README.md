# foroz-backend

API for the FOROZ website's forms (contact, newsletter, donations,
volunteer/opportunity applications). Independent from `foroz-frontend` —
runs and deploys separately.

## Setup

```
npm install
cp .env.example .env   # fill in DATABASE_URL at minimum
npm run prisma:migrate
npm run dev
```

Runs on `http://localhost:4000` by default. `STRIPE_SECRET_KEY` and
`RESEND_API_KEY` are optional — donations and email notifications run in a
"not configured" mode (logged, no real charge/email) until those are set.
