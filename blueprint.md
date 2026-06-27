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

## Current Plan: 사주 결과 캐싱 제거 및 MBTI 결정론적 추정 (Remove Caching & Deterministic MBTI)

동일 입력 시 추정 MBTI가 변경되는 비결정론적 한계를 개선하기 위해 백엔드에서 사주 원국과 성향 정보를 기반으로 MBTI를 미리 계산하여 AI 모델 프롬프트에 확정 유형으로 지시하며, 로컬 캐시를 정리합니다.

### Proposed Steps
1. **타입 정의 수정**: [완료]
2. **사주 계산 로직 수정**: [완료]
3. **윤달 유효성 검증 로직 추가**: [완료]
4. **프론트엔드 UI 및 경고창 추가**: [완료]
5. **사주 결과 캐싱 제거**: [완료]
6. **결정론적 MBTI 추정 로직 구현**:
   - `functions/lib/saju-calculator.ts`에 오행(목/화/토/금/수) 비율, 일간(Day Master), 혈액형, 별자리를 종합 가중치로 채점하여 E/I, S/N, T/F, J/P를 결정하는 `estimateMBTI` 함수를 추가합니다.
   - `SajuInput` 및 `SajuComputation` 규격에 `bloodType`, `zodiac`, `estimatedMBTI` 필드를 추가합니다.
7. **API 및 AI 프롬프트 수정**:
   - `functions/api/saju.ts` 및 `functions/api/saju-report.ts`에서 계산된 `estimatedMBTI` 값을 사용하여 프롬프트에 "추정 MBTI는 **{MBTI}**로 반드시 확정하고 이유를 설명할 것"을 지시하여 매번 결과가 일관되게 생성되도록 보장합니다.
8. **검증**: 로컬 검증 및 빌드 테스트를 실행합니다.




