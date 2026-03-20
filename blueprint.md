# Blueprint: Fately (AI Saju Analysis)

## Overview
Fately is a professional Saju (Korean Four Pillars) analysis application that provides structured reports using AI (OpenAI). It calculates Saju based on birth information and generates a comprehensive analysis including personality, health, wealth, relationship, and a unique "Saju-based Golf Style" analysis.

## Project Details
- **Architecture**: React (Frontend) + Cloudflare Pages Functions (API).
- **Core Logic**: `functions/lib/saju-calculator.ts` handles the traditional Saju calculations using the `lunar-typescript` library.
- **AI Integration**: Uses OpenAI's API (gpt-4o-mini) to generate detailed, structured Markdown reports.
- **Key APIs**:
  - `/api/saju`: Basic Saju analysis (JSON + Markdown).
  - `/api/saju-report`: Comprehensive Saju report focused on multiple aspects including golf styling.

## Features
- **Saju Calculation**: Accurately computes Year, Month, Day, and Hour pillars (Ganji).
- **Five Elements Analysis**: Calculates distribution and strength of Wood, Fire, Earth, Metal, and Water.
- **AI Report Generation**:
  - Multi-chapter structured report.
  - Cross-analysis with Blood Type and Western Zodiac.
  - Saju-based Golf Style Analysis (Swing tendencies, mental routines, 2-week training plan).
- **Save as Image**: Allows users to download their Saju analysis report as a high-quality PNG image using `html2canvas`.
- **AdSense Compliance**:
  - Mandatory pages: About Us, Contact Us, Privacy Policy, Terms of Service.
  - Consistent layout with common Footer.
  - Responsive design for policy pages.
  - **Conditional Ad Rendering**: Ads are only shown when substantial unique content (AI Report) is present to avoid "Low Content" and "Under Preparation" violations.
  - **Static High-Value Content**: Added informative sections about Saju and AI analysis to landing pages to increase publisher content volume.
- **Rate Limiting**: IP-based rate limiting for API requests.
- **CORS Support**: Configurable allowed origins.

## Implementation Details
- **Routing**: Refactored to use `react-router-dom`.
- **Layout**: Introduced a `Layout` component with a `Footer` for global elements.
- **Styling**: Standardized styles for policy pages in `index.css`.
- **Image Capture**: Integrated `html2canvas` in `SajuPage.tsx` to capture the `report-panel` with a custom background and high-resolution scaling.

## Change History
- **2026-03-16**:
  - Updated domain from `fately.ai` to `fately.me` across `index.html`, `sitemap.xml`, and `robots.txt`.
  - Implemented "Save as Image" feature in `SajuPage.tsx`.
  - Enhanced `.actions` styling with `flex-wrap: wrap` for better mobile responsiveness.

- **2026-03-18**:
  - **AdSense Policy Compliance**:
    - Removed duplicate AdSense script in `index.html`.
    - Implemented conditional rendering for AdSense components in `SajuPage.tsx` and `AppPage.tsx` (only show ads when report exists).
    - Added `SajuInfo` component to `SajuPage.tsx` to provide static high-value content for visitors before report generation.
    - Updated `saju-page.css` with styles for the new informative sections and placeholders.

## Current Plan: AdSense Policy Compliance and Content Quality Improvement
The project now strictly follows AdSense policies by ensuring ads are only served alongside meaningful publisher content and providing informative static content on landing pages.

### Completed Steps
1. **Domain Update**: Replaced all occurrences of `fately.ai` with `fately.me` for SEO and canonical links.
2. **Image Saving**: 
   - Added `html2canvas` for client-side DOM capturing.
   - Implemented `handleDownloadImage` with high-resolution scaling and custom padding for the exported image.
   - Added "Save as Image" button to the main action area.
3. **UI Optimization**: Updated CSS to ensure action buttons wrap correctly on small screens.
