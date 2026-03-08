
# RateMySitter — Babysitter Rating Platform

## Overview
A mobile-first public babysitter rating platform with 4 core pages, using mock data and the navy/white/green color scheme from the reference designs.

## Color Scheme
- **Navy**: dark headers, buttons, accents (`#1B2A4A`)
- **Green**: verified badges, checkmarks, progress bars (`#22C55E`)
- **White/Light gray**: backgrounds, cards

## Pages

### 1. Homepage (`/`)
- Navy hero section with "Find your next trusted babysitter." headline
- Search bar with city input + "Go" button
- Filter chips: All Sitters, Top Rated, Available Now
- "Featured Sitters" section with sitter cards showing: avatar, name, verified badge, star rating, review count, short bio
- Bottom navigation bar: Home, Search, + (add) button, Profile

### 2. Sitter Profile (`/sitter/:id`)
- Back arrow + "Sitter Profile" header + share icon
- Circular avatar with green online indicator
- Name, title (e.g. "Professional Nanny"), overall star rating
- Performance Metrics section with 5 horizontal progress bars: Reliability, Communication, Professionalism, Child Engagement, Safety
- Recent Reviews list with reviewer initials avatar, name, date, star rating, review text
- "Claim This Profile" CTA button
- Bottom nav: Search, Profile

### 3. Review Submission (`/review/new`)
- Form with 5 star-rating inputs (one per category)
- Tag chips section (8+ selectable tags like "Punctual", "Great with toddlers", "CPR Certified", etc.)
- Name display toggle (show name vs. anonymous)
- Text area for written review
- Submit button — all controlled state, no API calls

### 4. Claim Profile (`/claim/:id`)
- Back arrow + "Claim Profile" header
- Step indicator: "STEP 1 OF 3" with progress bar
- "Verify your phone number" heading with explanation text
- Phone number input with +1 prefix
- "Send Verification Code" button
- OTP input screen (step 2)
- Security badge: "SECURE VERIFICATION" with encryption note
- Bottom nav: Home, Reviews, Profile, Settings

## Shared Components
- **BottomNav**: reusable mobile bottom navigation bar
- **StarRating**: reusable star display/input component
- **SitterCard**: card component for the homepage grid
- **RatingBar**: horizontal progress bar for performance metrics

## Data
All sitter profiles, reviews, and ratings use hardcoded mock data arrays — no backend integration.
