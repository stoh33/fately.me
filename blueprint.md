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

- **2026-03-21**:
  - **ESLint & Stability Improvements**:
    - Fixed 22+ ESLint errors in `saju-report.ts`, `saju.ts`, `saju-calculator.ts`.
    - Removed unused code (`getEnvValue`, `ZODIAC_MAP`, etc.).
    - Refactored `any` types to specific interfaces for better type safety.
    - Improved `useEffect` dependency management in `SajuPage.tsx` and `Layout.tsx`.
    - Updated `eslint.config.js` to exclude temporary worker files.
  - **Mobile UI Fixes**:
    - Fixed header navigation and centering issues on smaller screens.
    - Optimized padding and form layouts for mobile devices.

## Local Development
To test the application locally with full API functionality (OpenAI integration), follow these steps:

1. **Environment Variables**: Ensure a `.dev.vars` file exists in the root directory with the following content:
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```
2. **Run Local Server**: Use the following command to start both the Vite dev server and Cloudflare Pages Functions locally:
   ```bash
   npm run dev:local
   ```
3. **Access the App**: Open your browser and navigate to the address provided by Wrangler (usually `http://localhost:8888`). The frontend will be proxied to the local functions, allowing you to test the complete flow.

## Current Plan: Deployment and Verification
Finalizing the deployment after major code quality improvements and mobile optimization.

### Completed Steps
1. **Code Refactoring**: Comprehensive fix for ESLint violations and type safety improvements.
2. **Build Verification**: Success confirmed for both TypeScript compilation and Vite production build.
3. **Mobile Optimization**: Verified responsiveness across various screen sizes.
