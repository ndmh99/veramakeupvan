# Vera Makeup Vancouver — Marketing Campaign Plan

**Period:** Aug 17, 2026 – Feb 28, 2027 (90-day sprint: Aug 17 – Nov 15, 2026)
**Owner:** Vera Makeup Studio (solo artist)
**Tracking:** GA4 property `G-LE763J86D9` (already live on site) · UTM registry: [`utm-tracking-links.csv`](./utm-tracking-links.csv)

---

## 1. Situation

**The business.** Solo makeup artist in Vancouver serving the Lower Mainland. Services:

| Service | Price Range | Booking Lead Time |
|---|---|---|
| Bridal day-of hair & makeup | CAD 560–1,200 | 6–9 months (summer books first) |
| Bridal trial / preview | CAD 110–280 | 2–3 months before wedding |
| Event & party makeup | CAD 40–240 | 2–4 weeks |
| 1:1 makeup lessons | CAD 150–250 | 1–2 weeks |
| Editorial photoshoot | — | on request |

Booking is **text-first** (778-951-0631), plus email and Instagram @veramakeupvan. No phone calls. This shapes everything: CTAs must be "Text to check your date", not forms.

**Assets already in place.**
- English site with SEO'd service pages, blog, portfolio, policies — quality copy, real client photos.
- GA4 installed with `booking_start` events tracking sms:/mailto: clicks.
- Instagram presence with portfolio content.
- One Hiezy WeChat Ads campaign.

**Ad history (the CSV).** Jul 18 – Aug 16, 2026: the "Promoting website" WeChat campaign spent **CAD 0.12** for **17 impressions / 15 reach** and **zero results**. The campaign used "campaign budget" with no budget set — it effectively never ran. It ends Aug 20, 2026.

**What this means:**
1. WeChat ads are not "tested and failed" — they were never actually given money. Worth one proper test.
2. No UTM or click data exists on the ad, so nothing was measurable. Every future ad link must be tagged.
3. Vancouver's Chinese-speaking bridal market (Richmond/Burnaby/Vancouver) is one of the largest local wedding segments and is best reached on WeChat / 小红书 (Xiaohongshu).

**Timing.** Today is Aug 17, 2026:
- Fall 2026 (Sep–Oct) dates are partly open — a short "fill" window exists.
- **Now through February is exactly when 2027 spring/summer brides book.** This is the main game.
- Oct–Dec brings the holiday party season (event makeup + lessons-as-gifts).

**Assumptions to confirm with Vera:** paid budget ≈ CAD 400/month max; Chinese-language creatives OK (site is English-only — acceptable for 1.5/2nd-gen audience); email list is being started from zero via a lead magnet.

---

## 2. Objectives (90 days, Aug 17 – Nov 15, 2026)

| # | Objective | Target | Metric |
|---|---|---|---|
| 1 | Qualified inquiries (text/email) | 30 | Inbound messages asking about a specific date/service |
| 2 | Bridal trials booked | 10 | Confirmed trial appointments |
| 3 | Bridal day-of bookings | 6 | Deposit received (mix of fall-2026 fill + 2027) |
| 4 | Event + lesson bookings | 14 total | Confirmed bookings |
| 5 | Email list growth | 150 subscribers | Lead-magnet signups |
| 6 | Paid efficiency | CPL < CAD 20 | Ad spend ÷ inquiries |

**North star:** confirmed bookings per month (not followers, not impressions).

**Baseline (from CSV):** 0 tracked inquiries, 0 bookings, 0 email subscribers, CAD 0.12 ad spend. Everything is measured from zero — clean slate.

---

## 3. Campaign Architecture

Four campaigns, each with its own UTMs, landing page, and end date:

| Campaign | Window | Landing Page | Primary Audience | Goal |
|---|---|---|---|---|
| `bridal-2027-booking` | Aug 17 – Dec 31 | `/services/bridal-makeup/` | Engaged 2027 brides, 24–40, Lower Mainland | Trials + deposits (objective #2, #3) |
| `fall-weddings-2026` | Aug 17 – Oct 15 | `/services/event-makeup/` | Fall 2026 couples, 25–45 | Fill remaining 2026 dates |
| `holiday-events-2026` | Oct 15 – Dec 20 | `/services/event-makeup/` | Partygoers + gift buyers | Holiday bookings (#4) |
| `lessons-vancouver-2026` | evergreen | `/services/makeup-lessons/` | 20–45, self-improvement | Lesson bookings (#4) |

---

## 4. Channel Strategy (in priority order)

### Priority 1 — Instagram organic (portfolio proof engine)
Her product is visual. Every booked look becomes content.
- **Cadence:** 4 Reels/week + 2 carousels/week + 1 static/week + daily Stories.
- **Content pillars:** real bride transformations (60%), trial-day BTS (15%), Vancouver-specific education (15%), lesson clips (10%).
- **Vancouver angle = differentiation:** rain-proof makeup, humidity-proof setting, venue lighting (Hotel Vancouver vs. Granville Island). Local hooks travel further than generic glam.
- Posting times (PST): Tue/Wed 8–10 AM, Thu 11 AM–1 PM, Sat 9–11 AM.
- Hashtags (3–5, in caption): `#vancouverbridalmakeup #vancouvermua #yvrbride #bridalmakeupvancouver #vancouverwedding` — plus keyword-rich caption sentences (Instagram is a search engine now).
- **Engagement rule:** 20–30 min/day engaging in local tags (#vancouverwedding, venue pages) *before* posting; reply to every DM/comment within 2 hours.

### Priority 2 — WeChat Ads (fix & relaunch — the $0.12 campaign, done right)
1. **Before Aug 20:** either set the existing campaign's daily budget or duplicate it (a paused/ended campaign may not restart cleanly on Hiezy).
2. Settings: daily budget **CAD 5–10**, bid ABSOLUTE_OCPM is fine, attribution "7-day click or 1-day view" fine.
3. Target: Vancouver, Richmond, Burnaby, Surrey · women 24–40 · interests: weddings, bridal.
4. Creative (3-image carousel, bilingual):

> **Slide 1:** Bridal portfolio photo — headline "Vancouver Bridal Makeup Artist | 温哥华新娘化妆师"
> **Slide 2:** "Luminous, long-wearing looks that survive rain, tears & dancing | 持久通透新娘妆"
> **Slide 3:** CTA — "2027 dates now booking · 点击预约" → tagged bridal URL (`utm_source=wechat&utm_content=ad-zh-1`)
5. Also post bilingual Moments 2×/week (before/after photos + availability updates).
6. **Budget lesson from the CSV:** a campaign with no budget cannot tell you anything. Set it, let it run 2 weeks minimum, judge on CPL.

### Priority 3 — Meta ads (Instagram/Facebook), from Month 2
Start only after organic posts show which creative wins (≈ 4 weeks of data).
- **Budget:** CAD 6–8/day on `bridal-2027-booking`.
- **Audiences:** (a) retarget site visitors 30d + IG engagers 90d; (b) 1% lookalike of engagers.
- **Format:** carousel (real brides), CTA "Send WhatsApp/message" → text. Use `utm_source=instagram&utm_medium=paid-social`.

### Priority 4 — Email (lead magnet → nurture)
- **Lead magnet:** "Vancouver Bridal Makeup — Pricing & Timeline Guide" (4-page PDF: real prices, when to book, trial checklist, day-of timeline). This converts lookers into a list Vera owns.
- **Signup:** Instagram bio link (Linktree or direct Mailchimp landing page) + footer link on site.
- **Tool:** Mailchimp Free (500 contacts) — sequences in §7 are paste-ready.
- **List hygiene:** double opt-in, no purchased lists, address + unsubscribe in every send (CAN-SPAM).

### Priority 5 — Google Business Profile + local SEO (free, compounding)
- Claim/verify GBP: category **Makeup artist**, service area = Lower Mainland cities, upload 20+ portfolio photos, service list (bridal, event, lessons), link to site with `utm_content=gbp-listing`.
- Ask every happy client for a Google review — 20+ reviews is the local-pack tipping point.
- Blog cluster (site already has blog routing) — one post/week, 4 posts in sprint 1 (see §6), interlinked to `/services/bridal-makeup/`.

### Always-on — referral loop (text-first, zero ad cost)
After every completed booking, send this text:

> "Loved having you in my chair! 💄 If you refer a friend, you both get CAD 50 off — you on any future service, them on their first booking. Just have them mention your name when they text."

---

## 5. UTM & GA4 Setup

All links live in [`utm-tracking-links.csv`](./utm-tracking-links.csv) — 16 links covering the 4 campaigns × channels. Rules followed: lowercase, hyphens, no spaces, source=who/medium=how, **never tag internal links** (they'd overwrite attribution).

**One GA4 fix is required** (the audit flagged it): `wechat` shows as "Unassigned" because GA4 doesn't know the source. Fix once:

> GA4 → Admin → Data display → Channels → Create new channel → name **"WeChat Ads"** → rule: `source exactly matches wechat` → Save.

**GA4 checklist (15 min):**
- [ ] Mark `booking_start` as a **key event** (Admin → Key events) — this is the conversion.
- [ ] Data retention → 14 months.
- [ ] Enhanced measurement on (outbound clicks, scrolls).
- [ ] Create the "WeChat Ads" channel (above).
- [ ] Bookmark Reports → Acquisition → Traffic acquisition (primary view).

**Monthly UTM audit (5 min):** check Acquisition report for "Unassigned" beyond the expected offline QR rows; fix any mixed-case sources.

---

## 6. Content Calendar — Sprint 1 (Aug 18 – Sep 16, 2026)

Cadence per week: 4 Reels · 2 carousels · 1 static · daily Stories · 1 blog post · 1 email · 2 WeChat Moments posts.

| Date | Format | Title / Topic | Funnel | Keyword target | Channel + UTM |
|---|---|---|---|---|---|
| Tue Aug 18 | Blog | How Much Does Bridal Makeup Cost in Vancouver? (2026 Pricing Guide) | MOFU | bridal makeup cost vancouver | blog + IG share |
| Wed Aug 19 | Reel | Bride transformation: trial → wedding day | MOFU | vancouver bridal makeup | IG organic |
| Thu Aug 20 | Carousel | 5 questions every bride asks at a trial | TOFU | bridal makeup trial | IG organic |
| Fri Aug 21 | Reel | BTS: setting spray test on camera (rain-proof demo) | TOFU | waterproof wedding makeup | IG organic |
| Sat Aug 22 | Static | Fall 2026 — 3 dates left in September | BOFU | — | IG + `fall-weddings-2026/story-cta` |
| Sun Aug 23 | Story | Poll: trial before wedding, yes/no? | TOFU | — | IG stories |
| Mon Aug 24 | Email | Welcome sequence live (lead magnet delivered) | TOFU | — | Mailchimp, `bridal-2027-booking/welcome-4` |
| Tue Aug 25 | Blog | Rain-Proof Wedding Makeup: A Vancouver Bride's Guide | TOFU | waterproof wedding makeup vancouver | blog |
| Wed Aug 26 | Reel | 3-minute everyday glam (lesson teaser) | TOFU | makeup lessons vancouver | IG + `lessons-vancouver-2026/reel-tutorial` |
| Thu Aug 27 | WeChat | 温哥华新娘化妆 | 2027春夏婚期预约中 (availability) | BOFU | — | WeChat + `bridal-2027-booking/ad-zh-1` |
| Fri Aug 28 | Carousel | What actually happens at a bridal trial (timeline) | MOFU | bridal makeup trial vancouver | IG organic |
| Sat Aug 29 | Reel | Real bride morning: 2 hrs to the altar | MOFU | — | IG organic |
| Sun Aug 30 | WeChat | Before/after portfolio Moments post | MOFU | — | WeChat Moments |
| Mon Aug 31 | Email | Newsletter #1: fall dates + trial tip | MOFU | — | `fall-weddings-2026` |
| Tue Sep 1 | Blog | What Happens at a Bridal Makeup Trial? | MOFU | bridal makeup trial | blog |
| Wed Sep 2 | Reel | Humidity vs. makeup: Vancouver summer test | TOFU | long wear makeup | IG organic |
| Thu Sep 3 | Carousel | 2027 wedding timeline: when to book what | MOFU | when to book wedding makeup | IG organic |
| Fri Sep 4 | Reel | Transformation: event glam | TOFU | vancouver event makeup | IG + `holiday-events-2026` later |
| Sat Sep 5 | Static | "2027 summer dates now open" announcement | BOFU | — | IG + boost CAD 20 |
| Sun Sep 6 | WeChat | Bilingual: 2027 dates opening announcement | BOFU | — | WeChat Moments + `bridal-2027-booking` |
| Mon Sep 7 | Email | Newsletter #2: lessons feature ("learn your own glam") | MOFU | — | `lessons-vancouver-2026/newsletter-2` |
| Tue Sep 8 | Blog | When to Book Your Vancouver Wedding Makeup Artist | MOFU | when to book wedding makeup artist | blog |
| Wed Sep 9 | Reel | Trial-day reveal with client reaction | MOFU | — | IG organic |
| Thu Sep 10 | Carousel | Real brides, real reviews (3 testimonials) | BOFU | — | IG organic |
| Fri Sep 11 | Reel | Bridal Q&A: top 3 fears answered | MOFU | — | IG organic |
| Sat Sep 12 | Static | Remaining fall 2026 dates — last call | BOFU | — | IG + `fall-weddings-2026/story-cta` |
| Sun Sep 13 | Story | Behind the scenes: kit restock for wedding season | TOFU | — | IG stories |
| Mon Sep 14 | WeChat | Holiday party preview teaser | TOFU | — | WeChat Moments |
| Tue Sep 15 | Email | Bridal nurture #1 sent to engaged opens | MOFU | — | Mailchimp |
| Wed Sep 16 | Reel | Holiday glam ideas (3 looks) | TOFU | holiday party makeup vancouver | IG + prep `holiday-events-2026` |

**Content ratio check:** ~60% education/transformation, ~25% social proof/community, ~15% promotional — aligned with the 40/30/20/10 guideline.

**Atomization rule:** every bridal booking = 1 Reel + 1 carousel + 3 story clips + 1 Pinterest pin (`bridal-2027-booking/pin-1`) + possible blog feature. One shoot, five assets.

---

## 7. Email Sequences (paste-ready)

### 7a. Welcome sequence — triggered by lead-magnet signup (5 emails)

| # | Day | Subject | Preview | Body sketch |
|---|---|---|---|---|
| 1 | 0 | Your Vancouver bridal pricing guide 💌 | "Real prices, real timeline — no surprises" | Deliver PDF link. Set expectations: "1–2 emails a week with Vancouver-specific advice." Quick tip: book the artist before the venue? No — date first, artist 6–9 months out. |
| 2 | 2 | 3 bridal makeup mistakes (and how to dodge them) | "Mistake #2 costs brides the most" | Quick-win listicle: skipping the trial · booking last minute · not testing longevity. CTA: save the trial checklist. |
| 3 | 5 | Meet the artist behind the brush | "Why I only take a few brides per season" | Personal story: solo-artist dedication, limited commissions, why that's good for the bride. Humanize, no pitch. |
| 4 | 8 | Real brides, real wedding mornings | "What they said after the last dance" | 3 testimonials + photos. Soft CTA: "Curious about your date? Text me — no pressure." → `utm_content=welcome-4` |
| 5 | 11 | 2027 dates are opening — here's the timeline | "Summer books 6–9 months out" | Urgency with facts (not fake scarcity): season capacity, deposit terms. CTA: Text to check your date. |

### 7b. Bridal nurture — for brides who engaged but haven't inquired (5 emails)

| # | Day | Subject | Focus |
|---|---|---|---|
| 1 | 0 | Vancouver bridal pricing, honestly | Full price transparency (builds trust, pre-qualifies) |
| 2 | 3 | Why the trial is non-negotiable | Trial value, what we test (longevity, lighting, tears) |
| 3 | 6 | Rain, tears, dancing — will it last? | Objection handling with the long-wear system proof |
| 4 | 9 | A wedding morning with Vera, hour by hour | Day-of experience narrative |
| 5 | 12 | Last call for your season? | Date-check CTA + referral offer mention |

### 7c. Re-engagement — past clients, every 90 days of silence (3 emails)

| # | Day | Subject | Focus |
|---|---|---|---|
| 1 | 0 | Your glam deserves a comeback | Memory + value (holiday/event season hook) |
| 2 | 3 | A thank-you that pays both ways | Referral offer: CAD 50 credit each side |
| 3 | 7 | Holiday dates filling | Event makeup availability + lessons-as-gift idea |

**Subject rules:** 5–7 words, front-load keywords, no ALL CAPS, no "!!!". **Every email:** single CTA, unsubscribe link, physical studio address, mobile preview checked.

**Benchmarks to hit:** welcome open > 80% · nurture open > 45% · CTR > 2.5% · unsubscribes < 0.3%.

---

## 8. Measurement & Reporting

### KPI dashboard (Looker Studio, free, connected to GA4)

| Metric | Target | Source |
|---|---|---|
| Inquiries/week (booking_start events) | 3+ | GA4 key events |
| Trials booked / month | 4 | Vera's calendar (manual) |
| Deposits / month | 2+ | Vera's calendar (manual) |
| Ad spend + CPL by campaign | CPL < CAD 20 | GA4 + ad platforms |
| Sessions by channel (esp. WeChat Ads after channel fix) | growing MoM | GA4 acquisition |
| Email open/CTR | 45% / 2.5% | Mailchimp |
| Instagram ER | 3–6% | IG insights |

### Cadence
- **Daily (2 min):** check DMs/texts, reply < 2 hrs.
- **Weekly (15 min, Monday):** inquiries count, spend, top 2 posts, next week's calendar tweaks.
- **Monthly (30 min):** CPL by campaign, kill/reallocate losers, update GBP photos + one blog refresh.

### CPA sanity math
- Bridal day-of = CAD 560–1,200. Trial = CAD 280.
- Target CPL < CAD 20, trial-show rate 40%, deposit conversion 60% → CAC ≈ CAD 85–125. LTV (trial → day-of → referral loop) ≈ CAD 800+. **LTV:CAC ≈ 6–9:1** — healthy against the 3:1 benchmark. Paid budget stays conservative because organic + referrals do most of the work.

---

## 9. Budget

| Item | Monthly | Notes |
|---|---|---|
| WeChat ads | CAD 150 | CAD 5/day · bilingual creatives · judge after 14 days on CPL |
| Meta ads | CAD 200 | From Month 2, CAD 6.50/day, retargeting + lookalike |
| Boost top posts | CAD 50 | Only posts already performing organically |
| Tools | CAD 0 | Mailchimp Free · Canva Free · Later Free · Looker Studio Free |
| **Total cash** | **CAD 400** | + ~8 hrs/week of Vera's time |

---

## 10. 90-Day Action Plan

**Week 1 (Aug 17–23):**
- [ ] Fix WeChat campaign budget before Aug 20 (set CAD 5/day or duplicate with budget).
- [ ] Build lead-magnet PDF + Mailchimp form + welcome automation.
- [ ] Put tagged link in IG bio; start calendar Week 1.
- [ ] GA4: mark key event, 14-month retention, add WeChat channel.
- [ ] Claim/verify Google Business Profile.

**Week 2–4 (Aug 24 – Sep 13):**
- [ ] Full content cadence running; start engagement ritual (30 min/day).
- [ ] 2 WeChat Moments/week bilingual; monitor CPL from week 2.
- [ ] Ask last 5 clients for Google reviews; text referral offer to past brides.
- [ ] Post 1 blog/week (4 posts from calendar).
- [ ] Week 4: boost the best-performing bridal Reel (CAD 20 test).

**Month 2 (Sep 14 – Oct 13):**
- [ ] Launch Meta retargeting campaign (data from organic now available).
- [ ] Review WeChat: if CPL < CAD 20 → scale to CAD 10/day; if not → fix creative/targeting.
- [ ] Send nurture + re-engagement flows to engaged subscribers.
- [ ] Prep holiday campaign creatives.

**Month 3 (Oct 14 – Nov 15):**
- [ ] Launch `holiday-events-2026` (WeChat + IG paid).
- [ ] 90-day review vs. objectives §2; set Q1 2027 targets.
- [ ] Plan Jan–Feb content (2027 booking peak: engagement season push).

---

## 11. Launch Validation Checklist

**Strategy** — [ ] audience defined (Vancouver/Lower Mainland brides 24–40 + Chinese-speaking segment) · [ ] goals with baselines (§2, baseline = 0) · [ ] KPIs + targets set · [ ] timeline set (§10)

**Tracking** — [ ] UTMs validated lowercase/hyphenated (script-checked ✓) · [ ] WeChat GA4 channel created · [ ] `booking_start` = key event · [ ] links tested in incognito

**Content** — [ ] brand voice: warm, personal, first-person ("I"/"my studio") · [ ] no unsubstantiated claims (all longevity claims backed by the long-wear system) · [ ] every CTA = text/email (no forms)

**Technical** — [ ] email sequences previewed on mobile · [ ] all links verified · [ ] GBP live · [ ] GA4 realtime shows test session

---

*Generated Aug 17, 2026 with the running-marketing-campaigns skill. Review cadence: weekly (15 min) + monthly (30 min). Next full revision: Nov 15, 2026.*
