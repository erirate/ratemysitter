# RateMySitter — CLAUDE.md

## Stack
- Frontend: Next.js 14 App Router + Tailwind CSS + shadcn/ui
- Backend: Firebase + Firestore
- Auth: Firebase Auth + Twilio SMS OTP
- Payments: Stripe
- Hosting: Vercel

## Critical Constraints (NEVER violate)
- Teen sitters (is_teen=true): NEVER expose last_name, photo, contact_info until profile is claimed
- All Firestore writes validated server-side via security rules, never trust client data
- COPPA: no data collection from users under 13
- API routes must verify Firebase Auth token before any write operation
- Never call Twilio, Stripe, or Firebase Admin from client-side code

## Firestore Schema
- sitters/{id}: name, city, state, is_teen, verification_level (0/1/2), claimed, claimed_at, contact_info, last_name, photo, metrics{reliability,communication,professionalism,childEngagement,safety}, rating, reviewCount, online, verified, bio, title
- reviews/{id}: sitter_id, parent_id, ratings{reliability,communication,professionalism,engagement,safety}, tags[], comment, display_name, created_at
- parents/{id}: uid, email, created_at
- reports/{id}: type, review_id, reporter_uid, notes, created_at, resolved
- audit_logs/{id}: action, actor_uid, target_id, target_type, timestamp, metadata

## Patterns

### API Auth Pattern (Week 1D)
All write API routes verify the Firebase ID token from the Authorization header:
```ts
const token = req.headers.get("Authorization")?.replace("Bearer ", "");
const decoded = await adminAuth.verifyIdToken(token);
// decoded.uid is the verified user
```
Read routes (GET /api/sitters) are public — no auth required.

## File Structure
- lib/firebase.ts — client-side Firebase app init
- lib/firestore.ts — typed Firestore collection references
- lib/firebase-admin.ts — server-side Firebase Admin init (API routes only)
- app/api/sitters/route.ts — GET sitters by city
- app/api/reviews/route.ts — POST new review (auth required)
- app/api/claim/request/route.ts — POST send OTP via Twilio
- app/api/claim/verify/route.ts — POST verify OTP + claim profile
- firestore.rules — Firestore security rules
